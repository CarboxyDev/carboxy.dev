import { ChevronUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex justify-center py-8">
      <button
        onClick={scrollToTop}
        className="group rounded-full border border-zinc-700/50 bg-zinc-800/50 p-3 transition-all duration-300 hover:scale-110 hover:bg-zinc-700/50"
        aria-label="Back to top"
      >
        <ChevronUp className="size-5 text-zinc-400 transition-colors group-hover:text-zinc-300" />
      </button>
    </footer>
  );
};
