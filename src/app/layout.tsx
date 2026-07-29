import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechIT Network — The AI Operating System for Building Startups",
  description:
    "Build, validate, execute, and prepare your startup for investment through one intelligent workspace. 34 AI agents, 20 scoring models, one platform.",
  openGraph: {
    title: "TechIT Network — The AI Operating System for Building Startups",
    description: "Build. Validate. Execute. Raise. One intelligent startup workspace.",
    url: "https://www.techit.network",
    siteName: "TechIT Network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechIT Network",
    description: "The AI Operating System for Building Startups.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
