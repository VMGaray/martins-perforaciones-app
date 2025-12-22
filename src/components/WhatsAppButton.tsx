"use client";

import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  // Configuración del link
  const phoneNumber = "5493546435015"; 
  const message = encodeURIComponent("Hola! Vi la web de Martins Perforaciones y me gustaría realizar una consulta.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[70] flex items-center gap-3 px-6 py-3 bg-slate-950 border border-blue-500/30 text-white rounded-full shadow-2xl hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group shadow-blue-900/20"
      aria-label="Contactar por WhatsApp"
    >
      {/* Icono de mensaje */}
      <MessageSquare size={20} className="text-blue-400 group-hover:text-white transition-colors" />
      
      {/* Texto de acción */}
      <span className="text-xs font-bold uppercase tracking-[0.1em]">
        Consultar Ahora
      </span>

      {/* Efecto decorativo de pulso en el borde */}
      <span className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></span>
    </a>
  );
}