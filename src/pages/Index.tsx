import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-background" />
        <div className="container px-4 pt-32 pb-20 mx-auto text-center relative z-10">
          <div className="animate-fade-in space-y-8">
            <div className="flex justify-center">
              <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary/10 border border-primary/20 rounded-full inline-block backdrop-blur-sm">
                GTMCentric
              </span>
            </div>
            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Go-to-Market Strategy
              <br /> Simplified with AI
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
              Transform your GTM execution with our AI-powered platform. From strategy to
              implementation, we make it seamless.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-4 max-w-md mx-auto mt-10 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-white transition-all bg-primary hover:bg-primary/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1A1F2C] backdrop-blur-sm"
              >
                Get Early Access
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              Join 200+ companies already transforming their GTM strategy
            </p>

            {/* Abstract Shapes */}
            <div className="absolute top-20 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute top-40 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/2 left-12 w-1 h-20 bg-gradient-to-b from-primary/20 to-transparent hidden lg:block" />
        <div className="absolute top-1/3 right-12 w-1 h-20 bg-gradient-to-b from-accent/20 to-transparent hidden lg:block" />
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-secondary/50 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Tired of Losing Leads and Wasting Time?
            </h2>
            <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Manual lead tracking slows you down and kills conversions.",
                "Expensive tools with steep learning curves drain your budget.",
                "Missed follow-ups mean lost sales opportunities.",
                "Our platform fixes this with simple automation and smart AI.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="glass-card p-6 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <p className="text-foreground/90">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent pointer-events-none" />
        <div className="container px-4 mx-auto">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              What You'll Get with GrowEasy
            </h2>
            <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Capture leads from anywhere—web, email, social.",
                "AI-powered lead scoring to focus on hot prospects.",
                "Automate follow-ups and watch conversions soar.",
                "Seamless integrations with Gmail, Slack, and Mailchimp.",
                "Affordable plans starting at just $15/month.",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="glass-card p-6 transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <p className="text-foreground/90">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-accent/5 backdrop-blur-sm">
        <div className="container px-4 mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Built for SMBs Like You
            </h2>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
              Designed with input from 30+ small business owners. Join 500+ early
              adopters shaping the future of sales automation.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent pointer-events-none" />
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
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
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
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
                className="w-full px-6 py-3 text-white transition-all bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1A1F2C]"
              >
                Reserve Your Spot Now
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/50 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
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
            Sales automation, simplified.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
