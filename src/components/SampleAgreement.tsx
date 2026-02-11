"use client";

import { useRef, useEffect, useState } from "react";

const SECTIONS = [
  {
    title: "Communication",
    icon: "💬",
    clauses: [
      {
        text: "We\u2019ll check in with each other at least once a day, even if it\u2019s just a quick text.",
        variant: "Balanced",
      },
      {
        text: "When something is bothering us, we\u2019ll bring it up within 48 hours rather than letting it build.",
        variant: "Open",
      },
    ],
  },
  {
    title: "Boundaries",
    icon: "🛡️",
    clauses: [
      {
        text: "We respect each other\u2019s need for alone time without taking it personally.",
        variant: "Balanced",
      },
      {
        text: "Before making plans that affect the other person, we\u2019ll give a heads-up first.",
        variant: "Collaborative",
      },
    ],
  },
  {
    title: "Conflict Resolution",
    icon: "🕊️",
    clauses: [
      {
        text: "During disagreements, we\u2019ll take a 20-minute break before continuing if emotions run high.",
        variant: "Structured",
      },
      {
        text: "We won\u2019t bring up past arguments that we\u2019ve already resolved together.",
        variant: "Balanced",
      },
    ],
  },
];

const VARIANT_COLORS: Record<string, string> = {
  Balanced: "bg-primary/10 text-primary-dark",
  Open: "bg-accent/10 text-accent",
  Collaborative: "bg-success/10 text-[#2D7A56]",
  Structured: "bg-warning/10 text-[#92710A]",
};

export default function SampleAgreement() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sample"
      className="relative py-24 lg:py-32 bg-linen"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-14 lg:mb-18">
          <p
            className={`text-sm font-medium tracking-widest uppercase text-primary mb-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Sample agreement
          </p>
          <h2
            className={`font-display text-3xl lg:text-[2.75rem] font-semibold text-ink leading-tight tracking-tight transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Every agreement is
            <br className="hidden sm:block" /> unique to your relationship
          </h2>
          <p
            className={`mt-4 text-ink-secondary max-w-xl mx-auto transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Here&apos;s an example of what yours might look like. Clauses are
            generated from your quiz answers — no templates, no one-size-fits-all.
          </p>
        </div>

        {/* Agreement card */}
        <div
          className={`mx-auto max-w-3xl transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Mock agreement header */}
          <div className="bg-cream rounded-t-3xl border border-b-0 border-border/70 px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-cream" />
              </div>
              <div>
                <p className="font-display font-semibold text-ink text-lg">
                  Sample Agreement
                </p>
                <p className="text-xs text-ink-tertiary">
                  Draft &middot; 6 clauses &middot; 3 sections
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-warning/15 text-[#92710A] text-xs font-medium">
              Draft
            </span>
          </div>

          {/* Sections */}
          <div className="bg-cream rounded-b-3xl border border-t-0 border-border/70 overflow-hidden divide-y divide-border/50">
            {SECTIONS.map((section, si) => (
              <div key={section.title} className="px-8 py-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-lg">{section.icon}</span>
                  <h3 className="font-display font-semibold text-ink">
                    {section.title}
                  </h3>
                  <span className="ml-auto text-xs text-ink-tertiary">
                    {section.clauses.length} clauses
                  </span>
                </div>

                <div className="space-y-3">
                  {section.clauses.map((clause, ci) => (
                    <div
                      key={ci}
                      className="pl-4 border-l-2 border-primary/30 py-1"
                    >
                      <p className="text-ink leading-relaxed italic text-[15px]">
                        &ldquo;{clause.text}&rdquo;
                      </p>
                      <span
                        className={`inline-block mt-2 px-2 py-0.5 rounded-md text-xs font-medium ${
                          VARIANT_COLORS[clause.variant] ?? "bg-sand text-ink-tertiary"
                        }`}
                      >
                        {clause.variant}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Caption */}
          <p className="text-center text-sm text-ink-tertiary mt-6">
            Your agreement will be personalized based on your answers.
          </p>
        </div>
      </div>
    </section>
  );
}
