
import { useState } from "react";
import { ArrowRight, Check, Activity, Zap, Target, MessageSquare, MessageCircle } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

// Define country data with codes, flags and validation rules
const countries = [
  { code: "+1", name: "United States", flag: "🇺🇸", digits: 10 },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧", digits: 10 },
  { code: "+91", name: "India", flag: "🇮🇳", digits: 10 },
  { code: "+86", name: "China", flag: "🇨🇳", digits: 11 },
  { code: "+81", name: "Japan", flag: "🇯🇵", digits: 10 },
  { code: "+49", name: "Germany", flag: "🇩🇪", digits: 11 },
  { code: "+33", name: "France", flag: "🇫🇷", digits: 9 },
  { code: "+61", name: "Australia", flag: "🇦🇺", digits: 9 },
  { code: "+7", name: "Russia", flag: "🇷🇺", digits: 10 },
  { code: "+55", name: "Brazil", flag: "🇧🇷", digits: 11 },
];

const Index = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [companySize, setCompanySize] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (value: string, selectedCountryCode: string) => {
    // Remove any non-digit characters
    const digitsOnly = value.replace(/\D/g, "");
    setPhone(digitsOnly);
    
    // Find the selected country's validation rules
    const country = countries.find(c => c.code === selectedCountryCode);
    
    if (!country) return;
    
    if (digitsOnly.length === 0) {
      setPhoneError("");
    } else if (digitsOnly.length !== country.digits) {
      setPhoneError(`Phone number must be ${country.digits} digits for ${country.name}`);
    } else {
      setPhoneError("");
    }
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCode = e.target.value;
    setCountryCode(newCode);
    // Re-validate phone with new country code
    validatePhone(phone, newCode);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if there's a validation error
    if (phoneError) {
      toast({
        title: "Validation Error",
        description: phoneError,
        variant: "destructive",
      });
      return;
    }
    
    // Set submitting state
    setIsSubmitting(true);
    
    // Here we'll send the form data to Google Apps Script
    try {
      const formData = { 
        "First Name": firstName,
        "Last Name": lastName,
        "Company Name": companyName,
        "Email": email, 
        "Phone": `${countryCode}${phone}`, 
        "Company Size": companySize 
      };
      
      // Updated with the provided deployment URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzDAsTG0cg_N-BUsi3554oEoJCJJ66sz6DywOnSz-DKbuVjpKxX30h9BOvU_V2szYAjCw/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors', // This is important for cross-origin requests
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const result = await response.json();
      console.log(result);
      
      if (result.result === 'success') {
        toast({
          title: "Success!",
          description: "Thank you for joining our waitlist. We'll be in touch soon.",
        });
        
        // Clear form
        setFirstName("");
        setLastName("");
        setCompanyName("");
        setEmail("");
        setPhone("");
        setCountryCode("+1");
        setCompanySize("");
      } else {
        throw new Error(result.error || 'An unknown error occurred');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const form = document.getElementById('waitlist-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      {/* Hero Section */}
      <AuroraBackground className="flex items-center justify-center overflow-hidden bg-[#1A1F2C] py-16 lg:py-24">
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 text-center">
            <div className="animate-fade-in space-y-4 md:space-y-6 max-w-4xl">
              <div className="flex justify-center">
                <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary/10 border border-primary/20 rounded-full inline-block backdrop-blur-sm">
                  GTMCentric
                </span>
              </div>
              <div className="mt-4 md:mt-6 space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Simplify Sales
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white/80 via-white/90 to-white">
                  with AI-Powered Lead Management Solution
                </h1>
              </div>
              <p className="max-w-2xl mt-4 text-base md:text-lg text-muted-foreground mx-auto px-4">
                Automate lead tracking, boost conversions, and grow your business—all at a price that fits your budget.
              </p>
              <div className="flex justify-center mt-6">
                <button
                  onClick={scrollToForm}
                  className="px-6 py-3 text-white transition-all bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1A1F2C] whitespace-nowrap"
                >
                  Get Early Access
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                100+ companies already joined for early access
              </p>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* Pain Points */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Tired of Losing Leads and Wasting Time?
            </h2>
            <div className="grid gap-6 md:gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4 stagger-animation">
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
                  className="feature-card group cursor-pointer p-6"
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
      <section className="py-12 md:py-16 relative">
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              What You'll Get with GTMCentric
            </h2>
            <div className="grid gap-6 md:gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
              {[
                "Capture leads from anywhere—web, email, social.",
                "AI-powered lead scoring to focus on hot prospects.",
                "Automate follow-ups and watch conversions soar.",
                "Seamless integration with Gmail, Outlook, Slack, and Mailchimp.",
                "Dedicated Dashboard for managers to review performance.",
                "AI-powered smart workflows and automation.",
                "WhatsApp integration for seamless communication engagement with prospects.",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="gradient-border"
                >
                  <div className="feature-card h-full p-6">
                    <div className="flex items-start">
                      {i === 6 ? (
                        <MessageCircle className="w-5 h-5 mr-3 text-[#25D366] shrink-0 mt-1" />
                      ) : (
                        <Check className="w-5 h-5 mr-3 text-[#8B5CF6] shrink-0 mt-1" />
                      )}
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
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Built for Growth-Centric Companies
            </h2>
            <p className="mt-4 text-lg text-muted-foreground mx-auto px-4">
              Designed with inputs from 30+ Sales / GTM Head. Join the future of GTM Strategy & Sales Automation.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-lg mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Get in Early—Unlock Exclusive Benefits
            </h2>
            <div className="mt-6 space-y-4 text-left">
              {[
                "Free beta access starting April 2025.",
                "50% off for the first 6 months on any plan - starting at just $5/user/month (regular $10).",
                "Priority support during launch.",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center text-foreground/90">
                  <Check className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <form
              id="waitlist-form"
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-8 mt-8 space-y-4"
            >
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                    required
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                required
              />
              <input
                type="email"
                placeholder="Company Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                required
              />
              <div className="flex gap-4">
                <select
                  className="px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
                <div className="flex-1 flex flex-col">
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    value={phone}
                    onChange={(e) => validatePhone(e.target.value, countryCode)}
                    className={`w-full px-4 py-3 text-foreground bg-muted/50 border ${
                      phoneError ? "border-red-500" : "border-white/10"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm`}
                    required
                  />
                  {phoneError && (
                    <p className="text-xs text-red-500 mt-1 text-left">{phoneError}</p>
                  )}
                </div>
              </div>
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
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <>
                    Reserve Your Spot Now
                    <ArrowRight className="inline-block w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            GTM automation, simplified.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
