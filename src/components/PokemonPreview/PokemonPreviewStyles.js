import { styled } from "styled-components";

export const PokemonPreviewContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  border: 1px solid;
`;

export const PokemonPreviewImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const PokemonPreviewName = styled.h3`
  margin: 10px 0;
`;

export const PokemonPreviewPrice = styled.h3`
  font-size: 1rem;
  margin: 0;
`;  

export const PokemonAddToCartButton = styled.button`
  background-color: #ffcb05;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  color: #000;
  width: 100%;
  margin-bottom: 10px;
  &:hover {
    background-color: #ffc000;
  }
`;

export const PokemonRemoveOne = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffcb05;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  color: #000;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  &:hover {
    background-color: #ffc000;
  }
`;

export const PokemonAddOne = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffcb05;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  color: #000;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  &:hover {
    background-color: #ffc000;
  }
`;

export const PokemonCartQuantity = styled.span`
  margin: 0 10px;
`;

export const PokemonButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
