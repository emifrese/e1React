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
    const minIndex =
      (typesConfig.currentPage + 1) * typesConfig.amountPerPage -
      typesConfig.amountPerPage;
    const maxIndex =
      (typesConfig.currentPage + 1) * typesConfig.amountPerPage - 1 <= types.length
        ? (typesConfig.currentPage + 1) * typesConfig.amountPerPage - 1
        : types.length;
    const showTypes = types.map((type, i) => {
      return {
        ...type,
        visible: i >= minIndex && i <= maxIndex,
      };
    });
    setTypes(showTypes);
    setTypesConfig((prevState) => {
      return { ...prevState, currentPage: prevState.currentPage + 1 };
    });
  };

  const prevTypes = () => {
    const minIndex = (typesConfig.currentPage - 1) * typesConfig.amountPerPage - typesConfig.amountPerPage;
    const maxIndex = typesConfig.currentPage * typesConfig.amountPerPage - (typesConfig.amountPerPage + 1);
    const showTypes = types.map((type, i) => {
      return {
        ...type,
        visible: i >= minIndex && i <= maxIndex
      }
    })
    console.log(showTypes);
    setTypes(showTypes);
    setTypesConfig((prevState) => {
      return {...prevState, currentPage: prevState.currentPage - 1}
    })
  }

  useEffect(() => {
    const showTypes = types.map((type, i) => {
      return {
        ...type,
        visible: i < typesConfig.amountPerPage,
      };
    });

    setTypes(showTypes);
  }, []);

  return (
    <>
      {typesConfig.currentPage > 1 && <button onClick={() => prevTypes()}>Prev</button>}
      {types
        .filter((type) => type.visible)
        .map((type) => (
          <TypeIcon
            key={crypto.randomUUID()}
            typeImg={type.typeImg}
            type={type.type}
          />
        ))}
      {(typesConfig.amountPerPage * typesConfig.currentPage < types.length) && <button onClick={() => nextTypes()}>Next</button>}
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
