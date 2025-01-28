import AHMED from "../assets/AHMED.jpg";
const Hero = () => {
  return (
    <main id="home" className="flex items-center h-[80vh] gap-6 px-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
text-white z-0">
      <div className="w-3/5 space-y-5">
        <h1 className="font-extrabold text-4xl">Hi, I&apos;m Ahmed</h1>
        <p>a passionate Frontend Developer who turns design ideas into 
          functional and interactive websites. My expertise includes HTML,
           CSS, JavaScript, React, and Tailwind CSS. With a strong background 
           in Figma prototyping, I focus on creating pixel-perfect, responsive web 
           applications that work seamlessly across all devices. I enjoy bridging the
            gap between design and development, ensuring every project I work on delivers 
            an excellent user experience. I’m always eager to learn and grow, excited to 
            contribute to innovative projects!</p>
          <button 
          onClick={() => alert("Hire Me")}
           className="bg-pink-500 text-white text-[18px] py-4 px-12 rounded-full hover:bg-pink-600
          focus:ring-[2px] focus:ring-red-700 focus:ring-offset-[1px] outline-none">
            Hire Me
          </button>
      </div>
      <div className="w-1/3 flex justify-center">
        <img src={AHMED}
        alt="AHMED.jpg" className="w-[400px] h-[400px] object-cover rounded-full shadow-lg" />
      </div>
    </main>
  )
}

export default Hero;






