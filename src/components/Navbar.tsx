import Link from "next/link";
import { ArrowRight, Droplets, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-blue-800 bg-blue-950/80 px-6 py-3 backdrop-blur-md shadow-2xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Droplets size={20} strokeWidth={3} />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Martins Perforaciones</span>
          </Link>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</Link>
            <Link href="#nosotros" className="hover:text-blue-400 transition-colors">Nosotros</Link>
            
            {/* LINK DE ACCESO AL SISTEMA (Discreto) */}
            <Link href="/login" className="flex items-center gap-2 hover:text-white transition-colors border-l border-slate-700 pl-6">
              <LogIn size={16} />
              Acceso
            </Link>
          </nav>

          {/* Botón CTA (WhatsApp) */}
          <a 
            href="https://wa.me/5493546435015?text=Hola,%20quiero%20hacer%20una%20consulta%20por%20una%20perforación%20de%20agua"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-colors"
          >
            Cotizar Ahora
            <ArrowRight size={16} />
          </a>
          
          {/* Botón Acceso Móvil (Solo visible en celus) */}
          <Link href="/login" className="md:hidden text-slate-400 p-2">
            <LogIn size={20} />
          </Link>

        </div>
      </div>
    </header>
  );
}