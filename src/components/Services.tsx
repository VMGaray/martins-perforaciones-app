"use client";

import { useState } from "react";
import { Droplets, Hammer, Gauge, Plus, Minus } from "lucide-react";

const SERVICES = [
  {
    icon: Hammer,
    title: "Perforación de pozos",
    desc: "Sistema de perforación rotativa por rotopercusión neumática con martillo de fondo - DTH (Down the Hole)-.",
    image: "/29-5..jpg",
  },
  {
    icon: Droplets,
    title: "Sistemas de bombeo",
    desc: "Asesoramiento en la elección de su sistema de bombeo e instalación y ejecución de obra.",
    image: "/maquina2 dic25.jpeg",
  },
  {
    icon: Gauge,
    title: "Aforos y pruebas de bombeo",
    desc: "Limpieza química y mecánica de pozos existentes. Pruebas de bombeo para certificar caudal.",
    image: "/2dic 25.jpeg",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="servicios" className="scroll-mt-24 py-24 md:py-32 px-5 md:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20">
        <div>
          <h2 className="font-condensed uppercase text-white text-5xl md:text-7xl mb-6">Soluciones integrales</h2>
          <p className="text-lg text-bruma max-w-lg mb-12">
            Desde el estudio hidrogeológico inicial hasta que el agua sale por la canilla. Nos ocupamos de todo.
          </p>

          <ul className="border-t border-veta">
            {SERVICES.map((s, i) => {
              const open = i === active;
              const Icon = s.icon;
              return (
                <li key={s.title} className="border-b border-veta">
                  <button
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-expanded={open}
                    className="group w-full flex items-center gap-5 py-6 text-left"
                  >
                    <span
                      className={`flex size-12 shrink-0 items-center justify-center rounded-md transition-colors ${
                        open ? "bg-maquina text-pozo" : "bg-roca text-agua group-hover:text-white"
                      }`}
                    >
                      <Icon size={24} />
                    </span>
                    <span
                      className={`flex-1 font-condensed uppercase text-3xl md:text-4xl transition-colors ${
                        open ? "text-white" : "text-bruma group-hover:text-white"
                      }`}
                    >
                      {s.title}
                    </span>
                    {open ? <Minus className="text-maquina" /> : <Plus className="text-bruma" />}
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-[68px] pb-7 pr-4 text-lg text-niebla/85 leading-relaxed max-w-xl">{s.desc}</p>
                      {/* Foto dentro del acordeón en mobile */}
                      <img
                        src={s.image}
                        alt={s.title}
                        className="lg:hidden mb-7 w-full aspect-[4/3] object-cover rounded-md"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Foto que acompaña al servicio activo (escritorio) */}
        <div className="hidden lg:block relative">
          <div className="sticky top-32 aspect-[4/5] overflow-hidden rounded-lg">
            {SERVICES.map((s, i) => (
              <img
                key={s.image}
                src={s.image}
                alt={i === active ? s.title : ""}
                aria-hidden={i !== active}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
