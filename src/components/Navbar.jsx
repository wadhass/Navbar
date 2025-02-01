import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-300 fixed top-0 left-0 w-full z-10">
      <nav className="bg-gray-900 flex items-center justify-between text-white h-[60px] px-4">
        <p className="text-3xl font-semibold text-orange-500 ">Ahmed</p>
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
           lg:static top-[60px] left-0 w-full lg:w-auto bg-blue-700 lg:bg-transparent p-4 lg:p-0`}
        >
          <a
            href="#home"
            className="py-2 lg:py-0 hover:bg-orange-500 w-full lg:w-auto px-3 rounded-lg text-center"
          >
            Home
          </a>
          <a
            href="#skills"
            className="py-2 lg:py-0 hover:bg-orange-500 w-full lg:w-auto px-3 rounded-lg text-center"
          >
            Skills
          </a>
          <a
            href="#project"
            className="py-2 lg:py-0 hover:bg-orange-500 w-full lg:w-auto px-3 rounded-lg text-center"
          >
            ProjectPage
          </a>
          <a
            href="#about"
            className="py-2 lg:py-0 hover:bg-orange-500 w-full lg:w-auto px-3 rounded-lg text-center"
          >
            AboutMe
          </a>
         
          <a
            href="#contact"
            className="py-2 lg:py-0 hover:bg-orange-500 w-full lg:w-auto px-3 rounded-lg text-center"
          >
            ContactMe
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
