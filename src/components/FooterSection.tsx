
import { Link } from "react-router-dom";

export const FooterSection = () => {
  return (
    <footer className="py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors" aria-label="About GTMCentric">
              About Us
            </Link>
            <Link to="/faq" className="hover:text-foreground transition-colors" aria-label="Frequently Asked Questions">
              FAQs
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors" aria-label="Contact GTMCentric">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          GTM automation, simplified.
        </div>
      </div>
    </footer>
  );
};
