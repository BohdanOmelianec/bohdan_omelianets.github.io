import styled, { keyframes } from 'styled-components';
import { COLORS } from 'constants/constants';
import { scaleItemTime } from './Tabs.styled';

export const TabWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const Title = styled.h2<{ $showContent: boolean }>`
  font-size: calc(var(--index) * 7);
  line-height: calc(var(--index) * 5);
  opacity: ${props => props.$showContent ? 0 : 1};
  height: ${props => props.$showContent ? 0 : "auto"};
  transition: opacity ${scaleItemTime / 2}s;
  & .title_accent {
    font-size: inherit;
    color: ${COLORS.pink};
    display: block;
    margin-left: 150px;
  }

  @media(max-width: 768px) {
    font-size: calc(var(--index) * 5);
    & .title_accent {
      margin-left: 100px;
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

export const ContentAnimation = styled.div`
  width: 100%;
  height: 100%;
  animation: ${fadeIn} ${scaleItemTime}s forwards;
`;