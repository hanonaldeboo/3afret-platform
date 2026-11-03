export interface GroupItem {
  id: string;
  branchId: string;
  name: string;
  description: string;
  platform: 'whatsapp' | 'telegram' | 'facebook' | 'discord';
  category: string;
  link: string;
  badge?: string;
  memberCount?: string;
  image?: string;
  order: number;
}

export interface BranchItem {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name or emoji
  order: number;
  groups: GroupItem[];
}

export interface OfficialChannel {
  title: string;
  name: string;
  description: string;
  link: string;
  bannerUrl: string;
  badge: string;
  features: string[];
}

export interface WhatsappRecharge {
  title: string;
  description: string;
  bannerUrl?: string;
  phoneNumber?: string;
  channelUrl?: string;
  defaultMessage: string;
  badge: string;
  features: string[];
}

export interface FacebookGuarantee {
  title: string;
  description: string;
  postUrl: string;
  bannerUrl: string;
  badge: string;
  features: string[];
}

export interface TikTokAccount {
  name: string;
  username: string; // e.g. @3afret_store
  bio: string;
  avatarUrl: string;
  profileUrl: string;
  followersCount: string;
  likesCount: string;
}

export interface CelebrityVideo {
  id: string;
  creatorName: string;
  creatorRole: string; // e.g. صانع محتوى ألعاب / ستريمر مشهور
  creatorAvatar?: string;
  title: string;
  description: string;
  videoType: 'file' | 'url' | 'youtube' | 'tiktok';
  videoUrl: string; // Direct mp4 file path, Youtube embed url, etc.
  thumbnailUrl: string;
  likes?: string;
  views?: string;
  order: number;
}

export interface SiteStats {
  totalMembers: string;
  totalGroups: string;
  totalBranches: string;
  totalServices: string;
  totalCollaborations: string;
  ratingScore: string;
}

export interface HeroContent {
  tagline: string;
  mainTitle: string;
  highlightedTitle: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  bannerNotice: string;
}

export interface SectionVisibility {
  id: string;
  name: string;
  enabled: boolean;
  order: number;
}

export interface SiteData {
  settings: {
    brandName: string;
    brandSlogan: string;
    brandDescription: string;
    contactEmail?: string;
    footerText: string;
    floatingWhatsappEnabled: boolean;
  };
  hero: HeroContent;
  stats: SiteStats;
  branches: BranchItem[];
  officialChannel: OfficialChannel;
  whatsappRecharge: WhatsappRecharge;
  facebookGuarantee: FacebookGuarantee;
  tiktokAccount: TikTokAccount;
  celebrities: CelebrityVideo[];
  sectionsOrder: SectionVisibility[];
}
