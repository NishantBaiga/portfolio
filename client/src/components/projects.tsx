import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, Code, Github, Globe, 
  Laptop, Smartphone, Star, Zap 
} from "lucide-react";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  type: 'web' | 'mobile' | 'fullstack' | 'other';
}

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Projects data array
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with cart, checkout, and admin dashboard built with React and Node.js.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      type: 'fullstack'
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with drag-and-drop interface and real-time collaboration.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      githubUrl: "https://github.com",
      type: 'web'
    },
    {
      id: 3,
      title: "Fitness Tracker Mobile App",
      description: "Cross-platform mobile application for tracking workouts and nutrition.",
      tags: ["React Native", "TypeScript", "GraphQL"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://example.com",
      type: 'mobile'
    },
    {
      id: 4,
      title: "API Service Dashboard",
      description: "Monitoring and analytics dashboard for microservices architecture.",
      tags: ["Next.js", "Python", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      githubUrl: "https://github.com",
      featured: true,
      type: 'web'
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Custom designed portfolio website with interactive elements.",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://example.com",
      type: 'web'
    },
    {
      id: 6,
      title: "Blockchain Explorer",
      description: "Web3 application for exploring blockchain transactions.",
      tags: ["Ethereum", "Web3.js", "Solidity"],
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      githubUrl: "https://github.com",
      type: 'other'
    },
    {
      id: 7,
      title: "Social Media Analytics",
      description: "Dashboard for tracking social media metrics and engagement.",
      tags: ["React", "Chart.js", "Node.js"],
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      type: 'fullstack'
    },
    {
      id: 8,
      title: "Recipe Finder App",
      description: "Mobile application for discovering and saving recipes.",
      tags: ["Flutter", "Firebase", "Dart"],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: 'mobile'
    },
    {
      id: 9,
      title: "Weather Forecast",
      description: "Real-time weather updates with interactive maps.",
      tags: ["React", "OpenWeather API", "Leaflet"],
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      type: 'web'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps', icon: <Laptop size={16} /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={16} /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Code size={16} /> },
    { id: 'featured', label: 'Featured', icon: <Star size={16} /> },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.type === activeFilter);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-8 md:p-12 lg:p-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my work showcasing different technologies and solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setCurrentPage(1);
              }}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {filter.icon && <span className="mr-2">{filter.icon}</span>}
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{
                        transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star size={12} className="mr-1" /> Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex space-x-3">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Globe size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-blue-600 dark:text-blue-400"
                        >
                          <ArrowUpRight size={20} />
                        </motion.div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {filteredProjects.length > projectsPerPage && (
          <div className="flex justify-center mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={handlePrevious}
                    className={`${
                      currentPage === 1 
                        ? 'pointer-events-none opacity-50' 
                        : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  />
                </PaginationItem>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  // Show first pages, current page, and last pages
                  let pageNumber;
                  if (totalPages <= 5) {
                    pageNumber = i + 1;
                  } else if (currentPage <= 3) {
                    pageNumber = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNumber = totalPages - 4 + i;
                  } else {
                    pageNumber = currentPage - 2 + i;
                  }

                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        onClick={() => paginate(pageNumber)}
                        isActive={currentPage === pageNumber}
                        className="cursor-pointer"
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext 
                    onClick={handleNext}
                    className={`${
                      currentPage === totalPages 
                        ? 'pointer-events-none opacity-50' 
                        : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="mx-auto w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
              <Zap size={40} className="text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              There are no projects matching your current filter. Try selecting a different category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;