import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import React from 'react';
import { toast } from 'sonner';

interface Props {
  site: string;
  url: string;
  children: React.ReactElement;
}

export const SocialButton = (props: Props) => {
  const isMail = props.url.startsWith('mailto:');
  const isHttp =
    props.url.startsWith('http://') || props.url.startsWith('https://');

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const email = props.url.replace('mailto:', '');

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

  const ButtonWrapper = isMail ? 'button' : 'a';
  const buttonProps = isMail
    ? { onClick: handleEmailClick, type: 'button' as const }
    : {
        href: props.url,
        target: '_blank' as const,
        rel: isHttp ? ('noopener noreferrer' as const) : undefined,
      };

  return (
    <TooltipProvider>
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>
        <ButtonWrapper
          {...buttonProps}
          title={props.site}
          className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-700/40 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-zinc-600/60 hover:from-zinc-700/60 hover:to-zinc-800/60 hover:shadow-xl hover:shadow-zinc-900/50 active:scale-95"
        >
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div
            className={`pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-10 ${
              props.site === 'X (Formerly Twitter)'
                ? 'bg-gradient-to-br from-sky-400 to-sky-600'
                : props.site === 'Github'
                  ? 'bg-gradient-to-br from-gray-600 to-gray-800'
                  : props.site === 'Email'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-700'
                    : props.site === 'Blog'
                      ? 'bg-gradient-to-br from-orange-500 to-orange-700'
                      : 'bg-gradient-to-br from-zinc-600 to-zinc-800'
            }`}
          />

          <div className="relative z-10">
            {React.cloneElement(props.children, {
              className: `${props.children.props.className} transition-all duration-300 group-hover:scale-110  ${
                props.site === 'X (Formerly Twitter)'
                  ? 'group-hover:text-sky-300'
                  : props.site === 'Github'
                    ? 'group-hover:text-gray-100'
                    : props.site === 'Email'
                      ? 'group-hover:text-blue-300'
                      : props.site === 'Blog'
                        ? 'group-hover:text-orange-300'
                        : 'group-hover:text-zinc-100'
              }`,
            })}
          </div>
        </ButtonWrapper>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="border-zinc-600/50 bg-gradient-to-br from-zinc-800/95 to-zinc-900/95 text-zinc-100 shadow-xl backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 px-1 py-0.5">
          <div className="flex size-7 items-center justify-center rounded bg-zinc-700/50">
            {React.cloneElement(props.children, {
              className: 'size-4 text-zinc-300',
            })}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">
              {props.site === 'X (Formerly Twitter)'
                ? 'Follow on X'
                : props.site === 'Github'
                  ? 'View my code'
                  : props.site === 'Email'
                    ? 'Get in touch'
                    : props.site === 'Blog'
                      ? 'Read my thoughts'
                      : props.site}
            </span>
            <span className="text-xs text-zinc-400">
              {props.site === 'X (Formerly Twitter)'
                ? '@CarboxyDev'
                : props.site === 'Github'
                  ? 'github.com/CarboxyDev'
                  : props.site === 'Email'
                    ? 'carboxy17@gmail.com'
                    : props.site === 'Blog'
                      ? 'carboxy.substack.com'
                      : 'Click to open'}
            </span>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
    </TooltipProvider>
  );
};
