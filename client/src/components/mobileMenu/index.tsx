import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const MobileMenu = ({ menuItems, scrollToSection }) => {
  return (
    <>
      
      <Sheet>
        <SheetTrigger asChild>
          <Button
            aria-label="Open mobile menu"
            variant="ghost"
            size="icon"
            className="lg:hidden w-10 h-10 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-64 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700"
        >
          <div className="mt-12 flex flex-col items-center gap-6">
            {menuItems.map(({ id, label }) => (
              <SheetClose key={id} asChild>
                <button
                  onClick={() => scrollToSection(id)}
                  className="w-full text-center py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50"
                >
                  {label}
                </button>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
