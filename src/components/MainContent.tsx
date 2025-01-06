import { projectsData } from "@/data/proj";
import { About } from "./About";
import Section from "./Section";
import { experienceData } from "@/data/exp";
import { Skills } from "./Skills";
import { Resume } from "./Resume";
import { Contact } from "./Contact";


export function MainContent() {
  return (
    <div className="md:ml-[25%] md:w-3/4 sm:w-full h-full overflow-y-auto bg-dark text-white">
      <About />
      <Skills />
      {/* <GameOfLife /> */}
      <Section title="Experience" data={experienceData} />
      <Section title="Projects" data={projectsData} />
      <Contact />
      <Resume />
    </div>
  );
}