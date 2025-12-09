import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

interface Props {
  title: string;
}

export const SectionHeading = (props: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative mb-16 flex flex-col items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="relative text-center"
      >
        <h2
          className={cn(
            'text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl font-heading'
          )}
        >
          {props.title}
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-primary-400 to-transparent"
        />
      </motion.div>
    </div>
  );
};
