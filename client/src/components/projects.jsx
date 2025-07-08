import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const projects = [
  {
    title: "Project One",
    description:
      "This is the first project description. It explains key features and goals.",
    image: "https://picsum.photos/400/300?1",
    url: "https://example.com/project-one",
    codeUrl: "https://github.com/yourusername/project-one",
    tech: ["React", "Tailwind CSS", "Express"],
  },
  {
    title: "Project Two",
    description:
      "Second project overview with highlights and challenges solved.",
    image: "https://picsum.photos/400/300?2",
    url: "https://example.com/project-two",
    codeUrl: "https://github.com/yourusername/project-one",
    tech: ["Node.js", "MongoDB", "REST API"],
  },
  {
    title: "Project Three",
    description: "Description for third project showcasing UI/UX skills.",
    image: "https://picsum.photos/400/300?3",
    url: "https://example.com/project-three",
    codeUrl: "https://github.com/yourusername/project-one",
    tech: ["Next.js", "GraphQL", "Apollo"],
  },
  {
    title: "Project Four",
    description:
      "Fourth project description showing deployment and optimization.",
    image: "https://picsum.photos/400/300?4",
    url: "https://example.com/project-four",
    codeUrl: "https://github.com/yourusername/project-one",
    tech: ["TypeScript", "Vite", "Zustand"],
  },
  {
    title: "Project Five",
    description: "Fifth project with advanced backend and CI/CD workflows.",
    image: "https://picsum.photos/400/300?5",
    url: "https://example.com/project-five",
    codeUrl: "https://github.com/yourusername/project-one",
    tech: ["Docker", "Nginx", "PM2"],
  },
  {
    title: "Project Six",
    description: "A sixth project involving full-stack architecture and SEO.",
    image: "https://picsum.photos/400/300?6",
    url: "https://example.com/project-six",
    codeUrl: "https://github.com/yourusername/project-one",
    tech: ["Next.js", "Tailwind", "SEO"],
  },
];

const ProjectsPerPage = 3;

export default function ProjectsWithPagination() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const projectsPerPage = isMobile ? 3 : 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const [page, setPage] = useState(1);

  const paginatedProjects = projects.slice(
    (page - 1) * projectsPerPage,
    page * projectsPerPage
  );

  return (
  <div id="projects" className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-600 p-20 space-y-12">
  {/* Project Cards */}
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {paginatedProjects.map((p, i) => (
      <a
        href={p.url}
        key={i}
        target="_blank"
        rel="noopener noreferrer"
        className="group perspective cursor-pointer"
      >
        <div className="relative w-full h-70 rounded-xl shadow-lg transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
          {/* Front */}
          <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white dark:text-gray-100 p-4 text-xl font-semibold">
              {p.title}
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white dark:bg-gray-900 rounded-xl p-6 flex flex-col justify-between shadow-lg border border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{p.title}</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 dark:bg-gray-800 text-blue-800 dark:text-gray-100 px-3 py-1 rounded-full text-sm font-semibold shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 justify-between">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-blue-600 dark:bg-gray-800 hover:bg-blue-700 dark:hover:bg-gray-700 text-white dark:text-gray-100 font-semibold py-2 px-6 rounded-full shadow transition"
                onClick={(e) => e.stopPropagation()}
              >
                Visit Project
              </a>

              <a
                href={p.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold py-2 px-6 rounded-full shadow transition"
                onClick={(e) => e.stopPropagation()}
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </a>
    ))}
  </div>

  {/* Pagination Controls */}
  <div className="flex justify-center items-center gap-4 mt-4">
    <button
      onClick={() => setPage((p) => Math.max(1, p - 1))}
      disabled={page === 1}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-700 disabled:opacity-50"
    >
      Prev
    </button>
    <span className="text-gray-700 dark:text-gray-100 font-semibold">
      Page {page} of {totalPages}
    </span>
    <button
      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
      disabled={page === totalPages}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-700 disabled:opacity-50"
    >
      Next
    </button>
  </div>
</div>

  );
}

