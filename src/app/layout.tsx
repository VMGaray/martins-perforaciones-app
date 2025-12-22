import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Usamos Inter
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

// Configuramos Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martins Perforaciones | Soluciones Hídricas",
  description: "Expertos en perforación de agua y sistemas de bombeo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-blue-950 text-slate-100 selection:bg-blue-500 selection:text-white`}>
        <Navbar />
        {/* Padding top para que el contenido no quede debajo de la navbar fixed */}
        <div className="pt-20 md:pt-24"></div>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}