"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = orbRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.parentElement?.getBoundingClientRect();
      if (!rect) return;
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    };

    const animate = () => {
      x += (targetX - x) * 0.04;
      y += (targetY - y) * 0.04;
      el.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 lg:pb-24">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          ref={orbRef}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #7EC8BE 0%, #2A9D8F 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-48 -left-24 w-[600px] h-[600px] rounded-full opacity-20 animate-breathe"
          style={{
            background:
              "radial-gradient(circle at 60% 60%, #F0A898 0%, #E07A5F 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at center, #E9C46A 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 text-center">
        {/* Pill badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-bg border border-ai-border mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-[pulse_3s_ease-in-out_infinite]" />
          <span className="text-sm text-primary-dark font-medium">
            Clinically grounded, AI-powered
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-100 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] font-semibold text-ink tracking-tight mb-6">
          Agreements that{" "}
          <span className="relative">
            <span className="relative z-10">grow</span>
            <span
              className="absolute left-0 -bottom-1 w-full h-3 opacity-30 rounded-sm"
              style={{ background: "linear-gradient(90deg, #2A9D8F, #7EC8BE)" }}
            />
          </span>{" "}
          with your relationship
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up delay-200 text-lg lg:text-xl text-ink-secondary max-w-2xl mx-auto leading-relaxed mb-10">
          Take a five-minute quiz. Our AI drafts personalized boundaries you
          actually want to keep. Negotiate together, sign, and revisit as you
          evolve.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-cream font-medium text-lg shadow-[0_4px_20px_rgba(42,157,143,0.3)] hover:shadow-[0_6px_28px_rgba(42,157,143,0.4)] hover:bg-primary-dark transition-all duration-300"
          >
            <span>Start your agreement</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-ink-secondary font-medium hover:text-primary hover:bg-linen transition-all duration-200"
          >
            See how it works
          </a>
        </div>

        {/* Trust markers */}
        <div className="animate-fade-up delay-500 mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-tertiary">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            Therapy-informed
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clipRule="evenodd"
              />
            </svg>
            Your data stays private
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Both voices heard equally
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up delay-700">
        <div className="w-6 h-10 rounded-full border-2 border-ink-tertiary/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-ink-tertiary/40 animate-[bounce_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
