
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help with any questions about GTMCentric
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="glass-card p-8 max-w-2xl mx-auto">
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
                    Bengaluru, Karnataka<br />
                    India
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
            
            {/* Navigation links */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link 
                to="/" 
                className="px-4 py-2 text-white transition-all bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary inline-flex items-center"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 text-white transition-all bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary inline-flex items-center"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </AuroraBackground>
      
      <footer className="py-6 bg-secondary">
        <div className="container max-w-5xl px-4 mx-auto text-center text-sm text-muted-foreground">
          GTM automation, simplified.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
