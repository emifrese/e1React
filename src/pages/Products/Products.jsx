import { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import PokemonCards from "../../components/PokemonCards/PokemonCards";
import TypeIcon from "../../components/TypeIcon/TypeIcon";
import { pokemonTypes } from "../../helpers/iconsTypes";

const Products = () => {
  const [types, setTypes] = useState(
    Object.entries(pokemonTypes).map((type) => {
      return { typeImg: type[1], type: type[0], visible: false };
    })
  );
  const [typesConfig, setTypesConfig] = useState({
    currentPage: 1,
    amountPerPage: 4,
  });

  const nextTypes = () => {
    setTypesConfig((prevState) => {
      return { ...prevState, currentPage: prevState.currentPage + 1 };
    });
    if (
      typesConfig.amountPerPage * typesConfig.currentPage >=
      types.length
    ) {
      return;
    }
    const minIndex =
      (typesConfig.currentPage * typesConfig.amountPerPage) -
      typesConfig.amountPerPage;
    const maxIndex =
      (typesConfig.currentPage * typesConfig.amountPerPage) - 1 <=
      types.length
        ? typesConfig.currentPage * typesConfig.amountPerPage - 1
        : types.length;
    console.log(typesConfig, types.length);
    const showTypes = types.map((type, i) => {
      return {
        ...type,
        visible: i >= minIndex && i <= maxIndex,
      };
    });
    setTypes(showTypes);
    console.log(showTypes);
  };

  useEffect(() => {
    const showTypes = types.map((type, i) => {
      return {
        ...type,
        visible: i < typesConfig.amountPerPage,
      };
    });

    setTypes(showTypes);
  }, [window.innerWidth]);

  return (
    <>
      <button onClick={() => console.log("prev")}>Prev</button>
      {types
        .filter((type) => type.visible)
        .map((type) => (
          <TypeIcon
            key={crypto.randomUUID()}
            typeImg={type.typeImg}
            type={type.type}
          />
        ))}
      <button onClick={() => nextTypes()}>Next</button>
      <div>Products</div>
      <PokemonCards>
        <PokemonCard
          name={"Pikachu"}
          img={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          }
        />
        <PokemonCard
          name={"Charmander"}
          img={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
          }
        />
        <PokemonCard
          name={"Electivire"}
          img={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/466.svg"
          }
        />
        <PokemonCard
          name={"Mewtwo"}
          img={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
          }
        />
      </PokemonCards>
    </>
  );
};

export default Products;
