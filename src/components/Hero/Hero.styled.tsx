import styled, { keyframes } from "styled-components";
import { Button } from "components/ui/Button";
import heroImg from "images/heroImg.png";

export const HeroWrapper = styled.section`
  height: calc(100vh - var(--appBarHeight));
  padding: 16px 32px;
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
    gap: 32px;
  }
`;

const heroContentSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  background: var(--darkStaleBlueTr);
  border-radius: 20px;
  padding: 16px;
  animation: ${heroContentSlide} 1.2s ease-out;

  & h2,
  & h3 {
    font-size: calc(var(--index) * 3);
    font-family: 'GabaritoSemiBold';
    white-space: nowrap;
  }

  @media(max-width: 768px) {
    & h2,
    & h3 {
      font-size: calc(var(--index) * 2.2);
    }
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

export const DownloadButton = styled(Button)`
  display: block;
  background-color: var(--darkViolet);
  width: 150px;
  transition: all .5s;

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
  animation: ${growImage} 1s linear;
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

export const Image = styled.div`
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 80%;
  aspect-ratio: 1/1;
  margin-inline: auto;
  box-shadow: 0 0 75px -25px var(--accentBlueTr);
  will-change: border-radius, transform;
  animation: ${floatingShape} 6s linear infinite;

  @media(max-width: 768px) {
    width: 70%;
  }
`;