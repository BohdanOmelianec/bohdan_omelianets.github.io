import styled from "styled-components";
import { Section } from "components/Container/Content.styled";


export const SectionStyled = styled(Section)`
  min-height: 0, 
  overflow: hidden,
  margin-bottom: -1rem;
`;
export const ImageBackground = styled.img`
  position: absolute;
  top: 20%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mask-image: radial-gradient(
    circle at bottom,
    rgb(0, 0, 0, 0.5) 10%,
    transparent 65%
  );
  -webkit-mask-image: radial-gradient(
    circle at bottom,
    rgb(0, 0, 0, 0.5) 10%,
    transparent 60%
  );
  z-index: -1;
`;

export const Content = styled.div`
  min-height: 450px;
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  place-items: center;
  gap: 2rem;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Paragraph = styled.p`
  max-width: 500px;
  letter-spacing: .125rem;
  font-size: 1.125rem;
  padding: 1rem;

`;

export const DivStyled = styled.div`
  max-width: 400px;
  width: 100%;
  background: var(--glacier);
  backdrop-filter: blur(5px);
  border-radius: 1.25rem;
  font-size: 1.125rem;
  padding: 1rem;
`;

export const ContactItem = styled.div`
  padding: 1rem;

  &.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  @media(max-width: 768px) {
    padding: .5rem;
  }
`;

export const ContactTitle = styled.span`
  display: block;
  font-family: GabaritoMedium;
  margin-bottom: .5rem;
`;

export const ContactText = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  font-size: 1rem;
  font-family: GabaritoRegular;
  color: #9d9d9d;

  transition: color 0.3s;

  &:hover {
    color: var(--accentPink);
  }
`;

export const SvgIcon = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;

  & svg {
    transition: all 0.4s;
  }

  &:hover svg {
    transform: scale(1.1);
    fill: var(--accentPink);
  }
`;