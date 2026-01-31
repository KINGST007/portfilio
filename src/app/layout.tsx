import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Professional portfolio with Navy Blue (#1B2A4A), Royal Blue (#2E86AB), and Burgundy (#722F37) color scheme
export const metadata: Metadata = {
  title: "Shubham Ramani | Landing Page Expert - Conversion Rate Optimization",
  description: "Landing page expert helping SaaS and B2B companies generate leads and improve conversions. Data-driven conversion rate optimization services with proven results.",
  keywords: ["Landing Page Expert", "CRO", "Conversion Rate Optimization", "Landing Page Design", "Landing Page Audit", "SaaS Landing Page", "B2B Lead Generation", "A/B Testing", "Shubham Ramani", "Freelancer"],
  authors: [{ name: "Shubham Ramani" }],
  openGraph: {
    title: "Shubham Ramani | Landing Page Expert - Generate Leads & Improve Conversions",
    description: "Landing page expert helping SaaS and B2B companies generate leads and improve conversions through data-driven optimization.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Ramani | Landing Page Expert",
    description: "Landing page expert helping SaaS and B2B companies generate leads and improve conversions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
