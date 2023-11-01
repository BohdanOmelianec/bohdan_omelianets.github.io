import { AppBarStyled, Logo, List, ListItem } from "./AppBar.styled";

const NavLinks = [
  {
    id: 1,
    title: "ABOUT ME",
  },
  {
    id: 2,
    title: "EXPERIENCE",
  },
  {
    id: 3,
    title: "CONTACTS",
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
            {link.title}
          </ListItem>
        ))}
      </List>
    </AppBarStyled>
  );
};

export default AppBar;
