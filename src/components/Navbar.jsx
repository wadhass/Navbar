import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePortfolioLanguage } from "../context/usePortfolioLanguage";

const sections = [
  ["home", "home"], ["about", "about"], ["skills", "skills"],
  ["project", "projects"], ["experience", "experience"],
  ["education", "education"], ["contactme", "contact"],
];
const locales = [["en", "EN", "English"], ["ar", "عربي", "العربية"], ["fr", "FR", "Français"]];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { locale, setLocale, t } = usePortfolioLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.4] });
    sections.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);
  return (
    <header className="site-header">
      <nav className="nav-shell page-wrap" aria-label="Main navigation">
        <a className="brand-mark" href="#home" onClick={closeMenu} aria-label="Ahmed Hassan, home">AH<span>.</span></a>
        <button className="menu-toggle" type="button" aria-label={t.menu} aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <div id="primary-navigation" className={`nav-content${isOpen ? " nav-content--open" : ""}`}>
          <ul className="nav-links">
            {sections.map(([id, key]) => (
              <li key={id}>
                <a href={`#${id}`} className={activeSection === id ? "nav-link nav-link--active" : "nav-link"} aria-current={activeSection === id ? "location" : undefined} onClick={closeMenu}>{t.nav[key]}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <div className="language-switch" role="group" aria-label="Choose language">
              {locales.map(([code, label, name]) => (
                <button key={code} type="button" lang={code} aria-label={name} aria-pressed={locale === code} className={locale === code ? "language-option language-option--active" : "language-option"} onClick={() => setLocale(code)}>{label}</button>
              ))}
            </div>
            <a className="nav-github" href="https://github.com/wadhass" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
