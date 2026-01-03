"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Droplets, LogIn, Menu, X, BookOpen, Settings, ShieldCheck, Info } from "lucide-react";

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

  // Definimos los links para evitar repetir código
  const navLinks = [
    { name: "Nosotros", href: "/aboutUs", icon: <Info size={16} /> },
    { name: "Guía de Pozos", href: "/guia-perforaciones", icon: <BookOpen size={16} /> },
    { name: "Proceso", href: "/proceso", icon: <Settings size={16} /> },
    { name: "Legales", href: "/legales-dipas", icon: <ShieldCheck size={16} /> },
    { name: "Tecnología DTH", href: "/tecnologia-dth", icon: null },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] px-4 py-4">
      {/* Barra de progreso */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-150 z-[70]" 
        style={{ width: `${completion}%` }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-full border border-blue-800 bg-blue-950/80 px-6 py-3 backdrop-blur-md shadow-2xl">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Droplets size={20} strokeWidth={3} />
            </div>
            <span className="text-lg font-bold text-white hidden sm:inline">Martins Perforaciones</span>
          </Link>

          {/* NAV ESCRITORIO */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <Link href="/login" className="flex items-center gap-2 border-l border-slate-700 pl-6 hover:text-white transition-colors">
              <LogIn size={16} /> Acceso
            </Link>
          </nav>

          {/* ACCIONES / BOTÓN MÓVIL */}
          <div className="flex items-center gap-2">
            <a 
              href="https://wa.me/5493546435015" 
              className="hidden md:flex items-center gap-2 bg-white px-5 py-2 rounded-full text-sm font-bold text-slate-950 hover:bg-blue-50 transition-transform active:scale-95"
            >
              Cotizar <ArrowRight size={16} />
            </a>
            <button 
              className="lg:hidden text-white p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL */}
        <div className={`lg:hidden absolute left-4 right-4 mt-2 p-4 rounded-3xl border border-blue-800 bg-blue-950/98 shadow-2xl transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between p-4 rounded-2xl hover:bg-blue-900/40 text-slate-200"
              >
                <span className="flex items-center gap-3">
                  {link.icon}
                  {link.name}
                </span>
                <ArrowRight size={14} className="text-slate-500" />
              </Link>
            ))}
            
            <div className="h-px bg-blue-800 my-2" />
            
            <Link 
              href="/login" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center justify-center gap-2 p-4 rounded-2xl text-blue-400 font-bold"
            >
              <LogIn size={18} /> Acceso Personal
            </Link>
            
            <a 
              href="https://wa.me/5493546435015"
              className="flex items-center justify-center gap-2 bg-blue-600 p-4 rounded-2xl text-white font-bold"
            >
              Cotizar por WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}