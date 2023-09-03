import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {},
    removeItem: (state, action) => {},
    cleanCart: (state) => {},
  },
});

export const { addItem, removeItem, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
