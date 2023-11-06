import { TypeAnimation } from "react-type-animation";
import {
  DivStyled,
  HeroTitle,
  ButtonWrapper,
  DownloadButton,
} from "./Hero.styled";

const fileName = "Bohdan_Omelianets-FE_Developer-CV.pdf";

const ContentBlock = () => {
  return (
    <DivStyled>
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
          href={`/${fileName}`}
          title={`Download ${fileName}`}
          download={fileName}
        >
          Download CV
        </DownloadButton>
      </ButtonWrapper>
    </DivStyled>
  );
};

export default ContentBlock;
