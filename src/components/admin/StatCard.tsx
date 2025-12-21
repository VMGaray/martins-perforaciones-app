// src/app/admin/components/StatCard.tsx
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: 'blue' | 'emerald' | 'cyan';
}

export function StatCard({ icon, label, value, color }: StatCardProps) {
  const theme = {
    blue: "text-blue-400 border-blue-800 bg-blue-900/10",
    emerald: "text-emerald-400 border-emerald-800 bg-emerald-900/10",
    cyan: "text-cyan-400 border-cyan-800 bg-cyan-900/10",
  };

  return (
    <div className="p-6 rounded-3xl border bg-slate-900/50 shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <span className={`p-2 rounded-xl ${theme[color]}`}>{icon}</span>
      </div>
      <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">{label}</p>
      <h4 className="text-3xl font-bold text-white mt-1">{value}</h4>
    </div>
  );
}