import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

interface ImageLightboxModalProps {
  images: string[];
  alt: string;
}

export const ImageLightboxModal = ({
  images,
  alt,
}: ImageLightboxModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = images.map((image) => ({
    src: '/' + image,
    alt: alt,
  }));

  useEffect(() => {
    const handleOpen = () => {
      setCurrentIndex(0);
      setIsOpen(true);
    };

    const modalElement = document.querySelector('[data-lightbox-modal]');
    modalElement?.addEventListener('open-lightbox', handleOpen as EventListener);

    return () => {
      modalElement?.removeEventListener('open-lightbox', handleOpen as EventListener);
    };
  }, []);

  return (
    <div data-lightbox-modal>
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
    </div>
  );
};
