import { Calculator } from "lucide-react";

export default function BudgetTable({ items, onUpdateItem, total }: any) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/50 overflow-hidden shadow-xl">
      <div className="p-4 border-b border-slate-800 bg-slate-900">
        <h2 className="flex items-center gap-2 text-emerald-400 font-semibold"><Calculator size={18} /> Detalle de Costos</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 uppercase bg-slate-950/50">
            <tr>
              <th className="px-4 py-3">Descripción</th>
              <th className="px-4 py-3 w-20 text-center">Cant.</th>
              <th className="px-4 py-3 w-32 text-right">Unitario</th>
              <th className="px-4 py-3 w-32 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {items.map((item: any) => (
              <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="px-4 py-3">
                  {item.desc}
                  {item.isOptional && <span className="ml-2 text-[9px] text-blue-400 font-bold uppercase bg-blue-900/20 px-1.5 rounded">Opcional</span>}
                </td>
                <td className="px-4 py-3">
                  <input type="number" value={item.qty} onChange={e => onUpdateItem(item.id, 'qty', e.target.value)} className="w-full bg-slate-950/50 border border-slate-700 rounded p-1 text-center text-white" />
                </td>
                <td className="px-4 py-3">
                  <input type="number" value={item.price} onChange={e => onUpdateItem(item.id, 'price', e.target.value)} className="w-full bg-slate-950/50 border border-slate-700 rounded p-1 text-right text-white" />
                </td>
                <td className="px-4 py-3 text-right font-bold text-slate-200">${item.total.toLocaleString('es-AR')}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-slate-950">
            <tr>
              <td colSpan={3} className="px-4 py-5 text-right text-slate-500 text-xs font-bold uppercase tracking-widest">Total Estimado</td>
              <td className="px-4 py-5 text-right text-2xl font-bold text-emerald-400">${total.toLocaleString('es-AR')}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}