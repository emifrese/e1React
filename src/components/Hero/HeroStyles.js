import { styled } from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  background-image: url("src/assets/HeroBackground.png");
  background-size: cover;
  background-position: center;
  /* border-radius: 1rem; */

  @media (max-width: 1366px) {
    flex-direction: column;
  }
`;

export const HeroImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    width: 800px;
  }

  @media (max-width: 1366px) and (min-width: 768px) {
    img {
      width: 600px;
    }
  }

  @media (max-width: 767px) {
    img {
      width: 300px;
    }
  }
`;

export const HeroTextDiv = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: fit-content;
  background: rgba(var(--background-card));

  h2 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    span {
      align-self: center;
    }
  }
  /* border-radius: 1rem; */
`;
