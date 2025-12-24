"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Droplets, LogIn, Menu, X } from "lucide-react";

export default function Navbar() {
  const [completion, setCompletion] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  useEffect(() => {
    const updateScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion((window.scrollY / scrollHeight) * 100);
      }
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] px-4 py-4">
      {/* Barra de progreso con protección de ancho */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-150 z-[70]" 
        style={{ width: `${completion}%` }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-blue-800 bg-blue-950/80 px-6 py-3 backdrop-blur-md shadow-2xl">
          
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Droplets size={20} strokeWidth={3} />
            </div>
            <span className="text-lg font-bold text-white">Martins Perforaciones</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="/#servicios" className="hover:text-blue-400">Servicios</Link>
            <Link href="/tecnologia-dth" className="hover:text-white">Tecnología DTH</Link>
            <Link href="/aboutUs" className="hover:text-blue-400">Nosotros</Link>
            <Link href="/login" className="flex items-center gap-2 border-l border-slate-700 pl-6 hover:text-white">
              <LogIn size={16} /> Acceso
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://wa.me/5493546435015" className="hidden md:flex items-center gap-2 bg-white px-5 py-2 rounded-full text-sm font-bold text-slate-950">
              Cotizar <ArrowRight size={16} />
            </a>
            <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        <div className={`md:hidden absolute left-4 right-4 mt-2 p-6 rounded-3xl border border-blue-800 bg-blue-950/98 shadow-2xl transition-all ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
          <nav className="flex flex-col gap-6 text-center">
            <Link href="/#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</Link>
            <Link href="/tecnologia-dth" onClick={() => setIsMenuOpen(false)}>Tecnología DTH</Link>
            <Link href="/#nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
            <Link href="/login" onClick={() => setIsMenuOpen(false)} className="text-blue-400 font-bold">Acceso Personal</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}