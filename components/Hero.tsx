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
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-red-500/5 to-red-500/20 -z-5" aria-hidden />
      <div className="mx-auto container-max px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-warm-nude/30 px-3 py-1 text-sm font-medium text-partner" style={{ fontFamily: 'Times New Roman, serif' }}>
          In partnership with{" "}
          <a 
            href="https://globaleduc8tions.org/" 
            target="_blank" 
            rel="noreferrer noopener"
            className="underline decoration-dashed underline-offset-4 hover:text-brand transition-colors"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            Global Educ8tions
          </a>
        </motion.p>
        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="headline mt-3 text-4xl md:text-6xl font-semibold max-w-3xl" style={{ fontFamily: 'Times New Roman, serif' }}>
          Redagents — Building Careers with Smart Learning
        </motion.h1>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp} className="mt-6 max-w-2xl text-lg text-muted">
          Learn job-ready skills with mentor support, flexible schedules, and community-powered motivation. Designed for ambitious, tech‑savvy learners.
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
          <a 
            href="#programs" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/30 hover:shadow-xl hover:scale-105 transition-all duration-300 ring-1 ring-white/20"
          >
            Explore Programs
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-brand text-white shadow-md hover:bg-brandHover hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Your Journey
          </a>
        </motion.div>
        {!prefersReduced && (
          <motion.div aria-hidden className="absolute -right-4 bottom-16 w-[420px] h-[420px] rounded-full blur-3xl opacity-40" style={{ background: 'linear-gradient(135deg, #ff0000, #cc0000 60%)' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 1.2 }} />
        )}
      </div>
    </section>
  );
}

