import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SampleAgreement from "@/components/SampleAgreement";
import Safety from "@/components/Safety";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://tryalign.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Align",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  description:
    "AI-powered relationship agreements app. Take a clinically-grounded quiz, negotiate boundaries together, and sign a shared agreement.",
  url: "https://tryalign.app",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free to start. Premium at $7.99/month.",
  },
  aggregateRating: undefined,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a relationship agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A relationship agreement is a living document where you and your partner write down shared expectations, negotiate differences, and sign something you both believe in. It covers topics like communication, boundaries, transparency, and conflict resolution.",
      },
    },
    {
      "@type": "Question",
      name: "Is Align a therapy app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Align is a communication tool, not a substitute for professional therapy. It helps couples have structured conversations and create shared expectations. Many therapists recommend it as a complement to couples counseling.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each partner's individual responses are private — your partner never sees your raw freetext. Only AI-generated clauses are shared. Data is encrypted in transit and at rest, and our AI provider does not store or train on your data.",
      },
    },
    {
      "@type": "Question",
      name: "Can one partner control the agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Align is designed with anti-coercion safeguards. Both partners take the quiz independently, both must agree on every clause, and either partner can end the agreement at any time. A built-in fairness linter flags one-sided or controlling language.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <SampleAgreement />
        <Safety />
        <Download />
      </main>
      <Footer />
    </>
  );
}
