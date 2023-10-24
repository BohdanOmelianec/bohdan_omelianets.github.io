import { useState, useEffect } from "react";
import { AppBarStyled, List, ListItem, ListWrapper } from "./AppBar.styled";
import { TABS } from "constants/constants";


type Props = {
  activeTab: number | undefined;
  setActiveTab: (i: number) => void;
};


const AppBar = ({ activeTab, setActiveTab }: Props) => {
  const [isItemVisible, setIsItemVisible] = useState(false);

  useEffect(() => {
    setIsItemVisible(true);
    const items = document.querySelectorAll('.list_hidden');
    items.forEach(item => item.classList.remove("list_hidden"));
  }, []);

  const onTabClick = (index: number) => setActiveTab(index);
  
  return (
    <AppBarStyled>
      <List>
        {TABS.map((tab, index) => (
          <ListWrapper key={tab.id} className={`$ ${isItemVisible ? "" : "list_hidden"}`}>
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
