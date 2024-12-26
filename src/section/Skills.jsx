import { useState } from "react";
import Card from "../components/Card";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma } from "react-icons/fa";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      Name: "JavaScript",
      Level: "Expert",
      LevelBgColor: "bg-yellow-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-yellow-500",
      NameColor: "text-yellow-700",
      SkillIcon: <FaJs />,
    },
    {
      Name: "React",
      Level: "Advanced",
      LevelBgColor: "bg-blue-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-blue-500",
      NameColor: "text-blue-700",
      SkillIcon: <FaReact />,
    },
    {
      Name: "Responsive",
      Level: "Advanced",
      LevelBgColor: "bg-blue-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-blue-500",
      NameColor: "text-blue-700",
      SkillIcon: <FaReact />,
    },
    {
      Name: "Tailwindcss",
      Level: "Advanced",
      LevelBgColor: "bg-blue-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-blue-500",
      NameColor: "text-blue-700",
      SkillIcon: <FaReact />,
    },
    {
      Name: "HTML",
      Level: "Advanced",
      LevelBgColor: "bg-yellow-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-yellow-500",
      NameColor: "text-yellow-700",
      SkillIcon: <FaHtml5 />,
    },
    {
      Name: "CSS",
      Level: "Intermediate",
      LevelBgColor: "bg-purple-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-purple-500",
      NameColor: "text-purple-700",
      SkillIcon: <FaCss3Alt />,
    },
    {
      Name: "Figma",
      Level: "Advanced",
      LevelBgColor: "bg-blue-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-blue-500",
      NameColor: "text-blue-700",
      SkillIcon: <FaFigma />,
    },
  ];

  return (
    <main id="skills" className="h-screen bg-blue-100 py-10 flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`relative transition-transform duration-300 ease-in-out cursor-pointer ${
              activeSkill === skill.Name ? "translate-y-[-10px]" : "hover:translate-y-[-5px]"
            }`}
            onClick={() =>
              setActiveSkill(activeSkill === skill.Name ? null : skill.Name)
            }
          >
            <Card
              SkillName={skill.Name}
              SkillNameColor={skill.NameColor}
              SkillLevel={skill.Level}
              SkillLevelBgColor={skill.LevelBgColor}
              SkillLevelTextColor={skill.LevelTextColor}
              SkillLevelBorderColor={skill.LevelBorderColor}
              SkillIcon={skill.SkillIcon}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
