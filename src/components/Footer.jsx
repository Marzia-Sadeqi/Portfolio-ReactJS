import "../styles/Footer.css";
export default function Footer({ brand, name, links }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">{brand}<span>.</span></div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {links.map(({ id, label }) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <p>Designed & developed with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
