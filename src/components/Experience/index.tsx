import {
  DivWrapper,
  DivRoad,
  DivProjects,
  ListItem,
  ProjectCard,
} from "./Experience.styled";
import { Section } from "components/common/Containers.styled";
import { SectionTitle } from "components/common/SectionTitle.styled";

const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle className="title">Experience</SectionTitle>
      <DivWrapper>
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
            <h4>Questionnaire</h4>
            <p className="hidden">
              An app similar to Google Forms that allows recruiters to create a
              questionnaire for potential employees who can sign up through an
              email. The best candidates were selected by filtering based on the
              best results. The app was rewritten and improved using React and
              Next JS in collaboration with DevOps Engineer. Additionally, the
              app had role-based authorization for candidates and recruiters
              secured by NextAuth.
            </p>
          </ProjectCard>
          <ProjectCard>
            <h4>Responsible Ukrainians</h4>
            <p className="hidden">
              The web project <a
                style={{color: "var(--accentBlue)"}}
                href="https://www.reukr.in.ua/"
                title="Відповідальні Українці"
                target="_blank"
                rel="noreferrer"
              >
                (www.reukr.in.ua)
              </a> for a charity foundation located in Rivne. The primary objective
              was to establish a user-friendly platform that facilitates the
              collection of donations for the essential needs of the Ukrainian
              army. This platform was designed to be easily manageable through a
              Content Management System. My piece of work involved creating a
              layout from scratch acording to a design. Additionally, I was
              tasked with developing the core features of the platform using
              React and NextJS and implementing security measures through the
              integration of Auth0, ensuring that the admin panel remained
              protected and secure.
            </p>
          </ProjectCard>
          <ProjectCard>
            <h4>OfficeMap</h4>
            <p className="hidden">
              It is the platform that allows users to effortlessly familiarize
              themselves with a map of an office. Moreover, it facilitates the
              seamless discovery of available workplaces or meeting rooms, all
              of which can be conveniently reserved for a specific date. My
              responsibility involved enhancing the existing app by fixing known
              bugs while also making improvements to specific aspects of it.
            </p>
          </ProjectCard>
        </DivProjects>
      </DivWrapper>
    </Section>
  );
};

export default Experience;
