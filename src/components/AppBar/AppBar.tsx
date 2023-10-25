import { TABS } from "components/Tabs/Tabs";
import { AppBarStyled, List, ListItem, ListWrapper } from "./AppBar.styled";



type Props = {
  activeTab: number | undefined;
  setActiveTab: (i: number) => void;
};


const AppBar = ({ activeTab, setActiveTab }: Props) => {
  const onTabClick = (index: number) => setActiveTab(index);
  
  return (
    <AppBarStyled>
      <List>
        {TABS.map((tab, index) => (
          <ListWrapper 
            key={tab.id}
            className="list_animation"
          >
            <ListItem
              className={`${activeTab === index ? "active" : ""}`}
              onClick={() => onTabClick(index)}
            >
              {tab.title}
            </ListItem>
          </ListWrapper>
        ))}
      </List>
    </AppBarStyled>
  );
};

export default AppBar;
