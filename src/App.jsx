import { useEffect } from "react";
import Routes from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useDispatch } from "react-redux";
import { getPokemonList } from "./axios/axios-pokemon";
import { addFeaturedPokemon, addPokemonToList } from "./redux/pokemon/pokemonSlice";
import { getRandomFeatured } from "./helpers/getRandomFeatured";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const getPokemons = async () => {
        const response = await getPokemonList();
        const {results} = response;
        dispatch(addPokemonToList(results));
        const featuredPokemons = await getRandomFeatured();
        dispatch(addFeaturedPokemon(featuredPokemons));
      };
      getPokemons();
    } catch (error) {
      console.log(error);
    }

  }, [dispatch]);

  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
