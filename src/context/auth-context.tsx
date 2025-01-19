"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const checkAuthCookie = () => {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
      const [name] = cookie.split("=");

      if (name === "jiitak-auth-cookie") {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const isAuthenticated = checkAuthCookie();
    setAuthenticated(isAuthenticated);
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
