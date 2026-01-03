import { InformationCircleIcon } from "@heroicons/react/24/outline";

const types = [
  { name: "Pozo Profundo", depth: "+40m", tech: "Rotativa/DTH", quality: "Alta (Agua más limpia)" },
  { name: "Pozo Tubular", depth: "Variable", tech: "Entubado PVC/Acero", quality: "Excelente (Sistema moderno)" },
  { name: "Pozo Excavado", depth: "-15m", tech: "Manual/Liviana", quality: "Media (Riesgo contaminación)" },
];

export default function WellsGuide() {
  return (
    <section className="py-12 px-4 space-y-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-400">Guía Técnica de Perforaciones</h1>
        <p className="text-slate-300 leading-relaxed">
          Una perforación profesional es mucho más que un hueco en la tierra; es una obra de ingeniería diseñada para localizar acuíferos, ríos subterráneos, fracturas y grietas en la piedra para la extracción de agua subterránea .
        </p>
      </div>

      {/* Tabla Comparativa para móviles (Scroll horizontal si es necesario) */}
      <div className="overflow-x-auto max-w-5xl mx-auto rounded-xl border border-blue-800">
        <table className="w-full text-left bg-blue-950/20">
          <thead className="bg-blue-900/50 text-blue-300">
            <tr>
              <th className="p-4">Tipo de Pozo</th>
              <th className="p-4">Profundidad</th>
              <th className="p-4">Técnica</th>
              <th className="p-4">Calidad de Agua</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-800 text-slate-300">
            {types.map((type) => (
              <tr key={type.name} className="hover:bg-blue-900/10">
                <td className="p-4 font-semibold text-white">{type.name}</td>
                <td className="p-4">{type.depth}</td>
                <td className="p-4">{type.tech}</td>
                <td className="p-4">{type.quality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}