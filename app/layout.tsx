import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firmislabs.com"),
  title: {
    default: "Firmis Labs — Precision Software Studio",
    template: "%s | Firmis Labs",
  },
  description:
    "We build engineering-led, research-driven SaaS. Precision tools for professionals in underserved markets.",
  keywords: [
    "software studio",
    "precision software",
    "professional tools",
    "engineering",
  ],
  authors: [{ name: "Firmis Labs" }],
  creator: "Firmis Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firmislabs.com",
    siteName: "Firmis Labs",
    title: "Firmis Labs — Precision Software Studio",
    description:
      "We build engineering-led, research-driven SaaS. Precision tools for professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firmis Labs — Precision Software Studio",
    description:
      "We build engineering-led, research-driven SaaS. Precision tools for professionals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans antialiased bg-[#fafaf9]">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
