"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-warm-cream/90 backdrop-blur border-b border-black/5">
      <nav className="mx-auto container-max w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Main">
        <Link href="#" className="flex items-center gap-3 focus-visible:outline-none">
          <Image src="/brand/redagents-logo-horizontal.svg" alt="Redagents" width={160} height={40} priority />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm" role="navigation">
          <a href="#overview" className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Overview</a>
          <a href="#why" className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Why Redagents</a>
          <a href="#programs" className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Programs</a>
          <a href="#booking" className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Book</a>
          <a href="#partner" className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Partnership</a>
          <a href="#contact" className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Contact</a>
        </div>
        <div className="hidden md:block">
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-soft-sage text-white shadow-md hover:bg-soft-sage/80 transition-colors group" style={{ fontFamily: 'Times New Roman, serif' }}>
            Get Started 
            <span className="relative inline-flex w-4 justify-end">
              <ArrowRight size={16} className="transition-opacity duration-200 group-hover:opacity-0" />
              <svg
                className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path d="M9 6l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 6l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
        <button aria-label="Toggle menu" className="md:hidden p-2 rounded focus-visible:outline-none" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-warm-cream">
          <div className="px-6 py-4 grid gap-3 text-sm">
            {[
              ["Overview", "#overview"],
              ["Why Redagents", "#why"],
              ["Programs", "#programs"],
              ["Book", "#booking"],
              ["Partnership", "#partner"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href as string} className="py-2" onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a href="#contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 bg-soft-sage text-white shadow-md hover:bg-soft-sage/80 transition-colors group" style={{ fontFamily: 'Times New Roman, serif' }} onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setOpen(false);
            }}>
              Get Started 
              <span className="relative inline-flex w-4 justify-end">
                <ArrowRight size={16} className="transition-opacity duration-200 group-hover:opacity-0" />
                <svg
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path d="M9 6l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

