import { Award, GraduationCap } from "lucide-react";
import Reveal from "../components/Reveal";
import { usePortfolioLanguage } from "../context/usePortfolioLanguage";

const Education = () => {
  const { t } = usePortfolioLanguage();
  return (
    <section id="education" className="section">
      <div className="page-wrap">
        <Reveal className="section-heading">
          <p className="section-eyebrow">05 — {t.nav.education}</p>
          <h2 className="section-title">{t.educationTitle}</h2>
          <p className="section-copy">{t.educationIntro}</p>
        </Reveal>
        <div className="education-layout">
          <Reveal className="education-panel">
            <div className="education-panel-heading"><span className="education-icon"><GraduationCap aria-hidden="true" /></span><h3>{t.educationHeading}</h3></div>
            <article className="school-record">
              <h4>{t.schoolName}</h4>
              <p className="school-qualification">{t.schoolCredential}<span>{t.schoolYear}</span></p>
              <p className="school-country">{t.schoolCountry}</p>
              <p className="school-summary">{t.schoolSummary}</p>
              <div className="school-certificate-placeholder" aria-hidden="true" />
            </article>
          </Reveal>
          <Reveal className="education-panel" delay={0.08}>
            <div className="education-panel-heading"><span className="education-icon"><Award aria-hidden="true" /></span><h3>{t.certificatesHeading}</h3></div>
            <ul className="certificate-list">
              {t.certificates.map((certificate, index) => (
                <li className="certificate-item" key={certificate.title}>
                  <span className="certificate-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{certificate.title}</h4>
                    {certificate.issuer && <p className="certificate-issuer">{certificate.issuer}{certificate.location ? ` · ${certificate.location}` : ""}</p>}
                    <p className="certificate-description">{certificate.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;