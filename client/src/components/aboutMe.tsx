import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, Cpu, Database, GitBranch, Globe, LayoutDashboard, 
  Smartphone, Terminal, Zap 
} from "lucide-react";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
  lightColor: string;
}

interface TechItem {
  name: string;
  icon: any;
  color: string;
  lightColor: string;
}

const AboutMe = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const skills: Skill[] = [
    { 
      name: "Frontend", 
      icon: <LayoutDashboard size={24} />, 
      color: "text-blue-500 dark:text-blue-400",
      lightColor: "text-blue-600"
    },
    { 
      name: "Backend", 
      icon: <Database size={24} />, 
      color: "text-green-500 dark:text-green-400",
      lightColor: "text-green-600"
    },
    { 
      name: "APIs", 
      icon: <Terminal size={24} />, 
      color: "text-purple-500 dark:text-purple-400",
      lightColor: "text-purple-600"
    },
    { 
      name: "DevOps", 
      icon: <GitBranch size={24} />, 
      color: "text-orange-500 dark:text-orange-400",
      lightColor: "text-orange-600"
    },
    { 
      name: "Mobile", 
      icon: <Smartphone size={24} />, 
      color: "text-pink-500 dark:text-pink-400",
      lightColor: "text-pink-600"
    },
    { 
      name: "Performance", 
      icon: <Zap size={24} />, 
      color: "text-yellow-500 dark:text-yellow-400",
      lightColor: "text-yellow-600"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-8 md:p-12 lg:p-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">Alex</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            A passionate Fullstack Developer crafting digital experiences that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                With over 5 years of experience in web development, I specialize in building scalable, 
                performant applications with modern technologies. I bridge the gap between design and 
                technical implementation.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                When I'm not coding, you'll find me contributing to open-source projects, 
                exploring new frameworks, or mentoring junior developers.
              </p>
              
              {/* Skills Carousel */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">What I Do</h3>
                <div 
                  className="relative h-32 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm dark:shadow-none"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSkill}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center p-6"
                    >
                      <div className={`${skills[activeSkill].color} ${skills[activeSkill].lightColor} mr-4`}>
                        {skills[activeSkill].icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white">{skills[activeSkill].name}</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          {getSkillDescription(skills[activeSkill].name)}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Skill Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {skills.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSkill(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === activeSkill ? 'bg-gray-800 dark:bg-white w-4' : 'bg-gray-300 dark:bg-gray-600'}`}
                        aria-label={`View ${skills[index].name} skill`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-96">
              {/* Floating Code Blocks */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-0 w-48 h-48 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-700 p-4"
              >
                <div className="font-mono text-sm">
                  <div className="text-purple-600 dark:text-purple-400">function</div>
                  <div className="text-blue-600 dark:text-blue-400"> greet</div>
                  <div className="text-gray-800 dark:text-white">() {'{'}</div>
                  <div className="text-yellow-600 dark:text-yellow-300 ml-4">return</div>
                  <div className="text-green-600 dark:text-green-400 ml-8">"Hello World"</div>
                  <div className="text-gray-800 dark:text-white">{'}'}</div>
                </div>
              </motion.div>

              {/* Main Developer Illustration */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl"
              >
                <Code size={80} className="text-white" />
              </motion.div>

              {/* Floating Database */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute right-0 bottom-0 w-48 h-48 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-700 p-4 flex items-center justify-center"
              >
                <Database size={40} className="text-green-600 dark:text-green-500" />
                <span className="ml-2 text-gray-800 dark:text-white">Database</span>
              </motion.div>

              {/* Animated Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1="20%"
                  y1="30%"
                  x2="50%"
                  y2="50%"
                  stroke="rgba(37, 99, 235, 0.5)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.line
                  x1="80%"
                  y1="70%"
                  x2="50%"
                  y2="50%"
                  stroke="rgba(124, 58, 237, 0.5)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">My Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg w-24 shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-700"
              >
                <tech.icon size={32} className={`${tech.color} ${tech.lightColor}`} />
                <span className="mt-2 text-sm text-center text-gray-700 dark:text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Helper functions
function getSkillDescription(skillName: string): string {
  const descriptions: Record<string, string> = {
    "Frontend": "React, Next.js, Tailwind, Framer Motion, and responsive design",
    "Backend": "Node.js, Express, Django, PostgreSQL, MongoDB, and Redis",
    "APIs": "RESTful API design, GraphQL, WebSockets, and authentication",
    "DevOps": "Docker, Kubernetes, CI/CD pipelines, and cloud deployment",
    "Mobile": "React Native, Flutter, and progressive web apps",
    "Performance": "Optimization, caching strategies, and load testing"
  };
  return descriptions[skillName] || "";
}

const techStack: TechItem[] = [
  { name: "React", icon: Cpu, color: "text-blue-500 dark:text-blue-400", lightColor: "text-blue-600" },
  { name: "Node.js", icon: Code, color: "text-green-500 dark:text-green-400", lightColor: "text-green-600" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-600 dark:text-blue-500", lightColor: "text-blue-700" },
  { name: "Tailwind", icon: LayoutDashboard, color: "text-cyan-500 dark:text-cyan-400", lightColor: "text-cyan-600" },
  { name: "GraphQL", icon: GitBranch, color: "text-pink-500 dark:text-pink-400", lightColor: "text-pink-600" },
  { name: "Docker", icon: Database, color: "text-blue-400 dark:text-blue-300", lightColor: "text-blue-500" },
  { name: "PostgreSQL", icon: Database, color: "text-indigo-500 dark:text-indigo-400", lightColor: "text-indigo-600" },
  { name: "AWS", icon: Globe, color: "text-orange-500 dark:text-orange-400", lightColor: "text-orange-600" },
];

export default AboutMe;