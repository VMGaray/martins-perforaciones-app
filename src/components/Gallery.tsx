import { Play } from "lucide-react";

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-slate-950 border-t border-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Nuestros trabajos</h2>
          <p className="text-slate-400">
             Vea nuestros pozos en acción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Video 1 - Caudal fuerte */}
          <div className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video shadow-2xl">
            <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 flex items-center gap-2">
                <div className="size-2 rounded-full bg-red-500 animate-pulse"></div>
                EN OBRA
            </div>
            <video 
                src="/perfo dic 25.mp4" 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold text-lg">Prueba de Bombeo</h3>
                <p className="text-slate-300 text-sm">Verificación de caudal constante</p>
            </div>
          </div>

          {/* Video 2 - Perforación */}
          <div className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video shadow-2xl">
             <div className="absolute top-4 left-4 z-10 bg-blue-600/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                PERFORACIÓN
            </div>
            <video 
                src="/perfo 25 dic.mp4" 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold text-lg">Proceso de Perforación</h3>
                <p className="text-slate-300 text-sm">Maquinaria de alta precisión en roca</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}