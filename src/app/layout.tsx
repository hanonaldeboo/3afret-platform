import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://3afret.com"),
  title: "3afret | المنصة الرسمية لبيع وشراء الحسابات، الشحن المباشر والوساطة المعتمدة",
  description: "المنصة الرسمية المعتمدة رقمياً لعلامة 3afret. مجتمعات وجروبات بيع وشراء الحسابات، شحن فوري عبر واتساب، خدمات ضمان فيسبوك، ومعارض إعلانات المشاهير.",
  keywords: ["3afret", "عفريت", "بيع حسابات", "شراء حسابات", "شحن ببجي", "جواهر فري فاير", "ضمان فيسبوك", "وساطة حسابات", "متجر شحن"],
  authors: [{ name: "3afret Official Team" }],
  openGraph: {
    title: "3afret | المنصة الرسمية لعلامة 3afret",
    description: "كل فروع وجروبات البيع والشراء، خدمات الشحن المباشر والضمان الموثق في منصة واحدة فاخرة.",
    url: "https://3afret.com",
    siteName: "3afret Platform",
    images: [
      {
        url: "/images/channel-banner.svg",
        width: 1200,
        height: 630,
        alt: "3afret Platform Official",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen selection:bg-gold-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
