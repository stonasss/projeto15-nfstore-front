import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { Outlet } from "react-router-dom";
import React from "react";

const AuthContext = createContext({});

function useGuardarLocalmente (defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

export const AuthProvider = () => {
  const [ token, setToken ] = useGuardarLocalmente(null, 'token');
  const [ user, setUser ] = useGuardarLocalmente(null, 'user');

  useEffect(() => {
    if (token?.length) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token])

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
      }}
    >
      <Outlet />
    </AuthContext.Provider>
  )
}

export default AuthContext;