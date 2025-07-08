import { useScrollReveal } from "../hooks/useScrollReveal";
import { useMemo } from "react";

// Moved animations to constants outside component to prevent re-creation on re-render
const fadeUpAnim = `@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}`;

const scaleUpAnim = `@keyframes scaleUp {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}`;

const LandingPage = () => {
  // Memoize the animation styles to prevent re-creation on re-render
  const animationStyles = useMemo(() => `${fadeUpAnim} ${scaleUpAnim}`, []);

  // Throttle the scroll reveal checks with higher thresholds
  const [imgRef, imgVisible] = useScrollReveal(0.2);
  const [btnsRef, btnsVisible] = useScrollReveal(0.2);

  return (
    <>
      <style>{animationStyles}</style>

      <section
        id="home"
        className="min-h-screen w-full flex flex-col gap-6 items-center justify-center p-6
          bg-gradient-to-br from-white/30 via-blue-100/40 to-purple-100/30
          dark:from-gray-800 dark:via-gray-700 dark:to-gray-600
          transition-all duration-300"
      >
        {/* Image with will-change and transform GPU acceleration */}
        <div
          ref={imgRef}
          className={`w-32 h-32 md:w-64 md:h-64 select-none rounded-full overflow-hidden shadow-lg will-change-transform ${
            imgVisible
              ? "animate-[scaleUp_0.5s_ease-out_forwards]"
              : "opacity-0"
          }`}
          style={{ transform: "translateZ(0)" }} // Force GPU acceleration
        >
          <img
            src="https://picsum.photos/200/300"
            alt="Landing Page Image"
            className="h-full w-full object-cover rounded-full"
            draggable={false}
            loading="lazy" // Lazy load the image
          />
        </div>

        {/* Title with reduced animation duration */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 animate-[fadeUp_0.5s_ease-out_forwards]">
          Hi, I'm Nishant - a Full Stack Web Developer
        </h1>

        {/* Description with reduced animation duration */}
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 text-center animate-[fadeUp_0.7s_ease-out_forwards]">
          I build scalable and elegant web applications using the MERN stack: MongoDB, Express, React, and Node.js.
        </p>

        {/* Buttons with will-change and reduced animation duration */}
        <div
          ref={btnsRef}
          className={`flex flex-col md:flex-row mt-4 gap-4 will-change-transform ${
            btnsVisible
              ? "animate-[fadeUp_0.6s_ease-out_forwards]"
              : "opacity-0"
          }`}
          style={{ transform: "translateZ(0)" }} // Force GPU acceleration
        >

          <a href="#contact">
          <button className="bg-black hover:bg-blue-700 text-white dark:bg-gray-700 dark:hover:bg-blue-800 font-semibold py-2 px-8 rounded-3xl shadow transition-colors duration-300 cursor-pointer">
            Contact Me
          </button>
          </a>
          

          <a href="/resume.pdf" download>
          <button className="bg-white/70 dark:bg-gray-700 border border-black dark:border-gray-500 text-black dark:text-white font-semibold py-2 px-5 rounded-3xl shadow transition-colors duration-300 cursor-pointer hover:bg-white dark:hover:bg-gray-600 hover:border-blue-700 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400 flex items-center gap-2">
            My Resume
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 16.5l-4-4h2.5V4h3v8.5H16l-4 4z"></path>
              <path d="M20 18v2H4v-2H2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2h-2z"></path>
            </svg>
          </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
