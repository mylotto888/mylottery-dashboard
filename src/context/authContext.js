import React, { createContext, useEffect, useReducer, useState } from "react";

import authReducer from "../features/auth/authSlice";

const INITIAL_STATE = {
  token: JSON.parse(localStorage.getItem("token")) || null,
  refreshToken: JSON.parse(localStorage.getItem("refreshToken")) || null,
  loading: false,
  error: null
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
  const [authState, setAuthState] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");

    setAuthState({
      token: token ? JSON.parse(token) : {},
      refreshToken: refreshToken ? JSON.parse(refreshToken) : {}
    });
  }, []);

  const setAuthInfo = ({ token, refreshToken }) => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
    setAuthState({
      token,
      refreshToken
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        loading: state.loading,
        error: state.error,
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo),
        dispatch,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
