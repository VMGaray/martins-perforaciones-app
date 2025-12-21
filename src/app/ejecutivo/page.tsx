import { Suspense } from "react";
import EjecutivoView from "@/components/ejecutivo/EjecutivoView";

export default function EjecutivoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Cargando panel...
      </div>
    }>
      <EjecutivoView />
    </Suspense>
  );
}