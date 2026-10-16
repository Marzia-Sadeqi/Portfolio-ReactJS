import "../styles/Navbar.css";
import { useEffect, useMemo, useState } from "react";
import useScrolled from "../hooks/useScrolled.js";
import useActiveSection from "../hooks/useActiveSection.js";

export default function Navbar({ brand, links }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const ids = useMemo(() => links.map((l) => l.id), [links]);
  const active = useActiveSection(ids);

  const close = () => setOpen(false);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  // close on Escape, and when resized back to desktop width
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    const onResize = () => window.innerWidth > 950 && close();
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={close}>
          {brand}<span>.</span>
        </a>

        <nav className={`nav-links${open ? " open" : ""}`} id="navLinks" aria-label="Primary navigation">
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : undefined} onClick={close}>
              {label}
            </a>
          ))}
          <a className="nav-cta nav-cta-mobile" href="#contact" onClick={close}>Let's Talk ↗</a>
        </nav>

        <a className="nav-cta nav-cta-desktop" href="#contact">Let's Talk ↗</a>

        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </header>

      <div className={`nav-overlay${open ? " visible" : ""}`} onClick={close} />
    </>
  );
}
