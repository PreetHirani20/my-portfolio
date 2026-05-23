'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  ExternalLink,
  Github,
  Send,
  MapPin,
  Phone,
} from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'hiranipreet20@gmail.com',
    href: 'mailto:hiranipreet20@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/preet-hirani',
    href: 'https://linkedin.com/in/preet-hirani',
    icon: ExternalLink,
  },
  {
    label: 'GitHub',
    value: 'github.com/PreetHirani20',
    href: 'https://github.com/PreetHirani20',
    icon: Github,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* ─── Heading ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Extraordinary</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-text-secondary text-lg max-w-xl mx-auto mb-14"
        >
          I&apos;m currently open to full-time roles, freelance projects, and
          exciting collaborations.
        </motion.p>

        {/* ─── Contact Cards ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                className="glass group relative flex flex-col items-center gap-3 rounded-2xl p-6 border border-border/60 text-center transition-all duration-500 hover:border-accent-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/10"
              >
                {/* Glow behind icon */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-accent-primary/10 rounded-full blur-2xl" />
                </div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-border/40">
                  <Icon className="w-5 h-5 text-accent-secondary group-hover:text-accent-primary transition-colors" />
                </div>

                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
                    {link.label}
                  </p>
                  <p className="text-sm text-text-primary font-medium group-hover:text-accent-secondary transition-colors break-all">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* ─── Extra Info Row ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-text-muted"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent-secondary" />
            Mumbai, India
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="w-4 h-4 text-accent-secondary" />
            +91 9869181708
          </span>
        </motion.div>

        {/* ─── CTA Button ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="mailto:hiranipreet20@gmail.com"
            className="btn-primary group inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20 hover:-translate-y-0.5"
          >
            <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Send me an email
          </a>
        </motion.div>
      </div>

      {/* ─── Footer ─── */}
      <footer className="relative max-w-5xl mx-auto mt-28 pt-8">
        {/* Gradient divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent mb-8" />

        <div className="text-center space-y-2">
          <p className="text-sm text-text-muted">
            Designed & Built by{' '}
            <span className="text-text-secondary font-medium">
              Preet Hirani
            </span>
          </p>
          <p className="text-xs text-text-muted/60">
            &copy; {new Date().getFullYear()} &middot; All rights reserved
          </p>
        </div>
      </footer>
    </section>
  );
}
