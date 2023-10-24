import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { APP_BAR_HEIGHT, COLORS, TABS } from 'constants/constants';

const tabsRotateTime = 1.2;
const scaleItemTime = 0.6;

const Container = styled.div`
  width: 100%;
  height: calc(100% - ${APP_BAR_HEIGHT}px);
  // padding: 16px;
  transform-style: preserve-3d;
  perspective: 1800px;
  position: relative;
  display: grid;
  place-items: center;
`

const rotate = keyframes`
  from {
    transform:
      rotateY(270deg)
  }
`;
const appear = keyframes`
  to {
    width: 100%;
    height: 100%;
  }
`;

const TabsWrapper = styled.div<{ $activeTab: number, $sideWidth: number }>`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: left;

  // animation: ${rotate} 2.5s;
  transform: rotateY(calc(${props => props.$activeTab} * -90deg));
  transition: transform ${tabsRotateTime}s ${scaleItemTime}s ease-out;

`

const Tab = styled.div<{$hexRadius: number, $sideWidth: number, $index: number}>`
  ${({$hexRadius, $sideWidth, $index}) => css`
    width: 70%;
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
      rotateY(calc(${$index} * 90deg));
    will-change: transform;
      
    &.active {
      // opacity: 1;
      transition-delay: ${tabsRotateTime + scaleItemTime}s;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 0;
      background: none;
      box-shadow: none;
    }
  `}
`
type Props = {
  activeTab: number | undefined;
};

const Tabs = ({ activeTab }: Props) => {
  const [sideWidth, setSideWidth] = useState(800);
  const tabsWrapper = useRef<HTMLDivElement>();
  // const sideWidth = +Math.min(document.body.clientWidth * .8, 1200);
  // let sideWidth = 80;
  const hexRadius = ( Math.sqrt(3) / 2 ) * sideWidth;
  useEffect(() => {
      setSideWidth(tabsWrapper.current?.clientWidth || 800);
  }, [])


  return (
    <Container>
      <TabsWrapper $activeTab={activeTab || 0} $sideWidth={sideWidth} className='tabs_wrapper' ref={tabsWrapper as React.LegacyRef<HTMLDivElement>}>
        {TABS.map((tab, index) => (
          <Tab
            key={tab.id}
            className={activeTab === index ? "active" : ""}
            $hexRadius={hexRadius}
            $sideWidth={sideWidth}
            $index={index}
          >
            {tab.component} 
          </Tab>
        ))}
      </TabsWrapper>
    </Container>
  )
};

export default Tabs;