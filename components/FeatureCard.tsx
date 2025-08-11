"use client";
import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export default function FeatureCard({ icon: Icon, title, desc, index }: { icon: IconType; title: string; desc: string; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-warm-nude/20 bg-warm-cream p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-black/10 text-brand"><Icon /></div>
        <h3 className="font-semibold headline text-xl">{title}</h3>
      </div>
      <p className="mt-3 text-muted">{desc}</p>
    </motion.div>
  );
}

