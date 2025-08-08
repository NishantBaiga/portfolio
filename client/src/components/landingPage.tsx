import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, animate } from 'framer-motion';
import { 
  ArrowRight, Code, Cpu, Database, GitBranch, Globe, 
  LayoutDashboard, Smartphone, Terminal, Zap, Rocket, Shield, CpuIcon 
} from 'lucide-react';

const LandingPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  
  // Optimized scroll effects (will-change and simple transforms)
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  const [hovered, setHovered] = useState(false);

  // Performance: Memoize static data
  const features = [
    { 
      icon: <LayoutDashboard className="w-6 h-6" />, 
      title: "Lightning Fast", 
      description: "Optimized for 90+ Lighthouse scores" 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Rock Solid", 
      description: "Type-safe and rigorously tested" 
    },
    { 
      icon: <Rocket className="w-6 h-6" />, 
      title: "Scalable", 
      description: "Architected for growth" 
    },
  ];

  // const techStack = [
  //   { name: "React", icon: <CpuIcon className="w-8 h-8" /> },
  //   { name: "TypeScript", icon: <Terminal className="w-8 h-8" /> },
  //   { name: "Node.js", icon: <Code className="w-8 h-8" /> },
  //   { name: "PostgreSQL", icon: <Database className="w-8 h-8" /> },
  //   { name: "GraphQL", icon: <GitBranch className="w-8 h-8" /> },
  //   { name: "AWS", icon: <Globe className="w-8 h-8" /> },
  // ];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 70; // adjust if your header height differs
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    animate(window.scrollY, offsetPosition, {
      duration: 0.8,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };
  return (
    <div 
    id='home'
      ref={containerRef}
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      style={{ willChange: 'transform' }} // Hint for browser optimization
    >
      {/* Hero Section - Minimal animations */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 z-0"
          style={{ opacity, y }}
        />
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-4 font-medium"
            >
              Fullstack Developer
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Performance-First</span> Web Apps
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto"
            >
              Specializing in fast, accessible, and maintainable web applications.
            </motion.p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
              onClick={() => scrollToSection('projects')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center shadow-lg hover:shadow-xl transition-all"
              >
                View Projects
                <motion.span
                  animate={{ x: hovered ? 5 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                  className="ml-2"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-medium shadow hover:shadow-md transition-all"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Simple entrance animations */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Focused on delivering quality through modern development practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Minimal animations */}
      {/* <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies I Use</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Carefully selected tools for optimal results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className="w-24 h-24 flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-xs hover:shadow-sm transition-all"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-2">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-center">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section - Simple animation */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Let's discuss how I can help bring your project to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium shadow hover:shadow-md transition-all"
              >
                Get in Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View My Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default LandingPage;