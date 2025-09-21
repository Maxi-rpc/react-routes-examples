import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

type PrivateRouteProps = {
  roles?: string[];
};

export default function PrivateRoute({ roles }: PrivateRouteProps) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  if (roles && !roles.some((role) => user.roles.includes(role))) {
    return <div>No tienes permisos para acceder a esta página.</div>;
  }

  return <Outlet />;
}
