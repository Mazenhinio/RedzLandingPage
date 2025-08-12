import FeatureCard from "./FeatureCard";
import { GraduationCap, Users, Clock } from "lucide-react";

export default function Why() {
  const items = [
    { icon: GraduationCap, title: "Career-ready skills", desc: "Courses that map to real roles and promotions." },
    { icon: Users, title: "Careers advice", desc: "One-to-one guidance to choose the right course and next role." },
    { icon: Clock, title: "Flexible hours & real support", desc: "Study online around your job with experienced tutor feedback." },
  ];
  return (
    <div style={{ backgroundColor: '#FAFBFC', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <section id="why" className="py-32" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="mx-auto container-max px-6">
        <div className="grid md:grid-cols-2 gap-6 items-end">
          <div>
            <h2 className="headline text-4xl md:text-6xl font-semibold">Why Redagents</h2>
            <p className="mt-3 text-muted max-w-prose">Pick a recognised online course, study around your job, and get one-to-one careers advice that turns learning into real progress at work. The cost of living keeps creeping up; we help you keep moving too.</p>
          </div>
        </div>
        <div className="mt-13 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <FeatureCard key={it.title} icon={it.icon} title={it.title} desc={it.desc} index={i} />
          ))}
        </div>
        
        {/* Who this is for */}
        <div className="mt-12 p-8 bg-white rounded-2xl border border-warm-nude/20">
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'Times New Roman, serif' }}>
            Who this is for
          </h3>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#C40F26' }}></div>
              <div>
                <p className="text-sm font-medium">People already working full-time who want to move up without quitting</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#C40F26' }}></div>
              <div>
                <p className="text-sm font-medium">Folks who don&apos;t get career guidance at work and want an outside voice</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#C40F26' }}></div>
              <div>
                <p className="text-sm font-medium">Learners who prefer online study without fixed lectures</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#C40F26' }}></div>
              <div>
                <p className="text-sm font-medium">People who want a recognised certificate they can show</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200">
            <h4 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Times New Roman, serif' }}>What we do not promise</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">No instant promotions or &quot;guaranteed roles&quot;</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">No one-size-fits-all courses. If it is not right for your role or sector, we will say so.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">No hidden costs or surprise add-ons. You will see everything upfront before you commit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

