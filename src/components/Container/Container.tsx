import { useState, useEffect } from 'react';

import { ContainerStyled } from './Container.styled';
import AppBar from 'components/AppBar/AppBar';
import Tabs from 'components/Tabs/Tabs';


const Container = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>();

  useEffect(() => {
    setTimeout(() => setActiveTab(0), 1500);
  }, []);

  return (
    <ContainerStyled>
      <AppBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tabs activeTab={activeTab} />
    </ContainerStyled>
  )
}

export default Container;