
import styled from "styled-components";
// import {
  
// } from "./Experience.styled";
import { Container } from "components/Container/Container.styled";
import { SectionTitle } from "components/ui/SectionTitle";


const Experience = () => {
  return (
    <Container as="section">
      {/* <CodeTitle textContent="Experience" /> */}
      <SectionTitle className="title">
        Experience
      </SectionTitle>
    </Container>
  );
};

export default Experience;