"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Droplets, LogIn, Menu, X } from "lucide-react";

export default function Navbar() {
  const [completion, setCompletion] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // 1. Efecto único de montaje para evitar el error de hidratación
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // 2. Lógica de scroll: Solo se activa si ya estamos en el cliente
  useEffect(() => {
    if (!hasMounted) return;

    const updateScrollCompletion = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        setCompletion(progress);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, [hasMounted]);

  // Si no ha montado, devolvemos un header vacío pero con la misma altura para que no "salte"
  if (!hasMounted) return <header className="h-20" />;

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] px-4 py-4">
      {/* Barra de progreso */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-150 ease-out z-[70]" 
        style={{ width: `${completion}%` }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-blue-800 bg-blue-950/80 px-6 py-3 backdrop-blur-md shadow-2xl">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-white group-hover:rotate-12 transition-transform">
              <Droplets size={20} strokeWidth={3} />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Martins Perforaciones</span>
          </Link>

          {/* Menú Desktop (Se mantiene igual) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="/#servicios" className="hover:text-blue-400 transition-colors">Servicios</Link>
            <Link href="/tecnologia-dth" className="text-slate-400 hover:text-white transition-colors">
              Perforación DTH
            </Link>
            <Link href="/#nosotros" className="hover:text-blue-400 transition-colors">Nosotros</Link>
            <Link href="/login" className="flex items-center gap-2 hover:text-white transition-colors border-l border-slate-700 pl-6">
              <LogIn size={16} /> Acceso
            </Link>
          </nav>

          {/* Botón CTA y Hamburguesa */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/5493546435015"
              className="hidden md:flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              Cotizar <ArrowRight size={16} />
            </a>
            
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        <div className={`
          md:hidden absolute left-4 right-4 mt-2 p-6 rounded-3xl border border-blue-800 bg-blue-950/95 backdrop-blur-xl shadow-2xl transition-all duration-300
          ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}>
          <nav className="flex flex-col gap-6 text-center">
            <Link href="/#servicios" onClick={() => setIsMenuOpen(false)} className="text-slate-300">Servicios</Link>
            <Link href="/tecnologia-dth" onClick={() => setIsMenuOpen(false)} className="text-slate-300">Perforación DTH</Link>
            <Link href="/#nosotros" onClick={() => setIsMenuOpen(false)} className="text-slate-300">Nosotros</Link>
            <hr className="border-blue-900" />
            <Link href="/login" onClick={() => setIsMenuOpen(false)} className="text-blue-400 font-bold">Acceso Personal</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}