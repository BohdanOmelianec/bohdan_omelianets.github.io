
import styled from "styled-components";
import CodeTitle from "components/ui/CodeTitle";
// import {
  
// } from "./SkillSet.styled";
import { Container } from "components/Container/Container.styled";



const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-content: center;
  align-items: center;
  // justify-items: center;
  gap: 32px;
`;

const ListItem = styled.li`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 16px;
  background: var(--darkStaleBlueTr);
  border-radius: 30px;
  transition: all .7s ease-out; 
  // box-shadow: 0 0 20px -10px var(--accentBlue);

  &:hover {
    & img {
    };
    transform: scale(1.07);
    background: var(--darkStaleBlue);
`;

const ListTitle = styled.h3`
  width: max-content;
  margin-inline: auto;
  font-size: calc(var(--index));
  font-weight: 400;
  white-space: nowrap;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 16px;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
`;

type Props = {
  tools: {
    title: string,
    src: string
  }[]
};
const SkillSet = ({ tools }: Props) => {
  return (
    <Container as="section">
      <CodeTitle textContent="Skill Set" />
      <List role="list">
        {tools.map((tool, index) => (
          <ListItem key={index} role="listitem">
            <ListTitle>{tool.title}</ListTitle>
            <ImageContainer>
              <Image src={tool.src} alt={tool.title} />
            </ImageContainer>
          </ListItem>
        ))}

      </List>
    </Container>
  );
};

export default SkillSet;