'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Workflow, Rocket, Microscope, Award, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'OpenEnv Logistics',
    badge: '🏆 Meta PyTorch Hackathon Finalist',
    description:
      'Architected a fully containerized, deterministic RL environment to benchmark LLM-powered autonomous freight dispatchers against real-world supply chain tradeoffs. Finalist out of 52,000+ participants.',
    tags: ['Python', 'FastAPI', 'Docker', 'OpenAI API', 'Reinforcement Learning'],
    icon: Trophy,
    accent: 'from-accent-primary to-accent-secondary',
    accentText: 'text-accent-secondary',
    featured: true,
  },
  {
    title: 'Client Onboarding Automation',
    badge: '💼 Freelance',
    description:
      'End-to-end onboarding automation for a paying client — webhook triggers, n8n workflows with OpenAI API validation, and Telegram alerts for admin dashboard with one-click accept/reject.',
    tags: ['n8n', 'OpenAI API', 'Webhooks', 'Telegram Bot', 'Excel'],
    icon: Workflow,
    accent: 'from-cyan to-cyan/60',
    accentText: 'text-cyan',
    featured: false,
  },
  {
    title: 'DropGen AI',
    badge: '🚀 SaaS Platform',
    description:
      'AI-powered SaaS platform combining ML product-trend prediction with Llama 3 70B for automated multi-platform marketing copy and supplier sourcing — reducing manual research time by ~70%.',
    tags: ['Groq API', 'Llama 3 70B', 'Python', 'Angular', 'PostgreSQL'],
    icon: Rocket,
    accent: 'from-pink to-pink/60',
    accentText: 'text-pink',
    featured: false,
  },
  {
    title: 'Skin Cancer Detection CNN',
    badge: '🧬 ML Research',
    description:
      '86% classification accuracy across 7 dermatological categories on an imbalanced medical dataset using CNN architecture tuning and k-fold cross-validation.',
    tags: ['TensorFlow', 'Keras', 'Python'],
    icon: Microscope,
    accent: 'from-cyan to-accent-primary',
    accentText: 'text-cyan',
    featured: false,
  },
];

const certifications = [
  {
    title: 'Meta PyTorch OpenEnv Hackathon',
    subtitle: 'Finalist (52,000+ participants)',
  },
  {
    title: 'Machine Learning Specialization',
    subtitle: 'Coursera (Stanford / DeepLearning.AI)',
  },
  {
    title: 'Docker Foundations',
    subtitle: 'Professional Certificate',
  },
  {
    title: 'TCS iON Career Edge',
    subtitle: 'Young Professional',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const certVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const certRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const certInView = useInView(certRef, { once: true, amount: 0.2 });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent-primary/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-pink/5 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Shipping products from hackathon stages to paying clients
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className={`project-card group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-primary/5 ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Accent top border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.accent} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <div
                  className={`p-6 sm:p-8 ${
                    project.featured ? 'md:flex md:gap-8 md:items-start' : ''
                  }`}
                >
                  {/* Icon & Badge Row */}
                  <div
                    className={`flex-shrink-0 ${
                      project.featured ? 'md:w-16' : ''
                    }`}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${project.accent} bg-opacity-10 mb-5`}
                      style={{ background: 'rgba(255,255,255,0.03)' }}
                    >
                      <Icon className={`w-6 h-6 ${project.accentText}`} />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Badge */}
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-white/5 border border-border text-text-secondary backdrop-blur-sm">
                      {project.badge}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-secondary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="glass px-2.5 py-1 text-xs font-mono text-text-muted rounded-md border border-border/50 select-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-[0.07] blur-3xl transition-opacity duration-700 pointer-events-none`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ─── Certifications ─── */}
        <div ref={certRef} className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={certInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
              Certifications & <span className="gradient-text">Achievements</span>
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={certInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                variants={certVariants}
                className="glass group relative rounded-xl p-5 border border-border/60 hover:border-accent-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Award className="w-5 h-5 text-accent-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
