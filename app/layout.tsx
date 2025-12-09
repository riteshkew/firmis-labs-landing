import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firmislabs.com"),
  title: {
    default: "Firmis Labs — Precision-Built Software",
    template: "%s | Firmis Labs",
  },
  description:
    "A multi-product studio crafting focused tools for clarity, security, and productivity. Precision-built software for modern workflows.",
  keywords: [
    "software studio",
    "precision software",
    "workflow automation",
    "professional tools",
    "engineering craft",
  ],
  authors: [{ name: "Firmis Labs" }],
  creator: "Firmis Labs",
  publisher: "Firmis Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firmislabs.com",
    siteName: "Firmis Labs",
    title: "Firmis Labs — Precision-Built Software",
    description:
      "A multi-product studio crafting focused tools for clarity, security, and productivity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firmis Labs — Precision-Built Software",
    description:
      "A multi-product studio crafting focused tools for clarity, security, and productivity.",
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
    <html lang="en" className={`${plusJakarta.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
