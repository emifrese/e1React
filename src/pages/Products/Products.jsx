import { useEffect, useState } from "react";
import GenerationIcon from "../../components/GenerationIcon/GenerationIcon";
import { pokemonGenerations } from "../../helpers/generationsNumbers";
import { useSelector } from "react-redux";
import PokemonPreview from "../../components/PokemonPreview/PokemonPreview";
import { PokemonCardsContainer } from "../../components/PokemonCards/PokemonCardsStyles";

const Products = () => {
  const { pokemonList } = useSelector((state) => state.pokemon);
  const { cart } = useSelector((state) => state.cart);
  const [generations, setGenerations] = useState(
    pokemonGenerations.map((generation) => {
      return { generation, visible: false };
    })
  );
  const [currentGeneration, setCurrentGeneration] = useState("all");
  const [generationsConfig, setGenerationsConfig] = useState({
    currentPage: 1,
    amountPerPage: 4,
  });
  const [pokemonPage, setPokemonPage] = useState(1);

  const nextTypes = () => {
    const minIndex =
      (generationsConfig.currentPage + 1) * generationsConfig.amountPerPage -
      generationsConfig.amountPerPage;
    const maxIndex =
      (generationsConfig.currentPage + 1) * generationsConfig.amountPerPage -
        1 <=
      generations.length
        ? (generationsConfig.currentPage + 1) *
            generationsConfig.amountPerPage -
          1
        : generations.length;
    const showTypes = generations.map((type, i) => {
      return {
        ...type,
        visible: i >= minIndex && i <= maxIndex,
      };
    });
    setGenerations(showTypes);
    setGenerationsConfig((prevState) => {
      return { ...prevState, currentPage: prevState.currentPage + 1 };
    });
  };

  const prevTypes = () => {
    const minIndex =
      (generationsConfig.currentPage - 1) * generationsConfig.amountPerPage -
      generationsConfig.amountPerPage;
    const maxIndex =
      generationsConfig.currentPage * generationsConfig.amountPerPage -
      (generationsConfig.amountPerPage + 1);
    const showTypes = generations.map((generation, i) => {
      return {
        ...generation,
        visible: i >= minIndex && i <= maxIndex,
      };
    });
    setGenerations(showTypes);
    setGenerationsConfig((prevState) => {
      return { ...prevState, currentPage: prevState.currentPage - 1 };
    });
  };

  useEffect(() => {
    const showGenerations = generations.map((type, i) => {
      return {
        ...type,
        visible: i < generationsConfig.amountPerPage,
      };
    });

    setGenerations(showGenerations);
  }, [generationsConfig.amountPerPage, setGenerationsConfig]);
  console.log(crypto.randomUUID);

  return (
    <>
      {generationsConfig.currentPage > 1 && (
        <button onClick={() => prevTypes()}>Prev</button>
      )}
      {generations
        .filter((generation) => generation.visible)
        .map((generation) => (
          <GenerationIcon
            key={crypto.randomUUID()}
            generationNumber={generation.generation}
            onClick={() =>
              currentGeneration === generation.generation
                ? setCurrentGeneration("all")
                : setCurrentGeneration(generation.generation)
            }
            selected={generation.generation === currentGeneration}
          />
        ))}
      {generationsConfig.amountPerPage * generationsConfig.currentPage <
        generations.length && <button onClick={() => nextTypes()}>Next</button>}
      <div>Products</div>
      <PokemonCardsContainer>
        {pokemonList
          .filter((pokemon) =>
            currentGeneration === "all"
              ? true
              : pokemon.generation === currentGeneration
          )
          .filter(
            (pokemon, i) => i >= pokemonPage * 20 - 20 && i < pokemonPage * 20
          )
          .map((pokemon, i) => {
            const index = cart.findIndex((item) => item.id === pokemon.id);
            console.log(pokemon);
            return (
              <PokemonPreview
                key={crypto.randomUUID()}
                id={i + 1}
                name={pokemon.name}
                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                  pokemon.id + (pokemonPage - 1) * 20
                }.svg`}
                inCart={index !== -1}
                quantity={cart[index]?.quantity}
              />
            );
          })}
      </PokemonCardsContainer>
      <button
        onClick={() =>
          setPokemonPage((prevState) =>
            prevState > 1 ? prevState - 1 : prevState
          )
        }
      >
        Prev
      </button>
      <p>{pokemonPage}</p>
      <button onClick={() => setPokemonPage((prevState) => prevState + 1)}>
        Next
      </button>
    </>
  );
};

export default Products;
