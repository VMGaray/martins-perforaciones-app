"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Droplets, LogIn, Menu, X } from "lucide-react";

export default function Navbar() {
  const [completion, setCompletion] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lógica para la barra de progreso de lectura
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] px-4 py-4">
      {/* BARRA DE PROGRESO (Fina y elegante en la parte superior) */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-150 ease-out z-[70]" 
        style={{ width: `${completion}%` }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-blue-800 bg-blue-950/80 px-6 py-3 backdrop-blur-md shadow-2xl">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-white group-hover:rotate-12 transition-transform">
              <Droplets size={20} strokeWidth={3} />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Martins Perforaciones</span>
          </Link>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="/#servicios" className="hover:text-blue-400 transition-colors">Servicios</Link>
            <Link href="/tecnologia-dth" className="text-slate-400 hover:text-white transition-colors">
              Perforación DTH
            </Link>
            <Link href="/#nosotros" className="hover:text-blue-400 transition-colors">Nosotros</Link>
            
            <Link href="/login" className="flex items-center gap-2 hover:text-white transition-colors border-l border-slate-700 pl-6">
              <LogIn size={16} />
              Acceso
            </Link>
          </nav>

          {/* Botón CTA (WhatsApp) */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://wa.me/5493546435015?text=Hola,%20quiero%20hacer%20una%20consulta%20por%20una%20perforación%20de%20agua"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-colors"
            >
              Cotizar Ahora
              <ArrowRight size={16} />
            </a>
          </div>
          
          {/* Botón Hamburguesa para Móvil */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        <div className={`
          md:hidden absolute left-4 right-4 mt-2 p-6 rounded-3xl border border-blue-800 bg-blue-950/95 backdrop-blur-xl shadow-2xl transition-all duration-300
          ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}>
          <nav className="flex flex-col gap-6 text-center">
            <Link href="/#servicios" onClick={() => setIsMenuOpen(false)} className="text-slate-300 text-lg">Servicios</Link>
            <Link href="/tecnologia-dth" onClick={() => setIsMenuOpen(false)} className="text-slate-300 text-lg">Perforación DTH</Link>
            <Link href="/#nosotros" onClick={() => setIsMenuOpen(false)} className="text-slate-300 text-lg">Nosotros</Link>
            <hr className="border-blue-900" />
            <Link href="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 text-blue-400 font-bold">
              <LogIn size={18} /> Acceso Personal
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}