import { Metadata } from "next";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Nuestro Proceso de Perforación | Paso a Paso Técnico",
  description: "Conozca las etapas de una perforación profesional: desde el estudio hidrogeológico hasta la instalación de bombas.",
};

export default function ProcesoPage() {
  return (
    <main className="bg-blue-950 min-h-screen">
      <header className="pt-12 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Calidad en cada etapa</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Una perforación exitosa depende de un proceso estructurado y supervisado por profesionales habilitados.
        </p>
      </header>

      <ProcessTimeline />

      {/* Sección de mantenimiento (basada en tu texto) */}
      <section className="max-w-3xl mx-auto py-12 px-6 border-t border-blue-800/50">
        <h3 className="text-xl font-bold text-blue-400 mb-4">Mantenimiento y Vida Útil</h3>
        <p className="text-slate-300 leading-relaxed">
          Recomendamos la limpieza y revisión de los materiales del sistema de bombeo cada 3 años aproximadamente, para garantizar su mantenimiento y vida util.
        </p>
      </section>
    </main>
  );
}