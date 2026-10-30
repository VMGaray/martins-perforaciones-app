"use client";

import { useEffect, useState } from "react";

// Perfil de pozo: navegación lateral que "perfora" a medida que se baja por la página.
const LAYERS = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "ubicacion", label: "Dónde perforar" },
  { id: "trabajos", label: "Trabajos" },
  { id: "contacto", label: "Presupuesto" },
];

export default function DepthGauge() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      const probe = window.innerHeight * 0.4;
      let current = 0;
      LAYERS.forEach((l, i) => {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= probe) current = i;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Secciones de la página"
      className="hidden lg:block fixed right-4 xl:right-6 top-1/2 -translate-y-1/2 z-50 h-[46vh]"
    >
      {/* caño de perforación */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-veta" />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px] rounded-full bg-maquina transition-[height] duration-150"
        style={{ height: `${progress * 100}%` }}
      />
      {/* mecha */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rotate-45 bg-maquina shadow-[0_0_12px_rgba(243,195,43,0.7)] transition-[top] duration-150"
        style={{ top: `${progress * 100}%` }}
      />

      <ul className="relative h-full flex flex-col justify-between">
        {LAYERS.map((l, i) => (
          <li key={l.id} className="relative flex items-center justify-center">
            <a
              href={`#${l.id}`}
              aria-current={i === active ? "true" : undefined}
              className="group flex items-center justify-center size-6"
            >
              <span
                className={`block rounded-full transition-all ${
                  i <= active ? "size-2.5 bg-maquina" : "size-2 bg-bruma/50 group-hover:bg-white"
                }`}
              />
              <span
                className={`pointer-events-none absolute right-8 whitespace-nowrap rounded bg-pozo/90 px-2.5 py-1 text-sm transition-opacity ${
                  i === active
                    ? "opacity-100 text-white"
                    : "opacity-0 text-bruma group-hover:opacity-100 group-focus-visible:opacity-100"
                }`}
              >
                {l.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
