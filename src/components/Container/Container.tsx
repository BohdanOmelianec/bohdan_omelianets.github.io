import { useState, useEffect } from 'react';

import { ContentContainer, MainContainer } from './Container.styled';
import AppBar from 'components/AppBar';
import Hero from 'components/Hero';


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
    <MainContainer>
      <AppBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <ContentContainer>
        <Hero />
      </ContentContainer>
    </MainContainer>
  )
}

export default Container;