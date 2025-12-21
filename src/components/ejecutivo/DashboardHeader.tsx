import { LogOut, UserCircle } from "lucide-react";

// Definimos la interfaz para las props (evitamos el error de 'any')
interface DashboardHeaderProps {
  userName: string;
  role: string | null;
  onLogout: () => void;
}

export default function DashboardHeader({ userName, role, onLogout }: DashboardHeaderProps) {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 px-6 py-4 flex justify-between items-center sticky top-0 z-20 backdrop-blur-md">
      <div>
        <h1 className="text-lg font-bold text-white">
          {role === 'admin' ? 'Panel Administrativo' : 'Panel de Ventas'}
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-xs text-blue-400 font-bold uppercase tracking-widest flex items-center gap-1">
             <UserCircle size={12} /> {userName}
          </p>
          <span className="text-slate-700 text-xs">|</span>
          <span className="text-[10px] text-slate-500 uppercase font-medium">
            {role === 'admin' ? 'Acceso Total' : 'Ejecutivo Martins'}
          </span>
        </div>
      </div>

      <button 
        onClick={onLogout} 
        className="group flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500 hover:text-red-400 hover:bg-red-400/10 transition-all"
        title="Cerrar Sesión"
      >
        <span className="text-xs font-bold hidden md:block">Salir</span>
        <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </header>
  );
}