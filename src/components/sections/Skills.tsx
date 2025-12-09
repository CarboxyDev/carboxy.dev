import {
  DockerLogo,
  ExpressjsLogo,
  FigmaLogo,
  GitLogo,
  GoLogo,
  NextjsLogo,
  NodejsLogo,
  PostgreSQLLogo,
  ReactLogo,
  TailwindLogo,
  TypescriptLogo,
} from '@/components/icons/brand-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { animated, useSpring } from '@react-spring/web';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { cloneElement } from 'react';

type SkillCategory = 'frontend' | 'backend' | 'tools' | 'design';

interface Skill {
  label: string;
  icon: React.ReactElement;
  gradient: string;
  hoverColor: string;
  categories: SkillCategory[];
}

const SKILLS: Skill[] = [
  {
    label: 'React.js',
    icon: <ReactLogo />,
    gradient: 'from-blue-400/20 to-cyan-400/20',
    hoverColor: 'from-blue-500/30 to-cyan-500/30',
    categories: ['frontend'],
  },
  {
    label: 'Next.js',
    icon: <NextjsLogo />,
    gradient: 'from-gray-600/20 to-gray-400/20',
    hoverColor: 'from-gray-600/30 to-gray-400/30',
    categories: ['frontend'],
  },
  {
    label: 'TailwindCSS',
    icon: <TailwindLogo />,
    gradient: 'from-cyan-400/20 to-teal-400/20',
    hoverColor: 'from-cyan-400/30 to-teal-400/30',
    categories: ['frontend'],
  },
  {
    label: 'TypeScript',
    icon: <TypescriptLogo />,
    gradient: 'from-blue-600/20 to-blue-400/20',
    hoverColor: 'from-blue-600/30 to-blue-400/30',
    categories: ['frontend', 'backend'],
  },
  {
    label: 'Node.js',
    icon: <NodejsLogo />,
    gradient: 'from-green-500/20 to-green-400/20',
    hoverColor: 'from-green-500/30 to-green-400/30',
    categories: ['backend'],
  },
  {
    label: 'Express.js',
    icon: <ExpressjsLogo />,
    gradient: 'from-gray-700/20 to-gray-500/20',
    hoverColor: 'from-gray-700/30 to-gray-500/30',
    categories: ['backend'],
  },
  {
    label: 'Go',
    icon: <GoLogo />,
    gradient: 'from-cyan-500/20 to-blue-400/20',
    hoverColor: 'from-cyan-500/30 to-blue-400/30',
    categories: ['backend'],
  },
  {
    label: 'PostgreSQL',
    icon: <PostgreSQLLogo />,
    gradient: 'from-blue-600/20 to-blue-500/20',
    hoverColor: 'from-blue-600/30 to-blue-500/30',
    categories: ['backend'],
  },
  {
    label: 'Docker',
    icon: <DockerLogo />,
    gradient: 'from-sky-500/20 to-blue-400/20',
    hoverColor: 'from-sky-500/30 to-blue-400/30',
    categories: ['tools'],
  },
  {
    label: 'Figma',
    icon: <FigmaLogo />,
    gradient: 'from-purple-500/20 to-pink-500/20',
    hoverColor: 'from-purple-500/30 to-pink-500/30',
    categories: ['design'],
  },
];

interface MinorSkill {
  label: string;
  categories: SkillCategory[];
}

const MINOR_SKILLS: MinorSkill[] = [
  { label: 'React Query', categories: ['frontend'] },
  { label: 'Zustand', categories: ['frontend'] },
  { label: 'Shadcn/ui', categories: ['frontend'] },
  { label: 'Recharts', categories: ['frontend'] },
  { label: 'Better Auth', categories: ['frontend'] },
  { label: 'React Hook Form', categories: ['frontend'] },
  { label: 'TanStack Table', categories: ['frontend'] },
  { label: 'Zod', categories: ['frontend', 'backend'] },
  { label: 'Prisma', categories: ['backend'] },
  { label: 'Supabase', categories: ['backend'] },
  { label: 'Vercel', categories: ['tools'] },
  { label: 'GCP', categories: ['tools'] },
  { label: 'GitHub Actions', categories: ['tools'] },
  { label: 'Git', categories: ['tools'] },
];

const CATEGORY_COLORS = {
  frontend: 'hover:border-blue-500/40 hover:shadow-blue-500/10',
  backend: 'hover:border-green-500/40 hover:shadow-green-500/10',
  tools: 'hover:border-orange-500/40 hover:shadow-orange-500/10',
  design: 'hover:border-purple-500/40 hover:shadow-purple-500/10',
};

const OVERLAY_COLORS = {
  frontend: 'bg-blue-500/5',
  backend: 'bg-green-500/5',
  tools: 'bg-orange-500/5',
  design: 'bg-purple-500/5',
};

const SkillCard = ({
  skill,
  isVisible,
}: {
  skill: Skill;
  isVisible: boolean;
}) => {
  const cardSpring = useSpring({
    opacity: isVisible ? 1 : 0.3,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
    config: { tension: 200, friction: 25 },
  });

  const cardContent = (
    <motion.div
      whileHover={isVisible ? { scale: 1.05, y: -2 } : {}}
      whileTap={isVisible ? { scale: 0.98 } : {}}
      className={cn(
        'group relative size-20 rounded-2xl border border-zinc-700/40 backdrop-blur-sm transition-all duration-300',
        `bg-linear-to-br ${skill.gradient}`,
        !isVisible && 'grayscale',
        isVisible ? 'cursor-pointer hover:border-zinc-600/60' : 'cursor-default'
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-zinc-900/90 to-zinc-800/70" />

      <div className="relative flex size-full items-center justify-center">
        {cloneElement(skill.icon as React.ReactElement<{ className?: string }>, {
          className: cn(
            'size-8 transition-all duration-300 ease-out',
            isVisible && 'group-hover:drop-shadow-lg'
          ),
        })}
      </div>

      <div
        className={cn(
          'absolute inset-0 rounded-2xl bg-linear-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300',
          `${skill.hoverColor} from-transparent`,
          isVisible && 'group-hover:opacity-100'
        )}
      />
    </motion.div>
  );

  return (
    <animated.div style={cardSpring}>
      {isVisible ? (
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger>{cardContent}</TooltipTrigger>
            <TooltipContent
              side="top"
              className="border-zinc-600/50 bg-linear-to-br from-zinc-800/95 to-zinc-900/95 text-zinc-100 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 px-1 py-0.5">
                <div
                  className={cn(
                    'flex size-8 items-center justify-center rounded-lg',
                    `bg-linear-to-br ${skill.gradient}`
                  )}
                >
                  <div className="absolute inset-0 rounded-lg bg-linear-to-br from-zinc-900/60 to-zinc-800/40" />
                  {React.cloneElement(skill.icon as React.ReactElement<{ className?: string }>, {
                    className: 'relative size-4 text-white',
                  })}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {skill.label}
                  </p>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        cardContent
      )}
    </animated.div>
  );
};

const SkillGrid = () => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  const categoryGroups = React.useMemo(() => {
    const groups: Record<SkillCategory, Skill[]> = {
      frontend: [],
      backend: [],
      tools: [],
      design: [],
    };

    SKILLS.forEach((skill) => {
      skill.categories.forEach((category) => {
        groups[category].push(skill);
      });
    });

    return groups;
  }, []);

  const filteredSkills = React.useMemo(() => {
    if (!activeFilter) return SKILLS;
    return SKILLS.filter((skill) =>
      skill.categories.includes(activeFilter as SkillCategory)
    );
  }, [activeFilter]);

  return (
    <div className="relative w-full">
      <div
        className="mb-12 flex flex-wrap justify-center gap-3"
        role="group"
        aria-label="Filter skills by category"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(null)}
          aria-label="Show all skills"
          aria-pressed={activeFilter === null}
          role="button"
          className={cn(
            'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:ring-offset-2 focus:ring-offset-zinc-900',
            activeFilter === null
              ? 'border-primary-500/50 bg-primary-500/10 text-primary-300'
              : 'border-zinc-700/40 bg-zinc-800/50 text-zinc-300 hover:border-zinc-600/60 hover:bg-zinc-700/50'
          )}
        >
          All Skills
          <span className="text-xs text-zinc-500">({SKILLS.length})</span>
        </motion.button>

        {Object.entries(categoryGroups).map(([category]) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setActiveFilter(activeFilter === category ? null : category)
            }
            aria-label={`Filter skills by ${category}`}
            aria-pressed={activeFilter === category}
            role="button"
            className={cn(
              'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:ring-offset-2 focus:ring-offset-zinc-900',
              activeFilter === category
                ? 'border-primary-500/50 bg-primary-500/10 text-primary-300'
                : 'border-zinc-700/40 bg-zinc-800/50 text-zinc-300 hover:border-zinc-600/60 hover:bg-zinc-700/50'
            )}
          >
            <div
              className={cn(
                'size-2 rounded-full',
                category === 'frontend' && 'bg-blue-500',
                category === 'backend' && 'bg-green-500',
                category === 'tools' && 'bg-orange-500',
                category === 'design' && 'bg-purple-500'
              )}
            />
            <span className="capitalize">{category}</span>
          </motion.button>
        ))}
      </div>

      <div className="relative py-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <motion.div
          layout
          className="relative mx-auto grid max-w-4xl grid-cols-3 place-content-center justify-items-center gap-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8"
        >
          <AnimatePresence mode="popLayout">
            {SKILLS.map((skill, index) => {
              const isVisible = filteredSkills.includes(skill);
              const visibleIndex = filteredSkills.indexOf(skill);
              const staggerDelay = isVisible
                ? visibleIndex * 0.05
                : index * 0.02;

              return (
                <motion.div
                  key={skill.label}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0.3,
                    scale: isVisible ? 1 : 0.9,
                    y: 0,
                  }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: staggerDelay,
                    ease: 'easeOut',
                    layout: { duration: 0.3 },
                  }}
                >
                  <SkillCard skill={skill} isVisible={isVisible} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 w-full max-w-4xl mx-auto"
      >
        <div className="mb-8 text-center">
          <div className="relative inline-flex items-center gap-3">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-zinc-700" />
            <h3 className="text-base font-medium text-zinc-400">
              Additional Technologies & Tools
            </h3>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-zinc-700" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {MINOR_SKILLS.map((skill, index) => {
            const isVisible =
              !activeFilter ||
              skill.categories.includes(activeFilter as SkillCategory);

            const primaryCategory = skill.categories.includes('frontend')
              ? 'frontend'
              : skill.categories.includes('backend')
                ? 'backend'
                : skill.categories.includes('tools')
                  ? 'tools'
                  : 'design';

            return (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                animate={{
                  opacity: isVisible ? 1 : 0.3,
                  scale: isVisible ? 1 : 0.95,
                  y: 0,
                }}
                whileHover={
                  isVisible
                    ? {
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2, ease: 'easeOut' },
                      }
                    : {}
                }
                whileTap={
                  isVisible
                    ? {
                        scale: 0.98,
                        transition: { duration: 0.1 },
                      }
                    : {}
                }
                transition={{
                  delay: index * 0.03,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={cn(
                  'group relative overflow-hidden rounded-lg border border-zinc-700/40 bg-zinc-800/50 px-3.5 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-600/60 hover:bg-zinc-700/50 hover:text-zinc-200 hover:shadow-lg',
                  !isVisible && 'cursor-default grayscale',
                  isVisible && CATEGORY_COLORS[primaryCategory]
                )}
              >
                <div
                  className={cn(
                    'absolute inset-0 opacity-0 transition-opacity duration-300',
                    isVisible && 'group-hover:opacity-100',
                    OVERLAY_COLORS[primaryCategory]
                  )}
                />
                <span className="relative z-10">{skill.label}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  const titleRef = React.useRef(null);
  const titleIsInView = useInView(titleRef, { once: true });
  const gridRef = React.useRef(null);
  const gridIsInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <div className="relative">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="relative mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="relative text-center"
          >
            <h2
              className={cn(
                'text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl font-heading'
              )}
            >
              What I Work With
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={titleIsInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mt-4 h-px w-20 bg-linear-to-r from-transparent via-primary-400 to-transparent"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={gridRef}
        initial={{ opacity: 0, y: 20 }}
        animate={gridIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SkillGrid />
      </motion.div>
    </div>
  );
};
