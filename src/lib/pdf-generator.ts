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

  // --- SECCIÓN: OBSERVACIONES ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(41, 128, 185);
  doc.text("Observaciones:", margin, currentY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(50);
  
  BUDGET_OBSERVATIONS.forEach(obs => {
    currentY += 6;
    const splitObs = doc.splitTextToSize(`• ${obs}`, pageWidth - (margin * 2));
    doc.text(splitObs, margin, currentY);
    // Ajuste dinámico de Y si el texto ocupa más de una línea
    currentY += (splitObs.length - 1) * 4;
  });

  // --- SECCIÓN: CONDICIONES COMERCIALES ---
  currentY += 12;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(41, 128, 185);
  doc.text("Condiciones Comerciales:", margin, currentY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(50);

  COMMERCIAL_TERMS.forEach(term => {
    currentY += 6;
    doc.text(`• ${term}`, margin, currentY);
  });

  // --- PIE DE PÁGINA ---
  doc.setFontSize(8);
  doc.setTextColor(150);
  doc.text("Presupuesto sujeto a cambios según condiciones del terreno.", pageWidth / 2, 285, { align: "center" });

  doc.save(`Presupuesto_${client.name.replace(/\s+/g, '_')}.pdf`);
};