import styled, { css, keyframes } from 'styled-components';
import { APP_BAR_HEIGHT, COLORS } from 'constants/constants';

export const tabsRotateTime = 1.2;
export const scaleItemTime = 0.6;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - ${APP_BAR_HEIGHT}px);
  transform-style: preserve-3d;
  perspective: 1800px;
  position: relative;
  display: grid;
  place-items: center;
`

const foldIn = keyframes`
  from {
    opacity: 0.6;
    transform:
      translate(0, -50%)
      rotateY(-90deg);
  }
  to {
    opacity: 1;
    transform:
      translate(0, -50%)
      rotateY(0deg);
  }
`;


export const TabsWrapper = styled.div<{ $activeTab: number }>`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: left;

  transform: rotateY(calc(${props => props.$activeTab} * -120deg));
  transition: transform ${tabsRotateTime}s ${scaleItemTime}s ease-out;

`

export const Tab = styled.div<{ $index: number }>`
  ${({$index}) => css`
    width: 60%;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 0;
    backface-visibility: hidden;
    background: ${COLORS.darkViolet};
    border: 1px solid ${COLORS.lightBlue};
    border-left: none;
    border-radius: 0 25px 25px 0;
    box-shadow:
      0px 0px 20px -5px ${COLORS.lightBlue},
      0px 0px 22px -5px ${COLORS.pink};
    transition: all ${scaleItemTime}s;
    transform-origin: left;
    transform:
      translate(0, -50%)
      rotateY(calc(${$index} * 120deg));
    will-change: transform;

    animation: ${foldIn} 1s backwards;
    &:nth-child(1) {
      animation-delay: 1s;
    }
    &:nth-child(2) {
      animation-delay: .5s;
    }
    &:nth-child(3) {
    }
      
    &.active {
      transition-delay: ${tabsRotateTime + scaleItemTime}s;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 0;
      background: none;
      box-shadow: none;
    }

    @media(max-width: 768px) {
      width: 90%;
      height: 50%;
    }
  `}
`;