import { motion } from "framer-motion";
import image1 from '../../src/assets/bookmark.png'; 
import image2 from '../../src/assets/tracker.png';
import image3 from '../../src/assets/calculate.png'; 
import image4 from '../../src/assets/counter.png';   
import Login from '../../src/assets/Login.png';   

const projects = [
  {
    title: 'Bookmark',
    description: 'Bookmark is a simple web application built with HTML, CSS, and JavaScript.',
    imageUrl: image1,
    liveUrl: 'https://wadhass.github.io/bookmark/',
    repoUrl: 'https://github.com/wadhass/bookmark',
  },
  {
    title: 'Task Tracker',
    description: 'A project for task tracking, built with React, TailwindCSS, and JavaScript.',
    imageUrl: image2,
    liveUrl: 'https://ahmed-task-tracker.vercel.app/',
    repoUrl: 'https://github.com/wadhass/task-tracker',
  },
  {
    title: 'Calculator',
    description: 'A calculator application with interactive UI, built using React and CSS.',
    imageUrl: image3,
    liveUrl: 'https://update-calculate.vercel.app/',
    repoUrl: 'https://github.com/wadhass/calculator', 
  },
  {
    title: 'Counter',
    description: 'A counter application demonstrating state management in React.',
    imageUrl: image4,
    liveUrl: 'https://update-counter.vercel.app/',
    repoUrl: 'https://github.com/wadhass/counter', 
  },
  {
    title: 'Login ',
    description: 'A modern login page with a sleek UI built using React and TailwindCSS.',
    imageUrl: Login,
    liveUrl: 'https://ahmedhassan-tau.vercel.app/',
    repoUrl: 'https://github.com/wadhass/setting', 
  },
];

const ProjectPage = () => {
  return (
    <section
      id="project"
      className="max-w-full min-h-screen mx-auto bg-gray-900 p-6 pt-[10%] flex justify-center"
    >
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-300">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.imageUrl}
                alt={`Image for ${project.title}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-300">{project.title}</h2>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="mt-4 flex justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-800"
                  >
                    Live Link
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-800"
                    >
                      GitHub Link
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
