"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, Sparkles } from "lucide-react";
import { SiteData } from "@/lib/types";

interface NavbarProps {
  data: SiteData;
}

export default function Navbar({ data }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "#hero" },
    { label: "فروع البيع والشراء", href: "#branches" },
    { label: "القناة الرسمية", href: "#channel" },
    { label: "متجر الشحن", href: "#recharge" },
    { label: "ضمان فيسبوك", href: "#guarantee" },
    { label: "تيك توك", href: "#tiktok" },
    { label: "نجوم 3afret", href: "#celebrities" },
  ];

  const cleanNumber = data.whatsappRecharge.phoneNumber
    ? data.whatsappRecharge.phoneNumber.replace(/[^0-9]/g, "")
    : "201158620386";
  const whatsappHref = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    data.whatsappRecharge.defaultMessage || "مرحباً، أود شحن ألعاب / الاستفسار من متجر 3afret"
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-obsidian-950/95 backdrop-blur-md border-b border-gold-500/20 py-2.5 sm:py-3 shadow-glass"
            : "bg-obsidian-950/40 backdrop-blur-sm sm:bg-transparent py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative w-28 sm:w-44 h-8 sm:h-11 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.svg"
                  alt="3afret Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-obsidian-900/60 border border-gold-500/20 px-4 py-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-gold-400 hover:bg-gold-500/10 rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-gold-glow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>شحن واتساب</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold p-2 rounded-full text-xs"
                title="واتساب"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-gold-400 bg-obsidian-900/80 border border-gold-500/30 rounded-lg"
                aria-label="القائمة"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-obsidian-950/95 border-b border-gold-500/20 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top-3">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-gold-400 hover:bg-gold-500/10 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Sparkles className="w-3.5 h-3.5 text-gold-500/50" />
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800 mt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تواصل عبر واتساب</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
