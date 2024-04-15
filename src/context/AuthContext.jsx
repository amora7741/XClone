import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authCheckLoading, setAuthCheckLoading] = useState(false);

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
    if (!document.cookie) {
      return;
    }

    const url = `${import.meta.env.VITE_BASE_API}/api/auth/validate`;

    try {
      setAuthCheckLoading(true);
      const response = await axios.get(url, { withCredentials: true });

      setUser(response.data.user);
    } catch (err) {
      console.error(err);
      setUser(null);
    } finally {
      setAuthCheckLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ login, user, authCheckLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
