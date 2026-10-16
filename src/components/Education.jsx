import "../styles/Education.css";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Education({ education, certificates }) {
  return (
    <section className="education" id="education">
      <div className="container">
        <SectionHead
          label="05 — Education & Certificates"
          title={<>Learning that<br />shapes my <em>craft.</em></>}
        />

        <div className="edu-grid">
          <div className="edu-column">
            <h3 className="edu-heading">Education</h3>
            {education.map((item, i) => (
              <Reveal as="article" className="edu-card" delay={i} key={item.title}>
                <span className="edu-period">{item.period}</span>
                <h4>{item.title}</h4>
                <span className="edu-place">{item.place}</span>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="edu-column">
            <h3 className="edu-heading">Certificates</h3>
            {certificates.map((cert, i) => (
              <Reveal as="article" className="cert-card" delay={i} key={cert.title}>
                <div className="cert-icon" aria-hidden="true">✦</div>
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <span>{cert.issuer} · {cert.year}</span>
                </div>
                {cert.link && (
                  <a className="cert-link" href={cert.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${cert.title} certificate`}>
                    View ↗
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
