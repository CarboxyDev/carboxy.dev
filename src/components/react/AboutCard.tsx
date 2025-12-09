import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface AboutCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  hoveredCard: string | null;
  onHover: (id: string | null) => void;
  className?: string;
}

export const AboutCard = ({
  id,
  title,
  icon: Icon,
  children,
  hoveredCard,
  onHover,
  className
}: AboutCardProps) => {
  return (
    <div
      className={cn(
        'group rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30 hover:shadow-xl hover:shadow-primary-400/5',
        hoveredCard && hoveredCard !== id ? 'opacity-50' : 'opacity-100',
        className
      )}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="mb-6">
        <h3 className="flex items-center gap-3 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 group-hover:from-white group-hover:to-primary-200">
          <div className="rounded-lg border border-primary-400/30 bg-gradient-to-br from-primary-400/20 to-primary-500/10 p-2 transition-all duration-300 group-hover:border-primary-400/50 group-hover:from-primary-400/30 group-hover:to-primary-500/20">
            <Icon className="h-5 w-5 text-primary-400" />
          </div>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
};
