import { useEffect, useState } from "react";


export default function SocialSidebar() {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nishant-baiga-8041142b9/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7.25 8H12v2.21h.08c.66-1.26 2.3-2.58 4.72-2.58 5.04 0 5.96 3.33 5.96 7.66V24h-5v-7.35c0-1.75-.03-4-2.44-4s-2.82 1.9-2.82 3.88V24h-5V8z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/NishantBaiga",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.8-.25.8-.56v-2.2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.3-1.27-1.65-1.27-1.65-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.2 1.76 1.2 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.3-5.24-1.28-5.24-5.71 0-1.26.46-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.2a11.18 11.18 0 012.92-.4c.99 0 2 .13 2.92.4 2.21-1.51 3.2-1.2 3.2-1.2.64 1.65.24 2.87.12 3.17.75.81 1.2 1.85 1.2 3.11 0 4.45-2.7 5.4-5.26 5.7.42.36.78 1.1.78 2.22v3.3c0 .31.22.67.8.56A10.97 10.97 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://x.com/Nishantbaiga",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.2 4c-2.5 0-4.51 2.05-4.51 4.58 0 .36.04.71.11 1.05C5.28 9.5 2.8 8.08 1.12 5.84a4.55 4.55 0 00-.61 2.3c0 1.58.8 2.97 2.02 3.78a4.48 4.48 0 01-2.05-.57v.06c0 2.2 1.54 4.03 3.58 4.44a4.55 4.55 0 01-2.04.08 4.52 4.52 0 004.21 3.14A9.05 9.05 0 010 19.54a12.8 12.8 0 006.95 2.1c8.33 0 12.89-7 12.89-13.08 0-.2-.01-.39-.02-.58A9.33 9.33 0 0023 3z" />
        </svg>
      ),
    },
  ];

  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.2 4a4.5 4.5 0 00-4.5 4.58c0 .36.04.71.11 1.05C5.28 9.5 2.8 8.08 1.12 5.84a4.55 4.55 0 00-.61 2.3c0 1.58.8 2.97 2.02 3.78a4.48 4.48 0 01-2.05-.57v.06c0 2.2 1.54 4.03 3.58 4.44a4.55 4.55 0 01-2.04.08 4.52 4.52 0 004.21 3.14A9.05 9.05 0 010 19.54a12.8 12.8 0 006.95 2.1c8.33 0 12.89-7 12.89-13.08 0-.2-.01-.39-.02-.58A9.33 9.33 0 0023 3z"/>
</svg>


  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="hidden md:flex flex-col fixed left-0 top-1/2 transform -translate-y-1/2 z-50 space-y-2">
      {socials.map((social, idx) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group flex items-center gap-2 px-3 py-2 bg-black text-gray-800 dark:bg-gray-800 dark:text-white rounded-r-full
            hover:bg-blue-500 hover:text-white
            transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
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