import About from "../section/AboutMe"
import ContactMe from "../section/ContactMe"
import Hero from "../section/Hero"
import Skills from "../section/Skills"

const Home = () => {
  return (
    <main id="home" className="max-w-7xl mx-auto">
        <Hero/>
      <Skills />
        <About />
        <ContactMe />
    </main>
  )
}

export default Home