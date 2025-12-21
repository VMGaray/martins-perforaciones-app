"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { INITIAL_ITEMS } from "@/lib/constants";
import { generateBudgetPDF } from "@/lib/pdf-generator";

// Sub-componentes
import BudgetHeader from "./BudgetHeader";
import ClientWorkForm from "./ClientWorkForm";
import BudgetTable from "./BudgetTable";
import BudgetFooter from "./BudgetFooter";
import BudgetModal from "./BudgetModal";
import LegalNotes from "./LegalNotes"; // El nuevo componente

// Interfaz para los items
interface BudgetItem {
  id: number;
  desc: string;
  qty: number;
  price: number;
  total: number;
}

export default function VentasView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeId, setActiveId] = useState<string | null>(searchParams.get("id"));
  const [role, setRole] = useState<string | null>(null);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [clientData, setClientData] = useState({ name: "", phone: "", email: "" });
  const [workData, setWorkData] = useState({ startDate: "", location: "", address: "" });
  const [items, setItems] = useState<BudgetItem[]>(INITIAL_ITEMS);

  const [modal, setModal] = useState({ 
    show: false, 
    type: 'success' as 'success' | 'error', 
    message: "" 
  });

  // Carga inicial estable
  const loadBudget = useCallback(async (id: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('presupuestos')
      .select('*')
      .eq('id', id)
      .single();
    
    if (data && !error) {
      setClientData({ name: data.cliente_nombre, phone: data.cliente_telefono, email: data.cliente_email });
      setWorkData({ startDate: data.fecha_inicio, location: data.localidad, address: data.direccion });
      setItems(data.items);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    setRole(localStorage.getItem("userRole"));
    setUserName(localStorage.getItem("userName") || "Usuario");
    if (activeId) loadBudget(activeId);
  }, [activeId, loadBudget]);

  const handleUpdateItem = (id: number, field: string, value: any) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: field === 'desc' ? value : Number(value) };
        updated.total = updated.qty * updated.price;
        return updated;
      }
      return item;
    }));
  };

  const grandTotal = items.reduce((acc, item) => acc + item.total, 0);

  const saveToSupabase = async (status: 'Guardado' | 'Enviado WhatsApp'): Promise<boolean> => {
    if (!clientData.name) {
      setModal({ show: true, type: 'error', message: "¡Oops! Falta el nombre del cliente." });
      return false;
    }
    setLoading(true);
    const payload = {
      cliente_nombre: clientData.name,
      cliente_telefono: clientData.phone,
      cliente_email: clientData.email,
      localidad: workData.location,
      direccion: workData.address,
      fecha_inicio: workData.startDate,
      items,
      total: grandTotal,
      estado: status,
      creado_por: userName
    };

    try {
      if (activeId) {
        await supabase.from('presupuestos').update(payload).eq('id', activeId);
      } else {
        const { data } = await supabase.from('presupuestos').insert([payload]).select().single();
        if (data) {
          setActiveId(data.id);
          router.replace(`/ventas?id=${data.id}`, { scroll: false });
        }
      }
      setLoading(false);
      return true;
    } catch (err: any) {
      setLoading(false);
      setModal({ show: true, type: 'error', message: "Error: " + err.message });
      return false;
    }
  };

  const handleFinalize = async () => {
    if (await saveToSupabase('Enviado WhatsApp')) {
      // 1. Generamos el PDF
      generateBudgetPDF(clientData, items, workData);

      // 2. Limpiamos el teléfono
      const phone = clientData.phone.replace(/[^0-9]/g, '');
      const waPhone = phone.startsWith('54') ? phone : `549${phone}`;

      // 3. Armamos el mensaje detallado
      // Usamos \n para los saltos de línea y asteriscos para las negritas en WhatsApp
      const message = `Hola ${clientData.name}, adjunto el presupuesto solicitado para la obra en ${workData.location}.

*Total Estimado: $${grandTotal.toLocaleString("es-AR")}*

Incluye perforación y materiales según detalle adjunto en el PDF.
Saludos, Martins Perforaciones.`;

      // 4. Abrimos WhatsApp con el mensaje codificado
      window.open(`https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`, '_blank');

      setModal({ 
        show: true, 
        type: 'success', 
        message: "Presupuesto enviado con éxito." 
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pb-24 font-sans">
      <BudgetHeader userName={userName} role={role} />
      
      <main className="max-w-5xl mx-auto p-4 space-y-6">
        <ClientWorkForm 
          clientData={clientData} setClientData={setClientData} 
          workData={workData} setWorkData={setWorkData} 
        />

        <BudgetTable 
          items={items} 
          onUpdateItem={handleUpdateItem} 
          total={grandTotal} 
        />

        <LegalNotes />
      </main>

      <BudgetFooter 
        loading={loading} 
        onSave={() => saveToSupabase('Guardado')} 
        onFinalize={handleFinalize} 
      />

      {modal.show && (
        <BudgetModal 
          type={modal.type} 
          message={modal.message} 
          onClose={() => setModal({ ...modal, show: false })} 
        />
      )}
    </div>
  );
}