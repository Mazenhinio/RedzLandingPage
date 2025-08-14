"use client";
import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Why from "./Why";
import Courses from "./Programs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import EventBanner from "./EventBanner";
import ImagePreloader from "./ImagePreloader";
import BackToTop from "./BackToTop";

export default function LandingPage() {
  // Hero images to preload
  const heroImages = [
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image.png",
    "/images/image1.jpg",
    "/images/image2.jpg"
  ];

  return (
    <div className="min-h-svh">
      {/* Preload images during initial page load */}
      <ImagePreloader 
        images={heroImages}
        onLoadComplete={() => console.log('Hero images preloaded successfully')}
        onLoadProgress={(loaded, total) => {
          console.log(`Preloading images: ${loaded}/${total}`);
        }}
      />
      

      <EventBanner />
      <Nav />
      <Hero />
      <Why />
      <Courses />
      <ContactForm />
      <Footer />
      <BackToTop />
    </div>
  );
}

