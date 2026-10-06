import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { BUDGET_OBSERVATIONS, COMMERCIAL_TERMS } from "./constants";

export const generateBudgetPDF = (client: any, items: any[], work: any) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 14;
  const grandTotal = items.reduce((acc, item) => acc + item.total, 0);
  
  // Fecha actual formateada
  const today = new Date().toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // --- ENCABEZADO ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(41, 128, 185);
  doc.text("Martins Perforaciones", margin, 20);
  
  doc.setFontSize(9);
  doc.setTextColor(100);
  doc.text(`Fecha de emisión: ${today}`, pageWidth - margin - 45, 20);

  // --- DATOS DEL CLIENTE Y OBRA ---
  doc.setFontSize(10);
  doc.setTextColor(0);
  doc.setFont("helvetica", "bold");
  doc.text("DATOS DEL CLIENTE", margin, 35);
  doc.line(margin, 36, 60, 36);
  
  doc.setFont("helvetica", "normal");
  doc.text(`Nombre: ${client.name}`, margin, 42);
  doc.text(`Ubicación: ${work.location} ${work.address ? `- ${work.address}` : ""}`, margin, 47);

  // --- TABLA DE ITEMS ---
  autoTable(doc, {
    startY: 55,
    head: [['DESCRIPCIÓN', 'CANT.', 'UNITARIO', 'TOTAL']],
    body: items.map(i => [
      i.desc, 
      i.isOptional ? "Opcional" : i.qty, 
      `$${i.price.toLocaleString('es-AR')}`, 
      `$${i.total.toLocaleString('es-AR')}`
    ]),
    theme: 'grid',
    headStyles: { fillColor: [41, 128, 185] },
    columnStyles: {
      0: { cellWidth: 95 },
      1: { halign: 'center' },
      2: { halign: 'right' },
      3: { halign: 'right', fontStyle: 'bold' }
    },
    foot: [[
      { content: 'TOTAL ESTIMADO', colSpan: 3, styles: { halign: 'right', fontStyle: 'bold' } },
      { content: `$${grandTotal.toLocaleString('es-AR')}`, styles: { halign: 'right', fontStyle: 'bold', textColor: [20, 120, 60] } }
    ]]
  });

  let currentY = (doc as any).lastAutoTable.finalY + 15;
  const pageHeight = doc.internal.pageSize.getHeight();
  const bottomLimit = pageHeight - 20; // deja lugar para el pie de página

  // Salta de página si el próximo bloque no entra
  const ensureSpace = (height: number) => {
    if (currentY + height > bottomLimit) {
      doc.addPage();
      currentY = 20;
    }
  };

  const renderSection = (title: string, lines: string[]) => {
    ensureSpace(14);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(41, 128, 185);
    doc.text(title, margin, currentY);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(50);

    lines.forEach(line => {
      const split = doc.splitTextToSize(`• ${line}`, pageWidth - (margin * 2));
      ensureSpace(6 + (split.length - 1) * 4);
      currentY += 6;
      doc.text(split, margin, currentY);
      // Ajuste dinámico de Y si el texto ocupa más de una línea
      currentY += (split.length - 1) * 4;
    });
  };

  // --- SECCIÓN: OBSERVACIONES ---
  renderSection("Observaciones:", BUDGET_OBSERVATIONS);

  // --- SECCIÓN: CONDICIONES COMERCIALES ---
  currentY += 12;
  renderSection("Condiciones Comerciales:", COMMERCIAL_TERMS);

  // --- PIE DE PÁGINA ---
  const totalPages = doc.getNumberOfPages();
  for (let page = 1; page <= totalPages; page++) {
    doc.setPage(page);
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text("Presupuesto sujeto a cambios según condiciones del terreno.", pageWidth / 2, pageHeight - 12, { align: "center" });
  }

  doc.save(`Presupuesto_${client.name.replace(/\s+/g, '_')}.pdf`);
};