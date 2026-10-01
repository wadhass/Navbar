import { Link } from "react-router-dom"
import { usePortfolioLanguage } from "../context/usePortfolioLanguage"

const NotFound = () => {
  const { t } = usePortfolioLanguage()
  return (
    <main className="not-found page-wrap">
        <p className="section-eyebrow">404</p>
        <h1 className="section-title">{t.notFound}</h1>
        <Link to="/" className="button">{t.backHome}</Link>
    </main>
  )
}  
export default NotFound