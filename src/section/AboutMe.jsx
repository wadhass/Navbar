import i from "../assets/icon.svg";

const AboutMe = () => {
  return (
    <main
      id="about"
      className="h-screen bg-gradient-to-r from-gray-900 to-gray-900 pt-[6rem] z-0"
    >
      <div
        className="space-y-6 max-w-5xl mx-auto flex flex-col justify-center items-center h-full bg-gray-900 rounded-[50px] px-6 sm:px-12 lg:px-24 relative shadow-lg"
      >
        <img
          src={i}
          alt="Icon"
          className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20"
          style={{
            filter: 'invert(23%) sepia(80%) saturate(746%) hue-rotate(186deg) brightness(95%) contrast(95%)',
          }}
        />

        <h1 className="font-extrabold text-3xl sm:text-4xl text-center text-gray-300">About Me</h1>
        <h2 className="text-white text-xl sm:text-2xl">Hello, my name is Ahmed Hassan.</h2>
        <p className="text-white text-sm sm:text-base">
          I’m a passionate and dedicated developer specializing in creating
          modern, responsive, and user-friendly web applications. My skill set
          includes:
        </p>
        <ul className="list-disc text-white text-sm sm:text-base">
          <li>
            <span className="font-extrabold">Frontend and Backend Development:</span> HTML,
            CSS, JavaScript, and React. Node.js 
          </li>
          <li>
            <span className="font-extrabold">Design & Prototyping:</span> 
            Expertise in Figma for crafting visually stunning UI/UX designs.
          </li>
          <li>
            <span className="font-extrabold">Styling Frameworks:</span> Tailwind
            CSS for building clean and scalable styles efficiently.
          </li>
          <li>
            <span className="font-extrabold">Responsive Design:</span> Ensuring
            seamless user experiences across all devices.
          </li>
        </ul>
        <p className="text-justify text-white text-sm sm:text-base">
          I thrive on turning creative ideas into functional, high-quality
          digital solutions. My focus is on writing clean, maintainable code and
          delivering projects that combine aesthetics with top-notch
          performance. I’m always eager to learn new technologies and push the
          boundaries of my skills to stay ahead in this ever-evolving field.
          When I’m not coding, I enjoy exploring new tools and techniques to
          improve my craft and collaborating with like-minded individuals to
          create impactful web experiences.
        </p>
        
        {/* Download PDF Button */}
        <a
          href="/full.pdf"
          download
          className="mt-4 px-6 py-3 bg-gray-900 text-white font-bold border border-gray-400 
         mr-44 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          Download CV
        </a>
      </div>
    </main>
  );
};

export default AboutMe;
