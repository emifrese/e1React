import { styled } from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 0.5rem;
  opacity: 90%;
  color: #000;
  position: relative;
  z-index: 10;
`;

export const CartHeader = styled.h2``;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 20px 0;
  margin: 10px 0;
  overflow: auto;
`;

export const CartElement = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    width: 100%;
    padding: 0 20px;
`;

export const CartButtonsContainer = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    
`
