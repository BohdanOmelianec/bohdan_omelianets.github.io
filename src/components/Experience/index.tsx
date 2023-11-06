import {
  ContainerWrapper,
  DivRoad,
  DivProjects,
  ListItem,
  ProjectCard,
} from "./Experience.styled";
import { Container } from "components/Container/Container.styled";
import { SectionTitle } from "components/ui/SectionTitle";

const Experience = () => {
  return (
    <Container as="section">
      <SectionTitle className="title">Experience</SectionTitle>
      <ContainerWrapper>
        <DivRoad>
          <ul>
            <ListItem>
              {/* <div> */}
                <span className="period">September 09 - June 13</span>
                <span className="position">National University Lviv Polytechnic</span>
                <div className="short_text">Bachelor degree, Electrical system ant networks</div>
              {/* </div> */}
            </ListItem>
            <ListItem>
              {/* <div> */}
                <span className="period">September 21 - November 21</span>
                <span className="position">Frontend developer at Inforce</span>
                <div className="short_text"></div>
              {/* </div> */}
            </ListItem>
            <ListItem>
              {/* <div> */}
                <span className="period">November 21 - Until now</span>
                <span className="position">Frontend developer at Levi9</span>
                <div className="short_text"></div>
              {/* </div> */}
            </ListItem>
            <ListItem>
              {/* <div> */}
                <div className="Position">Your company might be here</div>
              {/* </div> */}
            </ListItem>
          </ul>
        </DivRoad>
        <DivProjects>
          <ProjectCard>
            <div>Quastionnare</div>
          </ProjectCard>
          <ProjectCard>
            <div>Responsible Ukrainians</div>
          </ProjectCard>
          <ProjectCard>
            <div>OfficeMap</div>
          </ProjectCard>
        </DivProjects>
      </ContainerWrapper>
    </Container>
  );
};

export default Experience;
