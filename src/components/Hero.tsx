"use client";

import { Phone } from "lucide-react";

export default function Hero() {
  const handleContact = () => {
    const phone = "5493546435015";
    const msg = encodeURIComponent("Hola, quiero hacer una consulta por una perforación de agua");
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${msg}`, "_blank");
  };

  return (
    <section
      id="inicio"
      className="relative -mt-20 md:-mt-24 min-h-[100svh] overflow-hidden flex items-end"
    >
      {/* FONDO: foto con acercamiento lento */}
      <div className="absolute inset-0 z-0">
        <img
          src="/portada dic 25.jpeg"
          alt="Perforadora trabajando en las sierras de Calamuchita"
          className="h-full w-full object-cover object-[65%_center] animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pozo/95 via-pozo/60 to-pozo/10" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-pozo to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 pt-32 pb-12 md:pb-16 grid lg:grid-cols-[1fr_auto] gap-12 items-end">
        <div className="max-w-3xl">
          <p
            className="flex items-center gap-2 text-sm md:text-base text-niebla/90 mb-6 animate-rise"
            style={{ animationDelay: "100ms" }}
          >
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maquina opacity-70" />
              <span className="relative inline-flex rounded-full size-2.5 bg-maquina" />
            </span>
            Disponible para proyectos en el Valle de Calamuchita, Córdoba
          </p>

          <h1
            className="font-condensed uppercase text-white text-[15vw] sm:text-7xl md:text-8xl lg:text-[min(7.5rem,13vh)] mb-7 animate-rise"
            style={{ animationDelay: "250ms" }}
          >
            Experiencia que hace brotar el agua
          </h1>

          <p
            className="max-w-xl text-lg text-niebla/85 leading-relaxed mb-9 animate-rise"
            style={{ animationDelay: "450ms" }}
          >
            Especialistas en perforaciones y sistemas de bombeo con 10 años de trayectoria. Empresa habilitada por
            APRHI (Matrícula n°94), garantizando asesoramiento profesional y ejecución técnica bajo normas vigentes
            para sus proyectos hídricos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-rise" style={{ animationDelay: "600ms" }}>
            <button
              onClick={handleContact}
              className="h-14 px-8 rounded-md bg-maquina text-pozo font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-3"
            >
              <Phone size={20} />
              Hablar con un especialista
            </button>
            <a
              href="#servicios"
              className="h-14 px-8 rounded-md border border-white/30 text-white font-semibold text-lg hover:border-white hover:bg-white/5 transition-colors flex items-center justify-center"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* VIDEO VERTICAL DE OBRA (escritorio) */}
        <figure
          className="hidden lg:block w-[260px] xl:w-[290px] animate-rise"
          style={{ animationDelay: "800ms" }}
        >
          <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-white/15 shadow-2xl shadow-black/50">
            <video
              src="/perfo 25 dic.mp4"
              poster="/maquina4 dic25.jpeg"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            <span className="absolute top-3 left-3 flex items-center gap-2 rounded bg-pozo/70 backdrop-blur px-2.5 py-1 text-xs font-semibold text-white">
              <span className="size-2 rounded-full bg-red-500 animate-pulse" />
              En obra
            </span>
          </div>
          <figcaption className="mt-3 text-sm text-bruma">Proceso de perforación con martillo de fondo DTH</figcaption>
        </figure>
      </div>
    </section>
  );
}
