"use client";

import { MessageCircle } from "lucide-react";

export default function CTA() {
  const handlePresupuesto = () => {
    const phone = "5493546435015";
    const msg = encodeURIComponent("Hola, quiero solicitar un presupuesto sin cargo por una perforación.");
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${msg}`, "_blank");
  };

  return (
    <section id="contacto" className="scroll-mt-24 bg-maquina text-pozo">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-[1fr_auto] gap-10 items-end">
        <div>
          <h2 className="font-condensed uppercase text-5xl md:text-7xl lg:text-8xl mb-6">
            ¿Necesita realizar una perforación de agua?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl text-pozo/80">
            Asesoramiento personalizado y presupuestos según su proyecto y ubicación.
          </p>
        </div>
        <button
          onClick={handlePresupuesto}
          className="h-16 px-8 rounded-md bg-pozo text-white font-bold text-lg hover:bg-roca transition-colors inline-flex items-center justify-center gap-3 whitespace-nowrap"
        >
          <MessageCircle size={22} />
          Solicitar presupuesto sin cargo
        </button>
      </div>
    </section>
  );
}
