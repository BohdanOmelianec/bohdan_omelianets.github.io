import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 1rem;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 4rem;
  }
`;

export const DivRoad = styled.div`

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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  & h3 {
    font-family: GabaritoSemiBold;
    font-size: 1.5rem;
  }
`;

export const ProjectCard = styled.div`
  width: clamp(300px, 100%, 400px);
  // height: 120px;
  background: var(--glacier);
  backdrop-filter: blur(5px);
  border-radius: 1.25rem;
  font-size: 1.125rem;
  padding: 1rem;

  & h4 {
    font-family: GabaritoSemiBold;
    font-weight: 400;
    color: var(--accentBlue);
    margin-bottom: .5rem;

    background: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
  }
`;