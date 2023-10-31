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
  const onTabClick = (index: number) => setActiveTab(index);
  
  return (
    <AppBarStyled>
      <Logo asElement="h1" textContent="Bohdan Omelianets" />
      <List>
        {NavLinks.map((link, index) => (
          <ListItem
            key={link.id}
            className={`${activeTab === index ? "active" : ""} list_animation`}
            onClick={() => onTabClick(index)}
          >
            {link.title}
          </ListItem>
        ))}
      </List>
    </AppBarStyled>
  );
};

export default AppBar;
