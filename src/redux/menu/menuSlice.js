import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isOpen: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: INITIAL_STATE,
  reducers: {
    toggleMenu: (state) => {
      return { ...state, isOpen: !state.isOpen };
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;