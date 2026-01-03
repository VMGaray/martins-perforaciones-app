export default function Stats() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem number="+10" label="Años de experiencia" />
          <StatItem number="+100" label="Pozos perforados" />
          <StatItem number="100%" label="Garantía de confianza" />
          <StatItem number="n°94" label="Habilitación APRHI" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string, label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-3xl md:text-4xl font-bold text-white">{number}</span>
      <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</span>
    </div>
  )
}