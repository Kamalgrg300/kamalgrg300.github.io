import "./about.css";

import { Intro } from "../intro/intro";
import { Skills } from "../skills/skills";

export function About() {
  return (
    <div className="App">
      <div className="content">
        <Intro />
        <Skills />
      </div>
    </div>
  );
}
