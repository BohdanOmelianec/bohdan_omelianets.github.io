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
              <span className="period">September 09 - June 13</span>
              <span className="position">
                National University Lviv Polytechnic
              </span>
              <span className="additional_text">
                Bachelor degree, Electrical system ant networks
              </span>
            </ListItem>
            <ListItem>
              <span className="period">June 21 - August 21</span>
              <span className="position">Cursor Education</span>
              <span className="additional_text">Frontend Advanced</span>
            </ListItem>
            <ListItem>
              <span className="period">September 21 - November 21</span>
              <span className="position">Frontend developer at Inforce</span>
            </ListItem>
            <ListItem>
              <span className="period">November 21 - Until now</span>
              <span className="position">Frontend developer at Levi9</span>
            </ListItem>
            <ListItem>
              <span className="position">Your company might be here</span>
            </ListItem>
          </ul>
        </DivRoad>
        <DivProjects>
          <h3>Projects I participated in</h3>
          <ProjectCard>
            <h4>Questionnare</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              asperiores maxime facere dolores inventore eius? Alias officia ex
              delectus sed eum, adipisci nihil error beatae.
            </p>
          </ProjectCard>
          <ProjectCard>
            <h4>
              <a
                href="https://www.reukr.in.ua/"
                target="_blank"
                rel="noreferrer"
              >
                Responsible Ukrainians
              </a>
            </h4>
            <p>
              The web project for a charity foundation located in Rivne. The
              primary objective was to establish a user-friendly platform that
              facilitates the collection of donations for the essential needs of
              the Ukrainian army. This platform was designed to be easily
              manageable through a Content Management System. My piece of work
              involved creating a layout from scratch acording to a design.
              Additionally, I was tasked with developing the core features of
              the platform using React and NextJS and implementing security
              measures through the integration of Auth0, ensuring that the admin
              panel remained protected and secure. secured admin panel.
            </p>
          </ProjectCard>
          <ProjectCard>
            <h4>OfficeMap</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              asperiores maxime facere dolores inventore eius? Alias officia ex
              delectus sed eum, adipisci nihil error beatae.
            </p>
          </ProjectCard>
        </DivProjects>
      </ContainerWrapper>
    </Container>
  );
};

export default Experience;
