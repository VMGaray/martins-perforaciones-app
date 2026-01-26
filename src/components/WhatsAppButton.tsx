"use client";

import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const [isLogged, setIsLogged] = useState(true); // Asumimos logueado hasta verificar

  useEffect(() => {
    // Verificamos si existe userRole en localStorage
    const userRole = localStorage.getItem("userRole");
    setIsLogged(!!userRole); // true si hay userRole, false si no
  }, []);

  // Función de compartir única y corregida
  const handleShare = async () => {
    const phoneNumber = "5493546435015";
    const messageText = "Hola! Vi la web de Martins Perforaciones y me gustaría realizar una consulta.";

    const shareData = {
      title: 'Martins Perforaciones',
      text: messageText,
    };

    // Intentamos usar la Share API nativa
    if (navigator && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback si el usuario cancela o hay un error técnico
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`, '_blank');
      }
    } else {
      // Fallback para computadoras o navegadores que no soportan share
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`, '_blank');
    }
  };

  // Si está logueado, ocultamos el botón
  if (isLogged) return null;

  return (
    <button
      onClick={handleShare}
      className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[70] flex items-center gap-3 px-6 py-3 bg-slate-950 border border-blue-500/30 text-white rounded-full shadow-2xl hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group shadow-blue-900/20"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare size={20} className="text-blue-400 group-hover:text-white transition-colors" />
      <span className="text-xs font-bold uppercase tracking-[0.1em]">
        Consultar Ahora
      </span>
      {/* Efecto de pulso animado */}
      <span className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></span>
    </button>
  );
}