export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 border border-blue-800 p-8 md:p-12 text-center overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/30 blur-[80px] rounded-full pointer-events-none"></div>
        
        <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Listo para asegurar su abastecimiento de agua?
        </h2>
        <p className="relative z-10 text-blue-100 mb-8 max-w-2xl mx-auto">
          No deje su producción o su hogar en manos de la suerte. Confíe en Martins Perforaciones.
        </p>
        <div className="relative z-10">
          {/* BOTÓN WHATSAPP FINAL */}
          <a 
  href="https://wa.me/5493546435015?text=Hola,%20quiero%20hacer%20una%20consulta%20por%20una%20perforación%20de%20agua"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex h-14 px-8 items-center justify-center rounded-full bg-white text-blue-900 font-bold hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/50 text-lg"
>
  Solicitar Presupuesto sin Cargo
</a>
        </div>
      </div>
    </section>
  );
}