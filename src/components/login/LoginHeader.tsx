import { Droplets } from "lucide-react";

export default function LoginHeader() {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/40 mb-4 animate-in zoom-in duration-500">
        <Droplets size={32} strokeWidth={2.5} />
      </div>
      <h1 className="text-2xl font-bold text-white tracking-tight">Acceso al Sistema</h1>
      <p className="text-slate-400 text-sm mt-1 font-medium">Martins Perforaciones</p>
    </div>
  );
}