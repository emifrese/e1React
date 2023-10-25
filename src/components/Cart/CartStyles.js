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
`;
export const CartPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 10px 0 30px;
  padding: 0;
`;

export const CartTotal = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 10px 0 30px;
  padding: 0;
`;

export const ClearCartButton = styled.button`
  background-color: #1a1a1a;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  width: 40%;
  margin-bottom: 10px;
  &:hover {
    background-color: #2b2b2b;
  }
`;

export const CartElementImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

export const CartCheckoutButton = styled.button`
  background-color: #ffcb05;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  color: #000;
  width: 40%;
  margin-bottom: 10px;
  &:hover {
    background-color: #ffc000;
  }
`;

export const CartHandlerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
`;
