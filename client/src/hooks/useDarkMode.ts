import { useEffect, useState } from "react";

const THEME_EVENT = "app-theme-change";
// Don't create EventTarget on server
const emitter = typeof window !== "undefined" ? new EventTarget() : null;

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) return storedTheme === "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Write class + localStorage AND broadcast the change to other hook instances
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

      // Broadcast to other hook instances in same window
      if (emitter) {
        emitter.dispatchEvent(
          new CustomEvent(THEME_EVENT, { detail: isDarkMode })
        );
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [isDarkMode]);

  // Subscribe to broadcasts from other hook instances
  useEffect(() => {
    if (!emitter) return;
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as boolean;
      // Only update if different to avoid pointless renders
      setIsDarkMode((cur) => (cur === detail ? cur : detail));
    };
    emitter.addEventListener(THEME_EVENT, handler);
    return () => emitter.removeEventListener(THEME_EVENT, handler);
  }, []);

  // Also listen for system changes if user hasn't explicitly set theme
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setIsDarkMode(e.matches);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return { isDarkMode, toggleDarkMode };
}
