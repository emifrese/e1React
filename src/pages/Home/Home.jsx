import Hero from "../../components/Hero/Hero";
import PokemonCards from "../../components/PokemonCards/PokemonCards";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const Home = () => {
  return (
    <>
      <Hero />
      <PokemonCards>
        <PokemonCard
          name={"Pikachu"}
          img={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          }
        />
        <PokemonCard
          name={"Charmander"}
          img={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
          }
        />
        <PokemonCard
          name={"Electivire"}
          img={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/466.svg"
          }
        />
        <PokemonCard
          name={"Mewtwo"}
          img={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
          }
        />
      </PokemonCards>
    </>
  );
};

export default Home;
