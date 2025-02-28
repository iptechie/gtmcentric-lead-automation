
import React, { useState } from "react";
import { ChevronDown, Home, Info, Mail, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border-b border-[#FBFBFB]/30 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus:ring-0 group"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-primary/90 group-hover:text-primary transition-colors">{question}</h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-primary/70 transition-transform duration-300 ease-in-out group-hover:text-primary",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        )}
      >
        <div className="prose prose-sm max-w-none text-muted-foreground/90">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FaqPage = () => {
  const [openItem, setOpenItem] = useState<number | null>(0); // Default first item open

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is GTMCentric?",
      answer: "GTMCentric is an AI-powered SaaS platform designed for small to medium-sized businesses & enterprises to simplify go-to-market (GTM) planning, manage leads and automate sales processes. It helps you create GTM strategies, score leads with AI, and boost conversions affordably, starting at $10/month."
    },
    {
      question: "Who is GTMCentric for?",
      answer: "GTMCentric is perfect for growth-centric SMBs, Enterprises, and tech startups. It's ideal for owners, sales managers, sales reps and marketing leads looking to streamline GTM strategies and sales automation without breaking the bank."
    },
    {
      question: "How does the AI in GTMCentric work?",
      answer: "GTMCentric uses AI to score leads based on engagement and demographics (e.g., email opens, source), suggesting actions for high-scoring leads. It also provides GTM tactic suggestions to optimize your strategy."
    },
    {
      question: "What's included in the beta access?",
      answer: "Joining the waitlist gives you free beta access starting April 15, 2025, 50% off your 6 months on any plan, and priority support during launch. You'll help shape GTMCentric by providing feedback as one of the first 500 users."
    },
    {
      question: "How much does GTMCentric cost?",
      answer: "GTMCentric offers a free tier (2 users, basic features), a Starter plan at $10/user/month, a Growth plan at $29/user/month, and a Pro plan at $49/user/month. All plans include GTM planning, lead management, and AI features, with limits increasing by tier."
    },
    {
      question: "When can I start using GTMCentric?",
      answer: (
        <>
          You can join the waitlist now at{" "}
          <a 
            href="https://waitlist.gtmcentric.app" 
            className="text-primary hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            waitlist.gtmcentric.app
          </a>{" "}
          for early access. The beta launches on April 20, 2025, with full access available from June 1, 2025.
        </>
      )
    },
    {
      question: "How do I join the waitlist?",
      answer: (
        <>
          Visit{" "}
          <a 
            href="https://waitlist.gtmcentric.app" 
            className="text-primary hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            waitlist.gtmcentric.app
          </a>
          , enter your email and company size, and click "Join the Waitlist." You'll receive updates and an invitation for the beta in April 2025.
        </>
      )
    },
    {
      question: "What integrations does GTMCentric offer?",
      answer: "GTMCentric integrates with Gmail for email automation, Slack for notifications, LinkedIn for lead capture, and Mailchimp for campaigns. Future integrations (e.g., Shopify, Google Analytics) are planned based on user feedback."
    },
    {
      question: "Is GTMCentric secure and compliant?",
      answer: "Yes, GTMCentric uses Supabase for secure data storage, encrypted at rest and in transit. We comply with GDPR and CCPA for user data, including file attachments, ensuring your information is protected."
    },
    {
      question: "How is GTMCentric different from competitors?",
      answer: "GTMCentric stands out with its affordable pricing ($10/month start), AI-driven GTM planning and lead scoring, and simple design for SMBs. Unlike HubSpot or Pipedrive, it focuses on GTM strategy alongside sales automation, offering a unified, cost-effective solution."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-secondary/95 text-foreground min-h-screen">
      <Helmet>
        <title>Frequently Asked Questions - GTMCentric</title>
        <meta name="description" content="Answers to common questions about GTMCentric, the AI-powered SaaS platform for go-to-market planning and sales automation." />
      </Helmet>
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Navigation back link */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-gradient text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300/90 max-w-2xl mx-auto">
            Everything you need to know about GTMCentric and how it can help your business grow.
          </p>
        </div>
        
        <div className="glass-card p-8 md:p-10 rounded-3xl shadow-lg backdrop-blur-xl">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              onClick={() => toggleItem(index)}
            />
          ))}
          
          {/* Navigation Links */}
          <div className="mt-10 pt-6 border-t border-[#FBFBFB]/20">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Info className="w-4 h-4 mr-2" />
                About Us
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
