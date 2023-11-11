import {
  List,
  ListItem,
  ImageContainer,
  ListTitle,
  Dots,
} from "./SkillSet.styled";
import { Section } from "components/Container/Content.styled";
import { SectionTitle } from "components/ui/SectionTitle";
import { TOOLS } from "constants/constants";


const SkillSet = () => {
  return (
    <Section id="skillset">
      <SectionTitle className="title">Skill Set</SectionTitle>
      <List role="list">
        {TOOLS.map((tool, index) => (
          <ListItem key={index} role="listitem">
            <ImageContainer src={tool.src} />
            <ListTitle>{tool.title}</ListTitle>
          </ListItem>
        ))}
        <ListItem role="listitem">
          <Dots>
            <span></span>
            <span></span>
            <span></span>
          </Dots>
          <ListTitle>Learning</ListTitle>
        </ListItem>

      </List>
    </Section>
  );
};

export default SkillSet;
