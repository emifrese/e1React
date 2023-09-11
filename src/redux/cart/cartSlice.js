import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload.id)
      
      if(index !== -1){
        return {...state, cart: state.cart.push(action.payload)}
      } else {
        state.cart[index].quantity++ 
        return {
          ...state
        }
      }
    },
    removeItem: (state, action) => {
      const quantity = state.cart[action.payload].quantity

      
      if(quantity === 1){
        return {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
      } else {
        state.cart[action.payload].quantity-- 
        return {
          ...state
        }
      }
    },
     cleanCart: (state) => {return {...state, cart: []}},
  },
});

export const { addItem, removeItem, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
