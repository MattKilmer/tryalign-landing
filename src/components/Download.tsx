"use client";

import { useRef, useEffect, useState } from "react";

export default function Download() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="download"
      className="relative py-24 lg:py-32 bg-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-15"
          style={{
            background:
              "radial-gradient(circle at center, #2A9D8F 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10"
          style={{
            background:
              "radial-gradient(circle at center, #E07A5F 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-cream" />
            </div>
          </div>

          <h2 className="font-display text-3xl lg:text-[2.75rem] font-semibold text-ink leading-tight tracking-tight mb-4">
            Ready to build something
            <br className="hidden sm:block" /> meaningful together?
          </h2>
          <p className="text-lg text-ink-secondary max-w-xl mx-auto mb-10">
            Five minutes to take the quiz. A lifetime to benefit from the
            clarity.
          </p>
        </div>

        {/* App store buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* App Store button */}
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-ink text-cream hover:bg-ink/90 transition-all duration-200 shadow-[0_4px_16px_rgba(45,41,38,0.15)]"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider opacity-80">
                Download on the
              </p>
              <p className="text-lg font-semibold leading-tight -mt-0.5">
                App Store
              </p>
            </div>
          </a>

          {/* Google Play button */}
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-ink text-cream hover:bg-ink/90 transition-all duration-200 shadow-[0_4px_16px_rgba(45,41,38,0.15)]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.04l2.527 1.463c.477.276.477.964 0 1.24l-2.527 1.463-2.545-2.546 2.545-2.62zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider opacity-80">
                Get it on
              </p>
              <p className="text-lg font-semibold leading-tight -mt-0.5">
                Google Play
              </p>
            </div>
          </a>
        </div>

        {/* Reassurance */}
        <p
          className={`text-sm text-ink-tertiary transition-all duration-700 delay-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Free to start &middot; No credit card required &middot; Cancel anytime
        </p>
      </div>
    </section>
  );
}
