import { useDispatch, useSelector } from "react-redux";
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
  // const cart = useSelector((state) => state.cart);

  // console.log(cart)
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
        {name.toUpperCase()}
      </PokemonPreviewName>
      {inCart ? (
        <PokemonButtonsContainer>
          <PokemonRemoveOne onClick={() => dispatch(removeItem(id))}>-</PokemonRemoveOne>
          {quantity}
          <PokemonAddOne onClick={() => dispatch(addItem(id))}>+</PokemonAddOne>
        </PokemonButtonsContainer>
      ) : (
        <PokemonAddToCartButton onClick={() => dispatch(addItem(id))}>
          Add to cart
        </PokemonAddToCartButton>
      )}
    </PokemonPreviewContainer>
  );
};

export default PokemonPreview;
