import styled from "styled-components";

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
    transparent 65%
  );
  z-index: -1;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
  }
`;

export const Paragraph = styled.p`
  width: clamp(300px, 100%, 500px);
  letter-spacing: .125rem;
  font-size: 1.125rem;
  padding: 1rem;

`;

export const DivStyled = styled.div`
  width: clamp(300px, 100%, 400px);
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