import { FooterContainer, FooterLink, FooterSocial } from "./FooterStyles";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink>
      © PokeTradeMasters
      </FooterLink>
      <FooterLink>
      Terms Of Use
      </FooterLink>
      <FooterSocial>
        <BsFacebook size='30px' color="#fff"/>
      </FooterSocial>
      <FooterSocial>
        <BsTwitter size='30px' color="#fff"/>
      </FooterSocial>
      <FooterSocial>
        <BsYoutube size='30px' color="#fff"/>
      </FooterSocial>
    </FooterContainer>
  );
};

export default Footer;
