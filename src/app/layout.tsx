import type { Metadata, Viewport } from "next";
import "./globals.css";
// Importamos los wrappers que creamos
import { Navbar, WhatsAppButton } from "@/components/ClientOnlyComponents";

export const metadata: Metadata = {
  title: "Martins Perforaciones | Soluciones Hídricas",
  manifest: "/manifest.json",
  description: "Expertos en perforación de agua y sistemas de bombeo en Córdoba.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07131f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-pozo text-niebla selection:bg-maquina selection:text-pozo">
        <Navbar />
        <main className="pt-20 md:pt-24 min-h-screen">
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}