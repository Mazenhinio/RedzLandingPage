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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-flex items-center gap-2 text-sm font-medium text-partner" style={{ fontFamily: 'Times New Roman, serif' }}>
          In collaboration with{" "}
          <a 
            href="https://globaleduc8tions.org/" 
            target="_blank" 
            rel="noreferrer noopener"
            className="underline decoration-dashed underline-offset-4 hover:text-brand transition-colors px-2 py-1 rounded-full"
            style={{ fontFamily: 'Times New Roman, serif', backgroundColor: 'rgba(128, 128, 128, 0.1)' }}
          >
            Global Educ8tions
          </a>
        </motion.p>
            <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="headline mt-3 text-4xl md:text-6xl font-semibold max-w-3xl" style={{ fontFamily: 'Times New Roman, serif' }}>
              Build your career with UK-recognised courses.
            </motion.h1>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp} className="mt-6 max-w-2xl text-lg text-muted">
              Earn a recognised certificate and real 1-to-1 careers advice with tutor-supported online study.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a 
                href="/courses" 
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:bg-white/30 hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300 ring-1 ring-white/20"
              >
                Browse courses
              </a>
              <a 
                href="#booking" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-brand text-white shadow-lg hover:bg-brandHover hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Book a careers call
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-96 h-72 bg-gray-200 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image placeholder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

