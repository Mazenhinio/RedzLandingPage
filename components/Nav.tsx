"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <nav className="mx-auto container-max w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Main">
        <Link href="#" className="flex items-center gap-3 focus-visible:outline-none">
          <Image src="/brand/redagents-logo-horizontal.svg" alt="Redagents" width={160} height={40} priority />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm" role="navigation">
          <a href="#overview" className="hover:text-brand">Overview</a>
          <a href="#why" className="hover:text-brand">Why Redagents</a>
          <a href="#programs" className="hover:text-brand">Programs</a>
          <a href="#booking" className="hover:text-brand">Book</a>
          <a href="#partner" className="hover:text-brand">Partnership</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </div>
        <div className="hidden md:block">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-brand text-white shadow-md">
            Get Started <ArrowRight size={16} />
          </a>
        </div>
        <button aria-label="Toggle menu" className="md:hidden p-2 rounded focus-visible:outline-none" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white">
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
            <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-brand text-white shadow-md" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

