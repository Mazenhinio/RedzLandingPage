"use client";
import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Why from "./Why";
import Courses from "./Programs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import EventBanner from "./EventBanner";

export default function LandingPage() {
  return (
    <div className="min-h-svh">
      <EventBanner />
      <Nav />
      <Hero />
      <Why />
      <Courses />
      <ContactForm />
      <Footer />
    </div>
  );
}

