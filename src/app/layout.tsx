import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://afret-gamma.vercel.app"),
  title: "3afret | ملك الساحة وعفريت المجال في تداول الحسابات وأسرع شحن ألعاب",
  description: "ريح بالك من الحوارات.. مع عفريت هتبيع وتشتري حسابك وتشحن في ثواني، كل الفروع المعتمدة وضمانك الحقيقي في مكان واحد.",
  keywords: ["3afret", "عفريت", "بيع حسابات", "شراء حسابات", "شحن ببجي", "جواهر فري فاير", "ضمان فيسبوك", "وساطة حسابات", "متجر شحن"],
  authors: [{ name: "3afret Official Team" }],
  openGraph: {
    title: "3afret | ملك الساحة وعفريت المجال في تداول الحسابات وأسرع شحن ألعاب",
    description: "ريح بالك من الحوارات.. مع عفريت هتبيع وتشتري حسابك وتشحن في ثواني، كل الفروع المعتمدة وضمانك الحقيقي في مكان واحد.",
    url: "https://afret-gamma.vercel.app",
    siteName: "3afret Store",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "3afret Store Official",
        type: "image/jpeg",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3afret | ملك الساحة وعفريت المجال في تداول الحسابات وأسرع شحن ألعاب",
    description: "ريح بالك من الحوارات.. مع عفريت هتبيع وتشتري حسابك وتشحن في ثواني، كل الفروع المعتمدة وضمانك الحقيقي في مكان واحد.",
    images: ["/images/og-image.jpg"],
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
