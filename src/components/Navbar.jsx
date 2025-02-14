import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "project", "about", "contactme"];
      let currentSection = "home";
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-gray-300 fixed top-0 left-0 w-full z-10">
      <nav className="bg-gray-900 flex items-center justify-between text-white h-[60px] px-4">
        <p className="text-3xl font-semibold text-orange-500 border border-gray-400 rounded-lg bg-gray-900 px-3 py-2 w-32">Ahmed</p>
        <button
          className="text-white text-2xl lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:space-x-3 absolute
           lg:static top-[60px] left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent p-4 lg:p-0`}
        >
          {["home", "skills", "project", "about", "contactme"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`py-2 lg:py-3 w-full lg:w-auto px-3 rounded-lg text-center transition-colors duration-300 ${
                activeSection === section ? "bg-orange-500" : "hover:bg-orange-500"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
