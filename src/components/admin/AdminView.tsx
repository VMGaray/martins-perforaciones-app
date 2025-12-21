"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, Users, DollarSign, Plus, FileText } from "lucide-react";
import { supabase } from "@/lib/supabase";

import { StatCard } from "./StatCard";
import { UserManagement } from "./UserManagement";
import { BudgetsTable } from "./BudgetsTable";

// 1. Interfaces estrictas para eliminar el error de "any"
interface Presupuesto {
  id: string;
  created_at: string;
  cliente_nombre: string;
  localidad: string;
  total: number;
  estado: string;
  creado_por: string;
}

interface Usuario {
  id: string;
  nombre: string;
  email: string;
  role: string;
}

export default function AdminView() {
  const router = useRouter();
  
  // Estados con tipos definidos
  const [presupuestos, setPresupuestos] = useState<Presupuesto[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ nombre: "", email: "", password: "" });
  const [creatingUser, setCreatingUser] = useState(false);

  // 2. Definimos la función fetchData ARRIBA del useEffect
  const fetchData = useCallback(async () => {
    // No seteamos loading(true) aquí para evitar renders infinitos si se llama mal
    const { data: presu } = await supabase
      .from('presupuestos')
      .select('*')
      .order('created_at', { ascending: false });
      
    const { data: user } = await supabase
      .from('usuarios')
      .select('*')
      .order('nombre', { ascending: true });
      
    if (presu) setPresupuestos(presu as Presupuesto[]);
    if (user) setUsuarios(user as Usuario[]);
    setLoading(false);
  }, []);

  // 3. Efecto único de montaje. Controlamos el rol y cargamos datos.
  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    
    if (userRole !== "admin") {
      router.push("/");
    } else {
      fetchData();
    }
  }, [router, fetchData]);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  async function handleCreateUser(e: React.FormEvent) {
    e.preventDefault();
    if (!newUser.nombre || !newUser.email || !newUser.password) return;
    
    setCreatingUser(true);
    const { error } = await supabase
      .from('usuarios')
      .insert([{ ...newUser, role: 'ejecutivo' }]);
      
    if (!error) {
      setNewUser({ nombre: "", email: "", password: "" });
      await fetchData(); // Recargamos la lista
    }
    setCreatingUser(false);
  }

  async function deleteUser(id: string) {
    if (confirm("¿Eliminar acceso?")) {
      const { error } = await supabase.from('usuarios').delete().eq('id', id);
      if (!error) await fetchData();
    }
  }

  const totalFacturado = presupuestos.reduce((acc, p) => acc + p.total, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pb-20 font-sans">
      <header className="border-b border-slate-800 bg-slate-900/50 px-6 py-4 flex justify-between items-center sticky top-0 z-20 backdrop-blur-md">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">Panel de Control</h1>
          <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Administración Central</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/ventas" className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg">
            <Plus size={16}/> Nuevo Presupuesto
          </Link>
          <button onClick={handleLogout} className="p-2 text-slate-500 hover:text-red-400 transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard icon={<FileText />} label="Presupuestos" value={presupuestos.length} color="blue" />
          <StatCard icon={<DollarSign />} label="Facturación" value={`$${(totalFacturado / 1000000).toFixed(1)}M`} color="emerald" />
          <StatCard icon={<Users />} label="Equipo" value={usuarios.length} color="cyan" />
        </div>

        <BudgetsTable 
          presupuestos={presupuestos} 
          loading={loading} 
          onEdit={(id: string) => router.push(`/ventas?id=${id}`)} 
        />

        <UserManagement 
          usuarios={usuarios} 
          newUser={newUser} 
          setNewUser={setNewUser} 
          handleCreateUser={handleCreateUser} 
          deleteUser={deleteUser} 
          creatingUser={creatingUser} 
        />
      </main>
    </div>
  );
}