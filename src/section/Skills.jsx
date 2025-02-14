import { useState } from "react";
import Card from "../components/Card";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaNode,
  FaDatabase,
  FaGit,
  FaGithub,
  FaTrello,
  FaSlack,
  FaMobileAlt,
} from "react-icons/fa";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const frontEndSkills = [
    { Name: "JavaScript", Level: "Advanced", SkillIcon: <FaJs className="text-yellow-500" /> },
    { Name: "React", Level: "Advanced", SkillIcon: <FaReact className="text-cyan-500" /> },
    { Name: "Responsive Design", Level: "Advanced", SkillIcon: <FaMobileAlt className="text-purple-500" /> },
    { Name: "TailwindCSS", Level: "Advanced", SkillIcon: <SiTailwindcss className="text-teal-500" /> },
    { Name: "HTML", Level: "Advanced", SkillIcon: <FaHtml5 className="text-orange-500" /> },
    { Name: "CSS", Level: "Intermediate", SkillIcon: <FaCss3Alt className="text-blue-500" /> },
  ];

  const backEndSkills = [
    { Name: "Node.js", Level: "Advanced", SkillIcon: <FaNode className="text-green-500" /> },
    { Name: "MongoDB", Level: "Intermediate", SkillIcon: <FaDatabase className="text-green-600" /> },
    { Name: "SQL", Level: "Intermediate", SkillIcon: <FaDatabase className="text-blue-500" /> },
    { Name: "Express", Level: "Intermediate", SkillIcon: <FaDatabase className="text-gray-500" /> },
  ];

  const tools = [
    { Name: "Git", Level: "Advanced", SkillIcon: <FaGit className="text-red-500" /> },
    { Name: "GitHub", Level: "Advanced", SkillIcon: <FaGithub className="text-white" /> },
    { Name: "Figma", Level: "Advanced", SkillIcon: <FaFigma className="text-pink-500" /> },
    { Name: "Trello", Level: "Intermediate", SkillIcon: <FaTrello className="text-blue-600" /> },
    { Name: "Slack", Level: "Intermediate", SkillIcon: <FaSlack className="text-purple-600" /> },
  ];

  const renderSkills = (skills, title) => (
    <motion.div className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <h2 className="text-2xl font-bold mb-6 text-gray-300">{title}</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`relative cursor-pointer ${
              activeSkill === skill.Name
                ? "translate-y-[-10px] shadow-lg shadow-yellow-500/50"
                : "hover:translate-y-[-5px] hover:shadow-md hover:shadow-blue-500/50"
            }`}
            onClick={() => setActiveSkill(activeSkill === skill.Name ? null : skill.Name)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div className="flex flex-col items-center justify-center" transition={{ duration: 0.3 }}>
              <div className="text-4xl">{skill.SkillIcon}</div>
              <h3 className="mt-2 text-lg font-semibold">{skill.Name}</h3>
              <p className="text-sm text-gray-400">{skill.Level}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <main
      id="skills"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black flex flex-col items-center justify-start pt-[12vh] text-white"
    >
      <motion.h1 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        My Skills
      </motion.h1>
      <div className="w-full max-w-5xl px-4 sm:px-8 lg:px-16 space-y-12">
        {renderSkills(frontEndSkills, "Front-end")}
        {renderSkills(backEndSkills, "Back-end")}
        {renderSkills(tools, "Tools")}
      </div>
    </main>
  );
};

export default Skills;
