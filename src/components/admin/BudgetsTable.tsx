import { Clock, MessageSquare, FileText } from "lucide-react";

// 1. Definimos la interfaz del objeto Presupuesto para que TypeScript sepa qué campos tiene
interface Presupuesto {
  id: string;
  created_at: string;
  cliente_nombre: string;
  localidad: string;
  total: number;
  estado: string;
  creado_por: string;
}

// 2. Definimos la interfaz de las Props que recibe el componente
interface BudgetsTableProps {
  presupuestos: Presupuesto[];
  loading: boolean;
  onEdit: (id: string) => void;
}

export function BudgetsTable({ presupuestos, loading, onEdit }: BudgetsTableProps) {
  if (loading) {
    return (
      <div className="p-20 text-center text-slate-500 font-bold">
        Conectando con Supabase...
      </div>
    );
  }

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/50 overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-slate-800 flex justify-between items-center">
        <h3 className="text-white font-bold flex items-center gap-2">
          <Clock size={20} className="text-blue-400" /> Historial de Movimientos
        </h3>
      </div>
      {/* --- VISTA MOBILE: tarjetas --- */}
      <div className="md:hidden divide-y divide-slate-800">
        {presupuestos.map((p) => (
          <div key={p.id} className="p-4 space-y-2">
            <div className="flex justify-between items-start gap-2">
              <div>
                <p className="text-white font-bold">{p.cliente_nombre}</p>
                <p className="text-[10px] text-slate-500">{p.localidad}</p>
              </div>
              <button
                onClick={() => onEdit(p.id)}
                className="p-2 bg-blue-600/10 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all flex-shrink-0"
              >
                <FileText size={18} />
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-emerald-400">${p.total.toLocaleString()}</span>
              <span className="text-slate-700">•</span>
              <span className="text-slate-500 font-mono">{new Date(p.created_at).toLocaleDateString()}</span>
              <span className="text-slate-700">•</span>
              <span className="text-slate-400 italic">{p.creado_por}</span>
            </div>
            <span
              className={`px-2 py-1 rounded-lg text-[9px] font-bold uppercase inline-flex items-center gap-1 w-fit ${
                p.estado === "Enviado WhatsApp"
                  ? "bg-green-900/30 text-green-400"
                  : "bg-blue-900/30 text-blue-400"
              }`}
            >
              {p.estado === "Enviado WhatsApp" ? (
                <MessageSquare size={10} />
              ) : (
                <FileText size={10} />
              )}
              {p.estado}
            </span>
          </div>
        ))}
      </div>

      {/* --- VISTA ESCRITORIO: tabla --- */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-950/50 text-slate-500 uppercase text-[10px] font-bold tracking-widest">
            <tr>
              <th className="px-6 py-4">Fecha</th>
              <th className="px-6 py-4">Cliente / Obra</th>
              <th className="px-6 py-4">Monto</th>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4">Autor</th>
              <th className="px-6 py-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {presupuestos.map((p) => (
              <tr key={p.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 text-slate-500 font-mono text-xs">
                  {new Date(p.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <p className="text-white font-bold">{p.cliente_nombre}</p>
                  <p className="text-[10px] text-slate-500">{p.localidad}</p>
                </td>
                <td className="px-6 py-4 font-bold text-emerald-400">
                  ${p.total.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-lg text-[9px] font-bold uppercase flex items-center gap-1 w-fit ${
                      p.estado === "Enviado WhatsApp"
                        ? "bg-green-900/30 text-green-400"
                        : "bg-blue-900/30 text-blue-400"
                    }`}
                  >
                    {p.estado === "Enviado WhatsApp" ? (
                      <MessageSquare size={10} />
                    ) : (
                      <FileText size={10} />
                    )}
                    {p.estado}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-400 text-xs italic">
                  {p.creado_por}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onEdit(p.id)}
                    className="p-2 bg-blue-600/10 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <FileText size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}