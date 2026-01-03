import { Metadata } from "next";
import WellsGuide from "@/components/WellsGuide";

export const metadata: Metadata = {
  title: "Guía de Pozos de Agua | Martins Perforaciones",
  description: "Todo lo que necesita saber sobre los tipos de perforaciones, pozos profundos y captación de agua subterránea.",
};

export default function GuiaPage() {
  return (
    <div className="bg-blue-950 min-h-screen">
      {/* Margen superior para que el Navbar no tape el título */}
      <div className="pt-10"> 
        <WellsGuide />
      </div>
      
      
    </div>
  );
}