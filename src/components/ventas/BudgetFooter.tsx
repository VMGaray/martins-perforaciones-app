import { Save, Send } from "lucide-react";

interface BudgetFooterProps {
  loading: boolean;
  onSave: () => void;
  onFinalize: () => void;
}

export default function BudgetFooter({ loading, onSave, onFinalize }: BudgetFooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 z-50">
      <div className="max-w-5xl mx-auto flex gap-3 justify-end items-center">
        <button 
          disabled={loading}
          onClick={onSave}
          className="px-6 h-12 rounded-2xl border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-2"
        >
          <Save size={18} />
          <span className="hidden sm:inline">{loading ? "Guardando..." : "Sólo Guardar"}</span>
        </button>
        
        <button 
          disabled={loading}
          onClick={onFinalize} 
          className="px-8 h-12 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 flex items-center gap-2 active:scale-95 shadow-lg shadow-blue-900/40"
        >
          <Send size={18} /> 
          <span>{loading ? "Procesando..." : "Finalizar y Enviar"}</span>
        </button>
      </div>
    </div>
  );
}