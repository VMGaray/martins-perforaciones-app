import { ArrowLeft, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BudgetHeader({ userName, role }: { userName: string, role: string | null }) {
  const router = useRouter();
  
  const handleBack = () => {
    if (role === 'admin') router.push('/admin');
    else if (role === 'ejecutivo') router.push('/ejecutivo');
    else router.push('/');
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-4 py-3 flex justify-between items-center shadow-lg">
      <button onClick={handleBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
        <ArrowLeft size={20} /> 
        <span className="text-sm font-medium">Volver</span>
      </button>
      <div className="text-center leading-tight">
          <h1 className="font-bold text-white tracking-tight">Presupuestador</h1>
          <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">{userName}</p>
      </div>
      <button onClick={() => { localStorage.clear(); router.push("/"); }} className="p-2 text-slate-500 hover:text-red-400">
          <LogOut size={20} />
      </button>
    </header>
  );
}