import { useState } from "react";
import {
  AppBarStyled,
  Logo,
  List,
  ListItem,
  BurgerMenu,
  BurgerIcon,
} from "./AppBar.styled";

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

const AppBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onListItemClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <AppBarStyled>
      <Logo>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.25rem"
          viewBox="0 0 640 512"
          fill="var(--accentBlue)"
        >
          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
        </svg>
        <span>B.Omelianets</span>
      </Logo>
      <List className={showMenu ? "show_menu" : ""}>
        {NavLinks.map((link, index) => (
          <ListItem
            key={link.id}
            className="list_animation"
            onClick={onListItemClick}
          >
            <a href={`#${link.elementId}`} title={link.title}>
              {link.title}
            </a>
          </ListItem>
        ))}
      </List>
      <BurgerMenu onClick={() => setShowMenu((prev) => !prev)}>
        <BurgerIcon />
      </BurgerMenu>
    </AppBarStyled>
  );
};

export default AppBar;
