import { CheckCircle2, X } from "lucide-react";

interface BudgetModalProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export default function BudgetModal({ type, message, onClose }: BudgetModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center relative">
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-slate-500 hover:text-white"
            >
              <X size={20} />
            </button>
            
            <div className={`mx-auto size-16 rounded-full flex items-center justify-center mb-4 ${
              type === 'success' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-red-500/20 text-red-500'
            }`}>
                {type === 'success' ? <CheckCircle2 size={32} /> : <X size={32} />}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">
              {type === 'success' ? '¡Éxito!' : 'Hubo un problema'}
            </h3>
            
            <p className="text-slate-400 mb-6 text-sm">{message}</p>
            
            <button 
              onClick={onClose} 
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 hover:bg-blue-500 transition-colors"
            >
              Entendido
            </button>
        </div>
    </div>
  );
}