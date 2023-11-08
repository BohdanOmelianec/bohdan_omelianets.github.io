import { AppBarStyled, Logo, List, ListItem, BurgerMenu } from "./AppBar.styled";

const NavLinks = [
  {
    id: 1,
    title: "HOME",
    elementId: "home",
  },
  {
    id: 2,
    title: "EXPERIENCE",
    elementId: "experience",
  },
  {
    id: 3,
    title: "SKILL SET",
    elementId: "skillset",
  },
  {
    id: 4,
    title: "CONTACTS",
    elementId: "contacts",
  },
];

type Props = {
  activeTab: number | undefined;
  setActiveTab: (i: number) => void;
};

const AppBar = ({ activeTab, setActiveTab }: Props) => {
  return (
    <AppBarStyled>
      <Logo asElement="h1" textContent="Bohdan Omelianets" />
      <List role="navigation">
        {NavLinks.map((link, index) => (
          <ListItem
            role="navigation-link"
            key={link.id}
            className={`${activeTab === index ? "active" : ""} list_animation`}
            onClick={() => setActiveTab(index)}
          >
            <a href={`#${link.elementId}`} title={link.title}>
              {link.title}
            </a>
          </ListItem>
        ))}
      </List>
      <BurgerMenu />
    </AppBarStyled>
  );
};

export default AppBar;
