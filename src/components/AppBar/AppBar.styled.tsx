import styled, { keyframes } from "styled-components";
import { APP_BAR_HEIGHT, COLORS } from "constants/constants";


export const AppBarStyled = styled.div`
  width: 100%;
  height: ${APP_BAR_HEIGHT}px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  z-index: 10;
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
`

export const ListWrapper = styled.div`
  opacity: 1;
  transform: translateX(0);

  &.list_animation {
    animation: ${slideIn} 1s backwards;
  }

  &:nth-child(2) {
    animation-delay: .25s;
  }
  &:nth-child(3) {
    animation-delay: .5s;
  }
`

const border = `2px solid ${COLORS.pink}`
export const ListItem = styled.li`
  padding: 6px 12px;
  font-size: 16px;
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
    color: ${COLORS.pink};
  }
  &.active {
    color: #fff;
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
`;