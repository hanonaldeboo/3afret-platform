"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Users, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check 
} from "lucide-react";
import { BranchItem, GroupItem } from "@/lib/types";

// Platform Icon Component with official branding colors
export const PlatformIcon = ({ platform }: { platform: GroupItem['platform'] }) => {
  switch (platform) {
    case 'whatsapp':
      return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.073-1.109-.06-.554-.176-1.267-.506-2.181-1.325-1.172-1.049-1.924-2.316-2.138-2.684-.213-.368-.023-.567.16-.75.166-.165.372-.423.558-.635.186-.211.248-.36.372-.599.124-.24.062-.45-.031-.635-.093-.186-.837-2.02-1.147-2.766-.303-.728-.61-.628-.838-.64-.216-.01-.465-.013-.713-.013-.248 0-.651.093-.992.465-.34.372-1.302 1.272-1.302 3.104 0 1.832 1.333 3.604 1.519 3.852.186.248 2.623 4.004 6.357 5.617.888.384 1.581.614 2.122.785.89.283 1.7.243 2.34.147.714-.107 2.18-892 2.49-1.753.31-.861.31-1.599.217-1.754-.093-.155-.34-.247-.714-.433z"/>
          </svg>
        </span>
      );
    case 'telegram':
      return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-sky-500/15 text-sky-400 border border-sky-500/30">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
          </svg>
        </span>
      );
    case 'facebook':
      return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600/15 text-blue-400 border border-blue-500/30">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold-500/15 text-gold-400 border border-gold-500/30">
          <Users className="w-4 h-4" />
        </span>
      );
  }
};

interface BranchesSectionProps {
  branches: BranchItem[];
}

export default function BranchesSection({ branches }: BranchesSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyGroupLink = (link: string, id: string) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="branches" className="py-10 sm:py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs sm:text-sm font-bold mb-2.5 sm:mb-3">
            <span>فروع ومجتمعات عفريت استور</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-2.5 sm:mb-4">
            فروع <span className="gold-text-gradient">بيع وشراء الحسابات</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-300 px-2 max-w-2xl mx-auto">
            ادخل الفرع اللي يناسبك واعرض أو اطلب حسابك وإنت مطمن.. إشراف أمني 24 ساعة وضمان عفريت في ضهرك عشان حقك ميروحش.
          </p>
        </div>

        {/* Branches Grid Display: Two Branches Side-by-Side directly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {branches.map((branch, index) => {
            const group = branch.groups[0];
            if (!group) return null;
            const isFirst = index === 0;

            return (
              <div
                key={branch.id}
                className="glass-panel glass-panel-hover rounded-3xl p-5 sm:p-7 flex flex-col justify-between group relative overflow-hidden border border-gold-500/25"
              >
                <div>
                  {/* Header of the card */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <PlatformIcon platform={group.platform} />
                      <span className="text-xs sm:text-sm font-black text-white">
                        {branch.name}
                      </span>
                    </div>

                    <span className={`text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full ${
                      isFirst 
                        ? "bg-red-500/15 text-red-400 border border-red-500/30" 
                        : "bg-gold-500/15 text-gold-400 border border-gold-500/30"
                    }`}>
                      {group.badge || (isFirst ? "الفرع الأول" : "الفرع الثاني")}
                    </span>
                  </div>

                  {/* Group Image */}
                  {group.image && (
                    <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[340px] mx-auto rounded-2xl overflow-hidden border border-gold-500/30 mb-4 group/img shadow-glass">
                      <Image
                        src={group.image}
                        alt={group.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between pointer-events-none">
                        <span className="text-[11px] font-bold text-white bg-black/70 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                          {group.category || "بيع وشراء فوري"}
                        </span>
                        {group.memberCount && (
                          <span className="text-[11px] text-gold-400 bg-black/70 px-2.5 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1 font-mono">
                            <Users className="w-3.5 h-3.5" />
                            <span>{group.memberCount}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Group Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {group.name}
                  </h3>

                  {/* Group Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {group.description}
                  </p>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2.5 mt-auto">
                  <a
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold flex-1 py-3 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 active:scale-95 shadow-gold-glow-sm"
                  >
                    <span>انضم إلى {isFirst ? "الفرع الأول" : "الفرع الثاني"} على واتساب</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => copyGroupLink(group.link, group.id)}
                    className="p-3 text-slate-300 hover:text-gold-400 bg-obsidian-900 hover:bg-obsidian-850 rounded-xl transition-colors border border-slate-800 active:scale-95 shrink-0"
                    title="نسخ رابط الجروب"
                    aria-label="نسخ الرابط"
                  >
                    {copiedId === group.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
