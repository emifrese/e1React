import { addItem, cleanCart, removeItem } from "../../redux/cart/cartSlice";
import {
  PokemonAddOne,
  PokemonRemoveOne,
} from "../PokemonPreview/PokemonPreviewStyles";
import {
  CartButtonsContainer,
  CartContainer,
  CartElement,
  CartHeader,
  CartList,
} from "./CartStyles";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  return (
    <CartContainer>
      <CartHeader>Cart</CartHeader>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <CartList>
          {cart.map((item) => (
            <CartElement key={crypto.randomUUID()}>
              {item.name.toUpperCase()}
              <CartButtonsContainer>
                <PokemonRemoveOne
                  width={"30px"}
                  height={"30px"}
                  onClick={() =>
                    dispatch(removeItem({ id: item.id, name: item.name }))
                  }
                >
                  -
                </PokemonRemoveOne>
                {item.quantity}
                <PokemonAddOne
                  width={"30px"}
                  height={"30px"}
                  onClick={() =>
                    dispatch(addItem({ id: item.id, name: item.name }))
                  }
                >
                  +
                </PokemonAddOne>
              </CartButtonsContainer>
            </CartElement>
          ))}
        </CartList>
      )}
      <button onClick={() => dispatch(cleanCart())}>Clear Cart</button>
    </CartContainer>
  );
};

export default Cart;
