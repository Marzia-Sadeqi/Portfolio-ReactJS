// All portfolio content lives here. Components receive it as props,
// so editing text, links or projects never means touching JSX.

export const profile = {
  name: "Marzia Sadeqi",
  brand: "Marzia",
  role: "Front-End Developer",
  heroWords: { left: "Front-end", right: "Developer" },
  tagline: ["Designing intuitive interfaces. Building", "meaningful web experiences."],
  note: "Based in Afghanistan · Open to remote opportunities",
  photo: "/images/profile.webp",
  about: {
    heading: "Nice to meet you.",
    roleTag: "Design + Development",
    dock: ["Front-End", "UI Design", "Figma"],
    paragraphs: [
      "I'm Marzia Sadeqi, a front-end developer passionate about creating clean designs and modern, responsive websites.",
      "I enjoy turning ideas into structured interfaces while paying close attention to typography, spacing, visual hierarchy, usability, and responsive behavior.",
    ],
    chips: ["HTML & CSS", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design", "Git & GitHub"],
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export const projects = [
  {
    title: "Findit Real Estate",
    type: "REAL ESTATE",
    tone: "one",
    image: "/images/first project.png",
    description:
      "A practice project created from an existing real-estate website to strengthen front-end development, HTML, CSS, layout, and responsive design skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://ur-dream-house.netlify.app/",
  },
  {
    title: "Netlinks Pricing",
    type: "PRICING",
    tone: "two",
    image: "/images/second project.png",
    description:
      "A pricing-page recreation focused on clean card layouts, spacing, typography, responsive behavior, and CSS practice.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://netlinks-pricing.netlify.app/",
  },
  {
    title: "Mentor Cards",
    type: "WEB APP",
    tone: "three",
    image: "/images/third project.jfif",
    description:
      "A responsive mentor-discovery interface built with HTML and CSS, focused on clean cards and easy exploration.",
    tech: ["HTML", "CSS", "Responsive"],
    link: "https://mentors-card.netlify.app/",
  },
  {
    title: "Contact Form",
    type: "FORM UI",
    tone: "four",
    image: "/images/fourth project.jfif",
    description:
      "A clean, responsive contact form focused on readable fields, clear hierarchy, and a simple user experience.",
    tech: ["HTML", "CSS", "Responsive"],
    link: "https://untitled-form.netlify.app/",
  },
  {
    title: "Course Cards",
    type: "COURSES",
    tone: "five",
    letter: "C",
    image: "/images/fifth project.jpg",
    description:
      "Responsive course cards focused on consistent spacing, readable typography, reusable components, and clean UI.",
    tech: ["HTML", "CSS", "Responsive"],
    link: "https://courses-cards.netlify.app/",
  },
  {
    title: "Beauty Website",
    type: "E-COMMERCE",
    tone: "five",
    image: "/images/sixth project.jpg",
    description:
      "Responsive online beauty shop focused on consistent spacing, readable typography, reusable components, and clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://beauty-online.netlify.app/",
  },
  {
    title: "Portfolio Website",
    type: "PORTFOLIO",
    tone: "five",
    image: "/images/b4ef589e-00de-4fa5-b716-a5989dba9568.png",
    description:
      "Responsive portfolio website focused on consistent spacing, readable typography, reusable components, and clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://fatima-porfolio.netlify.app/",
  },
  {
    title: "Sport Website",
    type: "SPORT",
    tone: "five",
    image: "/images/download (12).jfif",
    description:
      "Responsive sport website focused on consistent spacing, readable typography, reusable components, and clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://sport-fun.netlify.app/",
  },
];

export const services = [
  { title: "UI Design", text: "Clean, intuitive interfaces focused on usability, visual hierarchy, consistency, and user-centered thinking." },
  { title: "Front-End Development", text: "Modern responsive websites using semantic HTML, organized CSS, JavaScript, and maintainable structure." },
  { title: "Responsive Web Design", text: "Interfaces that adapt naturally across desktop, tablet, and mobile screen sizes with a mobile-first mindset." },
  { title: "Landing Pages", text: "Focused landing pages with strong hierarchy, clear calls to action, readable content, and polished visual design." },
];

const dev = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const coreServices = {
  frontEnd: {
    title: "Front-End Development",
    text: "Clean, semantic code that turns designs into real, working websites.",
    pills: ["HTML", "CSS", "JavaScript", "Responsive", "Flexbox", "GitHub", "Accessible"],
  },
  ui: {
    title: "UI Design",
    text: "Thoughtful interfaces designed around people and their needs.",
    image: "/images/UiUX.png",
  },
  web: {
    title: "Web Experience",
    text: "Clean, responsive websites that turn ideas into digital experiences.",
    windows: [
      { image: "/images/work8.PNG", alt: "Netlinks Pricing project screenshot" },
      { image: "/images/Work2.PNG", alt: "Findit Real Estate project screenshot" },
    ],
  },
  development: {
    title: "Development",
    text: "The tools I use to design, build, and ship responsive websites.",
    // position + float animation for each floating tool bubble
    tools: [
      { name: "Figma", src: `${dev}/figma/figma-original.svg`, pos: { left: "-12px", bottom: "52px" }, anim: "floatFigma 3.2s" },
      { name: "HTML5", src: `${dev}/html5/html5-original.svg`, pos: { left: "20%", bottom: "88px" }, anim: "floatHTML 3.6s" },
      { name: "CSS3", src: `${dev}/css3/css3-original.svg`, pos: { left: "42%", bottom: "112px" }, anim: "floatCSS 3.1s" },
      { name: "JavaScript", src: `${dev}/javascript/javascript-original.svg`, pos: { right: "20%", bottom: "88px" }, anim: "floatJS 3.4s" },
      { name: "Framer", src: `${dev}/framermotion/framermotion-original.svg`, pos: { right: "4%", bottom: "58px" }, anim: "floatFramer 3.8s", light: true },
      { name: "GitHub", src: `${dev}/github/github-original.svg`, pos: { left: "64%", bottom: "42px" }, anim: "floatGitHub 3.5s", invert: true },
    ],
  },
  cta: {
    badge: "Open For Freelance Work",
    title: "Let’s Create Impact",
    text: "Let’s create meaningful and lasting digital impact.",
    button: "Start A Project",
    image: "/images/work8.PNG",
  },
};

export const skills = [
  { name: "Figma", description: "Wireframing, UI design & prototyping", icon: `${dev}/figma/figma-original.svg`, level: 4, tag: "Strong" },
  { name: "HTML", description: "Semantic, accessible markup structure", icon: "https://cdn.simpleicons.org/html5", level: 4, tag: "Strong" },
  { name: "CSS", description: "Layout, styling & responsive design", icon: `${dev}/css3/css3-original.svg`, level: 4, tag: "Strong" },
  { name: "JavaScript", description: "DOM interactivity & core logic", icon: `${dev}/javascript/javascript-original.svg`, level: 2, tag: "Learning" },
  { name: "Framer", description: "Interactive & animated prototypes", icon: `${dev}/framermotion/framermotion-original.svg`, level: 3, tag: "Growing" },
  { name: "GitHub", description: "Version control & project workflow", icon: "https://cdn.simpleicons.org/github", level: 2, tag: "Learning" },
];

export const exploring = ["React.js", "Design Systems", "Accessibility", "Advanced UI/UX"];

// TODO: replace these placeholders with your real education and certificates.
export const education = [
  { title: "Your Degree or Program", place: "Your School or University", period: "2023 — Present", text: "One or two lines about what you study or what you focus on." },
  { title: "Front-End Web Development", place: "Course or Bootcamp Name", period: "2024", text: "HTML, CSS, JavaScript and responsive design." },
];

export const certificates = [
  { title: "Certificate Name", issuer: "Issuing Organization", year: "2025", link: "" },
  { title: "Another Certificate", issuer: "Issuing Organization", year: "2025", link: "" },
  { title: "UI/UX Design Basics", issuer: "Issuing Organization", year: "2024", link: "" },
];

export const contact = {
  copy: "Have a project, collaboration, learning opportunity, or just want to say hello? I'd love to hear from you.",
  email: "marziasadeqi332@gmail.com",
  formEndpoint: "https://formspree.io/f/xrpeayrp",
  details: [
    { icon: "@", label: "Email", value: "marziasadeqi332@gmail.com", href: "mailto:marziasadeqi332@gmail.com" },
    { icon: "⌖", label: "Location", value: "Kabul, Afghanistan · Remote" },
    { icon: "✦", label: "Focus", value: "UI Design · Front-End Development" },
  ],
  services: ["UI Design", "Web Design", "Front-End Development", "Responsive Website", "Other"],
  socials: [
    { name: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/marzia-sadeqi-47a23631a" },
    { name: "github", label: "GitHub", href: "https://github.com/Marzia-Sadeqi" },
    { name: "telegram", label: "Telegram", href: "https://t.me/mim1bano" },
  ],
};
