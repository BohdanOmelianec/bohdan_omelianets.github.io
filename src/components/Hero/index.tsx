import {
  SectionStyled,
  ImageDiv,
  Image,
} from "./Hero.styled";
import TextBlock from "./TextBlock";
import photo from "assets/images/heroImg.jpg";

const Hero = () => {
  return (
    <SectionStyled id="home">
      <ImageDiv>
        <Image src={photo} alt="Bohdan photo" />
      </ImageDiv>
      <TextBlock />
    </SectionStyled>
  );
};

export default Hero;