import { useEffect, useRef, useState } from "react";

// Fades an element in the first time it scrolls into view.
// `as` lets it render any tag so the page markup stays the same as before.
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -35px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal", delay ? `delay-${delay}` : "", visible ? "visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
