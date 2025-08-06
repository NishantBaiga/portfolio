import { useEffect, useState } from "react";

// Get initial theme preference
const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) return storedTheme === "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // ✅ Debounced localStorage + class update
  useEffect(() => {
    const timeout = setTimeout(() => {
      const root = document.documentElement;
      if (isDarkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, 100); // debounce write

    return () => clearTimeout(timeout);
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
}
