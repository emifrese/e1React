import { styled } from "styled-components";

export const PokemonCardsContainer = styled.div`
  display: grid;
  width: 100%;
  /* grid-template-columns: auto auto auto auto; */
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  background: rgba(255, 255, 255, 0.5);
  /* border-radius: 1rem; */

  @media (max-width: 1366px) and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, 200px);
  }
`;

export const PokemonCardsTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PokemonCardsTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem;
  text-align: center;
  font-weight: 600;
`;

export const PokemonCardsButton = styled.button`
  padding: 0.5rem 1rem;
  border: 5px solid var(--blue);
  background-color: var(--light-red);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  a{
    color: #fff;
  }
  
  &:hover {
    background-color: var(--dark-red);
  }
`;
