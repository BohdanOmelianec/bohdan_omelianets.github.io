import { useState, useEffect } from 'react';

import { Main, MainContainer } from './Container.styled';
import AppBar from 'components/AppBar';
import Hero from 'components/Hero';
import AboutMe from 'components/AboutMe';
import Experience from 'components/Experience';
import SkillSet from 'components/SkillSet';
import Contacts from 'components/Contants';
import { TOOLS } from 'constants/constants';


let scrolling = 0;
let scrollFlag = 1;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show")
    }
  })
}, {
  threshold: 1,
})

const Container = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const translateYMain = (scrolling: number) => {
    const main = document.getElementById("main");
    if (main) {
      main.style.transform = `translateY(${scrolling}vh)`;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", event => {
      if(scrollFlag === 1){
        setTimeout(() => {
          const main = document.getElementById("main")!;
          if (event.deltaY < 0 && scrolling !== 0) {
            scrolling += 100;
            translateYMain(scrolling);
            setActiveTab(prev => prev - 1);
          } else if (event.deltaY > 0) {
            if (scrolling > -( (main.children.length - 1) * 100 ) ) {
              scrolling -= 100;
              translateYMain(scrolling);
              setActiveTab(prev => prev + 1);
            }
          };
          scrollFlag = 1;
        }, 100);

        scrollFlag = 0;
      }
    });

    const elements = document.querySelectorAll(".title")!;
    elements.forEach(element => observer.observe(element))
  }, []);

  useEffect(() => {
    scrolling = activeTab * -100;
    translateYMain(scrolling);
  }, [activeTab]);

  
  

    useEffect(() => {

    });



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
      <Main id='main'>
        <Hero />
        <AboutMe />
        <Experience />
        <SkillSet tools={TOOLS} />
        <Contacts />
      </Main>
    </MainContainer>
  )
}

export default Container;