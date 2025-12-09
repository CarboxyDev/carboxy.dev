import { MailIcon, TwitterIcon } from '@/components/icons/social-icons';
import { SectionHeading } from '@/components/react/SectionHeading';
import { Button } from '@/components/ui/button';
import { PrimaryButton } from '@/components/ui/primary-button';
import { LINKS } from '@/lib/config/links';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const email = LINKS.email.replace('mailto:', '');

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

  return (
    <section className="pb-32 pt-20 lg:pb-40 lg:pt-32" data-section="contact">
      <div className="space-y-16">
        <SectionHeading title="Let's Work Together" />

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/80 p-12 lg:p-16"
          >
            <div className="space-y-10">
              <div className="space-y-4 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/50 px-3.5 py-1.5"
                >
                  <div className="relative flex items-center">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-40" />
                  </div>
                  <span className="text-xs font-medium tracking-wide text-emerald-300">
                    AVAILABLE FOR PROJECTS
                  </span>
                </motion.div>

                <h3 className="text-2xl font-bold text-white lg:text-3xl">
                  Have a project in mind?
                </h3>
                <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400 lg:text-lg">
                  I work with teams and founders to build products that matter.
                  If you have something interesting, let's talk.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <PrimaryButton
                    onClick={handleEmailClick}
                    className="w-full px-8 sm:w-auto"
                  >
                    <MailIcon className="h-4 w-4" />
                    <span>Send me an email</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </PrimaryButton>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <a
                    href={LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      className="h-12 w-full gap-2.5 border border-zinc-700 bg-zinc-800/50 px-8 font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white sm:w-auto"
                    >
                      <TwitterIcon className="h-4 w-4" />
                      <span>DM on X</span>
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
