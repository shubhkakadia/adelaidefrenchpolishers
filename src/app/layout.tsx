import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Adelaide French Polishers – Expert Furniture Restoration & French Polishing Services",
  description:
    "Professional furniture restoration and French polishing services in Adelaide. Expert repair, refinishing, and restoration of antique and modern furniture. Quality craftsmanship since [year].",
  keywords:
    "french polishing adelaide, furniture restoration adelaide, antique furniture repair, timber furniture refinishing, spray finishes adelaide",
  authors: [{ name: "Adelaide French Polishers" }],
  openGraph: {
    title: "Adelaide French Polishers – Expert Furniture Restoration",
    description:
      "Professional furniture restoration and French polishing services in Adelaide. Expert craftsmanship for antique and modern furniture.",
    url: "https://yourwebsite.com",
    siteName: "Adelaide French Polishers",
    images: [
      {
        url: "/assets/og-image.jpg", // Create this image
        width: 1200,
        height: 630,
        alt: "Adelaide French Polishers - Furniture Restoration Services",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adelaide French Polishers – Expert Furniture Restoration",
    description:
      "Professional furniture restoration and French polishing services in Adelaide.",
    images: ["/assets/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
