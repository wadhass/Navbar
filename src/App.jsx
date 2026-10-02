import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BashaPage from "./pages/BashaPage"
import { LanguageProvider } from "./context/LanguageContext"

const PortfolioLayout = () => (
  <>
    <Navbar />
    <Home />
    <Footer />
  </>
)

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioLayout />} />
          <Route path="/basha" element={<BashaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App