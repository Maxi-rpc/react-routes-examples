import { useAuth } from '../context/AuthContext';
export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="pt-3 px-3">
      <h1 className="text-3xl font-bold">Dashboard privado. Usuario: {user?.email}</h1>
    </div>
  );
}
