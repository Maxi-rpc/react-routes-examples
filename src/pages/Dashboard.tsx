import { useAuth } from '../context/AuthContext';
export default function Dashboard() {
  const { user } = useAuth();
  return <div>Dashboard privado. Usuario: {user?.email}</div>;
}
