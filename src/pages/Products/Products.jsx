import { useEffect, useState } from "react";
import PokemonCards from "../../components/PokemonCards/PokemonCards";
import TypeIcon from "../../components/TypeIcon/TypeIcon";
import { pokemonTypes } from "../../helpers/iconsTypes";
import { useSelector } from "react-redux";
import PokemonPreview from "../../components/PokemonPreview/PokemonPreview";

const Products = () => {
  const { pokemonList } = useSelector((state) => state.pokemon);
  const { cart } = useSelector((state) => state.cart);
  const [types, setTypes] = useState(
    Object.entries(pokemonTypes).map((type) => {
      return { typeImg: type[1], type: type[0], visible: false };
    })
  );
  const [currentType, setCurrentType] = useState("all");
  const [typesConfig, setTypesConfig] = useState({
    currentPage: 1,
    amountPerPage: 4,
  });
  const [pokemonPage, setPokemonPage] = useState(1);

  const nextTypes = () => {
    const minIndex =
      (typesConfig.currentPage + 1) * typesConfig.amountPerPage -
      typesConfig.amountPerPage;
    const maxIndex =
      (typesConfig.currentPage + 1) * typesConfig.amountPerPage - 1 <=
      types.length
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
    const minIndex =
      (typesConfig.currentPage - 1) * typesConfig.amountPerPage -
      typesConfig.amountPerPage;
    const maxIndex =
      typesConfig.currentPage * typesConfig.amountPerPage -
      (typesConfig.amountPerPage + 1);
    const showTypes = types.map((type, i) => {
      return {
        ...type,
        visible: i >= minIndex && i <= maxIndex,
      };
    });
    setTypes(showTypes);
    setTypesConfig((prevState) => {
      return { ...prevState, currentPage: prevState.currentPage - 1 };
    });
  };

  useEffect(() => {
    const showTypes = types.map((type, i) => {
      return {
        ...type,
        visible: i < typesConfig.amountPerPage,
      };
    });

    setTypes(showTypes);
  }, [typesConfig.amountPerPage, setTypesConfig]);
  console.log(currentType);

  return (
    <>
      {typesConfig.currentPage > 1 && (
        <button onClick={() => prevTypes()}>Prev</button>
      )}
      {types
        .filter((type) => type.visible)
        .map((type) => (
          <TypeIcon
            key={crypto.randomUUID()}
            typeImg={type.typeImg}
            type={type.type}
            onClick={() =>
              currentType === type.type
                ? setCurrentType("all")
                : setCurrentType(type.type)
            }
          />
        ))}
      {typesConfig.amountPerPage * typesConfig.currentPage < types.length && (
        <button onClick={() => nextTypes()}>Next</button>
      )}
      <div>Products</div>
      <PokemonCards>
        {pokemonList
          .filter(
            (pokemon, i) => i >= pokemonPage * 20 - 20 && i < pokemonPage * 20
          ).map((pokemon, i) => {
            const index = cart.findIndex((item) => item.id === i + 1);

            return (
              <PokemonPreview
                key={i}
                id={i + 1}
                name={pokemon.name}
                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                  i + 1 + (pokemonPage - 1) * 20
                }.svg`}
                inCart={index !== -1}
                quantity={cart[index]?.quantity}
              />
            );
          })}
        {/* <PokemonCard
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
        /> */}
      </PokemonCards>
    </>
  );
};

export default Products;
