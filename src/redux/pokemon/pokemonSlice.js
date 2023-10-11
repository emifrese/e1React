import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  pokemonList: [],
  featuredPokemon: [],
  filter: "all",
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: INITIAL_STATE,
  reducers: {
    addPokemonToList: (state, action) => {
      return { ...state, pokemonList: action.payload };
    },
      filterPokemonList: (state, action) => {
          return {
              ...state,
              filter: action.payload
          }
      },
      addFeaturedPokemon: (state, action) => {
        return {...state, featuredPokemon: action.payload}
      }
    }
});

export const { addPokemonToList, filterPokemonList, addFeaturedPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
