import {
  BurgerMenuIcon,
  CartBubble,
  HeaderContainer,
  HeaderLogo,
  ListElement,
  NavBar,
  NavBarButton,
  NavBarLinksContainer,
} from "./HeaderStyles";
import pokeball from "../../assets/pokeball.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/menu/menuSlice";

const Header = ({ Toggle }) => {
  const { isOpen } = useSelector((state) => state.menu);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const menuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <HeaderContainer>
        <HeaderLogo>
          <NavLink to={"/"}>
            <img src={pokeball} />
          </NavLink>
        </HeaderLogo>
        <NavBar>
          <BurgerMenuIcon>
            <RxHamburgerMenu onClick={menuHandler} />
          </BurgerMenuIcon>
          {(window.innerWidth > 767 || isOpen) && (
            <NavBarLinksContainer>
              <ListElement>
                <Link to={"/"} onClick={menuHandler}>
                  <NavBarButton>Inicio</NavBarButton>
                </Link>
              </ListElement>
              <ListElement>
                <Link to={"products"} onClick={menuHandler}>
                  <NavBarButton>Productos</NavBarButton>
                </Link>
              </ListElement>
              <ListElement>
                <Link to={"contact"} onClick={menuHandler}>
                  <NavBarButton>Contacto</NavBarButton>
                </Link>
              </ListElement>
              <ListElement>
                <Link to={"aboutus"} onClick={menuHandler}>
                  <NavBarButton>Acerca de Nosotros</NavBarButton>
                </Link>
              </ListElement>
              <ListElement>
                {cart.length > 0 && <CartBubble>{cart.length}</CartBubble>}
                <AiOutlineShoppingCart
                  size={32}
                  onClick={Toggle}
                ></AiOutlineShoppingCart>
              </ListElement>
            </NavBarLinksContainer>
          )}
        </NavBar>
      </HeaderContainer>
    </>
  );
};

export default Header;
