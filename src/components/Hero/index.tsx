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
      <TextBlock />
      <ImageDiv>
        <Image src={photo} alt="Bohdan photo" />
        {/* <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
      </ImageDiv>
    </SectionStyled>
  );
};

export default Hero;