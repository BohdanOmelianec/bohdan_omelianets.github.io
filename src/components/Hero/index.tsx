import {
  HeroWrapper,
  HeroImage,
  Image,
} from "./Hero.styled";
import ContentBlock from "./ContentBlock";
import photo from "assets/images/heroImg.jpg";

const Hero = () => {
  return (
    <HeroWrapper as="section">
      <ContentBlock />
      <HeroImage>
        <Image src={photo} alt="Bohdan photo" />
      </HeroImage>
    </HeroWrapper>
  );
};

export default Hero;