import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import "./globals.css";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Swayam Terode | Portfolio",
  description:
    "Meet Swayam Terode, a Pune-based Software Development Engineer with a passion for tech innovation. Former state-level table tennis & Bronze Medalist of West Zone, he brings a competitive edge to coding. Explore his portfolio for a glimpse into his dynamic expertise",
  keywords:
    "Swayam, Swayam Terode, Terode, GHRCEM, Raisoni, Nagpur, Software Development Engineer, Pune, Tech Innovation, Table Tennis, Portfolio, Expertise, swym, swayam, terode, birla, The Aditya Birla Public School, Awarpur, Chandrapur, Maharashtra, India, Maharashtra, India, Table Tennis, Bronze Medalist, West Zone, Competitive Edge, Coding, Dynamic Expertise, Dynamic, Expertise, Competitive, Edge, Coding, Tech, Innovation, Portfolio, Software, SDE, Software Developer,",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="no-scroll">
      <body className="bg-[#FBFBFB] dark:bg-black">
        <Providers>
          <Image
            src="/BG_Dark.svg"
            alt="alt"
            width={300}
            height={300}
            className="absolute top-0 -z-10 w-full h-[280px] object-cover object-center"
          />
          <div className="max-w-screen flex justify-center">
            <Navbar />
          </div>
          <MobileNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
