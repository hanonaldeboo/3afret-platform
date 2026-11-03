"use client";

import React from "react";
import Image from "next/image";
import { Zap, CheckCircle2, MessageCircle, Clock, ExternalLink, PhoneCall, Sparkles } from "lucide-react";
import { WhatsappRecharge } from "@/lib/types";

interface WhatsappRechargeSectionProps {
  recharge: WhatsappRecharge;
}

export default function WhatsappRechargeSection({ recharge }: WhatsappRechargeSectionProps) {
  const cleanNumber = recharge.phoneNumber
    ? recharge.phoneNumber.replace(/[^0-9]/g, "")
    : "201158620386";
  const directChatHref = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    recharge.defaultMessage || "السلام عليكم، تواصلت معاك من موقع عفريت وحابب أستفسر بخصوص (شحن ألعاب / وساطة حسابات)"
  )}`;
  const channelHref = recharge.channelUrl || "https://whatsapp.com/channel/0029VaW23cQ9sBIGmrdGdz3a";

  return (
    <section id="recharge" className="py-10 sm:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-obsidian-900 via-obsidian-950 to-[#07130f] p-4 sm:p-8 lg:p-12 shadow-2xl">
          {/* Ambient Glow */}
          <div className="glow-orb w-64 sm:w-80 h-64 sm:h-80 bg-emerald-500/10 -top-10 -right-10" />
          <div className="glow-orb w-64 sm:w-80 h-64 sm:h-80 bg-gold-500/10 -bottom-10 -left-10" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Right side: Information */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center sm:text-right">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-2.5 sm:mb-3">
                  <Zap className="w-3.5 h-3.5 animate-pulse" />
                  <span>{recharge.badge || "شحن معتمد وفوري 24/7"}</span>
                </div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-2 sm:mb-3">
                  {recharge.title}
                </h2>
                <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto sm:mx-0">
                  {recharge.description}
                </p>
              </div>

              {/* Features List */}
              {recharge.features && recharge.features.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1 text-right">
                  {recharge.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-obsidian-850/70 border border-emerald-500/20 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Direct Actions: Channel + Direct Chat */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={channelHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl font-extrabold text-xs sm:text-base bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/30 active:scale-95 transition-transform"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <span>دخول استور الشحن على واتساب</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>

                <a
                  href={directChatHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base flex items-center justify-center gap-2.5 active:scale-95 transition-transform"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>محادثة فورية مع خدمة الشحن</span>
                </a>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>دعم فني وتنفيذ فوري للطلبات عبر واتساب على مدار الساعة</span>
              </div>
            </div>

            {/* Left side: Visual Banner Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-square w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl group bg-obsidian-900">
                <Image
                  src={recharge.bannerUrl || "/images/recharge-banner.jpg"}
                  alt={recharge.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between pointer-events-auto">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 text-[11px] sm:text-xs font-black shadow-lg">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>استور شحن معتمد</span>
                  </span>
                  <a
                    href={directChatHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-white bg-black/70 hover:bg-black/90 border border-emerald-500/40 px-3 py-1.5 rounded-xl backdrop-blur-md transition-all active:scale-95"
                  >
                    <span>تواصل مباشر</span>
                    <ExternalLink className="w-3 h-3 text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
