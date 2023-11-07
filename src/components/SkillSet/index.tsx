
import styled from "styled-components";
// import {
  
// } from "./SkillSet.styled";
import { Section } from "components/Container/Container.styled";
import { SectionTitle } from "components/ui/SectionTitle";
import { useEffect, useState } from "react";



const List = styled.ul`
  width: 70%;
  height: 400px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  // justify-content: space-between;
  gap: 16px;
`;

const ListItem = styled.li`
  width: 100%;
  padding: 16px;
  // background: var(--darkStaleBlueTr);
  // border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .7s ease-out;

  &:hover {
    transform: scale(1.07);
    // background: var(--darkStaleBlueTr);
`;

const ListTitle = styled.h3`
  width: max-content;
  margin: 8px auto 0;
  font-size: calc(var(--index));
  font-weight: 400;
  white-space: nowrap;
`;

const ImageContainer = styled.div<{ src: string }>`
  width: 100%;
  flex-grow: 1;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  
  `;

const Arrows = styled.span`
    color: white;
    font-size: calc(var(--index) * 2);
`;

type Props = {
  tools: {
    title: string,
    src: string
  }[]
};
const SkillSet = ({ tools }: Props) => {
  const [toolsToShow, setToolsToShow] = useState<typeof tools>([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const slicedTools = tools.slice(slide * 6, slide * 6 + 6);
    setToolsToShow(slicedTools);
  }, [slide, tools])

  // useEffect(() => {
  //   const interval = setInterval(() => {

  //     setSlide(prev => {
  //       if (prev * 6 + 6 >= tools.length) {
  //         return 0;
  //       }
  //       return prev + 1;
  //     })
  //   }, 3000)

  //   return () => clearInterval(interval);
  // }, [])

  return (
    <Section id="skillset">
      <SectionTitle className="title">
        Skill Set
      </SectionTitle>
      <List role="list">
        {toolsToShow.map((tool, index) => (
          <ListItem key={index} role="listitem">
            <ImageContainer src={tool.src} />
            <ListTitle>{tool.title}</ListTitle>
          </ListItem>
        ))}

      <Arrows>
        <button disabled={slide * 6 <= 0} onClick={() => setSlide(prev => prev - 1)}>{"< Previous"}</button>
        <button disabled={slide * 6 + 6 >= tools.length} onClick={() => setSlide(prev => prev + 1)}>{"Next >"}</button>
      </Arrows>
      </List>
    </Section>
  );
};

export default SkillSet;