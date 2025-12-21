import { Clock, MessageSquare, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

// 1. Definimos la interfaz del objeto Presupuesto para coherencia de datos
interface Presupuesto {
  id: string;
  created_at: string;
  cliente_nombre: string;
  localidad: string;
  estado: string;
  creado_por: string;
}

// 2. Definimos la interfaz de las Props que recibe el componente
interface BudgetHistoryTableProps {
  presupuestos: Presupuesto[];
  loading: boolean;
  role: string | null;
}

export default function BudgetHistoryTable({ presupuestos, loading, role }: BudgetHistoryTableProps) {
  const router = useRouter();
  
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/30 overflow-hidden shadow-xl">
      <div className="p-6 border-b border-slate-800">
        <h3 className="font-bold text-white flex items-center gap-2">
          <Clock size={18} className="text-blue-400" />
          {role === 'admin' ? 'Todos los Presupuestos' : 'Mis Presupuestos'}
        </h3>
      </div>

      {loading ? (
        <div className="p-12 text-center text-slate-500 animate-pulse font-medium">
          Cargando registros...
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-950/50 text-slate-500 uppercase text-[10px] font-bold">
              <tr>
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4">Cliente</th>
                {role === 'admin' && <th className="px-6 py-4">Vendedor</th>}
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-center">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {presupuestos.length > 0 ? (
                presupuestos.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4 text-xs text-slate-500 font-mono">
                      {new Date(p.created_at).toLocaleDateString('es-AR')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-white">{p.cliente_nombre}</span>
                        <span className="text-[10px] text-slate-500">{p.localidad}</span>
                      </div>
                    </td>
                    {role === 'admin' && (
                      <td className="px-6 py-4">
                        <span className="text-[10px] bg-blue-900/20 text-blue-400 px-2 py-1 rounded-md font-bold">
                          {p.creado_por || "Sin asignar"}
                        </span>
                      </td>
                    )}
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-lg text-[9px] font-bold uppercase flex items-center gap-1 w-fit ${
                        p.estado === 'Enviado WhatsApp' 
                        ? 'bg-green-900/30 text-green-400 border border-green-800/50' 
                        : 'bg-blue-900/30 text-blue-400 border border-blue-800/50'
                      }`}>
                        {p.estado === 'Enviado WhatsApp' ? <MessageSquare size={10} /> : <FileText size={10} />}
                        {p.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => router.push(`/ventas?id=${p.id}`)}
                        className="px-4 py-2 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                      >
                        {role === 'admin' ? 'Editar/Ver' : (p.estado === 'Guardado' ? 'Completar' : 'Ver')}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={role === 'admin' ? 5 : 4} className="p-12 text-center text-slate-600 italic">
                    No se encontraron presupuestos en el historial.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}