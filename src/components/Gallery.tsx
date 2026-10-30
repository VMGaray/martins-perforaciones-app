"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Item =
  | { type: "video"; src: string; poster: string; title: string; caption: string; live?: boolean }
  | { type: "photo"; src: string; alt: string };

const ITEMS: Item[] = [
  {
    type: "video",
    src: "/perfo dic 25.mp4",
    poster: "/dic 25.jpeg",
    title: "Prueba de bombeo",
    caption: "Verificación de caudal constante",
    live: true,
  },
  { type: "photo", src: "/assets/foto1.jpg", alt: "Perforadora instalada en el terreno" },
  { type: "photo", src: "/maquina1 dic25 .jpeg", alt: "Equipo de perforación junto a un quincho" },
  {
    type: "video",
    src: "/perfo 25 dic.mp4",
    poster: "/maquina4 dic25.jpeg",
    title: "Proceso de perforación",
    caption: "Maquinaria de alta precisión en roca",
  },
  { type: "photo", src: "/assets/foto7.jpg", alt: "Perforadora a contraluz al atardecer" },
  { type: "photo", src: "/nosotros-equipo.jpg", alt: "Operario trabajando en la perforadora" },
  { type: "photo", src: "/assets/foto5.jpg", alt: "Perforación en marcha con polvo de roca" },
  { type: "photo", src: "/assets/foto2.jpg", alt: "Detalle del martillo y la salida de material" },
];

export default function Gallery() {
  const stripRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = stripRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="trabajos" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="font-condensed uppercase text-white text-5xl md:text-7xl mb-4">Nuestros trabajos</h2>
          <p className="text-lg text-bruma">Vea nuestros pozos en acción.</p>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Ver anteriores"
            className="size-12 rounded-md border border-veta text-white hover:border-maquina hover:text-maquina transition-colors flex items-center justify-center"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Ver siguientes"
            className="size-12 rounded-md border border-veta text-white hover:border-maquina hover:text-maquina transition-colors flex items-center justify-center"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={stripRef}
        className="strip flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scroll-px-5 md:scroll-px-8"
        style={{ paddingInline: "max(1.25rem, calc((100vw - 80rem) / 2 + 2rem))" }}
      >
        {ITEMS.map((item) =>
          item.type === "video" ? (
            <figure
              key={item.src}
              className="relative shrink-0 snap-start h-[440px] md:h-[520px] aspect-[9/16] overflow-hidden rounded-lg bg-roca"
            >
              <video
                src={item.src}
                poster={item.poster}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              {item.live && (
                <span className="absolute top-3 left-3 flex items-center gap-2 rounded bg-pozo/70 backdrop-blur px-2.5 py-1 text-xs font-semibold text-white">
                  <span className="size-2 rounded-full bg-red-500 animate-pulse" />
                  En obra
                </span>
              )}
              <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 to-transparent">
                <span className="block font-condensed uppercase text-2xl text-white">{item.title}</span>
                <span className="text-sm text-niebla/80">{item.caption}</span>
              </figcaption>
            </figure>
          ) : (
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="shrink-0 snap-start h-[440px] md:h-[520px] w-auto max-w-[85vw] object-cover rounded-lg bg-roca"
            />
          )
        )}
      </div>
    </section>
  );
}
