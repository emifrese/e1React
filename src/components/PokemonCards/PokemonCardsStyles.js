import { styled } from "styled-components";

export const PokemonCardsContainer = styled.div`
  display: grid;
  width: 100%;
  /* grid-template-columns: auto auto auto auto; */
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  background: rgba(255,255,255, 0.5);
  /* border-radius: 1rem; */

  @media (max-width: 1366px) and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 220px);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, 200px);
  }

`;
