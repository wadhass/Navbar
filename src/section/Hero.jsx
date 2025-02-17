import Typewriter from "typewriter-effect";
import AHMED from "../assets/AHMED.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contactme");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      id="home"
      className="relative flex flex-col lg:flex-row-reverse items-center h-[100vh] gap-6 px-5 
      md:px-8 lg:px-10 bg-cover bg-center bg-origin-padding text-black z-0"
      style={{ backgroundImage: `url(${AHMED})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900 z-[-1]"></div>
      <div className="w-full lg:w-1/3 flex mt-20 justify-center lg:justify-end z-10">
        <img
          src={AHMED}
          alt="AHMED"
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] object-cover rounded-full shadow-lg"
        />
      </div>
      <div className="w-full lg:w-3/5 space-y-5 z-10 text-center lg:text-left px-2 sm:px-5">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-orange-500 drop-shadow-lg">
          <Typewriter
            options={{
              strings: ["Hi, I'm Ahmed", "Full-Stack Developer", "Front-end Developer", "Back-end Developer", "Creative Thinker"],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className="text-white  text-sm sm:text-base md:text-lg drop-shadow-md leading-relaxed">
          A passionate Frontend and Backend Developer who turns design ideas into functional and 
          interactive websites. My expertise includes HTML, CSS, JavaScript, React, and 
          Tailwind CSS. With a strong background in Figma prototyping, I focus on creating 
          pixel-perfect, responsive web applications that work seamlessly across all devices.
          I enjoy bridging the gap between design and development, ensuring every project I 
          work on delivers an excellent user experience. I’m always eager to learn and grow, 
          excited to contribute to innovative projects!
        </p>
        <button
          onClick={scrollToContact}
          className="bg-gray-900 text-white text-sm sm:text-base md:text-lg py-2 px-6 sm:py-3 border border-gray-500 sm:px-4 rounded-lg
           hover:bg-gray-800 focus:ring-[2px] focus:ring-gray-700 focus:ring-offset-[1px] outline-none"
        >
          Contact Me
        </button>
      </div>
    </main>
  );
};

export default Hero;
