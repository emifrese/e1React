import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getPokemonList = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}pokemon/?offset=${0}&limit=${1017}`
    );
    const pokemons = data.results.map((pokemon, index) => {
      let generation;
      if (index < 151) {
        generation = 1;
      } else if (index < 251) {
        generation = 2;
      } else if (index < 386) {
        generation = 3;
      } else if (index < 493) {
        generation = 4;
      } else if (index < 649) {
        generation = 5;
      } else if (index < 721) {
        generation = 6;
      } else if (index < 809) {
        generation = 7;
      } else if (index < 905) {
        generation = 8;
      } else if (index < 1016) {
        generation = 9;
      }
      return {
        ...pokemon,
        id: index + 1,
        generation,
        visible: false,
      };
    });
    console.log(pokemons);
    return pokemons;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemon = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data);
  }
};
