import styled from "styled-components";

export const ImageBackground = styled.img`
  position: absolute;
  // inset: 0;
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
  justify-content: space-around;
  align-items: center;
  gap: 32px;
`;

export const Paragraph = styled.p`
  width: clamp(300px, 100%, 400px);
  letter-spacing: 2px;
  font-size: 24px;
  padding: 16px;
`;

export const DivStyled = styled.div`
  width: clamp(300px, 100%, 400px);
  background: var(--darkStaleBlueTr);
  border-radius: 20px;
  font-size: 18px;
  padding: 16px;
`;

export const ContactItem = styled.div`
  padding: 16px;

  &.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;

export const ContactTitle = styled.span`
  display: block;
  font-family: GabaritoMedium;
  margin-bottom: 8px;
`;

export const ContactText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 16px;
  font-family: GabaritoRegular;
  color: #9d9d9d;

  transition: color 0.3s;

  &:hover {
    color: var(--accentPink);
  }
`;

export const SvgIcon = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;

  & svg {
    transition: all 0.4s;
  }

  &:hover svg {
    transform: scale(1.1);
    fill: var(--accentPink);
  }
`;