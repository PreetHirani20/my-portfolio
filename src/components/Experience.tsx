'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Lightbulb, Code, GraduationCap } from 'lucide-react';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Allcargo Logistics Pvt. Ltd.',
    location: 'Mumbai',
    period: 'Jun 2025 – Present',
    icon: Briefcase,
    bullets: [
      <>Led end-to-end delivery of a truck management portal (Angular + .NET + SQL Server) that onboarded <span className="text-cyan font-semibold">50+</span> local transporters, cutting manual scheduling time by <span className="text-cyan font-semibold">40%</span> and improving on-time deliveries by <span className="text-cyan font-semibold">25%</span>.</>,
      <>Architected RESTful microservice APIs for Quote and Booking modules; served as primary technical liaison during cross-team integration and UAT sessions with business stakeholders.</>,
      <>Refactored SQL stored procedures for quote generation, reducing query execution time by <span className="text-cyan font-semibold">35%</span> on high-volume transactional workloads; configured Azure DevOps CI/CD pipelines, compressing release cycles from days to hours.</>,
    ],
  },
  {
    role: 'Technical Intern',
    company: 'Erevbay Pvt. Ltd.',
    location: 'Mumbai',
    period: 'May 2024 – Nov 2024',
    icon: Lightbulb,
    bullets: [
      <>Automated <span className="text-cyan font-semibold">4+</span> internal business workflows using RPA, eliminating repetitive manual operations and reducing average process turnaround time by <span className="text-cyan font-semibold">~30%</span>.</>,
      <>Covered full SDLC — requirements, documentation, cross-environment testing — delivering <span className="text-cyan font-semibold">zero</span> regression defects at production release.</>,
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Techon Dater Systems Pvt. Ltd.',
    location: 'Udaipur',
    period: 'Dec 2022 – Apr 2023',
    icon: Code,
    bullets: [
      <>Built and maintained a full-stack web application using React.js and Node.js.</>,
      <>Collaborated with designers and backend teams to deliver user-centric features.</>,
    ],
  },
];

const education = [
  {
    degree: 'B.Tech, Computer Science',
    institution: 'NMIMS University, Mumbai',
    year: '2025',
  },
  {
    degree: 'Diploma, Computer Science',
    institution: 'NMIMS University, Mumbai',
    year: '2022',
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const Icon = experience.icon;

  return (
    <div ref={ref} className="relative pl-10 md:pl-14 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="timeline-line absolute left-[7px] md:left-[11px] top-6 bottom-0" />

      {/* Timeline dot */}
      <div className="timeline-dot absolute left-0 md:left-1 top-1.5 z-10" />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="glass rounded-xl border border-border/50 p-5 md:p-6"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent-primary/10 mt-0.5">
              <Icon className="w-5 h-5 text-accent-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                {experience.role}
              </h3>
              <p className="text-accent-secondary text-sm">
                {experience.company}{' '}
                <span className="text-text-muted">— {experience.location}</span>
              </p>
            </div>
          </div>
          <span className="text-xs text-text-muted font-mono whitespace-nowrap pl-10 sm:pl-0">
            {experience.period}
          </span>
        </div>

        {/* Bullets */}
        <motion.ul
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: index * 0.15 + 0.3,
              },
            },
          }}
          className="space-y-2.5 ml-1"
        >
          {experience.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -15 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-secondary shrink-0" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

function EducationCard({
  edu,
  index,
}: {
  edu: (typeof education)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="glass rounded-xl border border-border/50 p-5 md:p-6 flex items-start gap-4"
    >
      <div className="p-2.5 rounded-lg bg-accent-primary/10 shrink-0">
        <GraduationCap className="w-5 h-5 text-accent-secondary" />
      </div>
      <div>
        <h4 className="text-base font-semibold text-text-primary">
          {edu.degree}
        </h4>
        <p className="text-sm text-text-secondary mt-0.5">{edu.institution}</p>
        <span className="text-xs text-text-muted font-mono mt-1 inline-block">
          {edu.year}
        </span>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-50px' });

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-6 max-w-4xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
          Professional{' '}
          <span className="gradient-text">Journey</span>
        </h2>
        <p className="mt-4 text-text-secondary max-w-xl mx-auto">
          From building enterprise platforms to automating business workflows
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-20"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-10">
          <span className="gradient-text">Education</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
