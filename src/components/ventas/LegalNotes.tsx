export default function LegalNotes() {
  return (
    <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800">
      <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
        Notas incluidas en el presupuesto
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs text-slate-400">
        <div className="space-y-2">
          <p>• Instalación de cañería PVC sin cargo hasta boca de pozo.</p>
          <p>• Sugerencia: +10mts de profundidad sobre lo indicado por geólogo.</p>
          <p>• Empalme de cables realizado exclusivamente por fabricante.</p>
        </div>
        <div className="space-y-2">
          <p>• SEÑA: $100.000 para reserva de turno.</p>
          <p>• PAGO: 30% adelanto y saldo contra terminación.</p>
          <p>• Mínimo de obra: 25 metros | Validez: 15 días.</p>
        </div>
      </div>
    </div>
  );
}