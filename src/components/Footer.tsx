"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ExternalLink, ShieldCheck } from "lucide-react";
import { SiteData } from "@/lib/types";

interface FooterProps {
  data: SiteData;
}

export default function Footer({ data }: FooterProps) {
  const { settings, officialChannel, facebookGuarantee, tiktokAccount } = data;

  return (
    <footer className="relative bg-obsidian-950 border-t border-gold-500/20 pt-12 pb-8 sm:pt-16 sm:pb-12 overflow-hidden z-20">
      {/* Ambient background glow */}
      <div className="glow-orb w-64 sm:w-96 h-64 sm:h-96 bg-gold-500/5 -bottom-20 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="relative w-36 sm:w-44 h-10 sm:h-12">
              <Image
                src="/images/logo.svg"
                alt="3afret Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              {settings.brandDescription}
            </p>
            <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>علامة تجارية موثقة ومرخصة في الوساطة والخدمات الرقمية</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              أقسام المنصة
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-gold-400 transition-colors">الرئيسية والبانر</a>
              </li>
              <li>
                <a href="#branches" className="hover:text-gold-400 transition-colors">فروع وجروبات البيع والشراء</a>
              </li>
              <li>
                <a href="#channel" className="hover:text-gold-400 transition-colors">القناة الرسمية المباشرة</a>
              </li>
              <li>
                <a href="#recharge" className="hover:text-gold-400 transition-colors">متجر الشحن المباشر عبر واتساب</a>
              </li>
              <li>
                <a href="#guarantee" className="hover:text-gold-400 transition-colors">خدمة ضمان ووساطة فيسبوك</a>
              </li>
              <li>
                <a href="#celebrities" className="hover:text-gold-400 transition-colors">فيديوهات وإعلانات المشاهير</a>
              </li>
            </ul>
          </div>

          {/* Official Channels */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              الروابط الرسمية المعتمدة
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={officialChannel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-obsidian-900 border border-slate-800 hover:border-gold-500/40 text-slate-300 hover:text-white transition-colors active:scale-95"
              >
                <span>قناة واتساب الرسمية (VIP)</span>
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href={facebookGuarantee.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-obsidian-900 border border-slate-800 hover:border-gold-500/40 text-slate-300 hover:text-white transition-colors active:scale-95"
              >
                <span>منشور الضمان على فيسبوك</span>
                <ExternalLink className="w-4 h-4 text-blue-400" />
              </a>

              <a
                href={tiktokAccount.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-obsidian-900 border border-slate-800 hover:border-gold-500/40 text-slate-300 hover:text-white transition-colors active:scale-95"
              >
                <span>حساب تيك توك الرسمي</span>
                <ExternalLink className="w-4 h-4 text-pink-400" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-1.5 text-xs text-gold-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>جميع الروابط موثقة وخاضعة للرقابة الرسمية</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-right">
          <p>{settings.footerText}</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>صمم وطور خصيصاً لعلامة</span>
            <span className="text-gold-400 font-bold font-mono">3afret</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
