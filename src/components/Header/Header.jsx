import {
  BurgerMenu,
  BurgerMenuIcon,
  HeaderContainer,
  HeaderLogo,
  NavBar,
  NavBarLink,
  NavBarLinksContainer,
} from "./HeaderStyles";
import pokeball from "../../assets/pokeball.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderLogo>
          <img src={pokeball} alt="" />
        </HeaderLogo>
        <NavBar>
          <BurgerMenuIcon>
            <RxHamburgerMenu />
          </BurgerMenuIcon>
          <NavBarLinksContainer>
            <NavBarLink>Inicio</NavBarLink>
            <NavBarLink>Favoritos</NavBarLink>
            <NavBarLink>Acerca de Nosotros</NavBarLink>
          </NavBarLinksContainer>
        </NavBar>
      </HeaderContainer>
      <BurgerMenu>Hola</BurgerMenu>
    </>
  );
};

export default Header;
