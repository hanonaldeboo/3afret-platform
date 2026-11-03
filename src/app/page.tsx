import React from "react";
import { getSiteData } from "@/lib/db";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import BranchesSection from "@/components/BranchesSection";
import OfficialChannelSection from "@/components/OfficialChannelSection";
import WhatsappRechargeSection from "@/components/WhatsappRechargeSection";
import FacebookGuaranteeSection from "@/components/FacebookGuaranteeSection";
import TikTokSection from "@/components/TikTokSection";
import CelebritiesSection from "@/components/CelebritiesSection";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import Footer from "@/components/Footer";

// Force dynamic so admin changes appear immediately
export const dynamic = "force-dynamic";

export default function HomePage() {
  const data = getSiteData();

  // Helper to check if a section is enabled and get its order
  const getSectionConfig = (id: string) => {
    return data.sectionsOrder.find((s) => s.id === id) || { id, enabled: true, order: 99 };
  };

  const sectionMap: Record<string, React.ReactNode> = {
    hero: <HeroSection key="hero" data={data} />,
    stats: <StatsSection key="stats" stats={data.stats} />,
    branches: <BranchesSection key="branches" branches={data.branches} />,
    channel: <OfficialChannelSection key="channel" channel={data.officialChannel} />,
    recharge: <WhatsappRechargeSection key="recharge" recharge={data.whatsappRecharge} />,
    guarantee: <FacebookGuaranteeSection key="guarantee" guarantee={data.facebookGuarantee} />,
    tiktok: <TikTokSection key="tiktok" tiktok={data.tiktokAccount} />,
    celebrities: <CelebritiesSection key="celebrities" celebrities={data.celebrities} />,
  };

  // Sort sections by order
  const orderedSections = [...data.sectionsOrder]
    .sort((a, b) => a.order - b.order)
    .filter((s) => s.enabled)
    .map((s) => sectionMap[s.id])
    .filter(Boolean);

  return (
    <main className="relative min-h-screen bg-[#08080a] text-slate-100 flex flex-col">
      <Navbar data={data} />

      <div className="flex-1">
        {orderedSections}
      </div>

      {data.settings.floatingWhatsappEnabled && (
        <FloatingWhatsapp recharge={data.whatsappRecharge} />
      )}

      <Footer data={data} />
    </main>
  );
}
