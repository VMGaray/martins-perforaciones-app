export default function LoadingDTH() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 pt-8 animate-pulse">
      <div className="max-w-7xl mx-auto">
        
        {/* Skeleton del Botón Volver */}
        <div className="flex items-center gap-2 mb-16">
          <div className="size-10 rounded-full bg-slate-900 border border-slate-800"></div>
          <div className="h-4 w-32 bg-slate-900 rounded-md"></div>
        </div>

        {/* Skeleton del Encabezado */}
        <div className="flex flex-col items-center mb-20 space-y-6">
          <div className="h-4 w-40 bg-blue-900/30 rounded-full"></div>
          <div className="h-12 w-full max-w-xl bg-slate-900 rounded-2xl"></div>
          <div className="h-20 w-full max-w-3xl bg-slate-900 rounded-2xl"></div>
        </div>

        {/* Skeleton del Bloque Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="h-[300px] w-full bg-slate-900/40 rounded-[40px]"></div>
          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="h-[200px] bg-slate-900/20 rounded-3xl"></div>
            <div className="h-[200px] bg-slate-900/20 rounded-3xl"></div>
          </div>
        </div>

        {/* Skeleton de las Ventajas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-64 bg-slate-900/50 rounded-3xl"></div>
          <div className="h-64 bg-slate-900/50 rounded-3xl"></div>
          <div className="h-64 bg-slate-900/50 rounded-3xl"></div>
        </div>

      </div>
    </div>
  );
}