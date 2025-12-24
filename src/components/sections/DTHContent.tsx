"use client";
import dynamic from "next/dynamic";

// Acá movés el componente que te da error
const DTHDetailView = dynamic(() => import("@/components/sections/DTHDetailView"), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-slate-950" />
});

export default function DTHContent() {
  return <DTHDetailView />;
}