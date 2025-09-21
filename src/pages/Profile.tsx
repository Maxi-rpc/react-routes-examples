import { useAuth } from '../context/AuthContext';
export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="pt-3 px-3">
      <h1 className="text-3xl font-bold">Profile</h1>
      <div>Email: {user?.email}</div>
      <div>Roles: {user?.roles.join(', ')}</div>
    </div>
  );
}
