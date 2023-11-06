import {
  ImageBackground,
  Content,
  Paragraph,
  DivStyled,
  ContactItem,
  ContactTitle,
  ContactText,
  SvgIcon,
} from "./Contacts.styled";
import { Container } from "components/Container/Container.styled";
import { SectionTitle } from "components/ui/SectionTitle";
import {
  EmailSVG,
  FacebookSVG,
  InstagramSVG,
  LinkedinSVG,
  LocationSVG,
  PhoneSVG,
} from "./svgs";
import bg from "assets/images/contacts_bg.jpg";


const Contacts = () => {
  return (
    <Container as="section">
      <ImageBackground src={bg} />
      <SectionTitle className="title">Let's keep in touch</SectionTitle>
      <Content>
        <Paragraph>
          Feel free to get in touch with me for any inquiries, collaborations,
          or just to say hello. I'm always open to connecting with new people
          and exploring new opportunities.
          {/* You can reach me through the following methods: */}
        </Paragraph>
        <DivStyled>
          <ContactItem>
            <ContactTitle>Address:</ContactTitle>
            <ContactText
              as="a"
              href="https://www.google.com/maps/place/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8327706,23.9298348,12z/data=!3m1!4b1!4m6!3m5!1s0x473add7c09109a57:0x4223c517012378e2!8m2!3d49.839683!4d24.029717!16zL20vMGQ3X24?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon>
                <LocationSVG />
              </SvgIcon>
              <span>Ukraine, Lviv</span>
            </ContactText>
          </ContactItem>

          <ContactItem>
            <ContactTitle>Email:</ContactTitle>
            <ContactText as="a" href="mailto:omelianecb@gmail.com">
              <SvgIcon>
                <EmailSVG />
              </SvgIcon>
              <span>omelianecb@gmail.com</span>
            </ContactText>
          </ContactItem>

          <ContactItem>
            <ContactTitle>Phone:</ContactTitle>
            <ContactText as="a" href="tel:+380630669064">
              <SvgIcon>
                <PhoneSVG />
              </SvgIcon>
              <span>+380630669064</span>
            </ContactText>
          </ContactItem>

          <ContactItem className="flex">
            <SvgIcon
              as="a"
              href="https://www.facebook.com/bogdan.omelianets"
              title="Facebook"
            >
              <FacebookSVG />
            </SvgIcon>
            <SvgIcon
              as="a"
              href="https://www.instagram.com/bohdan_omelianets/"
              title="Instagram"
            >
              <InstagramSVG />
            </SvgIcon>
            <SvgIcon
              as="a"
              href="https://www.linkedin.com/in/bohdan-omelianets-4926a821b/"
              title="LinkedIn"
            >
              <LinkedinSVG />
            </SvgIcon>
          </ContactItem>
        </DivStyled>
      </Content>
    </Container>
  );
};

export default Contacts;
