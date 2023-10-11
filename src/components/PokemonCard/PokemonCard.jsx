import {
  PokemonAttackDescription,
  PokemonCardContainer,
  PokemonDescription,
  PokemonHP,
  PokemonImg,
  PokemonName,
  PokemonNameContainer,
  PokemonTypeContainer,
  EmptyDiv
} from "./PokemonCardStyles";

const PokemonCard = ({ name, img, move1, move2, ability, hp, types }) => {
  return (
    <PokemonCardContainer name={name}>
      <PokemonTypeContainer>{types?.map(type => `${type.type.name.toUpperCase()} `)}</PokemonTypeContainer>
      <PokemonNameContainer>
        <PokemonName>{name.toUpperCase()}</PokemonName>
        <PokemonHP>{hp}</PokemonHP>
      </PokemonNameContainer>
      <PokemonImg>
        <img src={img} alt="" />
      </PokemonImg>
      <EmptyDiv></EmptyDiv>
      <PokemonDescription>{ability.toUpperCase()}</PokemonDescription>
      <EmptyDiv></EmptyDiv>
      <PokemonAttackDescription>{move1.toUpperCase()}</PokemonAttackDescription>
      <PokemonAttackDescription>{move2.toUpperCase()}</PokemonAttackDescription>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
