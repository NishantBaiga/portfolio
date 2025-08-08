const DeskTopMenu = ({ menuItems, scrollToSection, isScrolled }) => {
  return (
    <>
      <nav
        className={`hidden lg:flex gap-4 sm:gap-6 py-2 px-4 sm:py-4 sm:px-6 rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-transparent dark:bg-transparent"
            : "bg-white/80 dark:bg-gray-800/80 shadow-md backdrop-blur-md"
        }`}
      >
        {menuItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50"
          >
            {label}
          </button>
        ))}
      </nav>
    </>
  );
};

export default DeskTopMenu;
