import { PokemonCardContainer } from "./PokemonCardStyles";

const PokemonCard = () => {
  return (
    <PokemonCardContainer>
      <div>
        <h2>Bulbasaur</h2>
        <span>#1</span>
      </div>
      <img src="" alt="" />
      <div>
        <p>Attack</p>
        <p>Defense</p>
        <p>HP</p>
        <button>Fav</button>
      </div>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
