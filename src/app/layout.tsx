import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.4idm.com.sa"),
  title: { default: "أربعة أفكار للدعاية والإعلان", template: "%s — أربعة أفكار للدعاية والإعلان" },
  description: "حلول إعلانية متكاملة من الفكرة إلى التنفيذ — Four Ideas Advertising",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/icon.png", sizes: "512x512", type: "image/png" },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "أربعة أفكار للدعاية والإعلان",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "أربعة أفكار للدعاية والإعلان" }],
  },
  twitter: { card: "summary_large_image" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "أربعة أفكار للدعاية والإعلان",
  alternateName: "Four Ideas Advertising",
  url: "https://www.4idm.com.sa",
  logo: "https://www.4idm.com.sa/logo-hero.png",
  email: "info@4idm.com.sa",
  address: { "@type": "PostalAddress", addressCountry: "SA" },
  openingHours: "Su-Th 09:00-18:00",
  description: "حلول إعلانية متكاملة من التصميم والطباعة والتصنيع إلى الهدايا الترويجية والتسويق في المملكة العربية السعودية",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className="h-full">
      <body className={`${notoSansArabic.className} min-h-full flex flex-col bg-white text-gray-900`}>
        <JsonLd data={organizationSchema} />
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
