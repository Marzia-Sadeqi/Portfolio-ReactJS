import Reveal from "./Reveal.jsx";

export default function ProjectCard({ project, index }) {
  const { title, type, tone, letter, image, description, tech, link } = project;

  return (
    <Reveal as="article" className="project-card" delay={index % 2}>
      <div className={`project-image ${tone}`}>
        <img src={image} alt={`${title} project screenshot`} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-type">{type}</span>
        {letter && <span className="project-letter">{letter}</span>}
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-footer">
          <div className="tech">
            {tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <a className="project-link" href={link} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} project`}>
            View Project ↗
          </a>
        </div>
      </div>
    </Reveal>
  );
}
