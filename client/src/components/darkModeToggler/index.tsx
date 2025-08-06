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
      className="h-12 w-12 rounded-full transition-colors cursor-pointer "
    >
      {isDarkMode ? (
        <Sun className=" transition-transform duration-300 transform scale-150" />
      ) : (
        <Moon className=" transition-transform duration-300 transform scale-150" />
      )}
    </Button>
  );
}

