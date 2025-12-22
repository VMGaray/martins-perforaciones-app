import { Metadata } from "next";
import DTHDetailView from "@/components/sections/DTHDetailView";

export const metadata: Metadata = {
  title: "Perforación DTH | Tecnología | Martins Perforaciones",
  description: "Conocé a fondo nuestra maquinaria Down-The-Hole, diseñada para perforar rocas duras con máxima eficiencia en toda la provincia de Córdoba.",
};

export default function DTHPage() {
  return <DTHDetailView />;
}