import styled from "styled-components";

export const DivWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  place-items: start center;
  gap: 2rem;
  padding: 1rem;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

export const DivRoad = styled.div`
  position: sticky;
  top: calc(3rem + var(--appBarHeight));

  @media(max-width: 768px) {
    position: initial;
  }
`;

export const ListItem = styled.li`
  border-left: 2px solid var(--lightGray);
  padding: 0 0 3rem 2rem;
  font-size: 1.125rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    transform: translateX(calc(-50% - 1px));
    background: var(--accentBlue);
    border-radius: 100%;
    box-shadow: 0 0 20px 2px var(--accentBlue);
  }

  & span.period {
    font-size: .875rem;
    color: var(--textGray);
  }

  & span.position {
    font-family: GabaritoSemiBold;
  }

  & span.additional_text {
    font-size: .875rem;
  }
`;

export const DivProjects = styled.div`
  max-width: 500px;

  & > * + * {
    margin-top: 1.5rem;
  }

  & h3 {
    font-family: GabaritoSemiBold;
    font-size: 2rem;
  }
`;

export const ProjectCard = styled.div`
  width: 100%;
  background: var(--glacier);
  backdrop-filter: blur(5px);
  border-radius: 1.25rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
  padding: 1rem 1rem 2rem;

  & h4 {
    font-family: GabaritoSemiBold;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--accentBlue);
    margin-bottom: 1rem;


    background: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
  }
`;