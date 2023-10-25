import { ReactNode } from "react";
import { ContentAnimation, TabWrapper, Title } from "./Tab.styled";
import { useContentShow } from "hooks";


type Props = {
  titleStar: string,
  titleEnd: string,
  isActive: boolean,
  component: ReactNode | undefined,
};

const TabItem = ({ titleStar, titleEnd, isActive, component }: Props) => {
  const showContent = useContentShow(isActive);

  return (
    <TabWrapper>
      <Title $showContent={showContent} >{ titleStar }<span className="title_accent">{ titleEnd }</span></Title>
      {showContent ? <ContentAnimation>{component}</ContentAnimation> : null}
    </TabWrapper>
  )
};
export default TabItem;