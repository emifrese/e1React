import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  width: 100%;
  background: #fff;
  /* border-radius: 0.5rem; */
  /* opacity: 90%; */
  color: #000;
  position: relative;
  z-index: 10;
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
  min-width: 30%;
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
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 0;
  margin: 0;

  @media (max-width: 767px) {
    /* display: none; */
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 200px;
    padding: 20px 0;
    width: 100vw;
    position: absolute;
    left: 0px;
    top: 70px;
    background-color: #fff;
    animation: slide 0.3s ease-in;
  }
`;

export const ListElement = styled.li`
  position: relative;
`;

export const CartBubble = styled.span`
  position: absolute;
  top: -3px;
  right: -5px;
  border-radius: 100%;
  background: var(--dark-red);
  height: 16px;
  width: 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
`;

export const NavBarButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover,
  &:active {
    color: var(--dark-red);
  }

  @media (max-width: 767px) {
    padding: 10px;
  }
`;
