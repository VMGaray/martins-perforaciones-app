"use client";

import React from "react";

export default function CTA() {
  // Lógica para que el celular abra el menú de "Compartir"
  const handleSolicitarPresupuesto = async () => {
    const message = "Hola, quiero hacer una consulta por una perforación de agua.";
    const phoneNumber = "5493546435015";
    
    const shareData = {
      title: 'Martins Perforaciones',
      text: message,
      // Opcional: Podés poner la URL de la web aquí
      url: 'https://martins-perforaciones-app.vercel.app/' 
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Acción cancelada");
      }
    } else {
      // Si está en PC, abre el WhatsApp de siempre
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
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
          {/* BOTÓN CON LÓGICA DE COMPARTIR NATIVA */}
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