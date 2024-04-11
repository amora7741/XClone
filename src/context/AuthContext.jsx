import { useState, createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async (data) => {
    const url = `${import.meta.env.VITE_BASE_API}/api/auth/login`;

    try {
      const response = await axios.post(url, data, {
        withCredentials: true,
      });

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};
