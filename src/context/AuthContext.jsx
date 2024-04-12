import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (data) => {
    const url = `${import.meta.env.VITE_BASE_API}/api/auth/login`;

    try {
      const response = await axios.post(url, data, {
        withCredentials: true,
      });

      setUser(response.data.user);
    } catch (err) {
      console.error(err);
      setUser(null);
    }
  };

  const checkAuth = async () => {
    const url = `${import.meta.env.VITE_BASE_API}/api/auth/validate`;

    try {
      const response = await axios.get(url, { withCredentials: true });

      setUser(response.data.user);
    } catch (err) {
      console.error(err);
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ login, checkAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};
