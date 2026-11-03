"use client";

import React, { useState, useEffect } from "react";
import { Play, X, Sparkles, Video } from "lucide-react";
import { WhatsappRecharge } from "@/lib/types";

interface FloatingWhatsappProps {
  recharge?: WhatsappRecharge;
}

export default function FloatingWhatsapp({ recharge }: FloatingWhatsappProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed bottom-5 left-5 sm:bottom-7 sm:left-7 z-[9999] flex items-center gap-3">
        {/* Tooltip speech bubble */}
        {showTooltip && (
          <div 
            onClick={() => setIsOpen(true)}
            className="cursor-pointer flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-2xl bg-obsidian-950/95 border-2 border-gold-500/60 text-white text-xs sm:text-sm font-extrabold shadow-2xl backdrop-blur-md hover:border-gold-400 hover:scale-105 active:scale-95 transition-all animate-in fade-in slide-in-from-left-2"
          >
            <Sparkles className="w-4 h-4 text-gold-400 shrink-0 animate-pulse" />
            <span className="gold-text-gradient font-black">ازاي تعرض حسابك في متجر عفريت</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-white p-0.5 mr-1"
              aria-label="إغلاق التنبيه"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Pulsing circular video play button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-gold-500 via-amber-400 to-gold-300 text-black flex items-center justify-center shadow-2xl shadow-gold-500/50 active:scale-95 hover:scale-110 transition-transform duration-300 cursor-pointer"
          aria-label="ازاي تعرض حسابك في متجر عفريت"
        >
          {/* Radar ping animation */}
          <span className="absolute -inset-1 rounded-full bg-gold-400 opacity-75 animate-ping group-hover:opacity-100" />

          <div className="relative z-10 flex items-center justify-center">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black text-black translate-x-[-1px]" />
          </div>
        </button>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-2.5 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          <div className="relative z-10 w-full max-w-4xl bg-obsidian-950 border border-gold-500/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-gold-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center text-gold-400 shrink-0">
                  <Video className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-white">
                    ازاي تعرض حسابك في متجر عفريت
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gold-400/90 font-medium">
                    فيديو الشرح التوضيحي الرسمي لمتجر 3afret
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-300 hover:text-white bg-obsidian-850 hover:bg-obsidian-800 rounded-full border border-slate-700 transition-colors active:scale-95"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Box */}
            <div className="my-3 sm:my-4 flex-1 flex items-center justify-center overflow-hidden min-h-0">
              <video
                controls
                autoPlay
                playsInline
                className="w-auto max-w-full max-h-[58vh] sm:max-h-[72vh] rounded-xl sm:rounded-2xl bg-black object-contain outline-none border border-gold-500/30 shadow-2xl"
              >
                <source src="/videos/guide.mp4" type="video/mp4" />
                <source src="/images/%D9%81%D9%8A%D8%AF%D9%8A%D9%88%20%D8%A7%D9%84%D8%B4%D8%B1%D8%AD.mp4" type="video/mp4" />
                متصفحك لا يدعم تشغيل هذا الفيديو مباشرة.
              </video>
            </div>

            {/* Video Description */}
            <div className="pt-2 text-right border-t border-slate-900">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                شاهد الفيديو وتعرف على الخطوات السريعة لعرض حسابك في منصة ومتجر 3afret المعتمد وضمان أفضل وسيلة للبيع المباشر والآمن.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
