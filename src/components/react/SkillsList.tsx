interface Skill {
  title: string;
  description: string;
}

const SKILLS: Skill[] = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive, interactive user interfaces with React, Next.js, and modern web technologies',
  },
  {
    title: 'Backend Development',
    description:
      'Creating robust APIs, databases, and server-side logic that form the backbone of web applications',
  },
  {
    title: 'UI/UX Design',
    description:
      'Crafting intuitive interfaces and seamless user experiences that are delightful to use',
  },
  {
    title: 'Deployment & Infrastructure',
    description:
      'Working with GCP, Vercel and CI/CD pipelines for production apps',
  },
  {
    title: 'AI/ML Integration',
    description:
      'Incorporating AI-powered features and automations to enhance user experiences and workflows',
  },
  {
    title: 'Developer Tooling & CLI',
    description:
      'Building command-line tools, templates and development utilities that are useful',
  },
];

export const SkillsList = () => {
  return (
    <div className="space-y-3">
      {SKILLS.map((skill, index) => (
        <div
          key={index}
          className="group relative space-y-1.5 rounded-lg border border-zinc-800/50 p-4 transition-all hover:border-zinc-700/50 hover:bg-zinc-900/30"
        >
          <span className="font-medium text-zinc-200 transition-colors group-hover:text-white">
            {skill.title}
          </span>
          <p className="text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
            {skill.description}
          </p>
        </div>
      ))}
    </div>
  );
};
