import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  background: #fff;
  border-radius: 0.5rem;
  opacity: 90%;
  color: #000;
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    aspect-ratio: 1/1;
  }
`;

export const NavBar = styled.div`
  display: flex;
  width: 30%;
  justify-content: end;
`;

export const BurgerMenuIcon = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavBarLinksContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavBarLink = styled.button`
  cursor: pointer;
  border: none;
  :hover {
    border: none;
  }
  :active {
    border: none;
  }
`;
