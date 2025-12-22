import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martins Perforaciones | Soluciones Hídricas",
  description: "Expertos en perforación de agua y sistemas de bombeo en Córdoba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Agregamos suppressHydrationWarning para evitar que el celu se bloquee por micro-diferencias
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-blue-950 text-slate-100 selection:bg-blue-500 selection:text-white`}>
        <Navbar />
        
        {/* Envolvemos children en un contenedor con el padding para evitar saltos visuales */}
        <main className="pt-20 md:pt-24 min-h-screen">
          {children}
        </main>

        <WhatsAppButton />
        
      </body>
    </html>
  );
}