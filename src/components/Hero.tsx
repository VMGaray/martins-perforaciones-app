import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* --- FONDO CON IMAGEN --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/portada dic 25.jpeg" 
          alt="Perforadora trabajando en las sierras" 
          // CAMBIO 1: Subimos la opacidad a 90 (casi total) para que se vea nítida
          className="h-full w-full object-cover opacity-90" 
        />
        
        {/* CAMBIO 2: Degradado más suave. 
            - Arriba: Un poco oscuro para que se lea el menú.
            - Medio: Muy transparente (via-slate-900/10) para ver la foto.
            - Abajo: Oscuro solido (to-slate-950) para que se funda con la siguiente sección. 
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/20 to-blue-950"></div>
      </div>

      <div className="relative mx-auto max-w-4xl text-center z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 backdrop-blur-md px-3 py-1 text-sm font-medium text-blue-300 mb-6">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-2 bg-blue-500"></span>
          </span>
          Disponible para proyectos en el Valle de Calamuchita, Córdoba
        </div>
        
        {/* Agregamos una sombra fuerte al texto (drop-shadow-xl) para que se lea bien sobre la foto clara */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl shadow-black">
          Experiencia que hace<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-sm">
            brotar el agua.
          </span>
        </h1>
        
        {/* Fondo semitransparente suave detrás del texto para mejorar lectura sin tapar la foto */}
        <p className="mx-auto max-w-2xl text-lg text-blue-50 mb-10 leading-relaxed font-medium drop-shadow-md bg-blue 950/30 p-4 rounded-2xl backdrop-blur-sm">
          "Especialistas en perforaciones y sistemas de bombeo con 10 años de trayectoria. Empresa habilitada por APRHI (Matrícula n°94), garantizando asesoramiento profesional y ejecución técnica bajo normas vigentes para sus proyectos hídricos"
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="https://wa.me/5493546435015?text=Hola,%20quiero%20hacer%20una%20consulta%20por%20una%20perforación%20de%20agua"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/40 w-full md:w-auto flex items-center justify-center gap-2 border border-blue-400/50 backdrop-blur-sm"
          >
            <Phone size={18} />
            Hablar con un especialista
          </a>
        </div>
      </div>
    </section>
  );
}