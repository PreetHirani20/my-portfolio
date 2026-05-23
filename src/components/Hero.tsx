'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* ── Background grid ── */}
      <div className="bg-grid absolute inset-0 pointer-events-none" />

      {/* ── Floating gradient orbs ── */}
      <div
        className="orb absolute -top-32 -left-32 h-[420px] w-[420px] opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(108,92,231,0.35) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="orb absolute top-1/3 -right-24 h-[350px] w-[350px] opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(0,206,201,0.30) 0%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite 2s',
        }}
      />
      <div
        className="orb absolute -bottom-20 left-1/3 h-[300px] w-[300px] opacity-25"
        style={{
          background:
            'radial-gradient(circle, rgba(253,121,168,0.25) 0%, transparent 70%)',
          animation: 'float 12s ease-in-out infinite 4s',
        }}
      />

      {/* ── Content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <span className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-2 text-5xl font-bold leading-tight tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
        >
          Full Stack Developer
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="gradient-text mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
        >
          & AI Engineer
        </motion.h1>

        {/* Sub-paragraph */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          Building enterprise web applications and AI-powered automation with 1+
          year of production experience. Finalist at Meta PyTorch OpenEnv
          Hackathon among 52,000+ participants.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-primary group inline-flex items-center gap-2"
          >
            View Projects
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </button>

          <button
            onClick={() => scrollTo('#contact')}
            className="btn-outline group inline-flex items-center gap-2"
          >
            <Mail
              size={16}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
