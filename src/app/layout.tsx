import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Importamos los wrappers que creamos
import { Navbar, WhatsAppButton } from "@/components/ClientOnlyComponents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martins Perforaciones | Soluciones Hídricas",
  description: "Expertos en perforación de agua y sistemas de bombeo en Córdoba.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-blue-950 text-slate-100`}>
        <Navbar />
        <main className="pt-20 md:pt-24 min-h-screen">
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}