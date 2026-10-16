import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import {
  profile, navLinks, projects, services, coreServices,
  skills, exploring, education, certificates, contact,
} from "./data/portfolio.js";

export default function App() {
  return (
    <>
      <Navbar brand={profile.brand} links={navLinks} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={projects} />
        <Services services={services} core={coreServices} />
        <Skills skills={skills} exploring={exploring} />
        <Education education={education} certificates={certificates} />
        <Contact contact={contact} />
      </main>
      <Footer
        brand={profile.brand}
        name={profile.name}
        links={[...navLinks, { id: "contact", label: "Contact" }]}
      />
    </>
  );
}
