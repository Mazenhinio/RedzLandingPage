import FeatureCard from "./FeatureCard";
import { GraduationCap, Users, Clock, Shield } from "lucide-react";

export default function Why() {
  const items = [
    { icon: GraduationCap, title: "Career‑ready Skills", desc: "Practical projects and pathways that map to roles employers hire for." },
    { icon: Users, title: "Expert Mentors", desc: "Guidance from practitioners who’ve worked in industry." },
    { icon: Clock, title: "Flexible Online Learning", desc: "Study when it suits you with bite‑size lessons and live help when needed." },
    { icon: Shield, title: "Supportive Community", desc: "Peer discussion, accountability, and resources to keep you progressing." },
  ];
  return (
    <div style={{ backgroundColor: '#FAFBFC', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <section id="why" className="py-32" style={{ backgroundColor: '#FAFBFC' }}>
        <div className="mx-auto container-max px-6">
        <div className="grid md:grid-cols-2 gap-6 items-end">
          <div>
            <h2 className="headline text-3xl md:text-4xl font-semibold">Why Redagents</h2>
            <p className="mt-3 text-muted max-w-prose">We blend structured learning with human support so you can move from interest to industry‑ready skillsets.</p>
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <FeatureCard key={it.title} icon={it.icon} title={it.title} desc={it.desc} index={i} />
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}

