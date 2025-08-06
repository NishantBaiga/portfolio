import { useEffect, useState } from "react";
import { Linkedin, Github, Twitter } from "lucide-react";

export default function SocialSidebar() {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nishant-baiga-8041142b9/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/NishantBaiga",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/Nishantbaiga",
      icon: <Twitter className="w-5 h-5" />,
    },
  ];

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="hidden md:flex flex-col fixed left-0 top-1/2 transform -translate-y-1/2 z-50 space-y-2 ">
      {socials.map((social, idx) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group flex items-center gap-2 px-3 py-2 bg-black text-gray-800 dark:bg-gray-800 dark:text-white rounded-r-full
            hover:bg-blue-500 hover:text-white
            transition-all duration-1000  ease-[cubic-bezier(0.33,1,0.68,1)]
            ${mounted ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}
            w-12 hover:w-auto max-w-xs
            shadow-sm hover:shadow-md
          `}
          style={{ 
            transitionDelay: `${idx * 100}ms`,
            willChange: 'transform, opacity, width' 
          }}
        >
          <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-white">
            {social.icon}
          </span>
          <span className="hidden lg:inline-block text-sm font-medium whitespace-nowrap 
            transition-all duration-300 ease-out
            opacity-0 group-hover:opacity-100 
            translate-x-2 group-hover:translate-x-0
            w-0 group-hover:w-auto overflow-hidden
          ">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
}
