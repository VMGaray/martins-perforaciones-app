import { ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function LegalSection() {
  return (
    <section className="bg-blue-950/30 p-8 rounded-3xl border border-blue-700/50 max-w-5xl mx-auto my-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3 text-center">
          <ShieldCheckIcon className="w-24 h-24 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white">Habilitación APRHI n°94</h3>
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-2xl font-bold text-blue-300">Seguridad Legal y Ambiental</h2>
          <p className="text-slate-300">
            Realizar una perforación sin los permisos adecuados puede resultar en multas graves y clausuras. En Martins Perforaciones gestionamos la documentación necesaria para que su pozo sea legal y seguro.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-400">
            <li>✓ Inscripción en Registro Hídrico</li>
            <li>✓ Planos Técnicos del Pozo</li>
            <li>✓ Control de Impacto Ambiental</li>
            <li>✓ Declaración de Uso de Aguas</li>
            <li>✓ Análisis fisicoquímico</li>
          </ul>
        </div>
      </div>
    </section>
  );
}