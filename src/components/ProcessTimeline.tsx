const steps = [
  { title: "Estudio Hidrogeológico / Rabdomancia", desc: "Análisis del terreno y detección de la zona a perforar antes de iniciar." },
  { title: "Perforación Inicial", desc: "Uso de maquinaria pesada adaptada al tipo de suelo en la zona." },
  { title: "Entubado y Filtros", desc: "Protección con PVC para agua potable (encamisado), colocación de filtros." },
  { title: "Limpieza y Desarrollo", desc: "Inyección de aire a presión para maximizar el caudal de captación." },
  { title: "Pruebas de Bombeo", desc: "Evaluación final del caudal para el dimensionamiento del equipo de bombeo." },
];

export default function ProcessTimeline() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-widest">Nuestro Método de Trabajo</h2>
      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
              {idx + 1}
            </div>
            <div>
              <h4 className="text-lg font-bold text-blue-300">{step.title}</h4>
              <p className="text-slate-400">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}