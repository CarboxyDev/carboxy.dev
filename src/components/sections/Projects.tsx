import { GithubIcon } from '@/components/icons/social-icons';
import { ImageLightbox } from '@/components/react/ImageLightbox';
import { SectionHeading } from '@/components/react/SectionHeading';
import { Button } from '@/components/ui/button';
import { PrimaryButton } from '@/components/ui/primary-button';
import { getFeaturedProjects } from '@/lib/config/projects';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  github?: string;
  techStack: string[];
  images: string[];
  align: 'left' | 'right';
}

const ProjectCard = (props: ProjectCardProps) => {
  const { href, title, description, techStack, images, align, github } = props;

  return (
    <section
      className={cn(
        'flex flex-col gap-8 lg:gap-12',
        align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      )}
    >
      <div
        className={cn(
          'flex-1 space-y-6',
          align === 'left' ? 'lg:mr-8' : 'lg:ml-8'
        )}
      >
        <div>
          <h3 className="group text-3xl font-bold text-white lg:text-4xl">
            <a
              href={href}
              target="_blank"
              className="inline-flex items-center gap-3 transition-all duration-300 hover:translate-x-1 hover:text-primary-400"
            >
              {title}
              <ExternalLink className="h-6 w-6 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
            </a>
          </h3>
        </div>

        <p className="max-w-lg leading-relaxed text-zinc-300">{description}</p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <ProjectTag key={index} label={tech} />
          ))}
        </div>

        <div className="flex gap-3 pt-4">
          <PrimaryButton href={href} target="_blank">
            <ExternalLink className="h-4 w-4" />
            <span>View Project</span>
          </PrimaryButton>
          {github && (
            <a href={github} target="_blank">
              <Button
                variant="outline"
                className="group h-12 gap-2 border border-zinc-700/70 bg-zinc-800/50 px-6 font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-700/50 hover:text-white active:scale-95"
              >
                <GithubIcon className="size-5" />
                <span>View Code</span>
              </Button>
            </a>
          )}
        </div>
      </div>

      <div className="max-w-2xl flex-1">
        <ImageLightbox images={images} alt={`${title} preview`} />
      </div>
    </section>
  );
};

const ProjectTag = (props: { label: string }) => {
  const { label } = props;
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1.5 text-sm font-medium text-primary-400 transition-colors hover:border-primary-500/30 hover:bg-primary-500/20 font-mono-badge'
      )}
    >
      {label}
    </span>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="flex flex-col pt-20 sm:mb-44 lg:pt-32">
      <SectionHeading title="Featured Projects" />
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col gap-y-24 sm:gap-y-32 lg:gap-y-40">
          {getFeaturedProjects().map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                href={project.href}
                techStack={project.techStack}
                images={project.images}
                align={index % 2 === 0 ? 'left' : 'right'}
                github={project.github}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
