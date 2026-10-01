import AboutMe from "../section/AboutMe"
import ContactMe from "../section/ContactMe"
import Hero from "../section/Hero"
import Skills from "../section/Skills"
import Experience from "../section/Experience"
import Education from "../section/Education"
import ProjectPage from "./ProjectPage"



const Home = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectPage />
      <Experience />
      <Education />
      <ContactMe />
    </main>
  )
}

export default Home;