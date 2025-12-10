import { Toaster as SonnerToaster } from 'sonner';
import { CircleCheck, CircleX } from 'lucide-react';

export const Toaster = () => {
  return (
    <SonnerToaster
      position="bottom-right"
      gap={12}
      icons={{
        success: <CircleCheck className="h-5 w-5" />,
        error: <CircleX className="h-5 w-5" />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'group flex items-start gap-3 w-full rounded-lg border p-4 shadow-lg bg-card border-border',
          title: 'text-sm font-medium text-foreground',
          description: 'text-sm text-muted-foreground mt-0.5',
          success: 'border-primary/30 [&_svg]:text-primary',
          error: 'border-destructive/30 [&_svg]:text-destructive',
          actionButton:
            'bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors',
          cancelButton:
            'bg-muted text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-md hover:bg-accent transition-colors',
        },
      }}
    />
  );
};
