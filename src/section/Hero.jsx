import { ArrowDown, ArrowDownToLine, ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import portrait from "../assets/hero-focus.jpg";
import { usePortfolioLanguage } from "../context/usePortfolioLanguage";

const Hero = () => {
  const { t } = usePortfolioLanguage();
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid page-wrap">
        <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.62, ease: "easeOut" }}>
          <p className="hero-eyebrow"><span className="availability-dot" />{t.available}</p>
          <p className="hero-role">{t.eyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-description">{t.heroBody}</p>
          <div className="hero-actions">
            <a className="button" href="#project">{t.viewProjects}<ArrowDown aria-hidden="true" /></a>
            <a className="button button--light" href="#contactme">{t.contactMe}<ArrowUpRight aria-hidden="true" /></a>
            <a className="cv-link" href="/full.pdf" download><ArrowDownToLine aria-hidden="true" /> CV</a>
          </div>
          <a className="hero-github" href="https://github.com/wadhass" target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" /> {t.github} <ArrowUpRight aria-hidden="true" /></a>
        </motion.div>
        <motion.div className="hero-portrait-wrap" initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}>
          <div className="portrait-frame"><img src={portrait} alt="Ahmed Hassan, Full-Stack Developer" /></div>
          <span className="portrait-caption">Ahmed Hassan <span>·</span> Developer</span>
          <span className="portrait-index" aria-hidden="true">01 / 05</span>
        </motion.div>
      </div>
      <div className="hero-bottom page-wrap">
        <span>{t.stackLabel}</span>
        <div className="hero-tech-list" aria-label="Technologies: JavaScript, React, Node.js, Tailwind CSS"><span>JavaScript</span><span>React</span><span>Node.js</span><span>Tailwind CSS</span></div>
      </div>
    </section>
  );
};

export default Hero;
