"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Programs() {
  const handleRequestProgram = (trackTitle: string) => {
    // Store the selected track in localStorage so the contact form can access it
    localStorage.setItem('selectedTrack', trackTitle);
    // Scroll to contact form
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const tracks = [
    { title: "Sales Foundations", desc: "Commercial fundamentals, prospecting, and customer success basics. Prospecting, discovery, pipeline, tools.", duration: "8–10 weeks", weekly: "6–8 hrs/wk", start: "Next cohort: Sep 9" },
    { title: "Customer Support", desc: "Skills for confident communication and problem‑solving across channels. Communication, triage, escalation, CX metrics.", duration: "6–8 weeks", weekly: "5–7 hrs/wk", start: "Next cohort: Sep 16" },
    { title: "Health & Safety (UK)", desc: "Workplace awareness and compliance essentials for UK contexts. Compliance, practical scenarios, assessments.", duration: "4–6 weeks", weekly: "4–6 hrs/wk", start: "Next cohort: Sep 23" },
    { title: "Teaching & Assessing", desc: "Support learners effectively with assessing, mentoring, and facilitation. Classroom support, assessment methods, safeguarding.", duration: "8–10 weeks", weekly: "6–8 hrs/wk", start: "Next cohort: Oct 7" },
  ];

  return (
    <div style={{ backgroundColor: '#FAFBFC', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <section id="programs" className="py-32" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="mx-auto container-max px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline text-3xl md:text-4xl font-semibold"
        >
          Programs
        </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-3 max-w-2xl text-muted"
      >
        Pick a track. Build the work. Graduate with outcomes.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {tracks.map((t, i) => {
          // Equal time gaps between all boxes
          const delay = i * 0.3; // 0.3s delay between each box
          
          return (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: delay,
                duration: 0.8,
                type: "spring",
                stiffness: 80,
                damping: 15,
                bounce: 0.1
              }}
              className="flex h-full flex-col justify-between rounded-2xl p-6 border border-warm-nude/20 bg-warm-cream shadow-sm hover:shadow-md transition-shadow"
            >
            <div>
              <h3 className="text-lg font-semibold headline">{t.title}</h3>
              <p className="mt-2 text-sm text-muted">{t.desc}</p>

              <dl className="mt-4 grid grid-cols-3 gap-3 text-xs text-muted">
                <div>
                  <dt>Duration</dt>
                  <dd className="font-medium text-ink">{t.duration}</dd>
                </div>
                <div>
                  <dt>Weekly</dt>
                  <dd className="font-medium text-ink">{t.weekly}</dd>
                </div>
                <div>
                  <dt>Start</dt>
                  <dd className="font-medium text-ink">{t.start}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6">
              <button
                onClick={() => handleRequestProgram(t.title)}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-black/70 text-ink hover:bg-black/5 transition-colors"
              >
                Request Program <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </motion.article>
          );
        })}
      </div>
      </div>
      </section>
    </div>
  );
}

