
"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your home, your lifestyle, your taste, and what you want from the space.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We develop a considered design around your needs, with attention to layout, materials, lighting, and details.",
  },
  {
    number: "03",
    title: "Bring It Together",
    description:
      "From the first concept to the final finish, we help turn the design into a space you can actually live in.",
  },
];

export default function OurApproach() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;

    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -15% 0px",
      }
    );

    observer.observe(heading);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="our-approach-heading"
      className="bg-[#f4f1eb] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      id="approach"
    >
      <div className="mx-auto max-w-7xl">
        {/* INTRO */}
        <div className="max-w-4xl">
          <h2
            ref={headingRef}
            id="our-approach-heading"
            className={`max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-neutral-900 transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none sm:text-5xl lg:text-6xl xl:text-[4.25rem] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            From an idea to a home that feels right.
          </h2>

          <p
            className={`mt-5 max-w-2xl text-base leading-7 text-neutral-600 transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none sm:text-lg sm:leading-8 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "150ms" : "0ms",
            }}
          >
            Good interiors don&apos;t start with choosing colours or furniture.
            They start with understanding the people who will live there.
          </p>
        </div>

        {/* APPROACH STEPS */}
        <div className="mt-20 sm:mt-24 lg:mt-32">
          <div className="grid gap-16 sm:gap-20 lg:grid-cols-3 lg:gap-12 xl:gap-20">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`max-w-md transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${250 + index * 150}ms`
                    : "0ms",
                }}
              >
                <span className="block font-serif text-5xl font-normal leading-none tracking-[-0.04em] text-neutral-400 sm:text-6xl">
                  {step.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-[-0.03em] text-neutral-900 sm:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
