import { TypeAnimation } from "react-type-animation";
import {
  DivWrapper,
  DivText,
  HeroTitle,
  ButtonWrapper,
  DownloadButton,
} from "./Hero.styled";

const fileName = "Bohdan_Omelianets-FE_Developer-CV.pdf";

const TextBlock = () => {
  return (
    <DivWrapper>
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
      <DivText>
        <p>
          I am a dedicated Front-End developer with 3 years of hands-on
          experience in crafting web applications. My skill set includes popular
          front-end libraries and frameworks, such as React, Redux, and Next.js.
          As a quick learner with strong analytical skills, I continuously
          expand my knowledge through self-education to deliver user-centric,
          cross-platform solutions.
        </p>
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
      </DivText>
    </DivWrapper>
  );
};

export default TextBlock;
