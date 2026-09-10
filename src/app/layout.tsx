import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "4IDM — عروض ترويجية احترافية",
  description: "معرض العروض الترويجية لشركة 4IDM",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className="h-full">
      <body className={`${notoSansArabic.className} min-h-full flex flex-col bg-[#0a0f1e] text-white`}>
        {children}
      </body>
    </html>
  );
}
