"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

import DashboardHeader from "./DashboardHeader";
import ActionCards from "./ActionCards";
import BudgetHistoryTable from "./BudgetHistoryTable";
import BudgetSearch from "./BudgetSearch";

interface Presupuesto {
  id: string;
  created_at: string;
  cliente_nombre: string;
  localidad: string;
  total: number;
  estado: string;
  creado_por: string;
}

export default function EjecutivoView() {
  const router = useRouter();
  const [presupuestos, setPresupuestos] = useState<Presupuesto[]>([]);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // fetchPresupuestos definido arriba
  const fetchPresupuestos = useCallback(async (userRole: string, name: string) => {
    let query = supabase
      .from('presupuestos')
      .select('*')
      .order('created_at', { ascending: false });

    if (userRole !== "admin") {
      query = query.eq('creado_por', name);
    }

    const { data, error } = await query;
    if (!error) setPresupuestos(data as Presupuesto[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const userRole = localStorage.getItem("userRole");

    if (!userRole) {
      router.push("/");
      return;
    }

    setUserName(storedName || "Usuario");
    setRole(userRole);
    fetchPresupuestos(userRole, storedName || "");
  }, [router, fetchPresupuestos]);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  const filteredBudgets = presupuestos.filter((p) => {
    const search = searchTerm.toLowerCase();
    const matchesBasic = 
      p.cliente_nombre.toLowerCase().includes(search) || 
      p.localidad?.toLowerCase().includes(search);
    
    const matchesVendedor = role === 'admin' && p.creado_por?.toLowerCase().includes(search);
    return matchesBasic || matchesVendedor;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <DashboardHeader userName={userName} role={role} onLogout={handleLogout} />

      <main className="max-w-5xl mx-auto p-6 space-y-8">
        <ActionCards 
          total={presupuestos.length} 
          sent={presupuestos.filter(p => p.estado === 'Enviado WhatsApp').length}
          role={role}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
           <BudgetSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
           {searchTerm && (
             <span className="text-xs text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
               Encontrados: <b>{filteredBudgets.length}</b>
             </span>
           )}
        </div>

        <BudgetHistoryTable 
          presupuestos={filteredBudgets} 
          loading={loading} 
          role={role} 
        />
      </main>
    </div>
  );
}