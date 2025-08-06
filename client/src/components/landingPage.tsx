import { motion, AnimatePresence, useInView, Easing } from "framer-motion";
import { useRef } from "react";
import profile from "../assets/images/profile.png";
import lightBg from "../assets/images/bg.jpg";
import { Button } from "./ui/button";
import useDarkMode from "@/hooks/useDarkMode";
import TiltCard from "./tiltCard/tiltCard";
import { Download, DownloadIcon } from "lucide-react";

// easeOutCubic type definition
const easeOutCubic: Easing = [0.25, 0.1, 0.25, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: easeOutCubic },
  },
};

export default function LandingPage() {
  const { isDarkMode } = useDarkMode();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key="landing"
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit={{ opacity: 0 }}
        className="relative min-h-screen w-full flex flex-col gap-6 items-center justify-center px-4 sm:px-6 md:px-10 py-10 overflow-hidden"
        style={{
          backgroundImage: `url(${isDarkMode ? lightBg : lightBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-md z-0" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-6 pt-10">
          {/* Profile Image */}

          <TiltCard>
            <div className="text-center ">
              <img
                src={profile}
                alt="Profile"
                className="w-64 h-64 object-cover rounded-full shadow-lg"
                loading="lazy"
                draggable={false}
              />
            </div>
          </TiltCard>

          {/* Heading */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white max-w-4xl"
          >
            Hi, I'm Nishant Baiga — a Full Stack Web Developer
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl"
          >
            I build scalable and elegant web applications using the MERN stack:
            MongoDB, Express, React, and Node.js.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a href="#contact">
              <Button
                variant="outline"
                className="font-semibold px-6 py-2 rounded-3xl shadow transition duration-300
        hover:bg-gray-100 hover:text-black 
        dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact Me
              </Button>
            </a>
            <a href="/resume.pdf" download>
              <Button
                variant="default"
                className="font-semibold px-6 py-2 rounded-3xl flex items-center gap-2 cursor-pointer transition duration-300
        hover:bg-blue-600 hover:text-white 
        dark:hover:bg-blue-400 dark:hover:text-black"
              >
                My Resume
                <DownloadIcon className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
