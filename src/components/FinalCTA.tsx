"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
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
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="final-cta-heading"
      className="bg-[#f4f1eb] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[12px] bg-neutral-900 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <div
              className={`transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:transition-none ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <h2
                id="final-cta-heading"
                className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
              >
                Thinking about your space?
              </h2>
            </div>

            <div
              className={`mt-8 max-w-2xl transform-gpu transition-all duration-1000 delay-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:transition-none ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <p className="text-base font-normal leading-7 text-neutral-300 sm:text-lg sm:leading-8">
                Whether you're starting with a blank canvas or looking to
                transform a home that no longer feels right, we'd love to hear
                what you have in mind.
              </p>

              <p className="mt-5 text-base font-normal leading-7 text-neutral-300 sm:text-lg sm:leading-8">
                Tell us a little about your project and let's start a
                conversation.
              </p>
            </div>

            <div
              className={`mt-10 transform-gpu transition-all duration-1000 delay-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:transition-none sm:mt-12 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <a
                href="#contact"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold tracking-[-0.01em] text-neutral-900 transition-transform duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}