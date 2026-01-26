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

  // 1. Definimos la función de compartir nativa
  const handleShare = async () => {
    const phoneNumber = "5493546435015"; 
    const messageText = "Hola! Vi la web de Martins Perforaciones y me gustaría realizar una consulta.";
    
    // Datos para el menú de compartir
    const shareData = {
      title: 'Martins Perforaciones',
      text: messageText,
      url: window.location.href // Opcional: incluye la URL actual
    };

    // 2. Verificamos si el navegador soporta Web Share API (celulares modernos)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Si el usuario cancela, no hacemos nada o usamos el backup
        console.log("Compartir cancelado o fallido");
      }
    } else {
      // 3. Backup: Si está en PC o navegador viejo, abre el WhatsApp tradicional
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  // Si está logueado, no mostramos el botón
  if (isLogged) return null;

  return (
    <button
      onClick={handleShare} // Cambiamos href por onClick
      className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[70] flex items-center gap-3 px-6 py-3 bg-slate-950 border border-blue-500/30 text-white rounded-full shadow-2xl hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group shadow-blue-900/20"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare size={20} className="text-blue-400 group-hover:text-white transition-colors" />
      <span className="text-xs font-bold uppercase tracking-[0.1em]">
        Consultar Ahora
      </span>
      {/* Efecto decorativo de pulso */}
      <span className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></span>
    </button>
  );
}