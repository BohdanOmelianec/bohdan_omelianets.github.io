import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

export const Main = styled.main`
  width: min(100%, 1440px);
  height: 100vh;
  margin-inline: auto;
  transition: transform .5s ease-out;
`;

export const Container = styled.div`
  width: min(100%, 1440px);
  height: 100vh;
  padding: calc(32px + var(--appBarHeight)) 32px 32px;
  margin-inline: auto;
`;