import i from "../assets/icon.svg";

const AboutMe = () => {
  return (
    <main
      id="about"
      className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-900 pt-[6rem] z-0 flex items-center justify-center px-6"
    >
      <div
        className="space-y-6 max-w-5xl w-full bg-gray-900 rounded-[50px] px-6 sm:px-12 lg:px-24 relative shadow-lg py-12 flex flex-col items-center text-center"
      >
        <img
          src={i}
          alt="Icon"
          className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16"
          style={{
            filter: 'invert(23%) sepia(80%) saturate(746%) hue-rotate(186deg) brightness(95%) contrast(95%)',
          }}
        />

        <h1 className="font-extrabold text-3xl sm:text-4xl text-gray-300">About Me</h1>
        <h2 className="text-white text-lg sm:text-xl">Hello, my name is Ahmed Hassan.</h2>
        <p className="text-white text-sm sm:text-base max-w-3xl">
          I’m a passionate and dedicated developer specializing in creating
          modern, responsive, and user-friendly web applications. My skill set
          includes:
        </p>
        <ul className="list-disc text-white text-sm sm:text-base text-left max-w-3xl pl-6">
          <li><span className="font-extrabold">Frontend and Backend Development:</span> HTML, CSS, JavaScript, React, and Node.js.</li>
          <li><span className="font-extrabold">Design & Prototyping:</span> Expertise in Figma for crafting visually stunning UI/UX designs.</li>
          <li><span className="font-extrabold">Styling Frameworks:</span> Tailwind CSS for building clean and scalable styles efficiently.</li>
          <li><span className="font-extrabold">Responsive Design:</span> Ensuring seamless user experiences across all devices.</li>
        </ul>
        <p className="text-justify text-white text-sm sm:text-base max-w-3xl">
          I thrive on turning creative ideas into functional, high-quality digital solutions. My focus is on writing clean,
          maintainable code and delivering projects that combine aesthetics with top-notch performance. I’m always eager to
          learn new technologies and push the boundaries of my skills to stay ahead in this ever-evolving field. When I’m not
          coding, I enjoy exploring new tools and techniques to improve my craft and collaborating with like-minded individuals
          to create impactful web experiences.
        </p>
        
        {/* Download PDF Button */}
        <a
          href="/full.pdf"
          download
          className="mt-4 px-6 py-3 bg-gray-800 text-white font-bold border border-gray-600 rounded-lg shadow-md hover:bg-gray-700 transition"
        >
          Download CV
        </a>
      </div>
    </main>
  );
};

export default AboutMe;
