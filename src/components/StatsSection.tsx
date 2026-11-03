"use client";

import React from "react";
import { Users, LayoutGrid, Layers, Award, Star, Video } from "lucide-react";
import { SiteStats } from "@/lib/types";

interface StatsSectionProps {
  stats: SiteStats;
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const statItems = [
    {
      id: "members",
      value: stats.totalMembers,
      label: "أعضاء مجتمعاتنا",
      sublabel: "أعضاء حقيقيون ومتفاعلون يومياً",
      icon: Users,
    },
    {
      id: "groups",
      value: stats.totalGroups,
      label: "جروبات البيع والشراء",
      sublabel: "موزعة بدقة حسب الفروع والألعاب",
      icon: LayoutGrid,
    },
    {
      id: "branches",
      value: stats.totalBranches,
      label: "فروع متخصصة",
      sublabel: "ببجي، فري فاير، وسوشيال ميديا",
      icon: Layers,
    },
    {
      id: "collaborations",
      value: stats.totalCollaborations,
      label: "تعاونات المشاهير",
      sublabel: "إعلانات وتوثيقات مع كبار النجوم",
      icon: Video,
    },
    {
      id: "rating",
      value: stats.ratingScore,
      label: "معدل الرضا والتقييم",
      sublabel: "وساطة موثوقة بنسبة أمان 100%",
      icon: Star,
    },
  ];

  return (
    <section id="stats" className="py-6 sm:py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-5">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`glass-panel glass-panel-hover p-3 sm:p-6 rounded-2xl relative overflow-hidden group text-center ${
                  index === 4 ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/5 rounded-full blur-xl group-hover:bg-gold-500/15 transition-colors" />

                <div className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>

                <div className="text-xl sm:text-3xl font-black text-white tracking-tight mb-1 font-mono gold-text-gradient">
                  {item.value}
                </div>

                <div className="text-[11px] sm:text-sm font-bold text-slate-200 mb-0.5 leading-snug">
                  {item.label}
                </div>

                <div className="text-[9px] sm:text-xs text-slate-400 leading-tight">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
