"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle, ExternalLink, Send, Sparkles, BadgeCheck } from "lucide-react";
import { OfficialChannel } from "@/lib/types";

interface OfficialChannelSectionProps {
  channel: OfficialChannel;
}

export default function OfficialChannelSection({ channel }: OfficialChannelSectionProps) {
  return (
    <section id="channel" className="py-10 sm:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 bg-gradient-to-br from-obsidian-900 via-obsidian-950 to-black p-4 sm:p-8 lg:p-12 shadow-2xl">
          {/* Subtle gold decorative glow */}
          <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 bg-gold-500/10 -top-10 sm:-top-20 -left-10 sm:-left-20" />
          <div className="glow-orb w-56 sm:w-72 h-56 sm:h-72 bg-sky-500/10 -bottom-10 -right-10" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Visual Banner Preview */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[360px] lg:max-w-none rounded-2xl overflow-hidden border border-gold-500/30 shadow-glass group">
                <Image
                  src={channel.bannerUrl || "/images/channel-banner.jpg"}
                  alt={channel.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-500 text-black text-[11px] font-black shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>VIP Channel</span>
                  </span>
                  <span className="text-[11px] font-semibold text-white/90 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    تحديث يومي مستمر
                  </span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 sm:space-y-6 text-center sm:text-right">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-400 text-xs sm:text-sm font-bold mb-2.5 shadow-sm">
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.073-1.109-.06-.554-.176-1.267-.506-2.181-1.325-1.172-1.049-1.924-2.316-2.138-2.684-.213-.368-.023-.567.16-.75.166-.165.372-.423.558-.635.186-.211.248-.36.372-.599.124-.24.062-.45-.031-.635-.093-.186-.837-2.02-1.147-2.766-.303-.728-.61-.628-.838-.64-.216-.01-.465-.013-.713-.013-.248 0-.651.093-.992.465-.34.372-1.302 1.272-1.302 3.104 0 1.832 1.333 3.604 1.519 3.852.186.248 2.623 4.004 6.357 5.617.888.384 1.581.614 2.122.785.89.283 1.7.243 2.34.147.714-.107 2.18-892 2.49-1.753.31-.861.31-1.599.217-1.754-.093-.155-.34-.247-.714-.433z"/>
                  </svg>
                  <span>{channel.badge || "قناة الواتساب الرسمية الموثقة"}</span>
                  <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-2">
                  {channel.title}
                </h2>
                <h3 className="text-base sm:text-xl font-bold gold-text-gradient">
                  {channel.name}
                </h3>
              </div>

              <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto sm:mx-0">
                {channel.description}
              </p>

              {/* Feature Highlights */}
              {channel.features && channel.features.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1 text-right">
                  {channel.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-obsidian-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Action */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-extrabold text-xs sm:text-base flex items-center justify-center gap-2.5 shadow-gold-glow active:scale-95 transition-transform"
                >
                  <Send className="w-4 h-4" />
                  <span>انضم إلى القناة الرسمية الآن</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
