import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MainLayout = () => {
  const { user } = useAuth();

  return (
    <>
      <nav className="block w-full rounded-xl shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link
            className="block antialiased font-sans text-base leading-relaxed text-inherit mr-4 cursor-pointer py-1.5 font-medium"
            to="/"
          >
            Logo
          </Link>
          <nav className="flex gap-4 p-4 bg-gray-10">
            <Link to="/">Home</Link>
            {!user && <Link to="/login">Login</Link>}
            {user && (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/logout">Logout</Link>
              </>
            )}
          </nav>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default MainLayout;
