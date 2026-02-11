import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-cream" />
              </div>
              <span className="font-display text-lg font-semibold text-ink">
                Align
              </span>
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed">
              Relationship agreements for modern couples. Therapy-informed,
              AI-powered, built on trust.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-ink-tertiary mb-3">
                Product
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#how-it-works"
                    className="text-sm text-ink-secondary hover:text-primary transition-colors"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#sample"
                    className="text-sm text-ink-secondary hover:text-primary transition-colors"
                  >
                    Sample agreement
                  </a>
                </li>
                <li>
                  <a
                    href="#safety"
                    className="text-sm text-ink-secondary hover:text-primary transition-colors"
                  >
                    Trust &amp; safety
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="text-sm text-ink-secondary hover:text-primary transition-colors"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-ink-tertiary mb-3">
                Legal
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-ink-secondary hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-ink-secondary hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-ink-tertiary mb-3">
                Support
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:support@tryalign.app"
                    className="text-sm text-ink-secondary hover:text-primary transition-colors"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-tertiary">
            &copy; {new Date().getFullYear()} Align. All rights reserved.
          </p>
          <p className="text-xs text-ink-tertiary">
            Made with care for couples who care.
          </p>
        </div>
      </div>
    </footer>
  );
}
