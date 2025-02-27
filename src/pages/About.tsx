
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Target, Lightbulb, Building, ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const About = () => {
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
              About GTMCentric
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering businesses through intelligent lead management and sales automation
            </p>
          </div>
          
          {/* Company Story */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-foreground/90">
              <p>
                GTMCentric was born from a simple observation: Sales teams waste too much time on manual tasks and lose valuable leads in the process. Our founder, a former sales leader, experienced firsthand the challenges of managing leads effectively while working with limited resources.
              </p>
              <p>
                After consulting with over 30 Sales and GTM leaders across industries, we identified a critical gap in the market for an affordable, user-friendly solution that automates the tedious aspects of lead management without requiring complex setup or training.
              </p>
              <p>
                Today, GTMCentric is focused on democratizing access to powerful sales automation tools, making enterprise-grade technology available to businesses of all sizes. We believe that with the right tools, every sales team can achieve exceptional results.
              </p>
            </div>
          </div>
          
          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-foreground">Our Values</h2>
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
              {[
                {
                  icon: <Users className="w-8 h-8 text-[#8B5CF6]" />,
                  title: "Customer First",
                  description: "We obsess over customer needs and build solutions that solve real problems."
                },
                {
                  icon: <Target className="w-8 h-8 text-[#D946EF]" />,
                  title: "Continuous Improvement",
                  description: "We're never satisfied with the status quo and constantly push for better."
                },
                {
                  icon: <Lightbulb className="w-8 h-8 text-[#8B5CF6]" />,
                  title: "Innovation",
                  description: "We leverage cutting-edge AI to transform how businesses manage their sales processes."
                },
                {
                  icon: <Building className="w-8 h-8 text-[#D946EF]" />,
                  title: "Accessibility",
                  description: "We make powerful tools available to businesses of all sizes, not just enterprises."
                },
              ].map(({ icon, title, description }, i) => (
                <div
                  key={i}
                  className="feature-card p-6"
                >
                  <div className="mb-4">{icon}</div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">{title}</h3>
                  <p className="text-foreground/80">{description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to transform your sales process?</h2>
            <p className="mb-6 text-muted-foreground">Join our waitlist to be among the first to experience GTMCentric.</p>
            <Link 
              to="/" 
              className="px-6 py-3 text-white transition-all bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1A1F2C] inline-flex items-center"
            >
              Back to Homepage
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
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

export default About;
