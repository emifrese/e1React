import { useDispatch } from "react-redux";
import {
  PokemonAddOne,
  PokemonAddToCartButton,
  PokemonButtonsContainer,
  PokemonPreviewContainer,
  PokemonPreviewImage,
  PokemonPreviewName,
  PokemonRemoveOne,
} from "./PokemonPreviewStyles";
import { addItem, removeItem } from "../../redux/cart/cartSlice";

const PokemonPreview = ({ name, img, id, inCart, quantity }) => {
  const dispatch = useDispatch();

  return (
    <PokemonPreviewContainer>
      <PokemonPreviewImage src={img} alt={name} />
      <PokemonPreviewName>{name.toUpperCase()}</PokemonPreviewName>
      {inCart ? (
        <PokemonButtonsContainer>
          <PokemonRemoveOne
            width={"40%"}
            height={"100%"}
            onClick={() => dispatch(removeItem({ id, name }))}
          >
            -
          </PokemonRemoveOne>
          {quantity}
          <PokemonAddOne
            width={"40%"}
            height={"100%"}
            onClick={() => dispatch(addItem({ id, name }))}
          >
            +
          </PokemonAddOne>
        </PokemonButtonsContainer>
      ) : (
        <PokemonAddToCartButton onClick={() => dispatch(addItem({ id, name }))}>
          Add to cart
        </PokemonAddToCartButton>
      )}
    </PokemonPreviewContainer>
  );
};

export default PokemonPreview;
