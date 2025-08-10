"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Programs() {
  const categories = [
    { name: "Sales", desc: "Commercial fundamentals, prospecting, and customer success basics." },
    { name: "Customer Service", desc: "Skills for confident communication and problem‑solving across channels." },
    { name: "Health & Safety", desc: "Workplace awareness and compliance essentials for UK contexts." },
    { name: "Teaching & Assessing", desc: "Support learners effectively with assessing, mentoring, and facilitation." },
  ];
  return (
    <section id="programs" className="mx-auto container-max px-6 py-16">
      <div className="max-w-3xl">
        <h2 className="headline text-3xl md:text-4xl font-semibold">Programs inspired by Global Educ8tions</h2>
        <p className="mt-3 text-muted">
          Global Educ8tions offers a variety of academic, vocational, and professional online courses supported by tutors and resources — positioning themselves as one of the UK’s innovative online learning colleges. Our programs reflect these strengths with practical, career‑focused study paths.
        </p>
        <p className="mt-2 text-sm text-muted">
          Source: <a className="underline" href="https://globaleduc8tions.org/" target="_blank" rel="noreferrer">Global Educ8tions</a>
        </p>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((c, i) => (
          <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="headline font-semibold text-xl">{c.name}</h3>
            <p className="mt-2 text-muted">{c.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 inline-flex items-center gap-3">
        <picture>
          <source srcSet="/brand/ge8-logo.png" />
          <img src="/brand/ge8-logo.svg" alt="Global Educ8tions logo" className="h-6 w-auto" />
        </picture>
        <a href="https://globaleduc8tions.org/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-partner underline">
          Learn more at Global Educ8tions <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}

