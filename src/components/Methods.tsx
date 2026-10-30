import { Check, Scale } from "lucide-react";

const METHODS = [
  {
    title: "Estudio hidrogeológico",
    subtitle: "El método científico",
    image: "/geologo.jpg",
    description:
      "Realizado por un Geólogo Matriculado. Utiliza instrumentos para medir la resistividad del suelo, identificar capas geológicas y predecir la calidad del agua antes de iniciar la obra.",
    features: ["Mayor precisión en profundidad", "Informe técnico detallado", "Ideal para terrenos complejos"],
    accent: "text-agua",
  },
  {
    title: "Rabdomancia",
    subtitle: "El método tradicional",
    image: "/rabdomante.jpg",
    description:
      "Basado en la sensibilidad humana para detectar variaciones en el campo electromagnético natural. Se utilizan varillas o péndulos para marcar el cruce de vetas de agua subterránea.",
    features: ["Método rápido y económico", "Tradición cultural efectiva", "Detecta cruces de vetas"],
    accent: "text-maquina",
  },
];

export default function Methods() {
  return (
    <section id="ubicacion" className="scroll-mt-24 py-24 md:py-32 px-5 md:px-8 bg-roca border-y border-veta">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <h2 className="font-condensed uppercase text-white text-5xl md:text-7xl mb-6">
            ¿Cómo decidimos dónde perforar?
          </h2>
          <p className="text-lg text-bruma leading-relaxed">
            La ubicación del pozo es crítica. En Martins Perforaciones respetamos tanto la ciencia moderna como los
            métodos tradicionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 border-t border-veta">
          {METHODS.map((m, i) => (
            <article
              key={m.title}
              className={`group pt-10 pb-12 ${i === 0 ? "md:pr-12 md:border-r border-veta" : "md:pl-12 border-t md:border-t-0 border-veta"}`}
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="size-20 sm:size-24 md:size-28 shrink-0 overflow-hidden rounded-md bg-pozo">
                  <img
                    src={m.image}
                    alt={`Imagen ilustrativa: ${m.title}`}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                  />
                </div>
                <div className="min-w-0">
                  <p className={`font-semibold mb-1 ${m.accent}`}>{m.subtitle}</p>
                  <h3 lang="es" className="font-condensed uppercase text-white text-[1.75rem] sm:text-4xl lg:text-5xl break-words hyphens-auto">
                    {m.title}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-niebla/85 leading-relaxed mb-8 max-w-xl">{m.description}</p>

              <ul className="space-y-3">
                {m.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-niebla">
                    <Check size={18} className={m.accent} />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* NOTA ACLARATORIA */}
        <aside className="mt-4 flex gap-5 rounded-md border-l-4 border-maquina bg-pozo p-6 md:p-8">
          <Scale className="shrink-0 text-maquina mt-1" size={22} />
          <p className="text-bruma leading-relaxed">
            <strong className="text-white">Aviso legal:</strong> La tarea de Martins Perforaciones es la realización de
            la perforación donde el cliente lo indique, referido a la ubicación como a la cantidad de metros, quedando
            obligado el cliente al pago de los metros perforados.
          </p>
        </aside>
      </div>
    </section>
  );
}
