
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  // Schema.org structured data for the organization and contact page
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gtmcentric.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://gtmcentric.com/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Helmet>
        <title>Contact GTMCentric | AI-Powered Lead Management Solutions</title>
        <meta name="description" content="Get in touch with GTMCentric for questions about our AI-powered lead management and sales automation solutions. Located in Bengaluru, India." />
        <meta name="keywords" content="GTMCentric contact, sales automation contact, lead management support, GTM strategy help, AI sales tools contact" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://gtmcentric.com/contact" />
        
        {/* Language */}
        <meta property="og:locale" content="en_US" />
        
        {/* OpenGraph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact GTMCentric | AI-Powered Lead Management Solutions" />
        <meta property="og:description" content="Get in touch with GTMCentric for questions about our AI-powered lead management and sales automation solutions." />
        <meta property="og:url" content="https://gtmcentric.com/contact" />
        <meta property="og:site_name" content="GTMCentric" />
        <meta property="og:image" content="https://gtmcentric.com/og-image.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact GTMCentric | AI-Powered Lead Management Solutions" />
        <meta name="twitter:description" content="Get in touch with GTMCentric for questions about our AI-powered lead management and sales automation solutions." />
        <meta name="twitter:image" content="https://gtmcentric.com/og-image.png" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <div className="container max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 mx-auto">
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
                    aria-label="Email GTMCentric at connect@gtmcentric.com"
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
                aria-label="Email GTMCentric at connect@gtmcentric.com"
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
              aria-label="Navigate to Home page"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-white transition-all bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary inline-flex items-center"
              aria-label="Navigate to About Us page"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
      
      <footer className="py-6 bg-secondary">
        <div className="container max-w-5xl px-4 mx-auto text-center text-sm text-muted-foreground">
          GTM automation, simplified.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
