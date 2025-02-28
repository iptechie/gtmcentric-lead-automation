
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { FooterSection } from "@/components/FooterSection";
import { SchemaTags } from "@/components/SchemaTags";

const Index = () => {
  // Target date for the countdown timer - April 15, 2025
  const betaLaunchDate = new Date("2025-04-15T00:00:00");

  // Schema.org structured data for software application
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GTMCentric",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "5",
      "priceCurrency": "USD",
      "description": "Starting at $5/user/month for early access"
    },
    "description": "AI-powered lead management and sales automation solution that simplifies sales processes and boosts conversions",
    "screenshot": "https://gtmcentric.com/og-image.png"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GTMCentric",
    "url": "https://gtmcentric.com",
    "logo": "https://gtmcentric.com/logo.png",
    "description": "AI-powered lead management and sales automation solution",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "connect@gtmcentric.com"
    }
  };

  const scrollToForm = () => {
    const form = document.getElementById('waitlist-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <SchemaTags 
        softwareAppSchema={softwareAppSchema} 
        organizationSchema={organizationSchema} 
      />
      
      {/* Hero Section */}
      <HeroSection scrollToForm={scrollToForm} betaLaunchDate={betaLaunchDate} />

      {/* Pain Points */}
      <PainPointsSection />

      {/* Features */}
      <FeaturesSection />

      {/* Social Proof */}
      <SocialProofSection />

      {/* Waitlist */}
      <WaitlistSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
