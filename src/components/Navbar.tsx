"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Droplets, LogIn, Menu, X, BookOpen, Settings, ShieldCheck, Info, Drill } from "lucide-react";

export default function Navbar() {
  const [completion, setCompletion] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) setCompletion((window.scrollY / scrollHeight) * 100);
      setScrolled(window.scrollY > 24);
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Deriva al WhatsApp 3546435015
  const handleCotizar = () => {
    const phone = "5493546435015";
    const msg = encodeURIComponent("Hola! Me gustaría cotizar una perforación.");
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${msg}`, "_blank");
  };

  const navLinks = [
    { name: "Nosotros", href: "/aboutUs", icon: <Info size={16} /> },
    { name: "Guía de Pozos", href: "/guia-perforaciones", icon: <BookOpen size={16} /> },
    { name: "Proceso", href: "/proceso", icon: <Settings size={16} /> },
    { name: "Legales", href: "/legales-dipas", icon: <ShieldCheck size={16} /> },
    { name: "Tecnología DTH", href: "/tecnologia-dth", icon: <Drill size={16} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 ${
        scrolled || isMenuOpen ? "bg-pozo/90 backdrop-blur-md border-b border-veta" : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Barra de progreso de scroll */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-maquina transition-[width] duration-150"
        style={{ width: `${completion}%` }}
      />

      <div className="mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Martins Perforaciones, inicio">
          <span className="flex size-9 items-center justify-center rounded-md bg-maquina text-pozo">
            <Droplets size={20} strokeWidth={2.5} />
          </span>
          <span className="font-condensed text-2xl uppercase text-white">
            Martins <span className="text-bruma font-semibold">Perforaciones</span>
          </span>
        </Link>

        {/* NAV ESCRITORIO */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] text-bruma">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/login" className="flex items-center gap-2 border-l border-veta pl-7 hover:text-white transition-colors">
            <LogIn size={16} /> Acceso
          </Link>
        </nav>

        {/* ACCIONES */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCotizar}
            className="hidden md:flex items-center gap-2 bg-maquina px-5 py-2.5 rounded-md text-sm font-bold text-pozo hover:bg-white transition-colors active:scale-95"
          >
            Cotizar por WhatsApp
          </button>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={`lg:hidden overflow-hidden border-t border-veta bg-pozo transition-[max-height,opacity] duration-300 ${
          isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none border-transparent"
        }`}
      >
        <nav className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between py-4 border-b border-veta/60 text-lg text-niebla"
            >
              <span className="flex items-center gap-3">
                <span className="text-agua">{link.icon}</span>
                {link.name}
              </span>
              <ArrowRight size={16} className="text-bruma" />
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 py-4 text-bruma"
          >
            <LogIn size={18} /> Acceso personal
          </Link>
          <button
            onClick={handleCotizar}
            className="mt-2 bg-maquina p-4 rounded-md text-pozo font-bold"
          >
            Cotizar por WhatsApp
          </button>
        </nav>
      </div>
    </header>
  );
}
