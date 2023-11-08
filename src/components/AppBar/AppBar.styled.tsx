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
  background: var(--darkVioletTr);
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
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(150%);
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
    animation: ${slideIn} 1s backwards;
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
`;

export const BurgerMenu = styled.div`
  width: 30px;
  aspect-ratio: 1/1;
  border: 1px solid red;
`;