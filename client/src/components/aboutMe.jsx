import { useMemo } from 'react';
import mernLogo from "../assets/images/mern.png";


export default function AboutMe() {
  // Memoize the animation style to prevent re-creation on re-render
  const animationStyle = useMemo(() => `
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `, []);

  // Memoize the skills array to prevent re-creation on re-render
  const skills = useMemo(() => [
    { name: 'React', color: 'blue-600' },
    { name: 'Express', color: 'amber-800' },
    { name: 'MongoDB', color: 'green-800' },
    { name: 'Tailwind CSS', color: 'gray-800' },
  ], []);

  return (
    <>
      <style>{animationStyle}</style>

      <section
        id="aboutMe"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-16 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-600"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 relative">

          {/* Simplified blob - removed blur which is expensive */}
          <div className="absolute w-72 h-72 bg-blue-100 rounded-full opacity-20 top-16 left-8 z-[-1] dark:bg-gray-800" />

          {/* Profile Image with reduced effects */}
          <div
            className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg transform hover:scale-[1.03] transition-transform duration-300 border-4 border-white animate-[fadeIn_0.8s_ease-out_forwards] will-change-transform"
            style={{ transform: 'translateZ(0)' }}
          >
            <img
              src={mernLogo}
              alt="Profile"
              className="w-full h-full object-cover select-none"
              draggable={false}
              loading="lazy"
            />
            {/* Removed the extra border effect that wasn't visible anyway */}
          </div>

          {/* Simplified Info Panel - reduced glassmorphism effects */}
          <div
            className="group relative w-full md:w-2/3 bg-white/80 rounded-xl shadow-lg border border-white p-8 transition-all duration-300 animate-[fadeIn_1s_ease-out_forwards] will-change-transform dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:shadow-gray-900/50"
            style={{ transform: 'translateZ(0)' }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg dark:text-white">
              Hello! I'm{" "}
              <span className="text-blue-600 font-semibold dark:text-blue-500">
                Nishant
              </span>
              , a passionate full-stack developer specializing in building
              beautiful frontends with React and powerful backends with
              Express.js. With a strong grip on Tailwind CSS, MongoDB, and REST
              APIs, I focus on performance, design, and scalability.
            </p>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`bg-white text-${skill.color} px-3 py-1 rounded-full text-sm font-medium border border-${skill.color}-100 dark:bg-gray-800 dark:text-white dark:border-gray-700`}
                >
                  {skill.name}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="px-5 py-2 bg-blue-600 text-white rounded-full font-medium shadow-sm hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-500 dark:text-white"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-5 py-2 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300 dark:bg-gray-800 dark:hover:text-black dark:border-gray-700"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

