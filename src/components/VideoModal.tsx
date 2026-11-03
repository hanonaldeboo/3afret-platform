"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Play, Eye, Heart, Sparkles, UserCheck } from "lucide-react";
import { CelebrityVideo } from "@/lib/types";

interface VideoModalProps {
  video: CelebrityVideo | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (video) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  // Format embed url if youtube standard link
  const renderVideoPlayer = () => {
    const url = video.videoUrl;

    if (video.videoType === "file" || url.endsWith(".mp4") || url.endsWith(".webm")) {
      return (
        <video
          controls
          autoPlay
          playsInline
          className="w-auto max-w-full max-h-[55vh] sm:max-h-[70vh] rounded-xl sm:rounded-2xl bg-black object-contain outline-none border border-gold-500/30 shadow-2xl"
        >
          <source src={url} type="video/mp4" />
          متصفحك لا يدعم تشغيل هذا الفيديو مباشرة.
        </video>
      );
    }

    if (video.videoType === "youtube" || url.includes("youtube.com") || url.includes("youtu.be")) {
      let embedUrl = url;
      if (url.includes("watch?v=")) {
        const id = url.split("watch?v=")[1]?.split("&")[0];
        embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;
      } else if (url.includes("youtu.be/")) {
        const id = url.split("youtu.be/")[1]?.split("?")[0];
        embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;
      } else if (!embedUrl.includes("autoplay=1")) {
        embedUrl += (embedUrl.includes("?") ? "&" : "?") + "autoplay=1";
      }

      return (
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gold-500/20 bg-black">
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    // TikTok embed or generic fallback iframe
    return (
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gold-500/20 bg-black">
        <iframe
          src={url}
          title={video.title}
          className="w-full h-full"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl bg-obsidian-950 border border-gold-500/40 rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-gold-500/20">
          <div className="flex items-center gap-2.5 sm:gap-3">
            {video.creatorAvatar && (
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-gold-500 shrink-0">
                <Image
                  src={video.creatorAvatar}
                  alt={video.creatorName}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs sm:text-base font-bold text-white">
                  {video.creatorName}
                </h4>
                <UserCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold-400" />
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400">{video.creatorRole}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 sm:p-2 text-slate-300 hover:text-white bg-obsidian-850 hover:bg-obsidian-800 rounded-full border border-slate-700 transition-colors active:scale-95"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="my-2 sm:my-4 flex-1 flex items-center justify-center overflow-hidden min-h-0">
          {renderVideoPlayer()}
        </div>

        {/* Video Description & Meta */}
        <div className="pt-2 text-right border-t border-slate-900 overflow-y-auto max-h-[22vh]">
          <h3 className="text-xs sm:text-lg font-bold text-white mb-1">
            {video.title}
          </h3>
          <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed">
            {video.description}
          </p>

          {(video.views || video.likes) && (
            <div className="flex items-center gap-4 mt-2 pt-2 border-t border-slate-900/60 text-[11px] sm:text-xs text-slate-400">
              {video.views && (
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-gold-400" />
                  <span>{video.views} مشاهدة</span>
                </span>
              )}
              {video.likes && (
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-red-500" />
                  <span>{video.likes} إعجاب</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
