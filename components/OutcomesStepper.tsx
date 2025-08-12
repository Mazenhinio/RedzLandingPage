"use client";
import { motion } from "framer-motion";

export default function OutcomesStepper() {
  const steps = [
    "Today's role",
    "Course + certification", 
    "Interview support",
    "New title / Higher pay"
  ];

  return (
    <div style={{ backgroundColor: '#FAFBFC', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <section className="py-16" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="mx-auto container-max px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="headline text-2xl md:text-3xl font-semibold mb-8">Your career progression</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="px-3 py-2 bg-white rounded-lg border border-warm-nude/20 shadow-sm">
                    <span className="font-medium text-ink">{step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <span className="mx-2 md:mx-4 text-muted">→</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
