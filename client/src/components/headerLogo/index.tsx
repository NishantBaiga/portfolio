import React from "react";

const HeaderLogo = ({ scrollToSection }) => {
  return (
    <>
      <a
        href="#home"
        aria-label="Go to Home"
        className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("home");
        }}
      >
        Nishant <span className="text-blue-600 dark:text-blue-400">.</span>
      </a>
    </>
  );
};

export default HeaderLogo;
