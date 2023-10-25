import { useState, useEffect } from 'react';

import { ContainerStyled } from './Container.styled';
import AppBar from 'components/AppBar/AppBar';
import Tabs from 'components/Tabs/Tabs';


const Container = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>();

  useEffect(() => {
    setTimeout(() => setActiveTab(0), 1500);
  }, []);

  // useEffect(() => {
  //   const searchParams = new URLSearchParams();
  //   if(activeTab !== undefined) {
  //     searchParams.set("i", String(activeTab));
  //     searchParams.set("t", String(TABS[activeTab].title));
  //     window.history.replaceState({}, '', `${window.location.pathname}?${searchParams}`);
  //   }
  // }, [activeTab]);

  return (
    <ContainerStyled>
      <AppBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tabs activeTab={activeTab} />
    </ContainerStyled>
  )
}

export default Container;