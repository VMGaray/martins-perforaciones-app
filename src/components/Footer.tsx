import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pozo pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Marca y Redes */}
          <div className="space-y-6">
            <h2 className="font-condensed uppercase text-3xl text-white">
              Martins <span className="text-bruma font-semibold">Perforaciones</span>
            </h2>
            <p className="text-bruma text-sm leading-relaxed max-w-xs">
              Especialistas en pozos de agua y sistemas de bombeo. 
              Experiencia y tecnología para garantizar el recurso vital.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/martins.perforaciones/" 
                target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-roca border border-veta text-bruma hover:text-maquina hover:border-maquina transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/martinsperforaciones/" 
                target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-roca border border-veta text-bruma hover:text-maquina hover:border-maquina transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Contacto Rápido */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Contacto</h3>
            <ul className="space-y-3 text-sm text-bruma">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-maquina" />
                Valle de Calamuchita - Córdoba - Argentina
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-maquina" />
                <a href="tel:+5493546435015" className="hover:text-white">+54 9 3546 435015</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-maquina" />
                <a href="mailto:martinsperforaciones@gmail.com" className="hover:text-white">martinsperforaciones@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Horarios o Info Extra */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Atención</h3>
            <p className="text-sm text-bruma leading-relaxed">
              Lunes a Viernes: 08:00 - 18:00 hs<br />
              Sábados: 08:00 - 13:00 hs<br />
              
            </p>
          </div>
        </div>

 {/* Línea final de créditos */}
<div className="pt-8 border-t border-veta flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-bruma">
   
  <div className="flex items-center gap-2">
    <span className="text-blue-400">
      {/* Logo en lugar del ícono */}
      <img 
        src="/logo.jpg"   // 👈 guardá tu logo en la carpeta /public
        alt="VMG Setup AI" 
        className="h-6 w-auto"
      />
    </span>
    <p>
      Desarrollado por{" "}
      <a 
        href="https://mi-portfolio-victoria-garay.vercel.app/" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline underline-offset-4 decoration-veta hover:decoration-maquina transition-colors duration-300"
      >
        VMG Setup AI
      </a>
    </p>
      </div>
      <p>© {new Date().getFullYear()} Martins Perforaciones. Todos los derechos reservados.</p>
</div>

      </div>
    </footer>
  );
}