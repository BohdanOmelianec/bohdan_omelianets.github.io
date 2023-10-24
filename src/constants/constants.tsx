import AboutMe from "components/Tabs/AboutMe";
import Contacts from "components/Tabs/Contacts";
import Expirience from "components/Tabs/Expirience";

export const COLORS = {
  darkViolet: "#0e0117",
  lightBlue: "#2d94f0",
  pink: "#ff00f1",
}

export const TABS = [
  {
    id: 1,
    title: "ABOUT ME",
    component: <AboutMe />,
  },
  {
    id: 2,
    title: "EXPIRIENCE",
    component: <Expirience />,
  },
  {
    id: 3,
    title: "CONTACTS",
    component: <Contacts />,
  },
];

export const APP_BAR_HEIGHT = 60;