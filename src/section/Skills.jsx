import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact, FaSlack, FaTrello } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { Database, Smartphone } from "lucide-react";
import Reveal from "../components/Reveal";
import { usePortfolioLanguage } from "../context/usePortfolioLanguage";

const skillGroups = [
  { title: "frontend", items: [["javascript", FaJs], ["react", FaReact], ["responsive", Smartphone], ["tailwind", SiTailwindcss], ["html", FaHtml5], ["css", FaCss3Alt]] },
  { title: "backend", items: [["node", FaNodeJs], ["express", SiExpress], ["mongodb", SiMongodb], ["sql", Database]] },
  { title: "tools", items: [["git", FaGitAlt], ["github", FaGithub], ["figma", FaFigma], ["trello", FaTrello], ["slack", FaSlack]] },
];

const Skills = () => {
  const { t } = usePortfolioLanguage();
  return (
    <section id="skills" className="section section--soft">
      <div className="page-wrap">
        <Reveal className="section-heading">
          <p className="section-eyebrow">02 — {t.nav.skills}</p>
          <h2 className="section-title">{t.skillsTitle}</h2>
          <p className="section-copy">{t.skillsIntro}</p>
        </Reveal>
        <div className="skill-groups">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} className="skill-group" delay={groupIndex * 0.06}>
              <h3>{t.skills[group.title]}</h3>
              <ul className="skill-list">
                {group.items.map(([key, Icon]) => <li className="skill-item" key={key}><Icon aria-hidden="true" /><span>{t.skills[key]}</span></li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
