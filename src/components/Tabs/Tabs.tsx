import { ReactNode, useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { APP_BAR_HEIGHT, COLORS, TABS } from 'constants/constants';

const tabsRotateTime = 1.2;
const scaleItemTime = 0.6;

const Container = styled.div`
  width: min(100%, 1440px);
  height: calc(100% - ${APP_BAR_HEIGHT}px);
  margin-inline: auto;
  padding: 16px;
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
`

const TabsWrapper = styled.div<{ $activeTab: number }>`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: ${rotate} 2.5s;
  transform: rotateY(calc(${props => props.$activeTab} * 60deg));
  transition: transform ${tabsRotateTime}s ${scaleItemTime}s ease-out;

`

const Tab = styled.div<{$hexRadius: number, $sideWidth: number, $index: number}>`
  ${({$hexRadius, $sideWidth, $index}) => css`
    width: ${$sideWidth * .8}px;
    aspect-ratio: 2/1;
    position: absolute;
    top: 50%;
    left: 50%;
    backface-visibility: hidden;
    background: ${COLORS.darkViolet};
    border: 1px solid ${COLORS.lightBlue};
    border-radius: 25px;
    box-shadow:
      0px 0px 20px -5px ${COLORS.lightBlue},
      0px 0px 25px -5px ${COLORS.pink};
    transition: all ${scaleItemTime}s;
    filter: blur(8px);
    transform:
      translate(-50%, -50%)
      rotateY(calc(${$index} * -60deg))
      translateZ(${-$hexRadius}px);
      will-change: transform;
      
    &.active {
      transition-delay: ${scaleItemTime + tabsRotateTime}s;
      filter: blur(0);
      transform:
        translate(-50%, -50%)
        rotateY(calc(${$index} * -60deg))
        translateZ(${0}px);
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
      <TabsWrapper $activeTab={activeTab || 0} className='tabs_wrapper' ref={tabsWrapper as React.LegacyRef<HTMLDivElement>}>
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