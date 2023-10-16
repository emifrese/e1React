import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cart: [],
  cartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      const { id, name } = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);

      return {
        ...state,
        cart:
          index === -1
            ? [...state.cart, { id, quantity: 1, name }]
            : state.cart.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
              ),
      };
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const pokemonIndex = state.cart.findIndex(
        (item) => item.id === id
      );

      return {
        ...state,
        cart: state.cart
          .map((item, i) =>
            i === pokemonIndex ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0),
      };
    },
    cleanCart: (state) => {
      return { ...state, cart: [] };
    },
    toggleCart: (state) => {
      return { ...state, cartOpen: !state.cartOpen };
    },
  },
});

export const { addItem, removeItem, cleanCart, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
