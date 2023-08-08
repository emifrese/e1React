import {
  PokemonAttackCost,
  PokemonAttackDamage,
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

const PokemonCard = ({ name, img }) => {
  return (
    <PokemonCardContainer name={name}>
      <PokemonTypeContainer>Basic Pokemon</PokemonTypeContainer>
      <PokemonNameContainer>
        <PokemonName>{name}</PokemonName>
        <PokemonHP>40hp</PokemonHP>
      </PokemonNameContainer>
      <PokemonImg>
        <img src={img} alt="" />
      </PokemonImg>
      <EmptyDiv></EmptyDiv>
      <PokemonDescription>{name} brief descripttion</PokemonDescription>
      <EmptyDiv></EmptyDiv>
      <PokemonAttackCost>cost</PokemonAttackCost>
      <PokemonAttackDescription>Impactrueno</PokemonAttackDescription>
      <PokemonAttackDamage>40</PokemonAttackDamage>
      <PokemonAttackCost>cost</PokemonAttackCost>
      <PokemonAttackDescription>Cola Trueno</PokemonAttackDescription>
      <PokemonAttackDamage>40</PokemonAttackDamage>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
