import { useState, useEffect } from 'react';

import { Main, MainContainer } from './Container.styled';
import AppBar from 'components/AppBar';
import Hero from 'components/Hero';
import Experience from 'components/Experience';
import SkillSet from 'components/SkillSet';
import Contacts from 'components/Contacts';
import { TOOLS } from 'constants/constants';


const Container = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting && entry.target) {
          const newActiveTab = (entry.target as HTMLElement).dataset.tab || 0;
          setActiveTab(+newActiveTab || 0);
          entry.target.classList.add("show");
        }
      })
    }, {
      threshold: 1,
    });

    const elements = document.querySelectorAll(".title")!;
    elements.forEach(element => observer.observe(element))
  }, []);


  return (
    <MainContainer>
      <AppBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Main id='main'>
        <Hero />
        <Experience />
        <SkillSet tools={TOOLS} />
        <Contacts />
      </Main>
    </MainContainer>
  )
}

export default Container;