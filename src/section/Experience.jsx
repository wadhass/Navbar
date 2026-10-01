import Reveal from "../components/Reveal";
import { usePortfolioLanguage } from "../context/usePortfolioLanguage";

const Experience = () => {
  const { t } = usePortfolioLanguage();
  return (
    <section id="experience" className="section section--soft">
      <div className="page-wrap">
        <Reveal className="section-heading">
          <p className="section-eyebrow">04 — {t.nav.experience}</p>
          <h2 className="section-title">{t.experienceTitle}</h2>
          <p className="section-copy">{t.experienceIntro}</p>
        </Reveal>
        <Reveal>
          <ol className="experience-list" aria-label={t.experienceListLabel}>
            {t.experiences.map((experience) => (
              <li className="experience-entry" key={`${experience.organization}-${experience.title}`}>
                <div className="experience-meta">
                  <span className="experience-dates">{experience.dates}</span>
                  <span className="experience-location">{experience.location}</span>
                </div>
                <div className="experience-detail">
                  <span className="experience-node" aria-hidden="true" />
                  <p className="experience-organization">{experience.organization}</p>
                  <h3>{experience.title}</h3>
                  <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;