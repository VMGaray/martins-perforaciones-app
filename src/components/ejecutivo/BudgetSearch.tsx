import { Search, X } from "lucide-react";

// Definimos la interfaz para las props del buscador
interface BudgetSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function BudgetSearch({ searchTerm, onSearchChange }: BudgetSearchProps) {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
        <Search size={18} />
      </div>
      <input
        type="text"
        placeholder="Buscar cliente, localidad o vendedor..."
        className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-3 pl-11 pr-10 text-sm text-slate-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchTerm && (
        <button 
          onClick={() => onSearchChange("")} 
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}