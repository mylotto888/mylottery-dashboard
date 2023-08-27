import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {}
};

const systemSlice = createSlice({
  name: "system",
  initialState: initialState,
  reducers: {
    //manage modal action
    toggleModalAction: (state = initialState, { payload }) => {
      if (!payload) return { ...state, modal: { ...initialState.modal } };
      return { ...state, modal: { ...state.modal, ...payload } };
    }
  },
  extraReducers: {}
});

export const system = state => state.system;
export const { toggleModalAction } = systemSlice.actions;
export default systemSlice.reducer;
