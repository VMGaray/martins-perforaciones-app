import { Droplets, Hammer, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    // CAMBIO AQUÍ: De bg-slate-950 (negro) a bg-blue-900 (azul fuerte pero más claro)
    <section id="servicios" className="py-24 px-4 bg-blue-900">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Soluciones Integrales</h2>
          {/* Ajusté el texto a blue-200 para que se lea mejor sobre el fondo azul */}
          <p className="text-blue-200 max-w-xl mx-auto">
            Desde el estudio hidrogeológico inicial hasta que el agua sale por la canilla. Nos ocupamos de todo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<Hammer className="text-blue-400" size={32} />}
            title="Perforación de Pozos"
            desc="Maquinaria rotativa capaz de alcanzar grandes profundidades en cualquier tipo de suelo rocoso o sedimentario."
            image="/29-5..jpg"
          />
          <ServiceCard 
            icon={<Droplets className="text-cyan-400" size={32} />}
            title="Sistemas de Bombeo"
            desc="Venta e instalación de bombas sumergibles, solares y centrífugas de las mejores marcas del mercado."
            image="/maquina2 dic25.jpeg"
          />
          <ServiceCard 
            icon={<ShieldCheck className="text-emerald-400" size={32} />}
            title="Mantenimiento y Aforos"
            desc="Limpieza química y mecánica de pozos existentes. Pruebas de bombeo para certificar caudal."
            image="/2dic 25.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, image }: { icon: React.ReactNode, title: string, desc: string, image: string }) {
  return (
    <div className="group h-[360px] w-full [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* --- CARA FRONTAL --- */}
        <div className="absolute inset-0 h-full w-full rounded-2xl overflow-hidden [backface-visibility:hidden] shadow-xl border border-blue-800">
            <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/60 to-transparent flex flex-col items-center justify-end pb-8 p-4 text-center">
                <div className="mb-3 inline-flex rounded-xl bg-blue-600/20 p-3 backdrop-blur-sm border border-blue-500/30 text-white">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-white shadow-black drop-shadow-md">{title}</h3>
                <div className="mt-3 flex items-center gap-2 text-xs text-blue-200 font-medium uppercase tracking-wider">
                    <span className="h-px w-4 bg-blue-400"></span> Ver más <span className="h-px w-4 bg-blue-400"></span>
                </div>
            </div>
        </div>

        {/* --- CARA TRASERA --- */}
        {/* Usamos bg-blue-950 para que sea más oscuro que el fondo general y resalte */}
        <div className="absolute inset-0 h-full w-full rounded-2xl border border-blue-500 bg-blue-950 p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center shadow-2xl">
            <div className="mb-6 text-blue-400 scale-110 opacity-80">
               {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <p className="text-blue-100 leading-relaxed text-base">
                {desc}
            </p>
        </div>

      </div>
    </div>
  )
}