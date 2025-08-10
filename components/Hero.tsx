"use client";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

export default function Hero() {
  const prefersReduced = useReducedMotion();
  return (
    <section id="overview" className="relative overflow-hidden">
      <div className="mesh-bg absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto container-max px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-sm font-medium text-partner">
          In partnership with <a className="underline hover:no-underline" href="https://globaleduc8tions.org/" target="_blank" rel="noreferrer">Global Educ8tions</a>
        </motion.p>
        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="headline mt-3 text-4xl md:text-6xl font-semibold max-w-3xl">
          Redagents — Building Careers with Smart Learning
        </motion.h1>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp} className="mt-6 max-w-2xl text-lg text-muted">
          Learn job-ready skills with mentor support, flexible schedules, and community-powered motivation. Designed for ambitious, tech‑savvy learners.
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-brand text-white shadow-md">
            Start Your Journey
          </a>
          <a href="#programs" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-black/10 bg-white hover:bg-black/5">
            Explore Programs
          </a>
        </motion.div>
        {!prefersReduced && (
          <motion.div aria-hidden className="absolute -right-16 bottom-0 w-[420px] h-[420px] rounded-full brand-gradient blur-3xl opacity-40" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 1.2 }} />
        )}
      </div>
    </section>
  );
}

