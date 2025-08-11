import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function PartnerRibbon() {
  return (
    <section id="partner" className="w-full text-white" style={{ backgroundColor: '#2A3B5A' }}>
      <div className="mx-auto container-max px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          In partnership with <a className="underline" href="https://globaleduc8tions.org/" target="_blank" rel="noreferrer noopener">Global Educ8tions</a> — helping learners progress via online platforms and tutor support.
        </p>
        <Link href="https://globaleduc8tions.org/" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-3 bg-white text-partner hover:bg-gray-100 rounded-full pl-3 pr-4 py-2">
          <picture>
            <source srcSet="/brand/ge8-logo.png" />
            <img src="/brand/ge8-logo.svg" alt="Global Educ8tions logo" className="h-6 w-auto" style={{ imageRendering: 'crisp-edges' }} />
          </picture>
          <span className="sr-only">Visit Global Educ8tions</span>
          <ExternalLink size={16} />
        </Link>
      </div>
    </section>
  );
}

