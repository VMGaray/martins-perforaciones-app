import { Mail, KeyRound, Loader2, Droplets } from "lucide-react";

export default function LoginForm({ formData, setFormData, handleLogin, loading, error }: any) {
  return (
    <form onSubmit={handleLogin} className="space-y-5">
      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-bold text-slate-500 uppercase ml-1 tracking-widest">Correo Electrónico</label>
        <div className="relative">
          <Mail className="absolute left-4 top-3.5 text-slate-500" size={18} />
          <input 
            type="email" 
            required
            placeholder="usuario@martins.com"
            className="w-full rounded-2xl bg-slate-950/50 border border-slate-800 p-3.5 pl-12 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-700"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-bold text-slate-500 uppercase ml-1 tracking-widest">Contraseña</label>
        <div className="relative">
          <KeyRound className="absolute left-4 top-3.5 text-slate-500" size={18} />
          <input 
            type="password" 
            required
            placeholder="••••••••"
            className="w-full rounded-2xl bg-slate-950/50 border border-slate-800 p-3.5 pl-12 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-700"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-2xl bg-red-950/30 border border-red-900/50 text-red-400 text-xs font-bold text-center animate-in fade-in slide-in-from-top-2">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={loading}
        className="w-full h-14 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 shadow-lg shadow-blue-900/30 transition-all active:scale-[0.97] flex items-center justify-center gap-3 disabled:opacity-50 group"
      >
        {loading ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          <>
            Ingresar al Panel
            <div className="size-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <Droplets size={12} />
            </div>
          </>
        )}
      </button>
    </form>
  );
}