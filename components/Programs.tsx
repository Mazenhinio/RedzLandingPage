"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Courses() {
  const handleRequestCourse = (trackTitle: string) => {
    // Store the selected track in localStorage so the contact form can access it
    localStorage.setItem('selectedTrack', trackTitle);
    // Scroll to contact form with offset
    const element = document.getElementById('contact-form');
    if (element) {
      const elementPosition = element.offsetTop - 20;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  const tracks = [
    { title: "Sales Foundations", desc: "Commercial fundamentals, prospecting, and customer success basics. Prospecting, discovery, pipeline, tools.", estimatedTime: "x - y hours", start: "Anytime", typicalPace: "6–8 hrs/week → finish in ~6–8 weeks" },
    { title: "Customer Support", desc: "Skills for confident communication and problem‑solving across channels. Communication, triage, escalation, CX metrics.", estimatedTime: "x - y hours", start: "Anytime", typicalPace: "5–7 hrs/week → finish in ~5–7 weeks" },
    { title: "Health & Safety (UK)", desc: "Workplace awareness and compliance essentials for UK contexts. Compliance, practical scenarios, assessments.", estimatedTime: "x - y hours", start: "Anytime", typicalPace: "4–6 hrs/week → finish in ~4–6 weeks" },
    { title: "Teaching & Assessing", desc: "Support learners effectively with assessing, mentoring, and facilitation. Classroom support, assessment methods, safeguarding.", estimatedTime: "x - y hours", start: "Anytime", typicalPace: "6–8 hrs/week → finish in ~6–8 weeks" },
  ];

  return (
    <section id="courses" className="py-32" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="mx-auto container-max px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline text-4xl md:text-6xl font-semibold"
        >
          Courses
        </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-3 max-w-2xl text-muted"
      >
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-3 max-w-3xl text-sm text-muted"
      >
        Courses are delivered via trusted UK providers. We&apos;ll confirm the awarding body during your consult.
      </motion.p>

      <div className="mt-13 grid grid-cols-1 gap-8 md:grid-cols-2">
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
              className="flex h-full flex-col justify-between rounded-2xl p-6 border border-warm-nude/20 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
            <div>
              <h3 className="text-lg font-semibold headline">{t.title}</h3>
              <p className="mt-2 text-sm text-muted">{t.desc}</p>
              
              <div className="mt-4 space-y-2 text-xs text-ink">
                <div>
                  <span className="font-medium text-ink">Format:</span> Self-paced · Tutor-supported · Online
                </div>
                <div>
                  <span className="font-medium text-ink">Estimated time:</span> {t.estimatedTime}
                </div>
                <div>
                  <span className="font-medium text-ink">Start:</span> {t.start}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => handleRequestCourse(t.title)}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-black/70 text-ink hover:bg-black/5 transition-colors"
              >
                Request course details <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </motion.article>
          );
        })}
      </div>
      </div>
      </section>
  );
}

