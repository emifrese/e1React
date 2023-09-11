import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  pokemonList: [],
  filter: "all",
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: INITIAL_STATE,
  reducers: {
    addPokemonToList: (state, action) => {
      return { ...state, pokemonList: state.pokemonList.push(action.payload) };
    }
  },
    filterPokemonList: (state, action) => {
        return {
            ...state,
            filter: action.payload
        }
    }
});

export const { addItem, removeItem, cleanCart } = pokemonSlice.actions;

export default pokemonSlice.reducer;
