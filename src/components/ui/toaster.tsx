import { Toaster as SonnerToaster } from 'sonner';

export const Toaster = () => {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#18181b',
          border: '1px solid #27272a',
          color: '#fafafa',
        },
      }}
    />
  );
};
