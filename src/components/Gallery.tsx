"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Item =
  | { type: "video"; src: string; poster: string; title: string; caption: string; live?: boolean }
  | { type: "photo"; src: string; alt: string; ratio: string };

const ITEMS: Item[] = [
  {
    type: "video",
    src: "/perfo dic 25.mp4",
    poster: "/dic 25.jpeg",
    title: "Prueba de bombeo",
    caption: "Verificación de caudal constante",
    live: true,
  },
  { type: "photo", src: "/assets/foto1.jpg", alt: "Perforadora instalada en el terreno", ratio: "aspect-[3/4]" },
  { type: "photo", src: "/maquina1 dic25 .jpeg", alt: "Equipo de perforación junto a un quincho", ratio: "aspect-[3/4]" },
  {
    type: "video",
    src: "/perfo 25 dic.mp4",
    poster: "/maquina4 dic25.jpeg",
    title: "Proceso de perforación",
    caption: "Maquinaria de alta precisión en roca",
  },
  { type: "photo", src: "/assets/foto7.jpg", alt: "Perforadora a contraluz al atardecer", ratio: "aspect-[3/4]" },
  { type: "photo", src: "/nosotros-equipo.jpg", alt: "Operario trabajando en la perforadora", ratio: "aspect-[4/3]" },
  { type: "photo", src: "/assets/foto5.jpg", alt: "Perforación en marcha con polvo de roca", ratio: "aspect-[3/4]" },
  { type: "photo", src: "/assets/foto2.jpg", alt: "Detalle del martillo y la salida de material", ratio: "aspect-[3/4]" },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const bitRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  // El scroll vertical mueve la tira de costado mientras la sección queda fija.
  // Sin JS o con movimiento reducido queda la tira con scroll horizontal nativo.
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const strip = stripRef.current;
    if (!section || !stage || !strip) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(strip.children) as HTMLElement[];
    let maxX = 0;
    let centers: number[] = [];
    let raf = 0;

    const render = () => {
      raf = 0;
      const range = section.offsetHeight - stage.offsetHeight;
      const p = range > 0 ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / range)) : 0;
      const x = p * maxX;
      const vw = stage.clientWidth;

      strip.style.transform = `translate3d(${-x}px, 0, 0)`;
      if (ghostRef.current) ghostRef.current.style.transform = `translate3d(${-p * 45}%, 0, 0)`;
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${p})`;
      if (bitRef.current) bitRef.current.style.left = `${p * 100}%`;
      if (counterRef.current) counterRef.current.textContent = pad(1 + Math.round(p * (items.length - 1)));

      // El foco acompaña el recorrido para que la primera y la última pieza también lo reciban
      const focus = vw * (0.2 + 0.6 * p);
      items.forEach((item, i) => {
        const d = Math.min(1, Math.abs(centers[i] - x - focus) / (vw * 0.7));
        const y = (i % 2 ? 1 : -1) * 20 * d;
        item.style.transform = `translate3d(0, ${y}px, 0) scale(${1 - 0.06 * d})`;
        item.style.opacity = String(1 - 0.55 * d);
      });
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const measure = () => {
      maxX = Math.max(0, strip.offsetWidth - stage.clientWidth);
      section.style.height = `${maxX + stage.offsetHeight}px`;
      centers = items.map((item) => item.offsetLeft + item.offsetWidth / 2);
      render();
    };

    section.dataset.pinned = "";
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      delete section.dataset.pinned;
      section.style.height = "";
      strip.style.transform = "";
      items.forEach((item) => {
        item.style.transform = "";
        item.style.opacity = "";
      });
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const stage = stageRef.current;
    const strip = stripRef.current;
    if (!stage || !strip) return;
    const step = dir * stage.clientWidth * 0.7;
    if (sectionRef.current?.dataset.pinned !== undefined) {
      window.scrollBy({ top: step, behavior: "smooth" });
    } else {
      strip.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id="trabajos" className="group relative">
      <div
        ref={stageRef}
        className="relative overflow-hidden pt-24 md:pt-28 pb-8 group-data-pinned:sticky group-data-pinned:top-0 group-data-pinned:h-svh group-data-pinned:flex group-data-pinned:flex-col group-data-pinned:justify-center"
      >
        {/* Título calado que se desplaza detrás de la tira */}
        <div
          ref={ghostRef}
          aria-hidden="true"
          className="hidden group-data-pinned:block absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none font-condensed uppercase text-transparent text-[38vh] will-change-transform"
          style={{ WebkitTextStroke: "1px var(--color-veta)" }}
        >
          Nuestros trabajos
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8 flex items-end justify-between gap-6 mb-6 md:mb-8">
          <div>
            <h2 className="font-condensed uppercase text-white text-5xl md:text-7xl mb-3">Nuestros trabajos</h2>
            <p className="text-lg text-bruma">Vea nuestros pozos en acción.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Ver anteriores"
              className="size-12 rounded-md border border-veta bg-pozo text-white hover:border-maquina hover:text-maquina transition-colors flex items-center justify-center"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Ver siguientes"
              className="size-12 rounded-md border border-veta bg-pozo text-white hover:border-maquina hover:text-maquina transition-colors flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={stripRef}
          className="strip relative flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scroll-px-5 md:scroll-px-8 group-data-pinned:w-max group-data-pinned:overflow-visible group-data-pinned:snap-none group-data-pinned:will-change-transform"
          style={{ paddingInline: "max(1.25rem, calc((100vw - 80rem) / 2 + 2rem))" }}
        >
          {ITEMS.map((item) =>
            item.type === "video" ? (
              <figure
                key={item.src}
                className="relative shrink-0 snap-start h-[50svh] md:h-[54svh] min-h-[300px] max-h-[520px] aspect-[9/16] overflow-hidden rounded-lg bg-roca"
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
                className={`shrink-0 snap-start h-[50svh] md:h-[54svh] min-h-[300px] max-h-[520px] w-auto max-w-[85vw] object-cover rounded-lg bg-roca ${item.ratio}`}
              />
            )
          )}
        </div>

        {/* Avance de la perforación a lo largo de la tira */}
        <div className="hidden group-data-pinned:flex relative mx-auto w-full max-w-7xl px-5 md:px-8 mt-4 items-center gap-5">
          <span className="font-condensed text-2xl text-white tabular-nums">
            <span ref={counterRef}>01</span>
            <span className="text-bruma"> / {pad(ITEMS.length)}</span>
          </span>
          <div className="relative h-px flex-1 bg-veta">
            <div ref={fillRef} className="absolute inset-0 origin-left bg-maquina" style={{ transform: "scaleX(0)" }} />
            <div
              ref={bitRef}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rotate-45 bg-maquina shadow-[0_0_12px_rgba(243,195,43,0.7)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
