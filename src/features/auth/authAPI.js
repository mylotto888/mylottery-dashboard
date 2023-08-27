import { API } from "../../constants/Urls";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Add the login async thunk
export const login = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    const response = await axios.post(API.login, { username, password });
    console.log("login response", response);
    return response.data;
  }
);

// Add the register async thunk
export const register = createAsyncThunk(
  "user/register",
  async ({ username, password }) => {
    const response = await axios.post(API.register, {
      username,
      password
    });
    return response.data;
  }
);
