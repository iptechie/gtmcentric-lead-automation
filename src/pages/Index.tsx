
import { Plus, Check, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet-async";
import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Globe } from "@/components/ui/globe";

// Define country data with codes, flags and validation rules
const countries = [
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
];

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [companySize, setCompanySize] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Target date for the countdown timer - April 15, 2025
  const betaLaunchDate = new Date("2025-04-15T00:00:00");

  // Schema.org structured data for software application
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GTMCentric",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "A complete go-to-market platform for modern SaaS companies to streamline their marketing, sales, and revenue operations.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/ComingSoon"
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !email || !companyName || !phoneNumber || !companySize) {
      alert("Please fill in all fields");
      return;
    }
    
    // Set submitting state
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log({
        name,
        email,
        companyName,
        phoneNumber: `${countryCode}${phoneNumber}`,
        companySize
      });
      
      // Reset form
      setName("");
      setEmail("");
      setCompanyName("");
      setPhoneNumber("");
      setCompanySize("");
      
      // End submitting state
      setIsSubmitting(false);
      
      // Show success message
      alert("Thank you for your interest! We'll be in touch soon.");
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>GTMCentric | Complete Go-to-Market Platform for Modern SaaS</title>
        <meta name="description" content="GTMCentric provides a complete go-to-market platform for modern SaaS companies to streamline their marketing, sales, and revenue operations." />
        <meta name="keywords" content="go-to-market, GTM, SaaS, marketing, sales, revenue operations" />
        <meta property="og:title" content="GTMCentric | Complete Go-to-Market Platform for Modern SaaS" />
        <meta property="og:description" content="GTMCentric provides a complete go-to-market platform for modern SaaS companies to streamline their marketing, sales, and revenue operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gtmcentric.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GTMCentric | Complete Go-to-Market Platform for Modern SaaS" />
        <meta name="twitter:description" content="GTMCentric provides a complete go-to-market platform for modern SaaS companies to streamline their marketing, sales, and revenue operations." />
        <meta name="twitter:image" content="/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(softwareAppSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500">
                The Complete Go-to-Market Platform for Modern SaaS
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-300">
                Finally, a single platform to streamline all your marketing, sales, and
                revenue operations so you can focus on what matters - growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Book a Demo
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl">
                <div className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    3X
                  </div>
                  <p className="text-sm text-gray-400">Faster GTM execution</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    50%
                  </div>
                  <p className="text-sm text-gray-400">Reduced tool costs</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    85%
                  </div>
                  <p className="text-sm text-gray-400">More efficient teams</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    2X
                  </div>
                  <p className="text-sm text-gray-400">Revenue growth</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-black to-secondary px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Problem with Current GTM Tools
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl">
                Today's SaaS companies use an average of 14 different tools for their
                go-to-market strategy, causing data silos, wasted resources, and
                disjointed customer experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-muted rounded-xl p-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Silos</h3>
                <p className="text-gray-400">
                  Critical customer data scattered across tools with no single source
                  of truth, leading to missed opportunities and poor decisions.
                </p>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tool Overflow</h3>
                <p className="text-gray-400">
                  Managing dozens of point solutions drains resources, creates
                  complexity, and wastes money on overlapping functionality.
                </p>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Slow Execution</h3>
                <p className="text-gray-400">
                  Disconnected workflows create friction between teams, slowing down
                  campaigns and making it impossible to move quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 md:py-24 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Introducing GTMCentric
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl">
                A unified platform that brings together all the tools you need for a
                successful go-to-market strategy, eliminating tool sprawl and
                connecting your entire GTM motion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-muted bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Unified Data</h3>
                <p className="text-gray-400">
                  A single source of truth for customer data, providing full context
                  across marketing, sales, and customer success.
                </p>
              </div>

              <div className="bg-muted bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Streamlined Tools</h3>
                <p className="text-gray-400">
                  Replace 8+ point solutions with one integrated platform, saving
                  money and reducing complexity.
                </p>
              </div>

              <div className="bg-muted bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Faster Execution</h3>
                <p className="text-gray-400">
                  Connected workflows enable seamless collaboration between teams,
                  accelerating your go-to-market motion.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.1),rgba(30,27,75,0))]"></div>
        </section>

        {/* What You'll Get Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-black to-secondary px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What You'll Get with GTMCentric
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl">
                Everything you need to run a modern, data-driven go-to-market strategy
                in one unified platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Marketing Campaign Hub
                  </h3>
                  <p className="text-gray-400">
                    Create, execute, and measure multi-channel campaigns from a single
                    interface. Email marketing, social media, ads, content - all in one
                    place.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sales Engagement</h3>
                  <p className="text-gray-400">
                    Streamline your sales process with sequences, call tracking,
                    meeting scheduling, and real-time notifications when prospects
                    engage.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Customer Data Platform
                  </h3>
                  <p className="text-gray-400">
                    Unified customer profiles, behavioral tracking, segmentation, and
                    real-time insights to understand and engage your audience better.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Content & Asset Management
                  </h3>
                  <p className="text-gray-400">
                    Centralize your content library, track performance, and ensure
                    your team always has the latest materials at their fingertips.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Revenue Intelligence
                  </h3>
                  <p className="text-gray-400">
                    Connect marketing activities to revenue outcomes with advanced
                    attribution modeling and conversion tracking across the funnel.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Onboarding & Adoption
                  </h3>
                  <p className="text-gray-400">
                    Drive customer success with personalized onboarding flows, in-app
                    guidance, and feature adoption tracking to reduce churn.
                  </p>
                </div>
              </div>
            </div>

            {/* Globe visualization */}
            <div className="mt-16 relative h-[500px]">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-3">Global Reach, Local Impact</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Join companies across the globe who are transforming their go-to-market strategy with GTMCentric.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Globe className="top-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Early Access Section */}
        <section className="py-12 md:py-24 px-4 relative">
          <div className="container mx-auto max-w-5xl">
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="form">Request Early Access</TabsTrigger>
                <TabsTrigger value="demo">Book a Demo</TabsTrigger>
              </TabsList>
              <TabsContent value="form">
                <div className="bg-muted bg-opacity-50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary/20">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Get Early Access
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Join our exclusive early access program and be among the first to
                    experience GTMCentric.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Smith"
                          required
                          className="bg-muted border-muted-foreground/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          required
                          className="bg-muted border-muted-foreground/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Acme Inc"
                          required
                          className="bg-muted border-muted-foreground/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="flex">
                          <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="rounded-l-md w-20 bg-muted border border-r-0 border-muted-foreground/20"
                          >
                            {countries.map((country) => (
                              <option key={country.name} value={country.code}>
                                {country.flag} {country.code}
                              </option>
                            ))}
                          </select>
                          <Input
                            id="phone"
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="123-456-7890"
                            required
                            className="rounded-l-none bg-muted border-muted-foreground/20"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="companySize">Company Size</Label>
                        <select
                          id="companySize"
                          value={companySize}
                          onChange={(e) => setCompanySize(e.target.value)}
                          required
                          className="w-full rounded-md bg-muted border border-muted-foreground/20 px-3 py-2"
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Get Early Access"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </TabsContent>
              <TabsContent value="demo">
                <div className="bg-muted bg-opacity-50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary/20">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    See GTMCentric in Action
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Schedule a personalized demo with our product specialists to see
                    how GTMCentric can transform your go-to-market strategy.
                  </p>
                  <div className="aspect-video bg-black/50 rounded-lg mb-6 flex items-center justify-center">
                    <p className="text-gray-400">Demo calendar will appear here</p>
                  </div>
                  <p className="text-sm text-gray-400">
                    Demo sessions typically last 30 minutes and include a Q&A portion
                    to address your specific use cases.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),rgba(30,27,75,0))]"></div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of the GTM Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join forward-thinking SaaS companies that are transforming how they go
              to market.
            </p>
            <div className="flex flex-col items-center">
              <div className="mb-8">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium flex items-center">
                  Get Early Access
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </button>
              </div>
              
              {/* Countdown Timer */}
              <div className="mt-10 flex flex-col items-center">
                <p className="text-sm text-muted-foreground mb-4">Beta launching in:</p>
                <CountdownTimer targetDate={betaLaunchDate} className="mb-6" />
              </div>
              
              <p className="text-sm text-muted-foreground mt-16">
                100+ companies already joined for early access
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-12 border-t border-muted px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-primary">GTMCentric</h2>
                <p className="text-sm text-gray-400 mt-2">
                  The complete go-to-market platform
                </p>
              </div>
              <div className="flex space-x-8">
                <a href="/about" className="text-gray-400 hover:text-white">
                  About
                </a>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} GTMCentric. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
