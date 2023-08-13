import { HeroImgContainer, HeroSection, HeroTextDiv } from "./HeroStyles";
import heroImg from "../../assets/PokemonHeroBig-removebg.png";

const Hero = () => {
  return (
    <HeroSection>
      <HeroImgContainer>
        <img src={heroImg} alt="" />
      </HeroImgContainer>
      <HeroTextDiv>
        <h2>
          <span>PokeTradeMasters</span>
          Las mejores cards!
        </h2>
        <p>
          Bienvenid@! En PokeTradeMasters buscamos brindarte la mejor
          experiencia a la hora de buscar esa card que venis deseando hace
          tanto. Te aseguramos total seguridad en el traspaso de cards como
          también en la compra directa
        </p>
      </HeroTextDiv>
    </HeroSection>
  );
};

export default Hero;
