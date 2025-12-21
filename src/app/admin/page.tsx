import { Suspense } from "react";
import AdminView from "@/components/admin/AdminView";
export default function AdminPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white font-bold">
        Cargando Panel de Control...
      </div>
    }>
      <AdminView />
    </Suspense>
  );
}