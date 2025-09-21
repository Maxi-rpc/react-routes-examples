import { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  email: string;
  roles: string[];
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USERS = [
  { email: 'admin@mail.com', password: 'admin123', roles: ['admin', 'user'] },
  { email: 'user@mail.com', password: 'user123', roles: ['user'] },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simula llamada a backend
    const found = MOCK_USERS.find((u) => u.email === email && u.password === password);
    if (found) {
      setUser({ email: found.email, roles: found.roles });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return ctx;
}
