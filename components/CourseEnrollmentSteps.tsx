"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Play, Users } from "lucide-react";

export default function CourseEnrollmentSteps() {
  const steps = [
    {
      icon: GraduationCap,
      title: "Step 1",
      description: "Book appointment on calendar"
    },
    {
      icon: BookOpen,
      title: "Step 2", 
      description: "Meeting with us"
    },
    {
      icon: Play,
      title: "Step 3",
      description: "Assessment"
    },
    {
      icon: Users,
      title: "Step 4", 
      description: "Careers Advisor"
    }
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
                         <h2 className="headline text-3xl md:text-5xl font-bold mb-16" style={{ 
               fontFamily: 'Open Sans, sans-serif',
               color: '#000000'
             }}>
               The four-step process to enrolling in your course
             </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                                     className="bg-gray-800 text-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center min-h-[200px] justify-center"
                   style={{ backgroundColor: '#3a3a3a' }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex-shrink-0">
                      <step.icon 
                        className="h-8 w-8 text-white" 
                        style={{ 
                          strokeWidth: '2px',
                          width: '32px',
                          height: '32px'
                        }}
                      />
                    </div>
                                         <div className="text-center">
                                               <h3 className="text-xl font-bold mb-4" style={{ 
                          fontSize: '28px',
                          fontFamily: 'Open Sans, sans-serif',
                          fontWeight: '700'
                        }}>
                          {step.title}
                        </h3>
                                               <p className="text-sm text-gray-200 leading-relaxed" style={{ 
                          fontSize: '16px',
                          lineHeight: '1.5',
                          color: '#f0f0f0',
                          fontFamily: 'Open Sans, sans-serif',
                          fontWeight: '400'
                        }}>
                          {step.description}
                        </p>
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
