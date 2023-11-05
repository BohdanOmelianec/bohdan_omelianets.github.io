
import styled from "styled-components";
// import {
  
// } from "./Contacts.styled";
import { Container } from "components/Container/Container.styled";
import { SectionTitle } from "components/ui/SectionTitle";




const ImageBackground = styled.img`
  position: absolute;
  // inset: 0;
  top: 20%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mask-image: radial-gradient(circle at bottom, rgb(0,0,0,.5) 10%, transparent 65%);
  -webkit-mask-image: radial-gradient(circle at bottom, rgb(0,0,0,.5) 10%, transparent 65%);
  z-index: -1;
`;

const Content = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // border: 1px solid orange;
  justify-items: center;
  align-items: center;
`;

const Paragraph = styled.p`
  width: 85%;
  letter-spacing: 2px;
  font-size: 24px;
  padding: 16px;
`;

const Links = styled.div`
  height: 100%;
  // background: var(--darkStaleBlueTr);
  // border-radius: 20px;
  // width: 70%;
  font-size: 18px;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 32px;
`;

const LinkItem = styled.div`
  height: 100%;
  // background: var(--darkStaleBlueTr);
  border-radius: 20px;
  // width: 70%;
  font-size: 18px;
  padding: 16px;

  &:nth-child(3) {
    grid-column: 1/3;
  }

  &.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

`;

const SocialIcon = styled.a`
  display: inline-block;
  width: 50px;
  height: 50px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;


const Contacts = () => {
  return (
    <Container as="section">
      <ImageBackground src="/images/contacts_bg.jpg" />
      <SectionTitle className="title">
        Let's keep in touch
      </SectionTitle>
      <Content>
        <Paragraph>
          Feel free to get in touch with me for any inquiries, collaborations, or just to say hello.
          I'm always open to connecting with new people and exploring new opportunities.
          {/* You can reach me through the following methods: */}
        </Paragraph>
        <Links>
          <LinkItem>Email: omelianecb@gmail.com</LinkItem>
          <LinkItem>Phone: 0630669064</LinkItem>
          <LinkItem className="flex">
            <SocialIcon><img src="/images/contacts/facebook.png" width="100" alt="" /></SocialIcon>
            <SocialIcon><img src="/images/contacts/instagram.png" width="100" alt="" /></SocialIcon>
            <SocialIcon><img src="/images/contacts/linkedin.png" width="100" alt="" /></SocialIcon>
          </LinkItem>
        </Links>

      </Content>
      
    </Container>
  );
};

export default Contacts;