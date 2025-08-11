"use client";
import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Why from "./Why";
import Programs from "./Programs";

import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-svh">
      <Nav />
      <Hero />
      <Why />
      <Programs />
      <ContactForm />
      <Footer />
    </div>
  );
}

