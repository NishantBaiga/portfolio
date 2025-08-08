import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
const SocialLinks = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Follow Me
      </h2>

      <div className="flex flex-wrap gap-4">
        {/* LinkedIn */}
        <motion.a
          whileHover={{ y: -3 }}
          href="https://www.linkedin.com/in/nishant-baiga-8041142b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </motion.a>
        {/* github */}
        <motion.a
          whileHover={{ y: -3 }}
          href="https://github.com/NishantBaiga"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900/30 hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        </motion.a>
        {/* Twitter */}
        <motion.a
          whileHover={{ y: -3 }}
          href="https://x.com/Nishantbaiga"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5 text-blue-400 dark:text-blue-300" />
        </motion.a>

        {/* Instagram */}
        <motion.a
          whileHover={{ y: -3 }}
          href="https://instagram.com/niishant777"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 hover:bg-pink-200 dark:hover:bg-pink-800/50 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5 text-pink-600 dark:text-pink-400" />
        </motion.a>
      </div>
    </div>
  );
};

export default SocialLinks;
