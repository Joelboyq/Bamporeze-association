'use client'
import { Locale } from "../../../i18n.config";
import { useEffect, useState, useRef } from "react";

interface ImpactStatsProps {
  locale: Locale;
}

export default function ImpactStats({ locale }: ImpactStatsProps) {
  // New infographics/numbers section based on user content
  const stats = [
    { label: "Women equipped with financial literacy, entrepreneurship, and business skills", value: "10,000+" },
    { label: "Self-help Groups established", value: "500" },
    { label: "Youth trained in TVET, life skills, and equipped with a start-up kit", value: "700+" },
    { label: "Community-based ECDs built and supported", value: "3+" },
    { label: "Home-based ECDs established and supported", value: "37+" },
    { label: "Awareness-raising campaigns on Child Protection, Positive Parenting, SRHR, HIV Prevention, and GBV", value: "50+" },
    { label: "Trees planted, restoring forests and fighting soil erosion", value: "25,000+" },
    { label: "Energy-Saving Stoves distributed", value: "1,200" },
    { label: "Water harvesting tanks provided for relocated households", value: "100" },
    { label: "Houses built for child and woman-headed households", value: "300+" },
    { label: "Studies to assess child protection and GBV issues", value: "2" },
    { label: "Years of impact", value: "29" },
  ];

  return (
    <section className="bg-[#003d1d] py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our Impact in Numbers
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Bamporeze Association is a women-led Rwandan nonprofit organization established in 1996, committed to supporting vulnerable children, youth, women, and families through transformative approaches to alleviating poverty and building resiliency.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/10 rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">{stat.value}</div>
              <div className="text-base md:text-lg text-white/90 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
