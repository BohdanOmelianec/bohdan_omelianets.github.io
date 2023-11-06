import styled from "styled-components";

export const SectionTitle = styled.h2`
  width: fit-content;
  font-size: 5rem;
  opacity: 0;
  background: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transform: translateY(60%);
  transition: all .6s .2s ease-out;

  &.show {
    opacity: .4;
    transform: translateY(0);
  }
`;