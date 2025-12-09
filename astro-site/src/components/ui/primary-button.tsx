import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  target?: string;
  rel?: string;
}

export const PrimaryButton = ({
  children,
  className,
  href,
  onClick,
  target,
  rel,
}: PrimaryButtonProps) => {
  const buttonContent = (
    <Button
      className={cn(
        'group h-12 gap-2 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 px-6 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-primary-500 hover:via-primary-400 hover:to-primary-500 hover:shadow-xl active:scale-95',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};
