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
  min-height: 100vh;
  margin-inline: auto;
  transition: transform .5s ease-out;
`;

export const Container = styled.div`
  width: min(100%, 1440px);
  min-height: 100vh;
  height: 100%;
  padding: calc(16px + var(--appBarHeight)) 16px 16px;
  margin-inline: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media(max-width: 768px) {
    // height: 100%;
    gap: 16px;
  }
`;