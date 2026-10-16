import Reveal from "./Reveal.jsx";

const MAX_LEVEL = 4;

export default function SkillCard({ skill, index }) {
  const { name, description, icon, level, tag } = skill;

  return (
    <Reveal as="article" className="tool-card" delay={index % 3}>
      <div className="tool-top">
        <div className="tool-icon" aria-hidden="true">
          <img src={icon} alt="" loading="lazy" />
        </div>
        <div className="tool-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="tool-footer">
        <div className="tool-dots" aria-hidden="true">
          {Array.from({ length: MAX_LEVEL }, (_, i) => (
            <span key={i} className={`dot${i < level ? " filled" : ""}`} />
          ))}
        </div>
        <span className="tool-tag">{tag}</span>
      </div>
    </Reveal>
  );
}
