import { API } from "../../constants/Urls";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async ({ current, pageSize }) => {
    const response = await axios.get(
      `${API.fetchUsers}?skip=${(current - 1) * pageSize}&limit=${pageSize}`
    );
    return response.data;
  }
);
