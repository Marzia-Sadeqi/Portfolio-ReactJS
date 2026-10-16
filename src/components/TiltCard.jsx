// Card that tilts toward the cursor on desktop (replaces the old script.js effect).
export default function TiltCard({ as: Tag = "div", className = "", children }) {
  const handleMove = (e) => {
    if (window.innerWidth <= 800) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const rotateX = (e.clientY - rect.top - rect.height / 2) / 80;
    const rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 80;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };
  const handleLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <Tag className={`services2-card ${className}`} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </Tag>
  );
}
