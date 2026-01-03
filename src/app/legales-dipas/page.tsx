import { Metadata } from "next";
import LegalSection from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Habilitación APRHI n°94 | Requisitos y Beneficios",
  description: "Información importante sobre permisos legales y la importancia de trabajar con empresas perforadoras matriculadas.",
};

export default function LegalesPage() {
  return (
    <div className="bg-blue-950 min-h-screen pt-12 pb-24">
      <div className="max-w-5xl mx-auto px-4 mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Respaldo Legal y Normativo</h1>
        <p className="text-slate-400 text-lg">
          La construcción de un pozo es una obra permanente. Aseguramos que su inversión cumpla con todas las normativas vigentes en Córdoba.
        </p>
      </div>

      <LegalSection />

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="bg-blue-900/10 p-6 rounded-2xl border border-blue-800/30">
          <h4 className="text-white font-bold mb-3 italic">¿Por qué es importante el permiso?</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            Garantiza que la actividad no afecte el entorno, evita multas de entes reguladores y asegura que el agua extraída sea apta para el uso declarado.
          </p>
        </div>
        <div className="bg-blue-900/10 p-6 rounded-2xl border border-blue-800/30">
          <h4 className="text-white font-bold mb-3 italic">Beneficios del Pozo Propio</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            Desde la independencia hídrica hasta el ahorro económico a largo plazo y la valorización de su propiedad o campo.
          </p>
        </div>
      </div>
    </div>
  );
}