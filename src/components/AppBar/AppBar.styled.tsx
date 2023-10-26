import styled, { keyframes } from "styled-components";


export const AppBarStyled = styled.nav`
  width: 100%;
  height: var(--appBarHeight);
  padding: 8px 16px;
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
  opacity: 1;
  color: var(--textColor);
  font-size: calc(var(--index) * 1.2);
  cursor: pointer;
  user-select: none;

  & {
    animation: ${slideInLogo} 1.5s backwards;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 12px;
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
  font-size: var(--index);
  cursor: pointer;
  position: relative;
  user-select: none;
  color: #9d9d9d;
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
      width: 12px;
      height: 12px;
      border-bottom: ${border};
      border-left: ${border};
      bottom: 0;
      left: 0;
    }
    &:after {
      width: 12px;
      height: 12px;
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
    animation-delay: .25s;
  }
  &:nth-child(3) {
    animation-delay: .5s;
  }
`;