"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { prefix: "+", value: 10, label: "Años de experiencia" },
  { text: "100%", label: "Garantía de confianza" },
  { text: "n°94", label: "Habilitación APRHI" },
];

export default function Stats() {
  return (
    <section aria-label="Martins en números" className="border-y border-veta bg-roca">
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-3">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 md:px-8 py-8 md:py-10 border-veta ${i === 0 ? "border-r" : ""} ${
              i < 2 ? "border-b lg:border-b-0" : "col-span-2 lg:col-span-1"
            } ${i === 1 ? "lg:border-r" : ""}`}
          >
            <div className="font-condensed text-5xl md:text-6xl text-white">
              {"value" in s && s.value !== undefined ? <CountUp to={s.value} prefix={s.prefix} /> : s.text}
            </div>
            <div className="mt-2 text-bruma">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CountUp({ to, prefix = "" }: { to: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Arranca en 0 solo si hay JS y animación permitida (sin JS se ve el número final)
    const raf = requestAnimationFrame(() => setN(0));
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n}
    </span>
  );
}
