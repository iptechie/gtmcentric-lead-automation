
import { Check, MessageCircle } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-10 md:py-12 relative">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            What You'll Get with GTMCentric
          </h2>
          <div className="grid gap-6 md:gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {[
              "Create GTM Planning in seconds with AI recommendation.",
              "Capture leads from anywhere—web, email, social.",
              "AI-powered lead scoring to focus on hot prospects.",
              "Automate follow-ups and watch conversions soar.",
              "Seamless integration with Gmail, Outlook, Slack, and Mailchimp.",
              "Dedicated Dashboard for managers to review performance.",
              "AI-powered smart workflows and automation.",
              "WhatsApp integration for seamless communication engagement with prospects.",
              "Affordable Pricing where Plans start at $10/month.",
            ].map((feature, i) => (
              <div
                key={i}
                className="gradient-border"
              >
                <div className="feature-card h-full p-6">
                  <div className="flex items-start">
                    {i === 7 ? (
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
  );
};
