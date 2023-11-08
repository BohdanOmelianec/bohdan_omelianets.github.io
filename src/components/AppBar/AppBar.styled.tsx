import CodeTitle from "components/ui/CodeTitle";
import styled, { keyframes } from "styled-components";


export const AppBarStyled = styled.nav`
  width: 100%;
  height: var(--appBarHeight);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  background: var(--blackTransparent);
`;

const slideInLogo = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const Logo = styled(CodeTitle)`
  margin: 0;
  font-size: 1.25rem;
  
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

const border = `2px solid var(--accentPink)`
export const ListItem = styled.li`
  padding: 6px 12px;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  user-select: none;
  white-space: nowrap;
  color: var(--textGray);
  transition: color .4s;

  &:before, &:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    transition:
      width .4s ease-out,
      height .4s ease-out,
      color .4s;
  }

  &:hover {
    color: var(--accentPink);
  }
  &.active {
    color: var(--textColor);
    &:before {
      width: .75rem;
      height: .75rem;
      border-bottom: ${border};
      border-left: ${border};
      bottom: 0;
      left: 0;
    }
    &:after {
      width: .75rem;
      height: .75rem;
      border-right: ${border};
      border-top: ${border};
      top: 0;
      right: 0;
    }
  }
  opacity: 1;
  transform: translateX(0);

  & {
    animation: ${slideIn} .7s backwards;
  }

  &:nth-child(2) {
    animation-delay: .1s;
  }
  &:nth-child(2) {
    animation-delay: .2s;
  }
  &:nth-child(3) {
    animation-delay: .3s;
  }
  &:nth-child(4) {
    animation-delay: .4s;
  }
  &:nth-child(5) {
    animation-delay: .5s;
  }

  @media(max-width: 900px) {
    margin-inline: auto;
    &.active {
      color: var(--accentPink); 
    }
    &.active:before, &.active:after {
       border: none;
    }
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