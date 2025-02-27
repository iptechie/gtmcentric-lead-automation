
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <AuroraBackground className="min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1F2C]">
        <div className="container max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 mx-auto relative z-10">
          {/* Navigation back link */}
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help with any questions about GTMCentric
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#8B5CF6] mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Email Us</h3>
                    <p className="text-foreground/90 mt-1">
                      <a 
                        href="mailto:connect@gtmcentric.com" 
                        className="hover:text-[#8B5CF6] transition-colors"
                      >
                        connect@gtmcentric.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#D946EF] mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Location</h3>
                    <p className="text-foreground/90 mt-1">
                      San Francisco, California<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#8B5CF6] mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Phone</h3>
                    <p className="text-foreground/90 mt-1">
                      Available for enterprise customers
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-lg font-medium text-foreground mb-2">About GTMCentric</h3>
                <p className="text-foreground/90">
                  GTMCentric simplifies sales processes through AI-powered lead management and automation. 
                  We're committed to helping businesses of all sizes streamline their go-to-market strategies 
                  and close more deals. Feel free to reach out to us at 
                  <a 
                    href="mailto:connect@gtmcentric.com" 
                    className="text-[#8B5CF6] hover:underline mx-1"
                  >
                    connect@gtmcentric.com
                  </a>
                  with any questions or partnership inquiries.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h2>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/90 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/90 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/90 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 text-white transition-all bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1A1F2C] flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-8 text-center">
                <Link 
                  to="/" 
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Back to waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>
      
      {/* Simple Footer */}
      <footer className="py-6 bg-secondary relative">
        <div className="container max-w-5xl px-4 mx-auto text-center text-sm text-muted-foreground">
          GTM automation, simplified.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
