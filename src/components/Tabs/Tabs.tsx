import AboutMeContent from "components/Contents/AboutMeContent";
import TabItem from "./TabItem";
import { Container, Tab, TabsWrapper } from "./Tabs.styled";
// import { TABS } from "constants/constants";
import ExperienceContent from "components/Contents/ExperienceContent";
import ContactsContent from "components/Contents/ContactsContent";


export const TABS = [
  {
    id: 1,
    title: "ABOUT ME",
    titleStart: "About",
    titleEnd: "me",
    component: <AboutMeContent />,
  },
  {
    id: 2,
    title: "EXPERIENCE",
    titleStart: "Expe",
    titleEnd: "rience",
    component: <ExperienceContent />,
  },
  {
    id: 3,
    title: "CONTACTS",
    titleStart: "Con",
    titleEnd: "tacts",
    component: <ContactsContent />,
  },
];

type Props = {
  activeTab: number | undefined;
};

const Tabs = ({ activeTab }: Props) => {

  return (
    <Container>
      {/* <TabsWrapper $activeTab={activeTab || 0} className="tabs_wrapper">
        {TABS.map((tab, index) => (
          <Tab
            key={tab.id}
            className={activeTab === index ? "active" : ""}
            $index={index}
          >
            <TabItem
              titleStar={tab.titleStart}
              titleEnd={tab.titleEnd}
              isActive={activeTab === index}
              component={tab.component}
            />
          </Tab>
        ))}
      </TabsWrapper> */}
    </Container>
  );
};

export default Tabs;
