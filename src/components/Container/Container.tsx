import { useState, useEffect } from 'react';

import { Main, MainContainer } from './Container.styled';
import AppBar from 'components/AppBar';
import Hero from 'components/Hero';
import AboutMe from 'components/AboutMe';
import SkillSet from 'components/SkillSet';
import Experience from 'components/Experience';
import { TOOLS } from 'constants/constants';


const Container = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>(0);

  useEffect(() => {
    // setTimeout(() => setActiveTab(0), 1500);
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
      <Main>
        <Hero />
        <AboutMe />
        <SkillSet tools={TOOLS} />
        <Experience />
      </Main>
    </MainContainer>
  )
}

export default Container;