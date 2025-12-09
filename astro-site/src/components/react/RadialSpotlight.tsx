import { cn } from '@/lib/utils';

interface RadialSpotlightProps {
  className?: string;
}

export const RadialSpotlight = ({ className }: RadialSpotlightProps) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 flex items-center justify-center',
        className
      )}
    >
      <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20 opacity-40 blur-[120px]" />
    </div>
  );
};
