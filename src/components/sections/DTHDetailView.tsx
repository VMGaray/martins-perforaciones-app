"use client";

import Link from "next/link";
import { Drill, Zap, Shield, Droplets, Gauge, Box, ArrowLeft } from "lucide-react";

export default function DTHDetailView() {
  const ventajas = [
    {
      icon: <Zap className="text-blue-500" />,
      title: "Alta Eficiencia",
      desc: "Buen rendimiento de perforación en terrenos de roca dura y condiciones geológicas exigentes."
    },
    {
      icon: <Shield className="text-blue-500" />,
      title: "Menor Desgaste",
      desc: "Sistema de percusión directa que reduce el desgaste de las herramientas y mejora la estabilidad del proceso."
    },
    {
      icon: <Box className="text-blue-500" />,
      title: "Equipamiento Robusto",
      desc: "Componentes diseñados para trabajar de forma conjunta, ofreciendo un desempeño confiable en perforaciones profundas."
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
          <span className="text-sm font-bold uppercase tracking-widest">
            Volver al inicio
          </span>
        </Link>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
              Tecnología Especializada
            </h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Perforación{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                DTH
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div
              className="group relative bg-slate-900/40 border border-slate-800 p-10 rounded-[40px] backdrop-blur-md
                         transition-all duration-500 ease-out cursor-pointer
                         hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(34,211,238,0.1)]"
            >
              <div className="flex items-center gap-4 text-cyan-400 mb-6 transition-transform duration-500 group-hover:scale-110">
                <Gauge size={32} />
                <h3 className="text-2xl font-bold text-white transition-all duration-500 group-hover:text-3xl">
                  Tecnología DTH
                </h3>
              </div>

              <p className="text-slate-400 leading-relaxed text-lg transition-all duration-500 group-hover:text-slate-200 group-hover:text-xl">
                La tecnología DTH (Down The Hole) es un método altamente eficiente utilizado en la perforación de pozos
                de agua, especialmente en terrenos de roca dura. Emplea un martillo neumático ubicado directamente
                detrás de la broca, accionado por aire comprimido, lo que permite una transmisión directa de energía al
                fondo del pozo y una perforación más efectiva.
              </p>

              <p className="mt-4 text-slate-400 leading-relaxed text-lg transition-all duration-500 group-hover:text-slate-200 group-hover:text-xl">
                El aire comprimido impulsa el martillo y, al mismo tiempo, permite la evacuación continua de los
                recortes, manteniendo el pozo limpio y favoreciendo un avance constante y controlado durante todo el
                proceso.
              </p>

              <div className="mt-8 p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20 italic text-blue-200">
                &quot;Percusión directa y limpieza constante para un avance eficiente.&quot;
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group p-8 bg-slate-900/20 border border-slate-800 rounded-3xl transition-all duration-500 cursor-pointer hover:scale-110">
                <Droplets
                  className="text-blue-400 mb-4 group-hover:scale-125 transition-transform"
                  size={32}
                />
                <h4 className="text-white font-bold text-xl mb-2">Pozos de Agua</h4>
                <p className="text-slate-500 text-sm">
                  Perforaciones adaptadas a condiciones geológicas específicas.
                </p>
              </div>

              <div className="group p-8 bg-slate-900/20 border border-slate-800 rounded-3xl transition-all duration-500 cursor-pointer hover:scale-110">
                <Drill
                  className="text-cyan-400 mb-4 group-hover:scale-125 transition-transform"
                  size={32}
                />
                <h4 className="text-white font-bold text-xl mb-2">Construcción</h4>
                <p className="text-slate-500 text-sm">
                  Aplicaciones en obra civil y perforaciones en roca dura.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ventajas.map((v, i) => (
              <div
                key={i}
                className="group p-10 rounded-[40px] bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 transition-all duration-500 hover:scale-110"
              >
                <div className="mb-8 p-4 bg-blue-500/10 w-fit rounded-2xl group-hover:scale-125 transition-transform">
                  {v.icon}
                </div>
                <h4 className="text-white font-bold text-xl mb-4 group-hover:text-blue-400 transition-colors">
                  {v.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
