
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
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20 mx-auto text-center">
        <div className="animate-fade-in">
          <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full">
            Coming Soon
          </span>
          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
            Simplify Sales with
            <br /> AI-Powered Lead Management
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
            Automate lead tracking, boost conversions, and grow your business—all at
            a price that fits your budget.
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
              className="w-full px-4 py-3 text-foreground bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 text-white transition-all bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Get on the List
              <ArrowRight className="inline-block w-4 h-4 ml-2" />
            </button>
          </form>
          <p className="mt-4 text-sm text-muted-foreground">
            Be among the first 500 to unlock exclusive beta perks.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
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
                  className="p-6 transition-all bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg"
                >
                  <p className="text-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
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
                  className="p-6 transition-all border rounded-xl hover:shadow-lg hover:-translate-y-1"
                >
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-accent">
        <div className="container px-4 mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
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
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
              Get in Early—Unlock Exclusive Benefits
            </h2>
            <div className="mt-8 space-y-4 text-left">
              {[
                "Free beta access starting April 2025",
                "50% off your first month on any plan",
                "Priority support during launch",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center">
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
              className="max-w-md mx-auto mt-10 space-y-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-foreground bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <select
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value)}
                className="w-full px-4 py-3 text-foreground bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                className="w-full px-6 py-3 text-white transition-all bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Reserve Your Spot Now
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                About Us
              </a>
              <a href="#" className="hover:text-foreground">
                Contact
              </a>
              <a href="#" className="hover:text-foreground">
                Privacy Policy
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
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
