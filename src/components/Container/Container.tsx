import { useState, useEffect } from 'react';
import styled from 'styled-components';

import AppBar from 'components/AppBar/AppBar';
import Tabs from 'components/Tabs/Tabs';

const ContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`

const Container = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>();

  useEffect(() => {
    setTimeout(() => setActiveTab(0), 1000);
  }, []);

  return (
    <ContainerStyled>
      <AppBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tabs activeTab={activeTab} />
    </ContainerStyled>
  )
}

export default Container;