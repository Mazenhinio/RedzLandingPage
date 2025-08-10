import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function PartnerRibbon() {
  return (
    <section id="partner" className="w-full bg-partner text-white">
      <div className="mx-auto container-max px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          In partnership with <a className="underline" href="https://globaleduc8tions.org/" target="_blank" rel="noreferrer">Global Educ8tions</a> — helping learners progress via online platforms and tutor support.
        </p>
        <Link href="https://globaleduc8tions.org/" target="_blank" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-full pl-3 pr-4 py-2">
          <picture>
            <source srcSet="/brand/ge8-logo.png" />
            <img src="/brand/ge8-logo.svg" alt="Global Educ8tions logo" className="h-6 w-auto" />
          </picture>
          <span className="sr-only">Visit Global Educ8tions</span>
          <ExternalLink size={16} />
        </Link>
      </div>
    </section>
  );
}

