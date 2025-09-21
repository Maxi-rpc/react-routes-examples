import { useAuth } from '../context/AuthContext';
export default function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Perfil</h2>
      <div>Email: {user?.email}</div>
      <div>Roles: {user?.roles.join(', ')}</div>
    </div>
  );
}
