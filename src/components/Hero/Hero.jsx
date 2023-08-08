import { HeroImgContainer, HeroSection, HeroTextDiv } from "./HeroStyles";
import heroImg from "../../assets/pokemonHero.png";

const Hero = () => {
  return (
    <HeroSection>
      <HeroImgContainer>
        <img src={heroImg} alt="" />
      </HeroImgContainer>
      <HeroTextDiv>
        <h2>Selecciona tus 6 favoritos y preparate para la pelea!</h2>
        <p>
          Bienvenid@! Aqui comienza tu camino como entrenadr@ Pokemon. Este es
          tu punto de partida, descubre pokemones y sus habilidades, elige tus 6
          favoritos (puedes cambiarlos en cualquier momento) y preparate para
          enfrentarte a otros entrenadores como tú.
        </p>
      </HeroTextDiv>
    </HeroSection>
  );
};

export default Hero;
