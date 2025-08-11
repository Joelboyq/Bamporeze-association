'use client'
import { Locale } from "../../../i18n.config";
import { useEffect, useState, useRef } from "react";

interface ImpactStatsProps {
  locale: Locale;
}

export default function ImpactStats({ locale }: ImpactStatsProps) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const content = {
    en: {
      mainText: "Bamporeze Association is part of a global network empowering vulnerable children and building sustainable communities - at scale.",
      supportingText: "We connect children and families to education, healthcare, and community development programs. Why? To build a just and sustainable future for all.",
      stat1: {
        number: 10000,
        label: "Children Helped"
      },
      stat2: {
        number: 15,
        label: "Years of Impact"
      }
    },
    fr: {
      mainText: "L'Association Bamporeze fait partie d'un réseau mondial qui autonomise les enfants vulnérables et construit des communautés durables - à grande échelle.",
      supportingText: "Nous connectons les enfants et les familles aux programmes d'éducation, de santé et de développement communautaire. Pourquoi? Pour construire un avenir juste et durable pour tous.",
      stat1: {
        number: 10000,
        label: "Enfants Aidés"
      },
      stat2: {
        number: 15,
        label: "Années d'Impact"
      }
    }
  };

  const currentContent = content[locale];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate first counter
            const duration1 = 2000; // 2 seconds
            const steps1 = 60;
            const increment1 = currentContent.stat1.number / steps1;
            let current1 = 0;
            
            const timer1 = setInterval(() => {
              current1 += increment1;
              if (current1 >= currentContent.stat1.number) {
                setCount1(currentContent.stat1.number);
                clearInterval(timer1);
              } else {
                setCount1(Math.floor(current1));
              }
            }, duration1 / steps1);

            // Animate second counter
            const duration2 = 2000; // 2 seconds
            const steps2 = 60;
            const increment2 = currentContent.stat2.number / steps2;
            let current2 = 0;
            
            const timer2 = setInterval(() => {
              current2 += increment2;
              if (current2 >= currentContent.stat2.number) {
                setCount2(currentContent.stat2.number);
                clearInterval(timer2);
              } else {
                setCount2(Math.floor(current2));
              }
            }, duration2 / steps2);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, currentContent.stat1.number, currentContent.stat2.number]);

  return (
    <section ref={sectionRef} className="bg-[#003d1d] py-16 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Section - Descriptive Text */}
          <div className="space-y-8">
            {/* Main Text Block */}
            <div className="text-white">
              <h2 className="text-l md:text-2xl lg:text-1xl font-bold leading-tight mb-6">
                {currentContent.mainText}
              </h2>
              
              {/* Supporting Text Block */}
              <p className="text-lg md:text-l text-white/90 leading-relaxed">
                {currentContent.supportingText}
              </p>
            </div>
          </div>

          {/* Right Section - Statistics */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center lg:justify-end">
            {/* First Statistic */}
            <div className="text-center lg:text-left">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                {count1.toLocaleString()}+
              </div>
              <div className="text-lg md:text-xl text-white/90">
                {currentContent.stat1.label}
              </div>
            </div>

            {/* Second Statistic */}
            <div className="text-center lg:text-left">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                {count2}+
              </div>
              <div className="text-lg md:text-xl text-white/90">
                {currentContent.stat2.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
