import { useState } from "react";
import { AppBarStyled, Logo, List, ListItem, BurgerMenu, BurgerIcon } from "./AppBar.styled";

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
  const [showMenu, setShowMenu] = useState(false);

  const onListItemClick = (index: number) => {
    setActiveTab(index);
    if(showMenu) {
      setShowMenu(false);
    }
  }

  return (
    <AppBarStyled>
      <Logo asElement="h1" textContent="Bohdan Omelianets" />
      <List className={showMenu ? "show_menu" : ""}>
        {NavLinks.map((link, index) => (
          <ListItem
            key={link.id}
            className={`${activeTab === index ? "active" : ""} list_animation`}
            onClick={() => onListItemClick(index)}
          >
            <a href={`#${link.elementId}`} title={link.title}>
              {link.title}
            </a>
          </ListItem>
        ))}
      </List>
      <BurgerMenu onClick={() => setShowMenu(prev => !prev)}>
        <BurgerIcon />
      </BurgerMenu>
    </AppBarStyled>
  );
};

export default AppBar;
