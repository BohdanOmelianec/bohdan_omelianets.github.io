import styled, { keyframes } from "styled-components";

export const List = styled.ul`
  width: 70%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

export const ListItem = styled.li`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 1.125rem;
  background: var(--glacier);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  transition: all .7s ease-out;

  &:hover {
    transform: scale(1.07);
  }

  @media (max-width: 600px) {
    padding: .75rem;
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