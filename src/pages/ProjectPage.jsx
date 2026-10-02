import { ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import image1 from "../assets/bookmark.png";
import image2 from "../assets/tracker.png";
import image3 from "../assets/calculate.png";
import image4 from "../assets/counter.png";
import Login from "../assets/Login.png";
import Reveal from "../components/Reveal";
import { usePortfolioLanguage } from "../context/usePortfolioLanguage";

const projects = [
  {
    title: "Basha Ecommerce",
    descriptionKey: "bookmark",
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://bashs-ecommerce-frontend.vercel.app/",
    repoUrl: "https://github.com/wadhass/bashs-ecommerce-frontend",
    previewUrl: "/basha",
  },
  {
    title: "Bookmark",
    descriptionKey: "bookmark",
    imageUrl: image1,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://wadhass.github.io/bookmark/",
    repoUrl: "https://github.com/wadhass/bookmark",
  },
  {
    title: "Task Tracker",
    descriptionKey: "tracker",
    imageUrl: image2,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://ahmed-task-tracker.vercel.app/",
    repoUrl: "https://github.com/wadhass/task-tracker",
  },
  {
    title: "Calculator",
    descriptionKey: "calculator",
    imageUrl: image3,
    technologies: ["React", "CSS"],
    liveUrl: "https://update-calculate.vercel.app/",
    repoUrl: "https://github.com/wadhass/calculator",
  },
  {
    title: "Counter",
    descriptionKey: "counter",
    imageUrl: image4,
    technologies: ["React", "JavaScript"],
    liveUrl: "https://update-counter.vercel.app/",
    repoUrl: "https://github.com/wadhass/counter",
  },
  {
    title: "Login",
    descriptionKey: "login",
    imageUrl: Login,
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://ahmedhassan-tau.vercel.app/",
    repoUrl: "https://github.com/wadhass/setting",
  },
];

const ProjectPage = () => {
  const { t } = usePortfolioLanguage();
  const reduceMotion = useReducedMotion();
  return (
    <section id="project" className="section project-section">
      <div className="page-wrap">
        <Reveal className="section-heading">
          <p className="section-eyebrow">03 — {t.nav.projects}</p>
          <h2 className="section-title">{t.projectsTitle}</h2>
          <p className="section-copy">{t.projectsIntro}</p>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article key={project.title} className="project-card" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduceMotion ? 0 : 0.42, delay: Math.min(index * 0.06, 0.24) }}>
              <div className="project-image-wrap"><img src={project.imageUrl} alt={`${project.title} application preview`} loading="lazy" /></div>
              <div className="project-card-body">
                <div className="project-heading"><h3>{project.title}</h3><span>{String(index + 1).padStart(2, "0")}</span></div>
                <p>{t.projectLabels[project.descriptionKey]}</p>
                <ul className="project-tags" aria-label="Technologies">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{t.liveDemo}<ArrowUpRight aria-hidden="true" /></a>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" /> {t.sourceCode}</a>
                  {project.previewUrl ? <Link to={project.previewUrl}>Preview</Link> : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
