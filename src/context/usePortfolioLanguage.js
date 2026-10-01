import { useContext } from "react";
import LanguageContext from "./portfolioLanguageContext";

export function usePortfolioLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("usePortfolioLanguage must be used within LanguageProvider");
  return context;
}