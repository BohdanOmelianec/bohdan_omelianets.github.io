import { useEffect } from 'react';

import Header from 'components/Header';
import Hero from 'components/Hero';
import Experience from 'components/Experience';
import SkillSet from 'components/SkillSet';
import Contacts from 'components/Contacts';
import { Container, Main } from './Content.styled';


const Content = () => {
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
    <div>
      <Header />
      <Main id='main'>
        <Container>
          <Hero />
          <Experience />
          <SkillSet />
          <Contacts />
        </Container>
      </Main>
    </div>
  )
}

export default Content;