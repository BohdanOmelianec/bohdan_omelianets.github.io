import styled, { keyframes } from "styled-components";
import { Button } from "components/ui/Button";
import { Section } from "components/Container/Container.styled";

export const HeroWrapper = styled(Section)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  min-height: 100vh;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
    gap: 3rem;
  }
`;

const heroContentSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
`;

export const DivStyled = styled.div`
  width: min-content;
  background: var(--glacier);
  backdrop-filter: blur(5px);
  border-radius: 1.25rem;
  padding: 1.5rem;
  animation: ${heroContentSlide} 1.2s ease-out;

  & h2,
  & h3 {
    font-size: 3rem;
    white-space: nowrap;
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
  margin-top: 3rem;
`;

export const DownloadButton = styled(Button)`
  display: block;
  background-color: var(--darkGray);
  width: 150px;
  text-align: center;
  transition: all .5s;
  color: var(--textColor);

  &:hover {
    background-color: transparent;
    color: var(--darkStaleBlue);
  }
`;

const growImage = keyframes`
  from {
    opacity: 0;
    transform: translateX(20%) translateY(-25%) scale(.4);
  }
`;

export const HeroImage = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 450px;
  max-height: 450px;
  animation: ${growImage} 1s linear;
  
  @media(max-width: 768px) {
    max-width: 300px;
    max-height: 300px;
  }
`;

const floatingShape = keyframes`
  0%,100%{
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  34%{
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0,6px,0) rotateZ(0.01deg);
  }
  50%{
    transform: translate3d(0,0,0) rotateZ(0.1deg);
  }
  67%{
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60% ;
    transform: translate3d(0,-3px,0) rotateZ(0.01deg);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin-inline: auto;
  box-shadow: 0 0 75px -25px var(--accentBlueTr);
  will-change: border-radius, transform;
  animation: ${floatingShape} 6s linear infinite;

`;