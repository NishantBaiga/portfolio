import codeagent from "../assets/images/codeagent.png";

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
    title: "AI Website Builder",
    description:
      "A modern website builder that lets you design, customize, and launch responsive websites quickly without writing complex code.",
    tags: [
      "Nextjs",
      "Gemini",
      "Neon Db with Prisma",
      "Tailwind",
      "tRPC with React Query",
      "Inngest and AgentKit",
      "Shadcn ",
    ],
    image: codeagent,
    githubUrl: "https://github.com/NishantBaiga/codeagent",
    liveUrl: "https://codeagent.vercel.app/",
    featured: true,
    type: "web",
  },
  {
    id: 3,
    title: "AI PDF Summarizer",
    description:
      "An AI-powered PDF summarizer that quickly analyzes documents and generates clear, concise summaries for faster understanding.",
    tags: ["TypeScript", "Nextjs", "Langchain", "Qdrant Db", "Clerk", "Tailwind" , "Shadcn UI"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com/NishantBaiga/",
    liveUrl: "",
    featured: true,
    type: "web",
  },
];

export default projects;
