"use client";

import Link from "next/link";
import { Drill, Zap, Shield, Droplets, Gauge, Box, ArrowLeft } from "lucide-react";

export default function DTHDetailView() {
  const ventajas = [
    {
      icon: <Zap className="text-blue-500" />,
      title: "Máxima Eficiencia",
      desc: "Velocidades de penetración más rápidas en comparación con otros métodos, ideal para condiciones geológicas desafiantes."
    },
    {
      icon: <Shield className="text-blue-500" />,
      title: "Menor Desgaste",
      desc: "Herramientas diseñadas para ofrecer durabilidad y precisión, reduciendo la necesidad de reemplazos frecuentes."
    },
    {
      icon: <Box className="text-blue-500" />,
      title: "Equipamiento Robusto",
      desc: "Tubos y adaptadores diseñados para trabajar juntos de manera eficiente, garantizando un rendimiento óptimo."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
        >
          <div className="p-2 rounded-full bg-slate-900 border border-slate-800 group-hover:border-blue-500/50">
            <ArrowLeft size={18} />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest">Volver al inicio</span>
        </Link>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Tecnología Especializada</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Perforación <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">DTH</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="group relative bg-slate-900/40 border border-slate-800 p-10 rounded-[40px] backdrop-blur-md 
                           transition-all duration-500 ease-out cursor-pointer
                           hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(34,211,238,0.1)]">
              <div className="flex items-center gap-4 text-cyan-400 mb-6 transition-transform duration-500 group-hover:scale-110">
                <Gauge size={32} />
                <h3 className="text-2xl font-bold text-white transition-all duration-500 group-hover:text-3xl">Ingeniería de Impacto</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg transition-all duration-500 group-hover:text-slate-200 group-hover:text-xl">
                Técnica avanzada que pulveriza la roca con percusión rápida y rotación continua.
              </p>
              {/* Usamos comillas simples afuera y dobles adentro, o el código &quot; */}
<div className="mt-8 p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20 italic text-blue-200">
  &quot;Limpieza del pozo en tiempo real para un avance imparable.&quot;
</div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group p-8 bg-slate-900/20 border border-slate-800 rounded-3xl transition-all duration-500 cursor-pointer hover:scale-110">
                <Droplets className="text-blue-400 mb-4 group-hover:scale-125 transition-transform" size={32} />
                <h4 className="text-white font-bold text-xl mb-2">Pozos de Agua</h4>
                <p className="text-slate-500 text-sm">Abastecimiento rural eficiente.</p>
              </div>
              <div className="group p-8 bg-slate-900/20 border border-slate-800 rounded-3xl transition-all duration-500 cursor-pointer hover:scale-110">
                <Drill className="text-cyan-400 mb-4 group-hover:scale-125 transition-transform" size={32} />
                <h4 className="text-white font-bold text-xl mb-2">Construcción</h4>
                <p className="text-slate-500 text-sm">Cimientos en roca dura.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ventajas.map((v, i) => (
              <div key={i} className="group p-10 rounded-[40px] bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 transition-all duration-500 hover:scale-110">
                <div className="mb-8 p-4 bg-blue-500/10 w-fit rounded-2xl group-hover:scale-125 transition-transform">{v.icon}</div>
                <h4 className="text-white font-bold text-xl mb-4 group-hover:text-blue-400 transition-colors">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}