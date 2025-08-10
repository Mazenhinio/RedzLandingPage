"use client";
import Nav from "./Nav";
import Hero from "./Hero";
import Why from "./Why";
import Programs from "./Programs";
import PartnerRibbon from "./PartnerRibbon";
import CtaBand from "./CtaBand";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Booking from "./Booking";

export default function LandingPage() {
  return (
    <div className="min-h-svh">
      <Nav />
      <Hero />
      <Why />
      <Programs />
      <PartnerRibbon />
      <Booking />
      <CtaBand />
      <ContactForm />
      <Footer />
    </div>
  );
}

