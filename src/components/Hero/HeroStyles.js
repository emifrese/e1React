import { styled } from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  display: flex;
  padding: 20px;
  background: rgba(255,255,255,0.5);
  border-radius: 1rem;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const HeroImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;


    img{
        width: 300px;
    }
`;

export const HeroTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    background: rgba(255,255,255,0.8);
    border-radius: 1rem;
    padding: 10px
`