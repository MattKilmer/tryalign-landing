import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tryalign.app"),
  title: {
    default: "Align — Relationship Agreements for Modern Couples",
    template: "%s — Align",
  },
  description:
    "Take a clinically-grounded quiz, let AI draft personalized boundaries, negotiate together, and sign a shared relationship agreement. Built on trust, backed by research.",
  keywords: [
    "relationship agreement",
    "couples app",
    "relationship boundaries",
    "relationship contract",
    "couples communication",
    "AI relationship",
    "couples therapy app",
    "relationship expectations",
    "trust building",
    "couples boundaries",
  ],
  authors: [{ name: "Align" }],
  creator: "Align",
  publisher: "Align",
  openGraph: {
    title: "Align — Relationship Agreements for Modern Couples",
    description:
      "Take a clinically-grounded quiz, let AI draft personalized boundaries, negotiate together, and sign your shared agreement.",
    url: "https://tryalign.app",
    siteName: "Align",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Align — Relationship Agreements for Modern Couples",
    description:
      "Personalized relationship agreements created together. Take the quiz, negotiate boundaries, and build something that lasts.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
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
  alternates: {
    canonical: "https://tryalign.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
