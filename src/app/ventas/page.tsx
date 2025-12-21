import { Suspense } from "react";
import VentasView from "@/components/ventas/VentasView";

export default function VentasPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white font-bold">
        Cargando herramienta...
      </div>
    }>
      <VentasView />
    </Suspense>
  );
}