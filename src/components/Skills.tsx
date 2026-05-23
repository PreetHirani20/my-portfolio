'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Bot, Brain, Database, Cloud, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    colSpan: 'lg:col-span-2',
    iconColor: 'text-accent-secondary',
    items: ['C#', '.NET', 'Angular', 'TypeScript', 'ReactJS', 'Node.js', 'Python'],
  },
  {
    title: 'AI & Automation',
    icon: Bot,
    colSpan: 'lg:col-span-1',
    iconColor: 'text-cyan',
    items: ['n8n', 'OpenAI API', 'Groq/Llama 3', 'LangChain', 'RPA', 'Webhooks', 'Telegram Bot API'],
  },
  {
    title: 'ML / Data',
    icon: Brain,
    colSpan: 'lg:col-span-1',
    iconColor: 'text-pink',
    items: ['TensorFlow', 'Keras', 'scikit-learn', 'Reinforcement Learning', 'NLP', 'CNNs'],
  },
  {
    title: 'Databases',
    icon: Database,
    colSpan: 'lg:col-span-1',
    iconColor: 'text-accent-secondary',
    items: ['SQL Server', 'PostgreSQL', 'Stored Procedures', 'Schema Design', 'Query Tuning'],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    colSpan: 'lg:col-span-1',
    iconColor: 'text-cyan',
    items: ['Azure DevOps CI/CD', 'Docker', 'FastAPI', 'Git', 'Postman'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    colSpan: 'lg:col-span-2',
    iconColor: 'text-cyan',
    accentBorder: true,
    items: ['Client Communication', 'Requirement Analysis', 'Technical Demos', 'Documentation'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6"
    >
      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] -top-40 -right-40 opacity-15" />
      <div className="orb w-[400px] h-[400px] -bottom-32 -left-32 opacity-10" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-text-primary">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed">
            A curated stack of technologies I use to build production-grade software
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className={`bento-card group relative overflow-hidden p-6 ${category.colSpan} ${
                  category.accentBorder
                    ? 'border-cyan/20 hover:border-cyan/40'
                    : ''
                }`}
              >
                {/* Subtle gradient glow on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    category.accentBorder
                      ? 'bg-gradient-to-br from-cyan/5 via-transparent to-transparent'
                      : 'bg-gradient-to-br from-accent-secondary/5 via-transparent to-transparent'
                  }`}
                />

                {/* Card Header */}
                <div className="relative z-10 mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon className={`h-5 w-5 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Technology Pills */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full bg-white/5 px-3 py-1.5 text-xs font-mono text-text-secondary ring-1 ring-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-text-primary hover:ring-white/20 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
