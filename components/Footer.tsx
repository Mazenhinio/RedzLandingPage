import Image from "next/image";
import { ExternalLink } from "lucide-react";
import PartnerRibbon from "./PartnerRibbon";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto container-max px-6 py-10 grid gap-6 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]">
        <div className="grid gap-3">
          <Image src="/brand/redagents-glyph.svg" alt="Redagents glyph" width={48} height={48} />
          <p className="text-sm text-muted">Building careers with smart learning.</p>
          <a href="/qr" className="text-sm underline">Get QR code</a>
        </div>
        <div className="grid gap-1 text-sm">
          <a href="#overview" className="hover:underline">Overview</a>
          <a href="#why" className="hover:underline">Why Redagents</a>
          <a href="#programs" className="hover:underline">Programs</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <div>
          <p className="text-sm mb-0">Partner</p>
          <a className="inline-flex items-center gap-2 text-partner underline bg-white px-2 py-1 rounded" href="https://globaleduc8tions.org/" target="_blank" rel="noreferrer noopener">
            Global Educ8tions <ExternalLink size={14} />
          </a>

        </div>
      </div>
      <div className="py-4 text-center text-xs text-muted border-t">© {new Date().getFullYear()} Redagents. All rights reserved.</div>
      <PartnerRibbon />
    </footer>
  );
}

