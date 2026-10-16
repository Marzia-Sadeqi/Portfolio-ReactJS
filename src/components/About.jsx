import "../styles/About.css";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function About({ profile }) {
  const { name, role, photo, about } = profile;

  return (
    <section className="about" id="about">
      <div className="container">
        <SectionHead
          label="01 — About Me"
          title={<>Designer, developer,<br /><em>problem solver.</em></>}
        />

        <div className="about-grid">
          <Reveal className="about-visual" delay={1}>
            <img className="about-photo" src={photo} alt={name} onError={(e) => (e.currentTarget.style.display = "none")} />
            <div className="about-dock">
              {about.dock.map((chip) => (
                <span className="dock-chip" key={chip}>{chip}</span>
              ))}
            </div>
            <div className="about-overlay">
              <strong>{name}</strong>
              <span>{role}</span>
            </div>
          </Reveal>

          <div className="about-right">
            <Reveal as="article" className="bio-card" delay={2}>
              <h3>{about.heading}</h3>
              <span className="role-tag">{about.roleTag}</span>
              {about.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <div className="signature">{name}</div>
            </Reveal>

            <Reveal className="skill-chips" delay={3}>
              {about.chips.map((chip) => (
                <div className="skill-chip" key={chip}>{chip}</div>
              ))}
            </Reveal>

            <Reveal as="a" className="about-cta" delay={4} href="#contact">
              <span>Let's work together</span>
              <span className="arrow-circle">↗</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
