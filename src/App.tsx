import { useEffect } from 'react';

import ParticlesBG from "components/common/ParticlesBG";
import Header from 'components/Header';
import Hero from 'components/Hero';
import Experience from 'components/Experience';
import SkillSet from 'components/SkillSet';
import Contacts from 'components/Contacts';
import Footer from 'components/Footer';
import { Container, Main } from 'components/common/Containers.styled';


const App = () => {
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
    <>
      <ParticlesBG />
      <Header />
      <Main id='main'>
        <Container>
          <Hero />
          <Experience />
          <SkillSet />
          <Contacts />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default App;
