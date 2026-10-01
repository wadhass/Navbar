import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { usePortfolioLanguage } from "../context/usePortfolioLanguage";

const AboutMe = () => {
  const { t } = usePortfolioLanguage();
  return (
    <section id="about" className="section about-section">
      <div className="page-wrap about-layout">
        <Reveal className="about-aside">
          <p className="section-eyebrow">01 — {t.nav.about}</p>
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="about-lead">{t.aboutLead}</p>
          <a className="text-link" href="/full.pdf" download><ArrowDownToLine aria-hidden="true" /> CV <ArrowUpRight aria-hidden="true" /></a>
        </Reveal>
        <Reveal className="about-main" delay={0.08}>
          <p>{t.aboutBody}</p>
          <ul className="about-tags">{t.aboutTags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
