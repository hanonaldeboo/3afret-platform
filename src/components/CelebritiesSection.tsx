"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Video, Eye, Heart, UserCheck } from "lucide-react";
import { CelebrityVideo } from "@/lib/types";
import VideoModal from "./VideoModal";

interface CelebritiesSectionProps {
  celebrities: CelebrityVideo[];
}

export default function CelebritiesSection({ celebrities }: CelebritiesSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<CelebrityVideo | null>(null);

  return (
    <section id="celebrities" className="py-12 sm:py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-[11px] sm:text-xs font-bold mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>معرض الأعمال والشراكات الإعلانية</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-2.5 sm:mb-4">
            نجوم وثقوا في <span className="gold-text-gradient">3afret</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-300 px-2 max-w-2xl mx-auto">
            شاهد تجارب وإعلانات كبار صناع المحتوى والمشاهير الذين اختاروا علامة 3afret لتوثيق معاملاتهم والشحن المباشر ومجتمعات الألعاب.
          </p>
        </div>

        {/* Videos Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {celebrities.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail with Play Overlay */}
                <div className="relative aspect-square w-full max-w-[280px] sm:max-w-none mx-auto overflow-hidden bg-gradient-to-b from-obsidian-900 to-black border-b border-gold-500/20 p-3 flex items-center justify-center">
                  <Image
                    src={item.thumbnailUrl || "/images/video-thumb-1.svg"}
                    alt={item.title}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />

                  {/* Play Button Icon with Glow */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold-500/95 text-black flex items-center justify-center shadow-gold-glow transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-400">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-[-1px]" />
                    </div>
                  </div>
                </div>

                {/* Video Info Body */}
                <div className="p-4 sm:p-5">
                  {/* Creator Info */}
                  <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                    {item.creatorAvatar && (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold-500/50 shrink-0">
                        <Image
                          src={item.creatorAvatar}
                          alt={item.creatorName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                          {item.creatorName}
                        </span>
                        <UserCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      </div>
                      <span className="text-[11px] text-slate-400 block">{item.creatorRole}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2 line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with Explicit Watch Button */}
              <div className="p-4 sm:p-5 pt-0 mt-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideo(item);
                  }}
                  className="btn-gold w-full py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-gold-glow-sm active:scale-95 transition-transform"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>مشاهدة الفيديو</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
