import dynamic from "next/dynamic";
import { Metadata } from "next";

// Importación dinámica: quita la carga del servidor y elimina el error de renderizado en cascada
const DTHDetailView = dynamic(() => import("@/components/sections/DTHDetailView"), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-slate-950" /> 
});

export const metadata: Metadata = {
  title: "Tecnología DTH | Martins Perforaciones",
};

export default function DTHPage() {
  return <DTHDetailView />;
}