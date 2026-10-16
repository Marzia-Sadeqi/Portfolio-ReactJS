import "../styles/Services.css";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import TiltCard from "./TiltCard.jsx";

const fallbackBg = "linear-gradient(135deg,#fff,#e1e7da)";

export default function Services({ services, core }) {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHead
          label="03 — Services"
          title={<>How I can help<br /><em>your next idea.</em></>}
        />

        <div className="service-list">
          {services.map((service, i) => (
            <Reveal as="article" className="service" delay={i} key={service.title}>
              <div className="service-no">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="core-services-header-cream">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.2L12 16.4 5.7 20.8 8 13.6 2 9.2h7.6z" /></svg>
          Core Services
        </span>
        <h2>Design Solutions<br />Built For Growth</h2>
      </div>

      <div className="services2-container">
        {/* Front-end */}
        <TiltCard as="article" className="services2-brand">
          <h2>{core.frontEnd.title}</h2>
          <p>{core.frontEnd.text}</p>
          {core.frontEnd.pills.map((pill, i) => (
            <span key={pill} className={`services2-pill pill${i + 1}`}>{pill}</span>
          ))}
        </TiltCard>

        {/* UI design */}
        <TiltCard className="services2-uiux">
          <h2>{core.ui.title}</h2>
          <p>{core.ui.text}</p>
          <div className="services2-uiux-image">
            <img src={core.ui.image} alt="UI Design Project" loading="lazy" />
          </div>
        </TiltCard>

        {/* Web experience */}
        <TiltCard as="article" className="services2-web">
          <h2>{core.web.title}</h2>
          <p>{core.web.text}</p>
          <div className="services2-web-preview">
            {core.web.windows.map((win, i) => (
              <div className={`services2-window window${i + 1}`} key={win.image}>
                <div className="window-top">
                  <span className="window-dot d1" />
                  <span className="window-dot d2" />
                  <span className="window-dot d3" />
                </div>
                <div className="window-body">
                  <img
                    src={win.image}
                    alt={win.alt}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.parentElement.style.background = fallbackBg;
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            ))}
            <span className="services2-web-ball" />
          </div>
        </TiltCard>

        {/* Development — floating tool bubbles */}
        <TiltCard className="services2-dev">
          <h2 className="services2-dev-title">{core.development.title}</h2>
          <p className="services2-dev-desc">{core.development.text}</p>
          <div className="services2-dev-glow" />
          {core.development.tools.map((tool) => (
            <div
              key={tool.name}
              className={`services2-dev-tool ${tool.light ? "is-light" : "is-dark"}${tool.invert ? " invert" : ""}`}
              style={{ ...tool.pos, animation: `${tool.anim} ease-in-out infinite` }}
            >
              <img src={tool.src} alt={tool.name} />
            </div>
          ))}
        </TiltCard>

        {/* Call to action */}
        <TiltCard as="article" className="services2-impact">
          <div className="services2-impact-photo">
            <img src={core.cta.image} alt="Portfolio preview" />
          </div>
          <div className="services2-impact-content">
            <div className="services2-line" />
            <span className="services2-trusted">{core.cta.badge}</span>
            <h2>{core.cta.title}</h2>
            <p>{core.cta.text}</p>
            <div className="services2-button-group">
              <a href="#contact">{core.cta.button}</a>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
