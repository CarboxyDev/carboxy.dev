interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  images: string[];
  techStack: string[];
  github?: string;
  isFeatured: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 'blitzpack',
    title: 'Blitzpack',
    description:
      'Production-ready TypeScript monorepo with Next.js, Fastify, and Turborepo. Authentication, admin dashboards, API infrastructure, and battle-tested features already configured and working out of the box.',
    href: 'https://blitzpack.carboxy.dev',
    images: ['blitzpack1.png'],
    techStack: ['TypeScript', 'Next.js', 'Fastify', 'Turborepo', 'TailwindCSS'],
    github: 'https://github.com/CarboxyDev/blitzpack',
    isFeatured: true,
  },
  {
    id: 'adden-ai',
    title: 'AddenAI',
    description:
      'An AI webapp for optimizing ad accounts and campaigns where you can chat with all your marketing data from various ad platforms.',
    href: 'https://adden.ai/sign-in',
    images: ['adden3.png'],
    techStack: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'FastAPI'],
    isFeatured: true,
  },
  {
    id: 'quizfoundry',
    title: 'QuizFoundry',
    description:
      'QuizFoundry is a platform for quickly creating and sharing quizzes with the power of AI.',
    href: 'https://quizfoundry.carboxy.dev',
    images: ['quizfoundry1.png'],
    techStack: ['TypeScript', 'React', 'Next.js', 'Express', 'TailwindCSS'],
    github: 'https://github.com/CarboxyDev/quizfoundry',
    isFeatured: true,
  },
];

export type { Project };

export { PROJECTS };

export const getFeaturedProjects = () =>
  PROJECTS.filter((project) => project.isFeatured);
