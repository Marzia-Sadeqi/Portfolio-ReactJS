import Reveal from "./Reveal.jsx";

export default function SectionHead({ label, title, intro }) {
  return (
    <Reveal className="section-head">
      <div className="section-label">{label}</div>
      {intro ? (
        <div>
          <h2>{title}</h2>
          <p style={{ marginTop: 15 }}>{intro}</p>
        </div>
      ) : (
        <h2>{title}</h2>
      )}
    </Reveal>
  );
}
