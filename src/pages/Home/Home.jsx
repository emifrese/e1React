import Hero from "../../components/Hero/Hero";
import PokemonCards from "../../components/PokemonCards/PokemonCards";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useSelector } from "react-redux";

const Home = () => {
  const {featuredPokemon} = useSelector((state) => state.pokemon);

  return (
    <>
      <Hero />

      <PokemonCards>
        {featuredPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default}
            move1={pokemon.moves[0].move.name}
            move2={pokemon.moves[1].move.name}
            ability={pokemon.abilities[0].ability.name}
            hp={pokemon.stats[0].base_stat}
            types={pokemon.types}
          />
        ))}
      </PokemonCards>
    </>
  );
};

export default Home;
