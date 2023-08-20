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
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import bug from '../../assets/type-icons/bug.svg'

const Header = () => {
  const { menu, menuHandler } = useContext(Context);

  return (
    <>
      <HeaderContainer>
        <HeaderLogo>
          {/* <img src={pokeball} alt="" /> */}
          <img src={bug} />
        </HeaderLogo>
        <NavBar>
          <BurgerMenuIcon>
            <RxHamburgerMenu onClick={menuHandler} />
          </BurgerMenuIcon>
          {(window.innerWidth > 767 || menu) && (
            <NavBarLinksContainer>
              <Link to={'/'} onClick={menuHandler}>
                <NavBarButton>Inicio</NavBarButton>
              </Link>
              <Link to={'products'} onClick={menuHandler}>
                <NavBarButton>Productos</NavBarButton>
              </Link>
              <Link to={'contact'} onClick={menuHandler}>
                <NavBarButton>Contacto</NavBarButton>
              </Link>
              <Link to={'aboutus'} onClick={menuHandler}>
                <NavBarButton>Acerca de Nosotros</NavBarButton>
              </Link>
            </NavBarLinksContainer>
          )}
        </NavBar>
      </HeaderContainer>
    </>
  );
};

export default Header;
