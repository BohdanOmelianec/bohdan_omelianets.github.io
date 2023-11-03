import styled from "styled-components";
import { SupportedHTMLElements } from "styled-components/dist/types";


type Props = {
  textContent: string,
  asElement?: SupportedHTMLElements,
  className?: string,
};

export const Title = styled.h2`
  opacity: 1;
  font-size: calc(var(--index) * 1.7);
  letter-spacing: 3px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  width: min-content;
  margin-bottom: 64px;
  margin-inline: auto;

  & .accent_pink {
    color: var(--accentPink);
  }
`;


const CodeTitle = ({ className, textContent, asElement = "h2" }: Props) => {
  return (
    <Title className={className} as={asElement}>
      <span className="accent_pink">{'< '}</span>
      <span>{textContent}</span>
      <span className="accent_pink">{' />'}</span>
    </Title>
  )
};

export default CodeTitle;