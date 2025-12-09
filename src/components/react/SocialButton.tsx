import { cloneElement, type MouseEvent, type ReactElement } from 'react';
import { toast } from 'sonner';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface SocialButtonProps {
  site: string;
  url: string;
  children: ReactElement<{ className?: string }>;
}

type SiteConfig = {
  gradientClasses: string;
  hoverTextColor: string;
  tooltipLabel: string;
  tooltipSubtext: string;
};

const siteConfigs: Record<string, SiteConfig> = {
  'X (Formerly Twitter)': {
    gradientClasses: 'bg-linear-to-br from-sky-400 to-sky-600',
    hoverTextColor: 'group-hover:text-sky-300',
    tooltipLabel: 'Follow on X',
    tooltipSubtext: '@CarboxyDev',
  },
  Github: {
    gradientClasses: 'bg-linear-to-br from-gray-600 to-gray-800',
    hoverTextColor: 'group-hover:text-gray-100',
    tooltipLabel: 'View my code',
    tooltipSubtext: 'github.com/CarboxyDev',
  },
  Email: {
    gradientClasses: 'bg-linear-to-br from-blue-500 to-blue-700',
    hoverTextColor: 'group-hover:text-blue-300',
    tooltipLabel: 'Get in touch',
    tooltipSubtext: 'carboxy17@gmail.com',
  },
  Blog: {
    gradientClasses: 'bg-linear-to-br from-orange-500 to-orange-700',
    hoverTextColor: 'group-hover:text-orange-300',
    tooltipLabel: 'Read my thoughts',
    tooltipSubtext: 'carboxy.substack.com',
  },
};

const defaultConfig: SiteConfig = {
  gradientClasses: 'bg-linear-to-br from-zinc-600 to-zinc-800',
  hoverTextColor: 'group-hover:text-zinc-100',
  tooltipLabel: '',
  tooltipSubtext: 'Click to open',
};

export const SocialButton = ({ site, url, children }: SocialButtonProps) => {
  const config = siteConfigs[site] || defaultConfig;
  const isMail = url.startsWith('mailto:');
  const isHttp = url.startsWith('http://') || url.startsWith('https://');

  const handleEmailClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const email = url.replace('mailto:', '');

    try {
      await navigator.clipboard.writeText(email);
      toast.success('Email copied to clipboard!', {
        description: email,
      });
    } catch {
      toast.error('Failed to copy email', {
        description: 'Please try again',
      });
    }
  };

  const sharedClasses =
    'group relative flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-700/40 bg-linear-to-br from-zinc-800/50 to-zinc-900/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-zinc-600/60 hover:from-zinc-700/60 hover:to-zinc-800/60 hover:shadow-xl hover:shadow-zinc-900/50 active:scale-95';

  const buttonContent = (
    <>
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-r from-transparent via-white/2 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div
        className={`pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-10 ${config.gradientClasses}`}
      />
      <div className="relative z-10">
        {cloneElement(children, {
          className: `${children.props.className || ''} transition-all duration-300 group-hover:scale-110 ${config.hoverTextColor}`,
        })}
      </div>
    </>
  );

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          {isMail ? (
            <button
              onClick={handleEmailClick}
              type="button"
              title={site}
              className={sharedClasses}
            >
              {buttonContent}
            </button>
          ) : (
            <a
              href={url}
              target="_blank"
              rel={isHttp ? 'noopener noreferrer' : undefined}
              title={site}
              className={sharedClasses}
            >
              {buttonContent}
            </a>
          )}
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="border-zinc-600/50 bg-linear-to-br from-zinc-800/95 to-zinc-900/95 text-zinc-100 shadow-xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 px-1 py-0.5">
            <div className="flex size-7 items-center justify-center rounded bg-zinc-700/50">
              {cloneElement(children, {
                className: 'size-4 text-zinc-300',
              })}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {config.tooltipLabel || site}
              </span>
              <span className="text-xs text-zinc-400">{config.tooltipSubtext}</span>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
