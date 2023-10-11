import { Link } from "react-router-dom";
import {
  PokemonCardsButton,
  PokemonCardsContainer,
  PokemonCardsTitle,
  PokemonCardsTitleWrapper,
} from "./PokemonCardsStyles";

const PokemonCards = ({ children }) => {
  return (
    <>
      <PokemonCardsTitleWrapper>
        <PokemonCardsTitle>Destacadas</PokemonCardsTitle>
        <PokemonCardsButton>
          <Link to={"products"}>Mira el resto</Link>
        </PokemonCardsButton>
      </PokemonCardsTitleWrapper>
      <PokemonCardsContainer>{children}</PokemonCardsContainer>
    </>
  );
};

export default PokemonCards;
