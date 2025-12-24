import { Metadata } from "next";
import DTHContent from "@/components/sections/DTHContent"; // El que creamos recién

export const metadata: Metadata = {
  title: "Tecnología DTH | Martins Perforaciones",
  description: "Conozca nuestra tecnología de perforación neumática...",
};

export default function Page() {
  return <DTHContent />;
}