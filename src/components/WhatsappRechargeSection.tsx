"use client";

import React from "react";
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
    recharge.defaultMessage || "مرحباً، أود شحن ألعاب / الاستفسار من متجر 3afret"
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

            {/* Left side: Interactive Visual Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-4 sm:p-8 rounded-3xl border border-emerald-500/30 relative overflow-hidden text-center space-y-4 sm:space-y-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-xl shadow-emerald-500/25">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.073-1.109-.06-.554-.176-1.267-.506-2.181-1.325-1.172-1.049-1.924-2.316-2.138-2.684-.213-.368-.023-.567.16-.75.166-.165.372-.423.558-.635.186-.211.248-.36.372-.599.124-.24.062-.45-.031-.635-.093-.186-.837-2.02-1.147-2.766-.303-.728-.61-.628-.838-.64-.216-.01-.465-.013-.713-.013-.248 0-.651.093-.992.465-.34.372-1.302 1.272-1.302 3.104 0 1.832 1.333 3.604 1.519 3.852.186.248 2.623 4.004 6.357 5.617.888.384 1.581.614 2.122.785.89.283 1.7.243 2.34.147.714-.107 2.18-.892 2.49-1.753.31-.861.31-1.599.217-1.754-.093-.155-.34-.247-.714-.433z"/>
                  </svg>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-black text-white mb-1">
                    استور الشحن المعتمد 3afret
                  </h4>
                  <p className="text-[11px] sm:text-xs text-emerald-400 font-semibold mb-2">
                    المعتمد للشحن والاستفسار:
                  </p>
                  <a
                    href={directChatHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-mono text-base sm:text-lg font-black text-gold-400 bg-obsidian-900 border border-emerald-500/50 px-6 py-1.5 rounded-xl hover:border-emerald-400 hover:text-gold-300 transition-colors tracking-wider shadow-sm active:scale-95"
                  >
                    3afRet
                  </a>
                </div>

                <div className="pt-1 sm:pt-2 flex flex-col gap-2">
                  <a
                    href={directChatHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>مراسلة 3afRet مباشرة عبر واتساب</span>
                  </a>

                  <a
                    href={channelHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 sm:py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-obsidian-900 border border-slate-800 hover:border-emerald-500/40 transition-colors flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>دخول قناة استور الشحن</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
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
