interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  type: "web" | "mobile" | "fullstack" | "other";
}
 const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with cart, checkout, and admin dashboard built with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    type: "fullstack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Productivity application with drag-and-drop interface and real-time collaboration.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com",
    type: "web",
  },
  {
    id: 3,
    title: "Fitness Tracker Mobile App",
    description:
      "Cross-platform mobile application for tracking workouts and nutrition.",
    tags: ["React Native", "TypeScript", "GraphQL"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    liveUrl: "https://example.com",
    type: "mobile",
  },
  {
    id: 4,
    title: "API Service Dashboard",
    description:
      "Monitoring and analytics dashboard for microservices architecture.",
    tags: ["Next.js", "Python", "D3.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com",
    featured: true,
    type: "web",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Custom designed portfolio website with interactive elements.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    liveUrl: "https://example.com",
    type: "web",
  },
  {
    id: 6,
    title: "Blockchain Explorer",
    description: "Web3 application for exploring blockchain transactions.",
    tags: ["Ethereum", "Web3.js", "Solidity"],
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com",
    type: "other",
  },
  {
    id: 7,
    title: "Social Media Analytics",
    description: "Dashboard for tracking social media metrics and engagement.",
    tags: ["React", "Chart.js", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    type: "fullstack",
  },
  {
    id: 8,
    title: "Recipe Finder App",
    description: "Mobile application for discovering and saving recipes.",
    tags: ["Flutter", "Firebase", "Dart"],
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    type: "mobile",
  },
  {
    id: 9,
    title: "Weather Forecast",
    description: "Real-time weather updates with interactive maps.",
    tags: ["React", "OpenWeather API", "Leaflet"],
    image:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    type: "web",
  },
];

export default projects;