import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  overflow: clip;
`;

export const Main = styled.main`
  transition: transform .5s ease-out;
`;

export const Section = styled.section`
  width: min(100%, 1440px);
  min-height: 100vh;
  padding: calc(1rem + var(--appBarHeight)) 1rem 1rem;
  margin-inline: auto;
  position: relative;
`;