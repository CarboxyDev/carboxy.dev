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
    id: 'arawn',
    title: 'Arawn',
    description:
      'Arawn is a production-ready full-stack TypeScript monorepo template with Next.js, NestJS, Turborepo and other modern technologies.',
    href: 'https://arawn.carboxy.dev',
    images: ['arawn1.png'],
    techStack: ['TypeScript', 'Next.js', 'NestJS', 'TailwindCSS', 'Turborepo'],
    github: 'https://github.com/CarboxyDev/arawn',
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
  {
    id: 'buy-or-bye',
    title: 'Buy or Bye',
    description:
      'Make smarter purchase decisions. BuyOrBye is a website that helps you make smarter purchase decisions by analyzing your needs and preferences and providing you with a smart AI-powered verdict.',
    href: 'https://buyorbye.carboxy.dev/',
    images: ['buyorbye1.png'],
    techStack: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Gemini SDK'],
    github: 'https://github.com/CarboxyDev/buyorbye',
    isFeatured: true,
  },
];

export type { Project };

export { PROJECTS };

export const getFeaturedProjects = () =>
  PROJECTS.filter((project) => project.isFeatured);
