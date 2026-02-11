import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You've been invited — Align",
  description:
    "Your partner wants to build a relationship agreement with you on Align.",
};

export default function InvitePage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <div className="w-2.5 h-2.5 rounded-full bg-cream" />
            </div>
            <span className="font-display text-lg font-semibold text-ink">
              Align
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-md text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-breathe">
              <svg
                className="w-5 h-5 text-cream"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>

          <h1 className="font-display text-2xl lg:text-3xl font-semibold text-ink mb-3">
            Your partner invited you
          </h1>
          <p className="text-ink-secondary leading-relaxed mb-8">
            Someone special wants to build a relationship agreement with you on
            Align. Download the app to accept their invite and start shaping
            your shared understanding.
          </p>

          {/* Store buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-ink text-cream hover:bg-ink/90 transition-all duration-200 shadow-[0_4px_16px_rgba(45,41,38,0.15)]"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="font-medium">App Store</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-ink text-cream hover:bg-ink/90 transition-all duration-200 shadow-[0_4px_16px_rgba(45,41,38,0.15)]"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.04l2.527 1.463c.477.276.477.964 0 1.24l-2.527 1.463-2.545-2.546 2.545-2.62zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
              </svg>
              <span className="font-medium">Google Play</span>
            </a>
          </div>

          {/* Info cards */}
          <div className="space-y-3 text-left">
            <div className="p-4 rounded-xl bg-linen border border-border/60">
              <p className="text-sm text-ink-secondary">
                <span className="font-semibold text-ink">
                  Your voice matters.
                </span>{" "}
                You&apos;ll take the same quiz your partner did. The agreement
                reflects both of your perspectives equally.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-linen border border-border/60">
              <p className="text-sm text-ink-secondary">
                <span className="font-semibold text-ink">
                  Nothing is final without you.
                </span>{" "}
                Review every clause. Accept, adjust, or ask for changes.
                You have full control.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-linen border border-border/60">
              <p className="text-sm text-ink-secondary">
                <span className="font-semibold text-ink">
                  You can say no.
                </span>{" "}
                Consent isn&apos;t a checkbox. You can accept, ask to talk
                first, or decline entirely.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
