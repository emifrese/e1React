import {
  PokemonPreviewContainer,
  PokemonPreviewImage,
  PokemonPreviewName,
} from "./PokemonPreviewStyles";

const PokemonPreview = ({ name, img }) => {
  return (
    <PokemonPreviewContainer>
      <PokemonPreviewImage
        src={img}
        alt={name}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <PokemonPreviewName style={{ margin: "10px 0" }}>
        {name}
      </PokemonPreviewName>
    </PokemonPreviewContainer>
  );
};

export default PokemonPreview;
