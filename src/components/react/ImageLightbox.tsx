import { cn } from '@/lib/utils';
import { useState, type ReactNode } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

interface ImageLightboxProps {
  images: string[];
  alt: string;
  className?: string;
  previewImage?: ReactNode;
}

export const ImageLightbox = ({
  images,
  alt,
  className,
  previewImage,
}: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = images.map((image) => ({
    src: '/' + image,
    alt: alt,
  }));

  return (
    <>
      <div
        className={cn(
          'group relative cursor-zoom-in overflow-hidden rounded-lg',
          className
        )}
        onClick={() => {
          setCurrentIndex(0);
          setIsOpen(true);
        }}
      >
        <div className="absolute inset-0 z-10 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            Click to preview
          </div>
        </div>
        {previewImage ? (
          previewImage
        ) : images[0] ? (
          <img
            src={'/' + images[0]}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        styles={{
          container: {
            backgroundColor: 'rgba(20, 20, 22, 0.95)',
            backdropFilter: 'blur(8px)',
          },
          button: {
            filter: 'none',
          },
        }}
        render={{
          buttonPrev: images.length <= 1 ? () => null : undefined,
          buttonNext: images.length <= 1 ? () => null : undefined,
        }}
        carousel={{
          finite: images.length <= 1,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        animation={{
          fade: 300,
          swipe: 300,
          zoom: 300,
        }}
      />
    </>
  );
};
