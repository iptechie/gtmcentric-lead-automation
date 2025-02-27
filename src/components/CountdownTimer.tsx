
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        // Target date has passed
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    // Calculate immediately and then every second
    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={`grid grid-cols-4 gap-2 md:gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-b from-[#8B5CF6]/20 to-[#D946EF]/20 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-primary/20 w-16 md:w-20">
          <div className="text-xl md:text-3xl font-bold text-white">{timeRemaining.days}</div>
        </div>
        <span className="text-xs md:text-sm text-muted-foreground mt-1">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-b from-[#8B5CF6]/20 to-[#D946EF]/20 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-primary/20 w-16 md:w-20">
          <div className="text-xl md:text-3xl font-bold text-white">{timeRemaining.hours}</div>
        </div>
        <span className="text-xs md:text-sm text-muted-foreground mt-1">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-b from-[#8B5CF6]/20 to-[#D946EF]/20 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-primary/20 w-16 md:w-20">
          <div className="text-xl md:text-3xl font-bold text-white">{timeRemaining.minutes}</div>
        </div>
        <span className="text-xs md:text-sm text-muted-foreground mt-1">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-b from-[#8B5CF6]/20 to-[#D946EF]/20 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-primary/20 w-16 md:w-20">
          <div className="text-xl md:text-3xl font-bold text-white">{timeRemaining.seconds}</div>
        </div>
        <span className="text-xs md:text-sm text-muted-foreground mt-1">Seconds</span>
      </div>
    </div>
  );
};
