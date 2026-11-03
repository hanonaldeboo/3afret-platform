"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, ExternalLink, CheckCircle, Lock, Award, Eye } from "lucide-react";
import { FacebookGuarantee } from "@/lib/types";

interface FacebookGuaranteeSectionProps {
  guarantee: FacebookGuarantee;
}

export default function FacebookGuaranteeSection({ guarantee }: FacebookGuaranteeSectionProps) {
  return (
    <section id="guarantee" className="py-10 sm:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-obsidian-900 via-obsidian-950 to-[#060c18] p-4 sm:p-8 lg:p-12 shadow-2xl">
          {/* Subtle Glows */}
          <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 -top-10 sm:-top-20 -right-10 sm:-right-20" />
          <div className="glow-orb w-64 sm:w-80 h-64 sm:h-80 bg-gold-500/10 -bottom-10 -left-10" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Visual Preview of Post */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[360px] rounded-3xl overflow-hidden border border-gold-500/40 shadow-glass group bg-obsidian-900">
                <Image
                  src={guarantee.bannerUrl || "/images/guarantee-banner.jpg"}
                  alt={guarantee.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-5 pointer-events-none">
                  <div className="flex items-center justify-between pointer-events-auto">
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-red-600 text-white text-[11px] sm:text-xs font-black shadow-lg">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>ضمان معتمد 100%</span>
                    </span>
                    <a
                      href={guarantee.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-xl shadow-lg transition-colors active:scale-95"
                    >
                      <span>عرض المنشور</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Details & Explanation */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 sm:space-y-6 text-center sm:text-right">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-bold mb-2.5 sm:mb-3">
                  <Lock className="w-3.5 h-3.5" />
                  <span>{guarantee.badge || "وساطة وضمان فيسبوك المعتمد"}</span>
                </div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-2 sm:mb-3">
                  {guarantee.title}
                </h2>
                <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto sm:mx-0">
                  {guarantee.description}
                </p>
              </div>

              {/* Guarantees checklist */}
              {guarantee.features && guarantee.features.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1 text-right">
                  {guarantee.features.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-obsidian-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={guarantee.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-extrabold text-xs sm:text-base bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/30 active:scale-95 transition-transform"
                >
                  <Eye className="w-4 h-4" />
                  <span>مشاهدة منشور الضمان على فيسبوك</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-400">
                  <Award className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>توثيق حقيقي من آلاف المعاملات</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
