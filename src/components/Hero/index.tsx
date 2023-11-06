import { TypeAnimation } from "react-type-animation";
import {
  HeroWrapper,
  HeroContent,
  HeroTitle,
  ButtonWrapper,
  DownloadButton,
  HeroImage,
  Image,
} from "./Hero.styled";
import photo from "assets/images/heroImg.png"

const Hero = () => {
  return (
    <HeroWrapper as="section">
      <HeroContent>
        <HeroTitle>Hi, I am Bohdan,</HeroTitle>
        <TypeAnimation
          sequence={[
            "passionate",
            1000,
            "responsible",
            1000,
            "frontend developer",
            1000,
          ]}
          wrapper="h3"
          speed={50}
          repeat={Infinity}
        />
        <h3 style={{ visibility: "hidden", height: 0 }}>frontend developer|</h3>
        <ButtonWrapper>
          <DownloadButton
            as="a"
            href={"assets/Bohdan_Omelianets-Front_end_developer.pdf"}
            title="Download Bohdan_Omelianets-FE_Developer-CV.pdf"
            download={"Bohdan_Omelianets-FE_Developer-CV.pdf"}
          >
            Download CV
          </DownloadButton>
        </ButtonWrapper>
      </HeroContent>
      <HeroImage>
        <Image src={photo} />
      </HeroImage>
    </HeroWrapper>
  );
};

export default Hero;