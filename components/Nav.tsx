"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Listen for scroll events to change navbar appearance and track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Change after just 50px of scroll

      // Track active section
      const sections = [
        { id: 'overview', offset: 0 },
        { id: 'why', offset: document.getElementById('why')?.offsetTop || 0 },
        { id: 'courses', offset: document.getElementById('courses')?.offsetTop || 0 },
        { id: 'booking', offset: document.getElementById('booking')?.offsetTop || 0 },
        { id: 'partner', offset: document.getElementById('partner')?.offsetTop || 0 },
        { id: 'contact-form', offset: document.getElementById('contact-form')?.offsetTop || 0 }
      ];

      const currentSection = sections.reduce((active, section) => {
        if (scrollPosition >= section.offset - 50) {
          return section.id;
        }
        return active;
      }, '');

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
             return (
       <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
         isScrolled 
           ? 'bg-white/80 backdrop-blur-md border-b border-black/10 shadow-lg mx-4 mt-4 rounded-2xl' 
           : 'bg-warm-cream/90 backdrop-blur border-b border-black/5'
       }`}>
      <nav className="mx-auto container-max w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Main">
        <Link href="#" className="flex items-center gap-1 focus-visible:outline-none">
          <Image src="/brand/redagents-glyph.png" alt="Redagents" width={32} height={32} priority />
          <Image src="/brand/redagents-logo.png" alt="Redagents" width={130} height={32} priority />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm" role="navigation">
          <a href="#why" onClick={(e) => {
            e.preventDefault();
            document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' });
          }} className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:transition-all after:duration-500 hover:after:w-full ${
            activeSection === 'why' ? 'after:w-full after:bg-brand font-medium' : 'after:w-0 after:bg-black'
          }`}>Overview</a>
          <a href="#courses" onClick={(e) => {
            e.preventDefault();
            document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
          }} className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:transition-all after:duration-500 hover:after:w-full ${
            activeSection === 'courses' ? 'after:w-full after:bg-brand font-medium' : 'after:w-0 after:bg-black'
          }`}>Courses</a>
          <a href="#booking" onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('wOlyiO91MrkrgUgqc857_1754840296544');
            if (element) {
              const elementPosition = element.offsetTop - 170;
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
              });
            }
          }} className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:transition-all after:duration-500 hover:after:w-full ${
            activeSection === 'booking' ? 'after:w-full after:bg-brand font-medium' : 'after:w-0 after:bg-black'
          }`}>Book</a>
          <a href="#contact-form" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
          }} className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:transition-all after:duration-500 hover:after:w-full ${
            activeSection === 'contact-form' ? 'after:w-full after:bg-brand font-medium' : 'after:w-0 after:bg-black'
          }`}>Contact</a>
          <a href="#partner" onClick={(e) => {
            e.preventDefault();
            document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' });
          }} className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:transition-all after:duration-500 hover:after:w-full ${
            activeSection === 'partner' ? 'after:w-full after:bg-brand font-medium' : 'after:w-0 after:bg-black'
          }`}>Partners</a>
        </div>
                <div className="hidden md:block">
          <a href="#booking" onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('wOlyiO91MrkrgUgqc857_1754840296544');
            if (element) {
              const elementPosition = element.offsetTop - 170;
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
              });
            }
          }} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white text-black shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
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
        <div className={`md:hidden border-t transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-warm-cream'
        }`}>
          <div className="px-6 py-4 grid gap-3 text-sm">
            {[
              ["Overview", "#why"],
              ["Courses", "#courses"],
              ["Book", "#booking"],
              ["Contact", "#contact-form"],
              ["Partners", "#partner"],
            ].map(([label, href]) => (
              <a key={href} href={href as string} className="py-2" onClick={(e) => {
                e.preventDefault();
                                 if (href === "#booking") {
                   const element = document.getElementById('wOlyiO91MrkrgUgqc857_1754840296544');
                   if (element) {
                     const elementPosition = element.offsetTop - 170;
                     window.scrollTo({
                       top: elementPosition,
                       behavior: 'smooth'
                     });
                   }
                 } else {
                  document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                }
                setOpen(false);
              }}>
                {label}
              </a>
            ))}
                         <a href="#booking" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 bg-white text-black shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group" onClick={(e) => {
               e.preventDefault();
               const element = document.getElementById('wOlyiO91MrkrgUgqc857_1754840296544');
               if (element) {
                 const elementPosition = element.offsetTop - 170;
                 window.scrollTo({
                   top: elementPosition,
                   behavior: 'smooth'
                 });
               }
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

