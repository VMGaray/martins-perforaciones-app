"use client";

import React from "react";

export default function CTA() {
  // Lógica unificada para el botón
  const handleSolicitarPresupuesto = async () => {
    const textMessage = "Hola, quiero hacer una consulta por una perforación de agua.";
    const phoneNumber = "5493546435015";

    const shareData = {
      title: 'Martins Perforaciones',
      text: textMessage,
    };

    // Verificamos si el navegador soporta compartir (celulares modernos)
    if (navigator && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Si el usuario cancela o falla, abrimos WhatsApp normalmente
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`, '_blank');
      }
    } else {
      // Fallback para PC o navegadores viejos
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`, '_blank');
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 border border-blue-800 p-8 md:p-12 text-center overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/30 blur-[80px] rounded-full pointer-events-none"></div>
        
        <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Necesita realizar una perforación de agua?
        </h2>
        <p className="relative z-10 text-blue-100 mb-8 max-w-2xl mx-auto">
          Asesoramiento personalizado y presupuestos según su proyecto y ubicación.
        </p>
        
        <div className="relative z-10">
          <button 
            onClick={handleSolicitarPresupuesto}
            className="inline-flex h-14 px-8 items-center justify-center rounded-full bg-white text-blue-900 font-bold hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/50 text-lg"
          >
            Solicitar Presupuesto sin Cargo
          </button>
        </div>
      </div>
    </section>
  );
}