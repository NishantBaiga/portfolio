import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      role="switch"
      aria-checked={isDarkMode}
      title="Toggle dark mode"
      className="h-10 w-10 rounded-full transition-colors cursor-pointer "
    >
      {isDarkMode ? (
        <Sun className=" transition-transform duration-300 transform scale-120" />
      ) : (
        <Moon className=" transition-transform duration-300 transform scale-120" />
      )}
    </Button>
  );
}

