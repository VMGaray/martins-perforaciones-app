import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Usamos Inter
import "./globals.css";

// Configuramos Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HidroPerforaciones | Soluciones Hídricas",
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
        {children}
      </body>
    </html>
  );
}