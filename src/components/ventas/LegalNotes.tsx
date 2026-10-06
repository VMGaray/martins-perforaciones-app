import { BUDGET_OBSERVATIONS, COMMERCIAL_TERMS } from "@/lib/constants";

export default function LegalNotes() {
  return (
    <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800">
      <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
        Notas incluidas en el presupuesto
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs text-slate-400">
        <div className="space-y-2">
          <p className="font-bold text-slate-300">Observaciones</p>
          {BUDGET_OBSERVATIONS.map((obs) => (
            <p key={obs}>• {obs}</p>
          ))}
        </div>
        <div className="space-y-2">
          <p className="font-bold text-slate-300">Condiciones comerciales</p>
          {COMMERCIAL_TERMS.map((term) => (
            <p key={term}>• {term}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
