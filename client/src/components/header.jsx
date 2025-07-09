import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize darkMode state based on localStorage value
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    // Toggle dark mode class on <html>
    document.documentElement.classList.toggle("dark", darkMode);
    // Persist dark mode preference in localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const menuItems = ["home", "aboutMe", "projects",  "contact"];
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    menuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#home" style={{ fontWeight: 700 }} className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Nishant <span className="text-blue-600 dark:text-blue-400">.</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium bg white shadow-md bg-opacity-50 rounded-full py-4 px-6 dark:bg-gray-800">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors capitalize"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-5 rounded-full bg-gray-300 dark:bg-gray-600 p-1 flex items-center transition hover:cursor-pointer"
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                darkMode ? "translate-x-5" : "translate-x-0"
              }`}
            ></div>
          </button>
          <button onClick={openMenu} className="md:hidden w-10 h-10 rounded-full p-2 flex items-center justify-center transition hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div ref={menuRef} className="md:hidden fixed top-0 -right-64 bottom bg-white dark:bg-gray-900 h-screen w-64 flex flex-col items-center space-x-4 py-10 transition duration-500 ease-in-out transform shadow-xl">
        <button
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
          onClick={closeMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="mt-12 flex flex-col gap-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={closeMenu}
              className="text-gray-600 dark:text-gray-300 text-xl hover:text-blue-500 transition-colors capitalize"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;


