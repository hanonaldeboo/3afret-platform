"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowDown, ShieldCheck, Zap, MessageSquare } from "lucide-react";
import { SiteData } from "@/lib/types";

interface HeroSectionProps {
  data: SiteData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { hero, settings, whatsappRecharge } = data;
  const cleanNumber = whatsappRecharge.phoneNumber
    ? whatsappRecharge.phoneNumber.replace(/[^0-9]/g, "")
    : "201158620386";
  const whatsappHref = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    whatsappRecharge.defaultMessage || "مرحباً، أود شحن ألعاب / الاستفسار من متجر 3afret"
  )}`;

  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Ambient Glows */}
      <div className="glow-orb w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold-500/10 -top-10 sm:-top-20 right-1/4" />
      <div className="glow-orb w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-amber-600/10 bottom-5 left-5" />

      {/* Decorative Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Verification Tag */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[11px] sm:text-sm font-semibold mb-4 sm:mb-6 shadow-gold-glow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse shrink-0" />
          <span>{hero.tagline}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          <span className="text-slate-300">علامة 3afret المعتمدة</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-snug sm:leading-snug mb-4 sm:mb-6">
          <span>{hero.mainTitle}</span>{" "}
          <br className="hidden sm:inline" />
          <span className="gold-text-gradient drop-shadow-sm font-black block sm:inline mt-1 sm:mt-0">
            {hero.highlightedTitle}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-xs sm:text-base md:text-xl text-slate-300 font-normal leading-relaxed mb-8 sm:mb-10 px-1">
          {hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 mb-10 sm:mb-14">
          <a
            href={hero.primaryCtaLink}
            className="btn-gold w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-gold-glow group active:scale-95 transition-transform"
          >
            <span>{hero.primaryCtaText}</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-200 bg-obsidian-900/80 hover:bg-obsidian-850 hover:text-gold-400 border border-gold-500/30 hover:border-gold-500/60 transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-gold-400" />
            <span>{hero.secondaryCtaText}</span>
          </a>
        </div>

        {/* Notice Banner Card */}
        {hero.bannerNotice && (
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 sm:px-5 sm:py-3 rounded-2xl bg-obsidian-900/70 border border-gold-500/25 text-slate-200 text-xs sm:text-sm backdrop-blur-md shadow-glass max-w-2xl mx-auto text-right">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 shrink-0" />
            <span className="font-medium text-[11px] sm:text-sm leading-tight">{hero.bannerNotice}</span>
          </div>
        )}
      </div>
    </section>
  );
}
