
"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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

  const revealClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-1.5 opacity-0";

  const revealBase =
    "opacity-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none";

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-aarva-heading"
      className="bg-[#f4f1eb] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`${revealBase} ${revealClass} max-w-4xl`}
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
            className={`${revealBase} ${revealClass} lg:col-span-7`}
            style={{ transitionDelay: "350ms" }}
          >
            <div className="overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Refined residential interior with warm wood, natural light and contemporary furnishings"
                width={1600}
                height={1067}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="h-auto w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015] motion-reduce:transition-none"
              />
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pt-2">
            <div
              className={`${revealBase} ${revealClass}`}
              style={{ transitionDelay: "750ms" }}
            >
              <p className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                Aarva Interiors is a boutique interior design studio creating
                refined residential spaces across Hyderabad.
              </p>

              <p className="mt-7 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                We believe the best interiors aren&apos;t designed to impress
                everyone. They&apos;re designed to feel right for the people who
                live in them.
              </p>

              <p className="mt-7 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                Our approach is personal, practical, and detail-focused. We
                take the time to understand how you live before designing a
                space around it.
              </p>

              <div
                className={`${revealBase} ${revealClass} mt-10`}
                style={{ transitionDelay: "1150ms" }}
              >
                <a
                  href="https://wa.me/917795116095?text=Hi! I'd like to know more about Aarva Interiors"
                  target="_blank"
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
