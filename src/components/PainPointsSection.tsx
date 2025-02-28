
import { Activity, Zap, Target, MessageSquare } from "lucide-react";

export const PainPointsSection = () => {
  return (
    <section className="py-10 md:py-12 relative">
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
  );
};
