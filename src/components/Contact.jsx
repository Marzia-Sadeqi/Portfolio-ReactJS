import "../styles/Contact.css";
import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import SocialIcon from "./SocialIcon.jsx";

const emptyForm = { name: "", email: "", service: "", message: "" };

export default function Contact({ contact }) {
  const { copy, email, details, socials, services, formEndpoint } = contact;
  const [values, setValues] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // return the button to normal a few seconds after a successful send
  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setValues(emptyForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const buttonLabel = { idle: "Send Message ↗", sending: "Sending…", success: "Message Sent ✓", error: "Send Message ↗" }[status];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHead
          label="06 — Contact"
          title={<>Let's build something<br /><em>meaningful.</em></>}
        />

        <div className="contact-grid">
          <Reveal>
            <p className="contact-copy">{copy}</p>

            <div className="contact-details">
              {details.map(({ icon, label, value, href }) => (
                <div className="contact-detail" key={label}>
                  <div className="contact-icon">{icon}</div>
                  <div>
                    <small>{label}</small>
                    {href ? <a href={href}><span>{value}</span></a> : <span>{value}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="socials">
              {socials.map(({ name, label, href }) => (
                <a className="social" key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <SocialIcon name={name} />
                  <span>{label} ↗</span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="form-card" delay={2}>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="Enter your name" value={values.name} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" value={values.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service" value={values.service} onChange={handleChange}>
                  <option value="">What do you need?</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Tell Me About Your Project</label>
                <textarea id="message" name="message" placeholder="Share your idea, goals, timeline..." value={values.message} onChange={handleChange} required />
              </div>

              <button
                className="submit"
                type="submit"
                disabled={status === "sending"}
                style={status === "success" ? { background: "#4f8b5b" } : undefined}
              >
                {buttonLabel}
              </button>

              {status === "success" && <p className="form-status success" role="status">Thanks! Your message was sent.</p>}
              {status === "error" && (
                <p className="form-status error" role="alert">
                  Something went wrong. Please try again, or email <a href={`mailto:${email}`}>{email}</a>.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
