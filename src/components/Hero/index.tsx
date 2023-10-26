import React from "react";
import { TypeAnimation } from 'react-type-animation';
import styled from "styled-components";
import { Button } from "components/ui/Button";

export const HeroWrapper = styled.section`
  height: calc(100vh - var(--appBarHeight));
  padding: 16px 32px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
`;
export const HeroContent = styled.div`
  background: var(--darkStaleBlueTr);
  border-radius: 20px;
  padding: 16px;
  & h2,
  & h3 {
    font-size: calc(var(--index) * 3.2);
    font-family: 'GabaritoSemiBold';
  }
`;

export const HeroTitle = styled.h2`
  background: var(--gradient);
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;

export const ButtonWrapper = styled.div`
  width: min-content;
  background: var(--gradient);
  padding: 2px;
  border-radius: 11px;
  margin-top: 32px;
`;

export const ButtonP = styled(Button)`
  background-color: var(--darkViolet);
  width: 150px;
`;

export const HeroImage = styled.div`
  
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>Hi, I am Bohdan,</HeroTitle>
        <TypeAnimation
          sequence={[
            "passionate",
            1000,
            "responsible",
            1000,
            'frontend developer',
            1000,

          ]}
          wrapper="h3"
          speed={50}
          repeat={Infinity}
        />
        <ButtonWrapper>
          <ButtonP>Download CV</ButtonP>
        </ButtonWrapper>
      </HeroContent>
      <HeroImage>

      </HeroImage>
    </HeroWrapper>
  )
};

export default Hero;