import { useState } from "react";
import { ArrowRight, Check, Activity, Zap, Target, MessageSquare } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Index = () => {
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { email, companySize });
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      {/* Hero Section */}
      <AuroraBackground className="min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container px-4 pt-32 pb-20 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center gap-12 text-center">
            <div className="animate-fade-in space-y-8 max-w-4xl">
              <div className="flex justify-center">
                <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary/10 border border-primary/20 rounded-full inline-block backdrop-blur-sm">
                  GTMCentric
                </span>
              </div>
              <div className="mt-8 space-y-2">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
                  Simplify Sales
                </h1>
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white/80 via-white/90 to-white">
                  with AI-Powered Lead Management
                </h1>
              </div>
              <p className="max-w-2xl mt-6 text-lg text-muted-foreground mx-auto">
                Automate lead tracking, boost conversions, and grow your business—all at a price that fits your budget.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-white transition-all bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1A1F2C] whitespace-nowrap"
                >
                  Get Early Access
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </button>
              </form>
              <p className="text-sm text-muted-foreground">
                Join 200+ companies already transforming their GTM strategy
              </p>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* Pain Points */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="container px-4 mx-auto">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Tired of Losing Leads and Wasting Time?
            </h2>
            <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4 stagger-animation">
              {[
                {
                  icon: <Activity className="w-6 h-6 text-[#8B5CF6]" />,
                  text: "Manual lead tracking slows you down and kills conversions."
                },
                {
                  icon: <Zap className="w-6 h-6 text-[#D946EF]" />,
                  text: "Expensive tools with steep learning curves drain your budget."
                },
                {
                  icon: <Target className="w-6 h-6 text-[#8B5CF6]" />,
                  text: "Missed follow-ups mean lost sales opportunities."
                },
                {
                  icon: <MessageSquare className="w-6 h-6 text-[#D946EF]" />,
                  text: "Our platform fixes this with simple automation and smart AI."
                },
              ].map(({ icon, text }, i) => (
                <div
                  key={i}
                  className="feature-card group cursor-pointer"
                >
                  <div className="mb-4">{icon}</div>
                  <p className="text-foreground/90 group-hover:text-white transition-colors">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="container px-4 mx-auto">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              What You'll Get with GTMCentric
            </h2>
            <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
              {[
                "Capture leads from anywhere—web, email, social.",
                "AI-powered lead scoring to focus on hot prospects.",
                "Automate follow-ups and watch conversions soar.",
                "Seamless integrations with Gmail, Slack, and Mailchimp.",
                "Affordable plans starting at just $15/month.",
                "24/7 AI-powered support and guidance.",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="gradient-border"
                >
                  <div className="feature-card h-full">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-[#8B5CF6] shrink-0 mt-1" />
                      <p className="text-foreground/90 text-left">{feature}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="container px-4 mx-auto text-center">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Built for SMBs Like You
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Designed with input from 30+ small business owners. Join 500+ early
              adopters shaping the future of sales automation.
            </p>
            <div className="mt-12 glass-card p-8">
              <div className="flex flex-wrap justify-center gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=64&h=64&fit=crop&crop=faces`}
                    alt={`Company ${i + 1}`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Get in Early—Unlock Exclusive Benefits
            </h2>
            <div className="mt-8 space-y-4 text-left">
              {[
                "Free beta access starting April 2025",
                "50% off your first month on any plan",
                "Priority support during launch",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center text-foreground/90">
                  <Check className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 mt-10 space-y-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                required
              />
              <select
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value)}
                className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                required
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201+">201+ employees</option>
              </select>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white transition-all bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1A1F2C]"
              >
                Reserve Your Spot Now
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
        <div className="container px-4 mx-auto relative">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                About Us
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            GTM automation, simplified.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
