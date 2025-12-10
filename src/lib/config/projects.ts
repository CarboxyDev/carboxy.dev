type ProjectType = 'Open Source' | 'SaaS' | 'Template' | 'Tool';

interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  images: string[];
  techStack: string[];
  github?: string;
  isFeatured: boolean;
  type: ProjectType;
}

const PROJECTS: Project[] = [
  {
    id: 'blitzpack',
    title: 'Blitzpack',
    description:
      'Blitzpack is a TypeScript monorepo template with Next.js, Fastify, and Turborepo. It comes with production-grade infrastructure and battle-tested features working out of the box. It even comes with a CLI generator to help you get started quickly.',
    href: 'https://blitzpack.carboxy.dev',
    images: ['blitzpack1.png'],
    techStack: ['TypeScript', 'Next.js', 'Fastify', 'Turborepo'],
    github: 'https://github.com/CarboxyDev/blitzpack',
    isFeatured: true,
    type: 'Template',
  },
  {
    id: 'adden-ai',
    title: 'AddenAI',
    description:
      'AddenAI is a web platform for optimizing Google Ads and Meta Ads accounts and campaigns. You can chat with all your marketing data in a unified interface and create custom reports to better understand your campaigns.',
    href: 'https://adden.ai/sign-in',
    images: ['adden3.png'],
    techStack: ['TypeScript', 'Next.js', 'FastAPI'],
    isFeatured: true,
    type: 'SaaS',
  },
  {
    id: 'quizfoundry',
    title: 'QuizFoundry',
    description:
      'QuizFoundry is a platform for quickly creating and sharing quizzes with heavy AI assistance. It served as an experimental project to explore the capabilities of AI in creating novel content.',
    href: 'https://quizfoundry.carboxy.dev',
    images: ['quizfoundry1.png'],
    techStack: ['TypeScript', 'Next.js', 'Express.js'],
    github: 'https://github.com/CarboxyDev/quizfoundry',
    isFeatured: true,
    type: 'Open Source',
  },
];

export type { Project };

export { PROJECTS };

export const getFeaturedProjects = () =>
  PROJECTS.filter((project) => project.isFeatured);
