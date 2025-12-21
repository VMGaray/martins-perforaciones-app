import { Users, Plus, User, Trash2, Loader2 } from "lucide-react";

// 1. Definimos la interfaz para un Usuario existente
interface Usuario {
  id: string;
  nombre: string;
  email: string;
  role: string;
}

// 2. Definimos la interfaz para el estado del nuevo usuario (formulario)
interface NewUser {
  nombre: string;
  email: string;
  password?: string;
}

// 3. Definimos la interfaz de las Props que recibe el componente
interface UserManagementProps {
  usuarios: Usuario[];
  newUser: NewUser;
  setNewUser: (user: NewUser) => void;
  handleCreateUser: (e: React.FormEvent) => Promise<void>;
  deleteUser: (id: string) => void;
  creatingUser: boolean;
}

export function UserManagement({ 
  usuarios, 
  newUser, 
  setNewUser, 
  handleCreateUser, 
  deleteUser, 
  creatingUser 
}: UserManagementProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Formulario Alta */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl h-fit">
        <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm">
          <Plus size={18} className="text-blue-500" /> Nuevo Ejecutivo
        </h3>
        <form onSubmit={handleCreateUser} className="space-y-4">
          <input 
            placeholder="Nombre completo" 
            className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-sm focus:border-blue-500 outline-none text-white" 
            value={newUser.nombre}
            onChange={e => setNewUser({...newUser, nombre: e.target.value})}
          />
          <input 
            placeholder="Email de acceso" 
            className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-sm focus:border-blue-500 outline-none text-white" 
            value={newUser.email}
            onChange={e => setNewUser({...newUser, email: e.target.value})}
          />
          <input 
            type="password"
            placeholder="Contraseña" 
            className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-sm focus:border-blue-500 outline-none text-white" 
            value={newUser.password || ''}
            onChange={e => setNewUser({...newUser, password: e.target.value})}
          />
          <button 
            disabled={creatingUser}
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {creatingUser ? <Loader2 className="animate-spin" size={18} /> : "Crear Acceso"}
          </button>
        </form>
      </div>

      {/* Lista de Usuarios */}
      <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
        <h3 className="text-white font-bold mb-6 text-sm flex items-center gap-2">
          <Users size={18} className="text-cyan-400" /> Ejecutivos de Venta
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {usuarios.map((u) => (
            <div key={u.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex justify-between items-center group">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-blue-900/20 flex items-center justify-center text-blue-400">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-none">{u.nombre}</p>
                  <p className="text-slate-500 text-[10px] mt-1">{u.email}</p>
                </div>
              </div>
              <button 
                onClick={() => deleteUser(u.id)} 
                className="p-2 text-slate-700 hover:text-red-500 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}