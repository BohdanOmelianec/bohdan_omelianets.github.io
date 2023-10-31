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
  padding-top: var(--appBarHeight);
  margin-inline: auto;
`;

export const Container = styled.div`
  width: min(100%, 1440px);
  padding: 16px 32px;
  margin-inline: auto;
`;