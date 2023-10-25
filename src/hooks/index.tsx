import { scaleItemTime, tabsRotateTime } from "components/Tabs/Tabs.styled";
import { useState, useEffect } from "react";

const timeout = (tabsRotateTime + scaleItemTime ) * 1000;

export const useContentShow = (isActive: boolean) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if(isActive) {
      timerId = setTimeout(() => {
        console.log("start");
        setShowContent(true)
      }, timeout)
    } else setShowContent(false);
    return () => clearTimeout(timerId);
  }, [isActive]);

  return showContent;
}