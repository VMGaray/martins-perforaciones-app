import { User, MapPin } from "lucide-react";

export default function ClientWorkForm({ clientData, setClientData, workData, setWorkData }: any) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-3xl border border-slate-800 bg-slate-900/50">
      <div className="space-y-4">
        <h2 className="flex items-center gap-2 text-blue-400 font-semibold mb-2 border-b border-slate-800 pb-2"><User size={18} /> Cliente</h2>
        <input placeholder="Nombre Completo" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-blue-500" value={clientData.name} onChange={e => setClientData({...clientData, name: e.target.value})} />
        <input placeholder="WhatsApp (Ej: 3546...)" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-blue-500" value={clientData.phone} onChange={e => setClientData({...clientData, phone: e.target.value})} />
      </div>
      <div className="space-y-4">
        <h2 className="flex items-center gap-2 text-cyan-400 font-semibold mb-2 border-b border-slate-800 pb-2"><MapPin size={18} /> Obra</h2>
        <input placeholder="Localidad" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-cyan-500" value={workData.location} onChange={e => setWorkData({...workData, location: e.target.value})} />
        <input placeholder="Dirección / Lote" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-cyan-500" value={workData.address} onChange={e => setWorkData({...workData, address: e.target.value})} />
      </div>
    </section>
  );
}