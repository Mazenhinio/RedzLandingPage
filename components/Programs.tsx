"use client";

import { ExternalLink } from "lucide-react";
import AnimatedSection, { StaggeredContainer } from "./AnimatedSection";

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
        <AnimatedSection delay={0}>
          <h2 className="headline text-4xl md:text-6xl font-semibold">
            Courses
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-3 max-w-2xl text-muted">
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-3 max-w-3xl text-sm text-muted">
            Courses are delivered via trusted UK providers. We&apos;ll confirm the awarding body during your consult.
          </p>
        </AnimatedSection>

      <StaggeredContainer className="mt-13 grid grid-cols-1 gap-8 md:grid-cols-2" staggerDelay={0.2}>
        {tracks.map((t) => (
          <article
            key={t.title}
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
          </article>
        ))}
      </StaggeredContainer>

      {/* More Courses Available */}
      <AnimatedSection delay={0.3}>
        <div className="mt-12 p-6 bg-white/50 rounded-2xl border border-warm-nude/30 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C40F26' }}></div>
          <p className="text-sm font-medium">
            More courses are available - <a href="#contact-form" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }} className="underline decoration-dashed underline-offset-2 hover:text-brand transition-colors">Contact Us</a> to learn more
          </p>
        </div>
        </div>
      </AnimatedSection>

      {/* Course Information Section */}
      <AnimatedSection delay={0.3}>
        <div className="mt-16 p-8 bg-white rounded-2xl border border-warm-nude/20 shadow-sm">
                 <h3 className="text-2xl md:text-4xl font-semibold headline mb-6">Course Information</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-xl md:text-3xl font-semibold mb-3">Assessment & Guidance</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <span>Every learner needs to have an initial assessment and advice and guidance session about their career pathway <span style={{ color: '#C40F26' }}>!</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <span>Regular reviews whilst they are learning</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl md:text-3xl font-semibold mb-3">Vocational Courses</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <span>Our vocational courses are delivered to suit your everyday needs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <span>Job-focused training for specific roles or career pathways</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <span>Lead to professional skills certificates or associate degrees</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <span>Practical, hands-on learning with real-world applications</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <span>Direct route to employment with pathways to apprenticeships</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <span>Alternative to traditional academic routes, focusing on specific professions</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl md:text-3xl font-semibold mb-3">Free Consultation</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <span>We will contact you for a FREE online 1-2-1 advice and guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <span>Review your pathway options prior to accepting your learning application</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </AnimatedSection>
      </div>
      </section>
  );
}

