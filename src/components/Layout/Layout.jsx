import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";
import { LayoutWrapper } from "./LayoutStyles";
import { toggleCart } from "../../redux/cart/cartSlice";
import Cart from "../Cart/Cartj";

const Layout = ({ children }) => {
  const { cartOpen, cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
  return (
    <LayoutWrapper>
      {cartOpen && (
        <Modal Toggle={() => dispatch(toggleCart())}>
          <Cart />
        </Modal>
      )}
      <Header Toggle={() => dispatch(toggleCart())} />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
