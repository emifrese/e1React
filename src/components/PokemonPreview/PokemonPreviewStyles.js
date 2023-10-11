import { styled } from "styled-components";

export const PokemonPreviewContainer = styled.div`
  background-color: "rgba(255, 255, 255, 0.8)";
  box-shadow: "0px 0px 5px rgba(0, 0, 0, 0.3)";
  border-radius: "10px";
  padding: "10px";
  display: "flex";
  flex-direction: "column";
  align-items: "center";
`;

export const PokemonPreviewImage = styled.img`
  width: "100%";
  height: "auto";
  object-fit: "contain";
`;

export const PokemonPreviewName = styled.h3`
  margin: "10px 0";
`;
