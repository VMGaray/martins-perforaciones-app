"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

export default function LoginView() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Buscamos al usuario (sea admin o ejecutivo) directamente en la base de datos
    const { data: user, error: supabaseError } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', formData.email)
      .eq('password', formData.password)
      .single();

    if (user) {
      // Guardamos la sesión localmente
      localStorage.setItem("userRole", user.role);
      localStorage.setItem("userName", user.nombre);
      
      // Redirección inteligente basada en el rol de la base de datos
      if (user.role === 'admin') {
        router.push("/admin");
      } else {
        router.push("/ejecutivo");
      }
    } else {
      setError("Correo o contraseña incorrectos. Verifica tus datos.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-slate-950 to-black p-4 font-sans">
      <div className="w-full max-w-md rounded-3xl border border-blue-900/50 bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl">
        <LoginHeader />
        <LoginForm 
          formData={formData} 
          setFormData={setFormData} 
          handleLogin={handleLogin} 
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}