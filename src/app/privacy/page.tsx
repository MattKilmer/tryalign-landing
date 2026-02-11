import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Align protects your relationship data. We never sell your information, your partner's freetext stays private, and AI providers don't retain your data.",
  alternates: {
    canonical: "https://tryalign.app/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Align",
    description:
      "How Align protects your relationship data. Your privacy is built into every layer of the product.",
    url: "https://tryalign.app/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — Align",
    description: "How Align protects your relationship data.",
  },
};

const LAST_UPDATED = "February 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <div className="w-2.5 h-2.5 rounded-full bg-cream" />
            </div>
            <span className="font-display text-lg font-semibold text-ink">
              Align
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-ink-secondary hover:text-primary transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
        <h1 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-ink-tertiary mb-10">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="prose-align space-y-8">
          <p className="text-ink-secondary leading-relaxed text-lg">
            Align is built on trust. We take your privacy seriously and want you
            to understand exactly how your data is handled.
          </p>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">
              What we collect
            </h2>
            <p className="text-ink-secondary leading-relaxed mb-3">
              We collect only what is necessary to create your relationship
              agreement:
            </p>
            <ul className="space-y-2 text-ink-secondary">
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                <span>
                  Your email address (for sign-in and account recovery)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                <span>
                  Your quiz answers (to understand your relationship priorities)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                <span>
                  Your freetext responses (to personalize agreement clauses)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 shrink-0">&bull;</span>
                <span>
                  Your agreement content (the clauses you and your partner create
                  together)
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">
              How your data is stored
            </h2>
            <p className="text-ink-secondary leading-relaxed">
              All data is stored securely in Supabase with encryption at rest
              and in transit. We use industry-standard security practices
              including Row Level Security policies to ensure your data is
              only accessible to authorized users.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">
              How AI is used
            </h2>
            <p className="text-ink-secondary leading-relaxed">
              We use AI (powered by Anthropic) to generate personalized
              agreement clauses based on your quiz answers and freetext
              responses. The AI provider processes this information only for
              generation and does not store, train on, or retain any of your
              data. Your information is sent over encrypted connections and is
              not used to improve AI models.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">
              Partner privacy
            </h2>
            <p className="text-ink-secondary leading-relaxed">
              Each partner&apos;s individual freetext responses are private.
              Your partner will never see the raw text you write. Only the
              generated agreement clauses &mdash; the output of both
              partners&apos; inputs combined &mdash; are shared between you.
              This protects your ability to express yourself honestly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">
              Data deletion
            </h2>
            <p className="text-ink-secondary leading-relaxed">
              You can request deletion of your account and all associated data
              at any time by contacting{" "}
              <a
                href="mailto:support@tryalign.app"
                className="text-primary hover:underline"
              >
                support@tryalign.app
              </a>
              . We will permanently remove your information from our systems.
              When a couple dissolves their agreement, the associated data is
              also removed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">
              We never sell your data
            </h2>
            <p className="text-ink-secondary leading-relaxed">
              Your data is yours. We do not sell, rent, or share your personal
              information with third parties for marketing or advertising
              purposes. Your relationship details are never monetized.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">
              Questions?
            </h2>
            <p className="text-ink-secondary leading-relaxed">
              If you have questions about this privacy policy or how your data
              is handled, please reach out to{" "}
              <a
                href="mailto:support@tryalign.app"
                className="text-primary hover:underline"
              >
                support@tryalign.app
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="mx-auto max-w-3xl px-6 py-6 flex items-center justify-between text-xs text-ink-tertiary">
          <span>&copy; {new Date().getFullYear()} Align</span>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
