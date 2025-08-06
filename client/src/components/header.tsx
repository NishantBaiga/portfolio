import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import DarkModeToggle from "./darkModeToggler";
import { Button } from "./ui/button";
import useScrollPosition from "@/hooks/useScroll";
import { motion } from "framer-motion";
const Header = () => {
  const menuItems = ["home", "aboutMe", "projects", "contact"];
  const isScrolled = useScrollPosition(50);
  return (
    <motion.header
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.2)" : "none",
        height: isScrolled ? "5rem" : "5rem",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6"
      style={{ WebkitBackdropFilter: "blur(10px)" }}
    >
      <div className="fixed top-0 left-0 w-full bg-transparent border-none outline-none   z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            aria-label="Go to Home"
            className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:border-b-2 sm:hover:border-b-2  border-blue-500 dark:border-blue-400"
          >
            Nishant <span className="text-blue-600 dark:text-blue-400">.</span>
          </a>

          {/* Desktop Menu */}
          <nav
            className={`hidden lg:flex gap-4 sm:gap-6 py-3 px-4 sm:py-4 sm:px-6 rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-transparent shadow-none border-none backdrop-blur-none"
                : "bg-transparent dark:bg-gray-800/80 shadow-md backdrop-blur-md"
            }`}
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-700 text-md dark:text-gray-300 hover:text-blue-500 transition-colors capitalize"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <DarkModeToggle />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  aria-label="Open mobile menu"
                  className="lg:hidden w-10 h-10 p-2 rounded-full flex items-center justify-center transition hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <Menu className="w-6 h-6 dark:text-gray-200" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-64 bg-white dark:bg-gray-900"
              >
                <div className="mt-12 flex flex-col items-center gap-6">
                  {menuItems.map((item) => (
                    <SheetClose key={item} asChild>
                      <a
                        href={`#${item}`}
                        className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl hover:text-blue-500 transition-colors capitalize"
                      >
                        {item}
                      </a>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
