import { ScanSearch, UserCheck, Sparkles, Binary } from "lucide-react";

export default function Methods() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-900 to-slate-950 relative overflow-hidden">
      
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Cómo decidimos dónde perforar?
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
            La ubicación del pozo es crítica. En <strong>Martins Perforaciones</strong> respetamos tanto la ciencia moderna como los métodos tradicionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* OPCIÓN 1: EL GEÓLOGO */}
          <MethodCard 
            title="Estudio Hidrogeológico"
            subtitle="El Método Científico"
            icon={<ScanSearch size={32} />}
            bgIcon={<Binary size={120} />}
            colorClass="from-cyan-500 to-blue-600"
            iconContainerClass="bg-cyan-900/50 border-cyan-700 text-cyan-400"
            // --- USA TU FOTO LOCAL ---
            image="/geologo.jpg" 
            description="Realizado por un Geólogo Matriculado. Utiliza instrumentos para medir la resistividad del suelo, identificar capas geológicas y predecir la calidad del agua antes de iniciar la obra."
            features={["Mayor precisión en profundidad", "Informe técnico detallado", "Ideal para terrenos complejos"]}
          />

          {/* OPCIÓN 2: EL RABDOMANTE */}
          <MethodCard 
            title="Rabdomancia"
            subtitle="El Método Tradicional"
            icon={<UserCheck size={32} />}
            bgIcon={<Sparkles size={120} />}
            colorClass="from-emerald-500 to-green-700"
            iconContainerClass="bg-emerald-900/50 border-emerald-700 text-emerald-400"
            // --- USA TU FOTO LOCAL ---
            image="/rabdomante.jpg"
            description="Basado en la sensibilidad humana para detectar variaciones en el campo electromagnético natural. Se utilizan varillas o péndulos para marcar el cruce de vetas de agua subterránea."
            features={["Método rápido y económico", "Tradición cultural efectiva", "Detecta cruces de vetas"]}
          />

        </div>

        {/* NOTA ACLARATORIA FINAL */}
        <div className="mt-16 p-8 rounded-3xl bg-blue-950/50 border border-blue-800 text-center backdrop-blur-sm shadow-xl">
            <p className="text-blue-200 leading-relaxed italic">
                <span className="font-bold text-white not-italic">Aviso legal:</span> La tarea de Martins Perforaciones es la realización de la perforación donde el cliente lo indique, referido a la ubicación como a la cantidad de metros, quedando obligado el cliente al pago de los metros perforados.
            </p>
        </div>

      </div>
    </section>
  );
}

function MethodCard({ 
    title, 
    subtitle, 
    icon, 
    bgIcon, 
    colorClass, 
    iconContainerClass, 
    image, 
    description, 
    features 
}: any) {
  return (
    <div className="group h-[500px] w-full [perspective:1500px]">
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* --- LADO A: TEXTO --- */}
        <div className={`absolute inset-0 h-full w-full rounded-3xl p-1 bg-gradient-to-br ${colorClass} [backface-visibility:hidden] shadow-2xl`}>
            <div className="h-full rounded-[22px] bg-slate-950 p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                    {bgIcon}
                </div>
                
                <div className={`size-14 rounded-2xl flex items-center justify-center border mb-6 ${iconContainerClass}`}>
                    {icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className={`text-sm font-bold uppercase tracking-widest mb-6 bg-clip-text text-transparent bg-gradient-to-r ${colorClass}`}>
                    {subtitle}
                </p>
                
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {description}
                </p>

                <ul className="space-y-3 text-sm text-slate-300 border-t border-slate-800 pt-8 mt-auto">
                    {features.map((f: string, i: number) => (
                        <li key={i} className="flex items-center gap-3">
                            <div className={`size-1.5 rounded-full bg-gradient-to-r ${colorClass}`} />
                            {f}
                        </li>
                    ))}
                </ul>

                <div className="mt-6 text-center text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:opacity-0 transition-opacity">
                    Pasa el mouse para ver imagen →
                </div>
            </div>
        </div>

        {/* --- LADO B: IMAGEN --- */}
        <div className="absolute inset-0 h-full w-full rounded-3xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl border-4 border-slate-800">
            <img src={image} alt={title} className="h-full w-full object-cover" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-300 text-sm italic">Imagen ilustrativa del método.</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest">
                    ← Volver a la explicación
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}