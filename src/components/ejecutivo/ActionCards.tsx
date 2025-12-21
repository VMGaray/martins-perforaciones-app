import { Plus, ArrowRight, ClipboardList } from "lucide-react";
import { useRouter } from "next/navigation";

// 1. Definimos la interfaz para las props
interface ActionCardsProps {
  total: number;
  sent: number;
  role: string | null;
}

export default function ActionCards({ total, sent, role }: ActionCardsProps) {
  const router = useRouter();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* BOTÓN: NUEVO PRESUPUESTO */}
      <button 
        onClick={() => router.push('/ventas')}
        className="group relative p-8 rounded-3xl bg-blue-600 hover:bg-blue-500 transition-all text-left overflow-hidden shadow-xl shadow-blue-900/20"
      >
        <div className="relative z-10">
          <div className="size-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4 text-white">
            <Plus size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white">Nuevo Presupuesto</h2>
          <p className="text-blue-100 text-sm mt-1">Iniciar una cotización desde cero</p>
        </div>
        <ArrowRight className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-white" size={40} />
      </button>

      {/* TARJETA: RESUMEN RÁPIDO */}
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-center">
        <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
          <ClipboardList size={14} /> {role === 'admin' ? 'Resumen Global' : 'Tu actividad reciente'}
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <span className="text-2xl font-bold text-white">{total}</span>
            <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Totales</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <span className="text-2xl font-bold text-green-400">{sent}</span>
            <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Enviados</p>
          </div>
        </div>
      </div>
    </div>
  );
}