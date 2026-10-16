import "../styles/Skills.css";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import SkillCard from "./SkillCard.jsx";

export default function Skills({ skills, exploring }) {
  return (
    <section id="skills">
      <div className="container">
        <SectionHead
          label="04 — Skills"
          title={<>The tools I use<br />to <em>design & build.</em></>}
        />

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        <Reveal className="skills-more">
          <span className="skills-more-label">Also exploring</span>
          <div className="explore-chips">
            {exploring.map((item) => (
              <div className="explore-chip" key={item}>{item}</div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
