"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Heart, Users, Flame, Sparkles } from "lucide-react";
import { TikTokAccount } from "@/lib/types";

interface TikTokSectionProps {
  tiktok: TikTokAccount;
}

export default function TikTokSection({ tiktok }: TikTokSectionProps) {
  return (
    <section id="tiktok" className="py-10 sm:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-gold-500/25 bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 p-4 sm:p-8 lg:p-12 shadow-2xl">
          {/* Neon Subtle Glow */}
          <div className="glow-orb w-64 sm:w-72 h-64 sm:h-72 bg-[#FE2C55]/10 -top-10 -left-10" />
          <div className="glow-orb w-64 sm:w-72 h-64 sm:h-72 bg-[#25F4EE]/10 -bottom-10 -right-10" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Account Details */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-right gap-4 sm:gap-6 w-full md:w-auto">
              {/* Avatar */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gold-500 shadow-gold-glow shrink-0 p-1 bg-obsidian-900">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={tiktok.avatarUrl || "/images/tiktok-avatar.jpg"}
                    alt={tiktok.name}
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                {/* TikTok Badge */}
                <div className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black border border-gold-500/60 flex items-center justify-center text-white text-xs shadow-md">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
              </div>

              {/* Bio & Username */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-xl sm:text-3xl font-black text-white">
                    {tiktok.name}
                  </h3>
                  <span className="text-[11px] sm:text-xs font-mono text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/30">
                    {tiktok.username}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed mx-auto sm:mx-0">
                  {tiktok.bio}
                </p>

                {/* Stats Counters for TikTok */}
                <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-5 pt-1 sm:pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-obsidian-900/60 border border-slate-800/80 px-2.5 py-1 rounded-lg">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    <span className="font-bold text-white font-mono">{tiktok.followersCount}</span>
                    <span className="text-slate-400">متابع</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-obsidian-900/60 border border-slate-800/80 px-2.5 py-1 rounded-lg">
                    <Heart className="w-3.5 h-3.5 text-[#FE2C55]" />
                    <span className="font-bold text-white font-mono">{tiktok.likesCount}</span>
                    <span className="text-slate-400">إعجاب</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <div className="shrink-0 w-full md:w-auto">
              <a
                href={tiktok.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full md:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-extrabold text-xs sm:text-base flex items-center justify-center gap-2.5 shadow-gold-glow active:scale-95 transition-transform"
              >
                <span>متابعة الحساب على تيك توك</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
