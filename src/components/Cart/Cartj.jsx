import { BsFillTrash3Fill } from "react-icons/bs";
import { addItem, cleanCart, removeItem } from "../../redux/cart/cartSlice";
import {
  PokemonAddOne,
  PokemonCartQuantity,
  PokemonRemoveOne,
} from "../PokemonPreview/PokemonPreviewStyles";
import {
  CartButtonsContainer,
  CartCheckoutButton,
  CartContainer,
  CartElement,
  CartElementImage,
  CartHandlerButtons,
  CartHeader,
  CartList,
  CartPrice,
  CartTotal,
  ClearCartButton,
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
        <>
          <CartList>
            {cart.map((item) => (
              <CartElement key={crypto.randomUUID()}>
                <CartElementImage
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                />
                {item.name.toUpperCase()}
                <CartButtonsContainer>
                  {item.quantity > 1 ? (
                    <PokemonRemoveOne
                      width={"20px"}
                      height={"20px"}
                      onClick={() =>
                        dispatch(removeItem({ id: item.id, name: item.name }))
                      }
                    >
                      -
                    </PokemonRemoveOne>
                  ) : (
                    <BsFillTrash3Fill
                      onClick={() =>
                        dispatch(removeItem({ id: item.id, name: item.name }))
                      }
                    ></BsFillTrash3Fill>
                  )}
                  <PokemonCartQuantity>{item.quantity}</PokemonCartQuantity>
                  <PokemonAddOne
                    width={"20px"}
                    height={"20px"}
                    onClick={() =>
                      dispatch(addItem({ id: item.id, name: item.name }))
                    }
                  >
                    +
                  </PokemonAddOne>
                  <CartPrice>${item.quantity * 2000}</CartPrice>
                </CartButtonsContainer>
              </CartElement>
            ))}
          </CartList>
          <CartTotal>
            Total: ${cart.reduce((acc, item) => acc + item.quantity * 2000, 0)}
          </CartTotal>
          <CartHandlerButtons>
            <ClearCartButton onClick={() => dispatch(cleanCart())}>
              Clear Cart
            </ClearCartButton>
            <CartCheckoutButton>Checkout</CartCheckoutButton>
          </CartHandlerButtons>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
