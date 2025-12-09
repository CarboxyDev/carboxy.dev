import { Button } from '@/components/ui/button';
import { animate } from 'framer-motion';
import { ArrowBigDownDash, ArrowRight } from 'lucide-react';

export const LearnMoreButton = () => {
  return (
    <Button
      onClick={() => {
        const elem = document.getElementById('projects');
        if (elem) {
          animate(
            window.scrollY,
            elem.getBoundingClientRect().top + window.scrollY,
            {
              duration: 0.1,
              ease: 'easeInOut',
              onUpdate: (value) => window.scrollTo(0, value),
            }
          );
        }
      }}
      className="group h-14 gap-3 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 px-8 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-primary-500 hover:via-primary-400 hover:to-primary-500 hover:shadow-xl active:scale-95"
    >
      <ArrowBigDownDash className="h-5 w-5 transition-all duration-300 ease-in-out group-hover:translate-y-0.5" />
      <span>View my work</span>
    </Button>
  );
};

export const AboutMeButton = () => {
  return (
    <Button
      onClick={() => {
        const elem =
          document.querySelector('[data-section="about"]') ||
          document.querySelector('section:nth-child(3)');
        if (elem) {
          animate(
            window.scrollY,
            elem.getBoundingClientRect().top + window.scrollY,
            {
              duration: 0.1,
              ease: 'easeInOut',
              onUpdate: (value) => window.scrollTo(0, value),
            }
          );
        }
      }}
      variant="outline"
      className="group h-14 gap-3 border border-zinc-700/70 bg-zinc-800/50 px-8 font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-700/50 hover:text-white active:scale-95"
    >
      <span>Learn about me</span>
      <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
    </Button>
  );
};
