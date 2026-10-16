import "../styles/Projects.css";
import { useState } from "react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import ProjectCard from "./ProjectCard.jsx";

const INITIAL_COUNT = 4;

export default function Projects({ projects }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects">
      <div className="container">
        <SectionHead
          label="02 — Featured Projects"
          title={<>Selected work<br /><em>I'm proud of.</em></>}
          intro="A selection of practice projects and front-end work focused on clean UI, responsive layouts, and strong visual hierarchy."
        />

        <div className="projects-grid">
          {visible.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <Reveal className="projects-more">
            <button className="outline-btn" onClick={() => setShowAll((s) => !s)} aria-expanded={showAll}>
              {showAll ? "Show Less ↑" : "View All Projects ↓"}
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
