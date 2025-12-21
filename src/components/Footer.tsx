import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Marca y Redes */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Martins <span className="text-blue-500">Perforaciones</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Especialistas en pozos de agua y sistemas de bombeo. 
              Experiencia y tecnología para garantizar el recurso vital.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/martins.perforaciones/" 
                target="_blank" 
                className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/martinsperforaciones/" 
                target="_blank" 
                className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-500 hover:border-pink-500/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Contacto Rápido */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest">Contacto</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-500" />
                Valle de Calamuchita - Córdoba - Argentina
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500" />
                +54 9 3546 435015              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500" />
                martinsperforaciones@gmail.com
              </li>
            </ul>
          </div>

          {/* Columna 3: Horarios o Info Extra */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest">Atención</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Lunes a Viernes: 08:00 - 18:00 hs<br />
              Sábados: 08:00 - 13:00 hs<br />
              
            </p>
          </div>
        </div>

        {/* Línea final de créditos */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase font-bold tracking-widest">
          <p>© {new Date().getFullYear()} Martins Perforaciones. Todos los derechos reservados.</p>
          <p>Desarrollado por Victoria Garay</p>
        </div>
      </div>
    </footer>
  );
}