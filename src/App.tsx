import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './context/PrivateRoutes';
import './App.css';

// pages
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Logout from './pages/Auth/Logout';

// components
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rutas públicas */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/logout" element={<Logout />} />
          </Route>

          {/* Rutas privadas */}
          <Route element={<PrivateRoute roles={['admin', 'user']} />}>
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
          <Route element={<PrivateRoute roles={['admin']} />}>
            <Route element={<MainLayout />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
