"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function AboutAarva() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-aarva-heading"
      className="bg-[#f4f1eb] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`max-w-4xl opacity-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-1.5 opacity-0"
          }`}
        >
          <h2
            id="about-aarva-heading"
            className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-neutral-900 sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            Thoughtful design. Personal attention.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 sm:mt-20 lg:mt-24 lg:grid-cols-12 lg:items-start lg:gap-16 xl:gap-20">
          <div
            className={`lg:col-span-7 opacity-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-1.5 opacity-0"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <a
              href="https://assets.architecturaldigest.in/photos/600840d854beb9e516da8938/master/w_1600%2Cc_limit/Hyderabad-Banjara-Hills-homes-interior-design-4.jpg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View interior image"
              className="block overflow-hidden"
            >
              <img
                src="https://assets.architecturaldigest.in/photos/600840d854beb9e516da8938/master/w_1600%2Cc_limit/Hyderabad-Banjara-Hills-homes-interior-design-4.jpg"
                alt="Refined residential interior with warm wood, natural light and contemporary furnishings"
                className="h-auto w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015] motion-reduce:transition-none"
              />
            </a>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pt-2">
            <div
              className={`opacity-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-1.5 opacity-0"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <p className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                Aarva Interiors is a boutique interior design studio creating
                refined residential spaces across Hyderabad.
              </p>

              <p className="mt-7 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                We believe the best interiors aren't designed to impress
                everyone. They're designed to feel right for the people who
                live in them.
              </p>

              <p className="mt-7 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                Our approach is personal, practical, and detail-focused. We
                take the time to understand how you live before designing a
                space around it.
              </p>

              <div
                className={`mt-10 opacity-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-1.5 opacity-0"
                }`}
                style={{ transitionDelay: "1150ms" }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900"
                >
                  <span className="border-b border-neutral-900/40 pb-1.5 transition-colors duration-300 group-hover:border-neutral-900 motion-reduce:transition-none">
                    Meet Aarva Interiors
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}