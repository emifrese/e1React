import { AboutUsCont, AboutUsStory } from "./AboutUsStyles";
import aboutImg from "../../assets/aboutUsImg.png";

const AboutUsContainer = () => {
  return (
    <AboutUsCont>
      <AboutUsStory>
        <h2> What is PokeTradeMasters.com?</h2>
        <p>
          PokeTradeMasters.com is is a startup that born out of the lack of
          website that offer buy and trade capabilities at the same time.
          Offering to all Card Masters a place to buy and trade to build the ultimate deck.
        </p>{" "}
        <p>
          Whether you are a player, collector, parent, professor, or fan, we
          welcome you with open arms, this community is becoming stronger and bigger with every day. 
        </p>
        <p>
          {" "}
          So check out our house and make it yours!
        </p>
      </AboutUsStory>
      <img src={aboutImg} alt="pokemon-box" />
    </AboutUsCont>
  );
};

export default AboutUsContainer;
