import styled from "styled-components";
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
  gap: 1rem;
`;

export const ListWrapper = styled.div`
  opacity: 1;
  transform: translateX(0);
  transition: opacity 1.5s, transform 1.5s;

  &.list_hidden {
    opacity: 0;
    transform: translateX(150%);
  }

  &:nth-child(1) {
    transition-delay: .5s;
  }
  &:nth-child(2) {
      transition-delay: .7s;
  }
  &:nth-child(3) {
      transition-delay: .9s;
  }
`

const border = `.2rem solid ${COLORS.pink}`
export const ListItem = styled.li`
  padding: .5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  user-select: none;
  color: #9d9d9d;
  transition: color .4s;

  &:before, &:after {
    content: "";
    width: 0rem;
    height: 0rem;
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
      width: 1rem;
      height: 1rem;
      border-bottom: ${border};
      border-left: ${border};
      bottom: 0;
      left: 0;
    }
    &:after {
      width: 1rem;
      height: 1rem;
      border-right: ${border};
      border-top: ${border};
      top: 0;
      right: 0;
    }
  }
`;