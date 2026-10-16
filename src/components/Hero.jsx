import "../styles/Hero.css";
import Reveal from "./Reveal.jsx";

export default function Hero({ profile }) {
  const { name, heroWords, tagline, note, photo } = profile;

  return (
    <section className="hero" id="home">
      <div className="container">
        <Reveal className="availability">
          <span className="availability-dot" />
          {name}
        </Reveal>

        <Reveal className="hero-split" delay={1}>
          <h1 className="hero-word hero-word-left">{heroWords.left}</h1>

          <div className="hero-photo-frame">
            <img className="hero-photo" src={photo} alt={name} onError={(e) => (e.currentTarget.style.display = "none")} />
          </div>

          <div className="hero-word-right-wrap">
            <h1 className="hero-word hero-word-right">{heroWords.right}</h1>
            <p className="hero-sub">
              {tagline[0]} <br /> {tagline[1]}
            </p>
          </div>
        </Reveal>

        <Reveal className="hero-actions" delay={2}>
          <a className="btn btn-primary" href="#projects">View My Work ↗</a>
          <a className="btn btn-secondary" href="#contact">Let's Connect</a>
        </Reveal>

        <p className="hero-note">{note}</p>
      </div>
    </section>
  );
}
