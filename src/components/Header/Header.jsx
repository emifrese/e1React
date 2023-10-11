import {
  BurgerMenuIcon,
  HeaderContainer,
  HeaderLogo,
  NavBar,
  NavBarButton,
  NavBarLinksContainer,
} from "./HeaderStyles";
import pokeball from "../../assets/pokeball.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/menu/menuSlice"

const Header = () => {
  const { isOpen } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const menuHandler = () => {
    dispatch(toggleMenu())
  }

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
              <Link to={"/"} onClick={menuHandler}>
                <NavBarButton>Inicio</NavBarButton>
              </Link>
              <Link to={"products"} onClick={menuHandler}>
                <NavBarButton>Productos</NavBarButton>
              </Link>
              <Link to={"contact"} onClick={menuHandler}>
                <NavBarButton>Contacto</NavBarButton>
              </Link>
              <Link to={"aboutus"} onClick={menuHandler}>
                <NavBarButton>Acerca de Nosotros</NavBarButton>
              </Link>
              <AiOutlineShoppingCart size={32}></AiOutlineShoppingCart>
            </NavBarLinksContainer>
          )}
        </NavBar>
      </HeaderContainer>
    </>
  );
};

export default Header;
