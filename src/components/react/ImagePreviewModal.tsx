import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ImagePreviewModalProps {
  images: string[];
  alt: string;
}

export const ImagePreviewModal = ({ images, alt }: ImagePreviewModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 250);
  }, []);

  const open = useCallback(() => {
    previousFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    setIsOpen(true);
  }, []);

  // Animate in after portal mounts
  useEffect(() => {
    if (!isOpen) return;
    // Double rAF to ensure the browser has painted the initial (hidden) state
    const frameId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
        closeButtonRef.current?.focus();
      });
    });
    return () => cancelAnimationFrame(frameId);
  }, [isOpen]);

  // Listen for click on the trigger element
  useEffect(() => {
    const container = anchorRef.current?.closest('.image-preview-wrapper');
    const trigger = container?.querySelector('[data-preview-trigger]');

    if (trigger) {
      trigger.addEventListener('click', open);
    }
    return () => {
      if (trigger) {
        trigger.removeEventListener('click', open);
      }
    };
  }, [open]);

  // Handle Escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    };
  }, [isOpen, close]);

  return (
    <>
      <div ref={anchorRef} />
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            style={{
              backgroundColor: isVisible
                ? 'rgba(0, 0, 0, 0.92)'
                : 'rgba(0, 0, 0, 0)',
              backdropFilter: isVisible ? 'blur(12px)' : 'blur(0px)',
              transition:
                'background-color 250ms cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="focus-ring absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 200ms ease-out 50ms',
              }}
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={'/' + images[0]}
              alt={alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain select-none shadow-2xl"
              style={{
                transform: isVisible ? 'scale(1)' : 'scale(0.92)',
                opacity: isVisible ? 1 : 0,
                transition:
                  'transform 300ms cubic-bezier(0.16, 1, 0.3, 1), opacity 250ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              draggable={false}
            />
          </div>,
          document.body
        )}
    </>
  );
};
