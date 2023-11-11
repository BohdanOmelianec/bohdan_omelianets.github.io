import { ImageBackground, Content, Paragraph } from "./Contacts.styled";
import { Section } from "components/Container/Content.styled";
import { SectionTitle } from "components/ui/SectionTitle";
import ContactsBlock from "./ContactsBlock";
import bg from "assets/images/contacts_bg.jpg";

const Contacts = () => {
  return (
    <Section style={{ minHeight: 0, overflow: "hidden" }} id="contacts">
      <ImageBackground src={bg} alt="Background image with two hands touching" />
      <SectionTitle className="title">Let's keep in touch</SectionTitle>
      <Content>
        <Paragraph>
          Feel free to get in touch with me for any inquiries, collaborations,
          or just to say hello. I'm always open to connecting with new people
          and exploring new opportunities.
        </Paragraph>
        <ContactsBlock />
      </Content>
    </Section>
  );
};

export default Contacts;
