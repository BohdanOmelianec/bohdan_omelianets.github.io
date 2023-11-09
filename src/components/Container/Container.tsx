import { useEffect } from 'react';

import { Main, MainContainer } from './Container.styled';
import AppBar from 'components/AppBar';
import Hero from 'components/Hero';
import Experience from 'components/Experience';
import SkillSet from 'components/SkillSet';
import Contacts from 'components/Contacts';


const Container = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 1,
    });

    const elements = document.querySelectorAll(".title")!;
    elements.forEach(element => observer.observe(element))
  }, []);


  return (
    <MainContainer>
      <AppBar />
      <Main id='main'>
        <Hero />
        <Experience />
        <SkillSet />
        <Contacts />
      </Main>
    </MainContainer>
  )
}

export default Container;