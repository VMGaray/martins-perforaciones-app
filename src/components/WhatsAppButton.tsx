"use client";

import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  // Iniciamos en false para que el botón sea visible por defecto para clientes
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // Verificamos si existe un rol guardado en el navegador
    const userRole = localStorage.getItem("userRole");
    // Si existe, es un vendedor o admin, entonces ocultamos el botón
    if (userRole) {
      setIsLogged(true);
    }
  }, []);

  const handleWhatsApp = () => {
    const phone = "5493546435015";
    const msg = encodeURIComponent("Hola! Vi la web de Martins Perforaciones y me gustaría realizar una consulta.");
    // Usamos api.whatsapp.com para facilitar la elección de cuenta al vendedor
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${msg}`, '_blank');
  };

  // Si el usuario está logueado, el componente no renderiza nada
  if (isLogged) return null;

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[70] flex items-center gap-3 px-6 py-3 bg-slate-950 border border-blue-500/30 text-white rounded-full shadow-2xl hover:bg-blue-600 transition-all duration-300 group shadow-blue-900/20"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare size={20} className="text-blue-400 group-hover:text-white transition-colors" />
      <span className="text-xs font-bold uppercase tracking-[0.1em]">
        Consultar Ahora
      </span>
      <span className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></span>
    </button>
  );
}