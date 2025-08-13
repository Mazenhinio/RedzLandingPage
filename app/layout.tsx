import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Build your career with UK-recognised courses | Redagents",
  description:
    "Pay-monthly online courses plus straight-talk careers advice. Study anytime. In collaboration with Global Educ8tions.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  icons: {
    icon: "/brand/redagents-glyph.svg",
    shortcut: "/brand/redagents-glyph.svg",
    apple: "/brand/redagents-glyph.svg",
  },
  openGraph: {
    title: "Build your career with UK-recognised courses | Redagents",
    description:
      "Pay-monthly online courses plus straight-talk careers advice. Study anytime. In collaboration with Global Educ8tions.",
    url: "/",
    siteName: "Redagents",
    images: [
      { url: "/brand/redagents-logo-horizontal.png", width: 1200, height: 630, alt: "Redagents" },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build your career with UK-recognised courses | Redagents",
    description:
      "Pay-monthly online courses plus straight-talk careers advice. Study anytime.",
    images: ["/brand/redagents-logo-horizontal.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}> 
        {children}
      </body>
    </html>
  );
}
