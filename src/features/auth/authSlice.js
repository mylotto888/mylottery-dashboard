import { login, register } from "./authAPI";

import { createSlice } from "@reduxjs/toolkit";

// Helper function to store token in localStorage
const storeTokenInLocalStorage = token => {
  localStorage.setItem("token", JSON.stringify(token));
};

const initialState = {
  token: JSON.parse(localStorage.getItem("token")) || null,
  refreshToken: null,
  loading: false,
  message: null,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      storeTokenInLocalStorage(action.payload);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        storeTokenInLocalStorage(action.payload.accessToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const auth = state => state.auth;
export const { setToken } = authSlice.actions;
export default authSlice.reducer;
