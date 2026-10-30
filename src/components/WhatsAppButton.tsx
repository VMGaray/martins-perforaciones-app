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
      className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[70] flex items-center gap-3 px-5 py-3 bg-pozo border border-maquina/60 text-white rounded-md shadow-2xl shadow-black/40 hover:bg-maquina hover:text-pozo transition-colors duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare size={20} className="text-maquina group-hover:text-pozo transition-colors" />
      <span className="text-sm font-bold">
        Consultar ahora
      </span>
    </button>
  );
}