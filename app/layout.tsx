import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { site } from "@/content/site";
import "./globals.css";

const title = "Solutions That Work — Product & Delivery Consulting | Artyom Hudolij";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s · Solutions That Work" },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  keywords: ["Product Owner", "Digital transformation", "Technical delivery", "Delivery consultant UK", "Agile delivery", "Cutover planning", "Stakeholder management"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0A1626", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={GeistSans.variable}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-mint focus:text-night focus:px-5 focus:py-3 focus:text-white">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
