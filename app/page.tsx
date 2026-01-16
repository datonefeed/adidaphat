"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroSection from "@/components/hero-section";
import  { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import AboutUsSection from "@/components/about-us-section";
import { DemoOne } from "@/components/clip-path-section";
import Footer2 from "@/components/footer2";
import ContactSection from "@/components/contact-section";
import { TestimonialCardComponent } from "@/components/twitter-testimonial-cards";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background w-full">
      <div className="w-full">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Us Section */}
        <AboutUsSection />
        
        {/* 3D Carousel Section */}
        <section className="w-full bg-background">
          <div className="container mx-auto px-4">
            <ThreeDPhotoCarousel />
          </div>
        </section>

        {/* Clip Path Section */}
        <DemoOne />

        <TestimonialCardComponent />

        {/* Contact Card Section */}
        <ContactSection />

        {/* Footer Section */}
        <Footer2 />
      </div>
    </main>
  );
}
