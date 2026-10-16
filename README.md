# Marzia Sadeqi — Portfolio (React)

Personal portfolio rebuilt in React + Vite from the original HTML/CSS/JS version.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure
```
src/
  components/   Navbar, Hero, About, Projects(+ProjectCard), Services(+TiltCard),
                Skills(+SkillCard), Education, Contact, Footer, Reveal, SectionHead
  data/         portfolio.js  ← all text, projects, skills, links
  hooks/        useScrolled, useActiveSection
  styles/       base.css + one stylesheet per component
public/images/  profile, project screenshots, icons
```
Content is edited in `src/data/portfolio.js` and passed to components as props.

## Images
Copy your original `images/` folder into `public/images/`. File names are
case-sensitive on Vercel (e.g. `Work2.PNG`, `work8.PNG`) — keep them exactly as in `portfolio.js`.

## Deploy
1. `git init && git add . && git commit -m "React portfolio"`
2. Create a GitHub repo and push.
3. On vercel.com: **Add New → Project**, import the repo (framework: Vite, build `npm run build`, output `dist`), click **Deploy**.
