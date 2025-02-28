
import { ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CountdownTimer } from "@/components/CountdownTimer";

interface HeroSectionProps {
  scrollToForm: () => void;
  betaLaunchDate: Date;
}

export const HeroSection = ({ scrollToForm, betaLaunchDate }: HeroSectionProps) => {
  return (
    <AuroraBackground className="flex items-center justify-center overflow-hidden bg-[#1A1F2C] py-14 lg:py-20">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-6 text-center">
          <div className="animate-fade-in space-y-3 md:space-y-5 max-w-4xl">
            <div className="flex justify-center">
              <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary/10 border border-primary/20 rounded-full inline-block backdrop-blur-sm">
                GTMCentric
              </span>
            </div>
            <div className="mt-6 md:mt-8 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 pb-2">
                GTMCentric - Supercharge Your GTM Strategy with AI
              </h1>
            </div>
            <p className="max-w-2xl mt-6 text-base md:text-lg text-muted-foreground mx-auto px-4">
              Simplify GTM planning, automate lead management, and boost sales—all at a price that fits your budget.
            </p>
            <div className="flex justify-center mt-8">
              <button
                onClick={scrollToForm}
                className="px-6 py-3 text-white transition-all bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1A1F2C] whitespace-nowrap"
                aria-label="Get Early Access to GTMCentric"
              >
                Get Early Access
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </button>
            </div>
            
            {/* Countdown Timer */}
            <div className="mt-10 flex flex-col items-center">
              <p className="text-sm text-muted-foreground mb-4">Beta launching in:</p>
              <CountdownTimer targetDate={betaLaunchDate} className="mb-6" />
            </div>
            
            <p className="text-sm text-muted-foreground mt-16">
              100+ companies already joined for early access
            </p>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};
