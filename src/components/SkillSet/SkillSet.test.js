
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillSet from '.';

export const TOOLS = [
  {
    title: "HTML",
    src: "/images/tools/html.png",
  },
  {
    title: "CSS",
    src: "/images/tools/css.png",
  },
  {
    title: "JavaScript",
    src: "/images/tools/js.png",
  },
  {
    title: "TypeScript",
    src: "/images/tools/ts.png",
  },
  {
    title: "React",
    src: "/images/tools/react.png",
  },
  {
    title: "NextJS",
    src: "/images/tools/nextjs.png",
  },
];

describe("Skill Set Component", () => {
  test("List of skills are rendered", () => {
    render(<SkillSet tools={TOOLS} />)
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  
  test("List has an appropriate length", () => {
    render(<SkillSet tools={TOOLS} />)
    expect(screen.getAllByRole("listitem")).toHaveLength(6);
  });

})