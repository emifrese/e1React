import { styled } from "styled-components";

export const PokemonCardContainer = styled.div`
  width: 300px;
  aspect-ratio: 1/1.4;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  /* Pending conditional color */
  border: 10px solid gold;
  border-radius: 20px;
  padding: 5px;

  div {
    font-family: "Lato", "Gill Sans", "Gill Sans MT", "Calibri", sans-serif;
    /* display: flex; */
    align-items: center;
  }

  /* Queda armar distintos gradient para los distintos tipos */
  background: ${({ name }) =>
    name
      ? "linear-gradient(to bottom right, #ffffa4, #fff870, #fff200, #fff870, #ffffa4, #fff870)"
      : ""};

  @media (max-width: 1366px) and (min-width: 768px) {
    width: 220px;
  }

  @media (max-width: 767px) {
    width: 180px;
  }
`;

export const PokemonTypeContainer = styled.div`
  font-size: 9px;
  font-weight: 600;
  grid-column-start: 1;
  grid-column-end: 7;
`;

export const PokemonNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 7;
`;

export const PokemonName = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

export const PokemonHP = styled.div`
  color: crimson;
  font-size: 18px;
  font-weight: 600;
  text-align: right;
`;

export const PokemonImg = styled.div`
  grid-column-start: 1;
  grid-column-end: 7;
  color: blue;

  img {
    width: 100%;
    aspect-ratio: 3/2;
    border: 5px yellow outset;
    box-shadow: 3px 3px 10px #000;
  }
`;

// Deje una parte afuera despues pruebo https://codepen.io/heatherketten/pen/VXxedL

export const EmptyDiv = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const PokemonDescription = styled.div`
  grid-column-start: 2;
  grid-column-end: 6;
  text-align: center;
  font-size: 10px;
  font-style: italic;
  font-weight: 600;
  background: linear-gradient(to right, goldenrod, yellow, goldenrod);
  padding: 0px 10px;
  margin: 2px;
  justify-content: center;

  @media (max-width: 767px) {
    grid-column-start: 1;
    grid-column-end: 7;
    font-size: 9px;
  }
`;

export const PokemonAttackDescription = styled.div`
  grid-column-start: 2;
  grid-column-end: 6;
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  border-bottom: 1px solid black;
  border-top: 1px solid #aaa;
  text-align: center;
  display: flex;

  @media (max-width: 1366px) and (min-width: 768px) {
    font-size: 13px
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const PokemonAttackCost = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 3px;
  border-bottom: 1px solid black;
  border-left: 1px solid #aaa;
  border-top: 1px solid #aaa;
  display: flex;
`;

export const PokemonAttackDamage = styled.div`
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid black;
  border-top: 1px solid #aaa;
  border-right: 1px solid #aaa;
  display: flex;
`;
