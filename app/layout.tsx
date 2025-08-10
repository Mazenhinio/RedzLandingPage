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
  title: "Redagents — Building Careers with Smart Learning",
  description:
    "Redagents helps learners build career-ready skills through guided, flexible online learning. In partnership with Global Educ8tions.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Redagents — Building Careers with Smart Learning",
    description:
      "Career-ready skills, expert mentors, and flexible online learning. In partnership with Global Educ8tions.",
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
    title: "Redagents — Building Careers with Smart Learning",
    description:
      "Career-ready skills, expert mentors, and flexible online learning.",
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
