import styled, { keyframes } from "styled-components";

export const FooterStyled = styled.footer`
  background: var(--blackTransparent);
  height: var(--footerHeight);
  // margin-top: 3rem;
`;

export const DivFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  & * {
    white-space: nowrap;
  }
  & > * {
    display: flex;
    align-items: center;
    gap: 1rem;
    
  }

  & .developed_by {
    font-family: GabaritoBold, Helvetica, Tahoma, Geneva, sans-serif;
    font-size: 1.125rem;
    background: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    user-select: none;
  }

  & svg {
    fill: white;
  }
`;

export const ListTitle = styled.h3`
  margin-inline: auto;
  font-size: 1.125rem;
  font-weight: 400;
  text-align: center;
`;

export const ImageContainer = styled.div<{ src: string }>`
  width: 100%;
  flex-grow: 1;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const jump = keyframes`
  0%   {transform: translateY(0)}
  40%  {transform: translateY(-10px)}
  100% {transform: translateY(0)}
`;

export const Dots = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(3, 15px);
  place-items: center;
  gap: 0.625rem;

  & > span {
    width: 15px;
    height: 15px;
    background: var(--gradient);
    border-radius: 100%;
    box-shadow: 0 0 4px 0px var(--accentBlueTr);
    animation: ${jump} 1.2s infinite;
  }

  & > span:nth-child(2) {
    animation-delay: 0.2s;
  }
  & > span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;