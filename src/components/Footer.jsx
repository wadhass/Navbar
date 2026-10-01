import { ArrowUpRight, Github, Mail } from "lucide-react";
import { usePortfolioLanguage } from "../context/usePortfolioLanguage";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = usePortfolioLanguage();

    return (
        <footer className="site-footer">
            <div className="page-wrap footer-main">
                <a className="footer-identity" href="#home"><strong>Ahmed Hassan</strong><span>{t.footerRole}</span></a>
                <nav className="footer-nav" aria-label="Footer navigation">
                    {[["home", "home"], ["about", "about"], ["skills", "skills"], ["project", "projects"], ["experience", "experience"], ["education", "education"], ["contactme", "contact"]].map(([id, key]) => <a key={id} href={`#${id}`}>{t.nav[key]}</a>)}
                </nav>
                <div className="footer-socials">
                    <a href="https://github.com/wadhass" target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" /> {t.github}<ArrowUpRight aria-hidden="true" /></a>
                    <a href="mailto:ahmedhassansumu@gmail.com"><Mail aria-hidden="true" /> ahmedhassansumu@gmail.com<ArrowUpRight aria-hidden="true" /></a>
                </div>
            </div>
            <div className="page-wrap footer-bottom"><span>© {currentYear} Ahmed Hassan</span><span>{t.footerNote}</span></div>
        </footer>
    );
};

export default Footer;
