import { AboutMeButton, LearnMoreButton } from '@/components/react/CTAButtons';
import { RadialSpotlight } from '@/components/react/RadialSpotlight';
import { SocialButton } from '@/components/react/SocialButton';
import {
  GithubIcon,
  MailIcon,
  TwitterIcon,
} from '@/components/icons/social-icons';
import { LINKS } from '@/lib/config/links';
import { cn } from '@/lib/utils';
import { NotebookPen } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center text-center">
      <RadialSpotlight className="-top-40" />
      <div
        className={cn(
          'relative z-10 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl font-heading'
        )}
      >
        <h1 className="mb-4 text-zinc-100">
          Transforming Ideas into Digital Reality.
        </h1>
        <div
          className="animate-fade-in-up bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-400 bg-clip-text pb-2 text-3xl font-semibold text-transparent opacity-0 transition-all duration-300 hover:scale-[1.03] hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.3)] md:text-4xl lg:text-5xl"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          Turning visions into products.
        </div>
      </div>

      <div className="relative z-10 mt-6 max-w-2xl text-lg leading-relaxed text-zinc-200 sm:text-xl 2xl:mt-12">
        Full-stack developer with powerful design skills. Proficient in creating
        beautiful, cohesive interfaces that work end-to-end.
      </div>

      <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
        <LearnMoreButton />
        <AboutMeButton />
      </div>

      <div className="relative z-10 mt-24 flex flex-col items-center gap-12">
        <div className="flex items-center gap-4">
          <div
            className="animate-slide-in-left h-px w-16 bg-gradient-to-r from-transparent via-zinc-600/50 to-zinc-600/50 opacity-0"
            style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
          ></div>
          <div className="flex items-center gap-2">
            <div
              className="animate-divider-glow-once h-1.5 w-1.5 rounded-full bg-zinc-400"
              style={{ animationDelay: '1.8s', color: '#a1a1aa' }}
            ></div>
            <div
              className="animate-divider-glow-once h-1.5 w-1.5 rounded-full bg-zinc-300"
              style={{ animationDelay: '2.0s', color: '#d4d4d8' }}
            ></div>
            <div
              className="animate-divider-glow-once h-1.5 w-1.5 rounded-full bg-zinc-400"
              style={{ animationDelay: '2.2s', color: '#a1a1aa' }}
            ></div>
          </div>
          <div
            className="animate-slide-in-right h-px w-16 bg-gradient-to-l from-transparent via-zinc-600/50 to-zinc-600/50 opacity-0"
            style={{ animationDelay: '1.4s', animationFillMode: 'both' }}
          ></div>
        </div>

        <div className="flex justify-center gap-4">
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '2.4s', animationFillMode: 'both' }}
          >
            <SocialButton site="X (Formerly Twitter)" url={LINKS.twitter}>
              <TwitterIcon className="size-5 text-zinc-300" />
            </SocialButton>
          </div>
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '2.6s', animationFillMode: 'both' }}
          >
            <SocialButton site="Github" url={LINKS.github}>
              <GithubIcon className="size-5 text-zinc-300" />
            </SocialButton>
          </div>
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '2.8s', animationFillMode: 'both' }}
          >
            <SocialButton site="Email" url={LINKS.email}>
              <MailIcon className="size-5 text-zinc-300" />
            </SocialButton>
          </div>
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '3.0s', animationFillMode: 'both' }}
          >
            <SocialButton site="Blog" url={LINKS.blog}>
              <NotebookPen className="size-5 text-zinc-300" />
            </SocialButton>
          </div>
        </div>
      </div>
    </section>
  );
};
