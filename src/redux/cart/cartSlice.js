import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        cart:
          index === -1
            ? [...state.cart, { id: action.payload, quantity: 1 }]
            : state.cart.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
              ),
      }
    },
    removeItem: (state, action) => {
      const pokemonIndex = state.cart.findIndex(item => item.id === action.payload);
      
      return {
        ...state,
        cart: state.cart.map((item, i) => i === pokemonIndex ? {...item, quantity: item.quantity - 1} : item).filter(item => item.quantity > 0)
      }
      // if (state.cart[pokemonIndex].quantity === 1) {
      //   return {
      //     ...state,
      //     cart: state.cart.filter((item) => item.id !== action.payload),
      //   };
      // } else {
      //   state.cart[pokemonIndex].quantity--;
      //   return {
      //     ...state,
      //   };
      // }
    },
    cleanCart: (state) => {
      return { ...state, cart: [] };
    },
  },
});

export const { addItem, removeItem, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
