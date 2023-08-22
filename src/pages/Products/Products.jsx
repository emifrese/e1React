import PokemonCard from "../../components/PokemonCard/PokemonCard";
import PokemonCards from "../../components/PokemonCards/PokemonCards";
import TypeIcon from "../../components/TypeIcon/TypeIcon";
import { pokemonTypes } from "../../helpers/iconsTypes";

const Products = () => {
  return (
    <>
    {Object.entries(pokemonTypes).map((type) => {
        // console.log(typeof type[0])
        return (
          <TypeIcon
            key={crypto.randomUUID()}
            typeImg={type[1]}
            type={type[0]}
          />
        );
      })}
      <div>Products</div>
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

export default Products;
