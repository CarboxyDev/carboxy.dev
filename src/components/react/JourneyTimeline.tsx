import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface JourneyTimelineProps {
  isPaused?: boolean;
}

interface JourneyEvent {
  year: string;
  title: string;
  description: string;
}

const JOURNEY_EVENTS: JourneyEvent[] = [
  {
    year: '2015',
    title: 'The Beginning',
    description:
      'Started programming to create a website for my Minecraft server - it was a very basic HTML page with simple design.',
  },
  {
    year: '2018',
    title: 'Python & Automation',
    description:
      'Dove into Python, creating Discord bots and automation tools for image manipulation and workflow optimization.',
  },
  {
    year: '2020',
    title: 'Backend Focus',
    description:
      'Shifted focus to backend development and data processing, building backends and realtime web-socket applications.',
  },
  {
    year: '2022',
    title: 'Modern Frontend',
    description:
      'Embraced modern frontend development with React, Next.js, and Tailwind CSS.',
  },
  {
    year: '2024',
    title: 'Product Mastery',
    description:
      'Achieved confidence in building complete products from concept to deployment across the entire development lifecycle.',
  },
  {
    year: '2025',
    title: 'AI-Enhanced Development',
    description:
      'Now fully embracing AI as my development partner - using Claude Code and Cursor to assist me in building faster.',
  },
];

export const JourneyTimeline = ({ isPaused = false }: JourneyTimelineProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        background: [
          'linear-gradient(to bottom, rgba(167, 139, 250, 0) 0%, rgba(167, 139, 250, 0.6) 3%, rgba(167, 139, 250, 0) 8%)',
          'linear-gradient(to bottom, rgba(167, 139, 250, 0) 10%, rgba(167, 139, 250, 0.6) 13%, rgba(167, 139, 250, 0) 18%)',
          'linear-gradient(to bottom, rgba(167, 139, 250, 0) 20%, rgba(167, 139, 250, 0.6) 23%, rgba(167, 139, 250, 0) 28%)',
          'linear-gradient(to bottom, rgba(167, 139, 250, 0) 30%, rgba(167, 139, 250, 0.6) 33%, rgba(167, 139, 250, 0) 38%)',
          'linear-gradient(to bottom, rgba(167, 139, 250, 0) 40%, rgba(167, 139, 250, 0.6) 43%, rgba(167, 139, 250, 0) 48%)',
          'linear-gradient(to bottom, rgba(167, 139, 250, 0) 50%, rgba(167, 139, 250, 0.6) 53%, rgba(167, 139, 250, 0) 58%)',
          'linear-gradient(to bottom, rgba(167, 139, 250, 0) 60%, rgba(167, 139, 250, 0.6) 63%, rgba(167, 139, 250, 0) 68%)',
          'linear-gradient(to bottom, rgba(167, 139, 250, 0) 70%, rgba(167, 139, 250, 0.6) 73%, rgba(167, 139, 250, 0) 78%)',
          'linear-gradient(to bottom, rgba(167, 139, 250, 0) 80%, rgba(167, 139, 250, 0.6) 83%, rgba(167, 139, 250, 0) 88%)',
          'linear-gradient(to bottom, rgba(167, 139, 250, 0) 90%, rgba(167, 139, 250, 0.6) 93%, rgba(167, 139, 250, 0) 98%)',
          'linear-gradient(to bottom, rgba(167, 139, 250, 0) 100%, rgba(167, 139, 250, 0.6) 103%, rgba(167, 139, 250, 0) 108%)',
        ],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        },
      });
    }
  }, [isPaused, controls]);

  return (
    <div className="relative">
      <div
        className="absolute left-[7px] top-1 w-0.5 bg-primary-400/30"
        style={{ height: 'calc(100% - 80px)' }}
      />
      <motion.div
        className="absolute left-[7px] top-1 w-0.5"
        style={{ height: 'calc(100% - 80px)' }}
        animate={controls}
      />
      <div className="space-y-8">
        {JOURNEY_EVENTS.map((event, index) => (
          <div key={index} className="relative flex items-start gap-4">
            <div className="relative z-10 mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-[#141416] bg-primary-400" />
            <div className="flex-1">
              <div className="text-sm font-medium text-primary-400">
                {event.year} - {event.title}
              </div>
              <p className="mt-1 text-sm text-zinc-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
