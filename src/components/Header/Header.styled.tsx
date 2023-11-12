import { Container } from "components/common/Containers.styled";
import styled, { keyframes } from "styled-components";


export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: var(--blackTransparent);
`;

export const ContainerStyled = styled(Container)`
  height: var(--appBarHeight);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const slideInLogo = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const Logo = styled.div`
  font-family: GabaritoBold, Helvetica, Tahoma, Geneva, sans-serif;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: .5rem;
  
  & {
    animation: ${slideInLogo} 1.5s backwards;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: .5rem;

  @media(max-width: 900px) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200px;
    display: none;
    flex-direction: column;
    transform: translateY(100%);
    background: var(--blackTransparent);
    padding: 2rem 1rem;
    border-radius: 0 0 0 1.25rem;

    &.show_menu {
      display: flex;
    }
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
`;

export const ListItem = styled.li`
  padding: .5rem;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  user-select: none;
  font-family: GabaritoMedium, Helvetica, Tahoma, Geneva, sans-serif;
  white-space: nowrap;
  color: var(--textColor);

  background: var(--gradient);
  -webkit-background-clip: text;
  display: inline-block;
  transition: color .4s;

  &:hover {
    color: transparent;
  }

  & {
    animation: ${slideIn} .7s backwards;
  }

  &:nth-child(1) {
    animation-delay: .15s;
  }
  &:nth-child(2) {
    animation-delay: .3s;
  }
  &:nth-child(3) {
    animation-delay: .45s;
  }
  &:nth-child(4) {
    animation-delay: .6s;
  }

  @media(max-width: 900px) {
    margin-inline: auto;
  }
`;

export const BurgerMenu = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  @media(max-width: 900px) {
    display: flex;
  }
`;

export const BurgerIcon = styled.div`
  width: 25px;
  height: 2px;
  background: var(--gradient);
  position: relative;
  border-radius: 1px;

  &:before, &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--gradient);
    border-radius: 1px;
  }
  &:before {
    top: -6px;
  }
  &:after {
    bottom: -6px;
  }
`;