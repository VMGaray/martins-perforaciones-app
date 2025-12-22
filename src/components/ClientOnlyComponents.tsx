"use client"; // Esta línea es clave

import dynamic from "next/dynamic";

// Movemos los dynamic aquí
export const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
export const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });