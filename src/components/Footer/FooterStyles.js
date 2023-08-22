import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  width: 100%;
  background: var(--blue);
  /* border-radius: 0.5rem; */
  opacity: 90%;

  @media (max-width: 767px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
    color: #ccc
  }

  @media (max-width: 767px) {
    display: none
  }
`


export const FooterSocial = styled.button`
  background-color: transparent;
  border: none;
`
