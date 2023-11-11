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
  margin-bottom: 3rem;

  &.show {
    opacity: .4;
    transform: translateY(0);
  }

  @media(max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 4rem;
  }
`;