"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Full Home Interiors",
    description:
      "A complete design approach for your home, from the overall look to the smallest details.",
  },
  {
    number: "02",
    title: "Living & Dining Spaces",
    description:
      "Comfortable, considered spaces designed for everyday living and entertaining.",
  },
  {
    number: "03",
    title: "Kitchens",
    description:
      "Beautiful, practical kitchens designed around how you actually use them.",
  },
  {
    number: "04",
    title: "Bedrooms",
    description:
      "Calm, personal spaces designed for comfort and relaxation.",
  },
  {
    number: "05",
    title: "Bespoke Details",
    description:
      "Custom furniture, lighting, materials, and finishing touches that make your space yours.",
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="what-we-do-heading"
      className="bg-[#f4f1eb] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 xl:grid-cols-[0.75fr_1.25fr]">
          <div className="max-w-xl lg:pr-8">
            <h2
              id="what-we-do-heading"
              className={`mt-6 max-w-lg text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-neutral-900 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:text-5xl lg:text-[4.25rem] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? "350ms" : "0ms",
              }}
            >
              Designed around the way you live.
            </h2>

            <p
              className={`mt-7 max-w-md text-[15px] leading-7 text-neutral-600 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:text-base sm:leading-7 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? "750ms" : "0ms",
              }}
            >
              From a single room to an entire home, we create interiors that
              balance beauty with everyday functionality.
            </p>
          </div>

          <div className="border-t border-neutral-900/15">
            {services.map((service, index) => (
              <div
                key={service.number}
                className={`group border-b border-neutral-900/15 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${1200 + index * 400}ms`
                    : "0ms",
                }}
              >
                <div className="grid gap-5 py-8 sm:grid-cols-[72px_1fr] sm:gap-6 sm:py-9 lg:grid-cols-[82px_1fr] lg:gap-8 lg:py-10">
                  <span className="text-xs font-medium tracking-[0.12em] text-neutral-400 transition-colors duration-700 group-hover:text-neutral-900">
                    {service.number}
                  </span>

                  <div className="grid gap-3 sm:grid-cols-[minmax(220px,0.8fr)_minmax(240px,1fr)] sm:gap-8 lg:grid-cols-[minmax(260px,0.85fr)_minmax(280px,1fr)] lg:gap-12">
                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.025em] text-neutral-900 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 sm:text-[1.65rem]">
                      {service.title}
                    </h3>

                    <p className="max-w-md text-sm leading-6 text-neutral-500 sm:text-[15px] sm:leading-7">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}