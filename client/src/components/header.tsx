import { animate } from "framer-motion";
import { motion } from "framer-motion";
import useScrollPosition from "@/hooks/useScroll";
import useDarkMode from "@/hooks/useDarkMode";
import DarkModeToggle from "./darkModeToggler";
import HeaderLogo from "./headerLogo";
import MobileMenu from "./mobileMenu";
import DeskTopMenu from "./deskTopMenu";
import { menuItems } from "@/data/navigation";
const Header = () => {
  
  const isScrolled = useScrollPosition(50);
  const { isDarkMode } = useDarkMode();

  // Smooth scroll function
  // scroll animation when click on menu
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
    <motion.header
      animate={{
        backgroundColor: isScrolled
          ? isDarkMode
            ? "rgba(17, 24, 39, 0.7)"
            : "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
        height: "4.5rem",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6"
      style={{ WebkitBackdropFilter: "blur(10px)" }}
    >
      <div className="fixed top-0 left-0 w-full bg-transparent border-none outline-none z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <HeaderLogo scrollToSection={scrollToSection} />

          {/* Desktop Menu */}
          <DeskTopMenu
            menuItems={menuItems}
            scrollToSection={scrollToSection}
            isScrolled={isScrolled}
          />

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Dark Mode Toggle & Mobile Menu */}
            <DarkModeToggle />
            {/* Mobile Menu */}
            <MobileMenu
              menuItems={menuItems}
              scrollToSection={scrollToSection}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
