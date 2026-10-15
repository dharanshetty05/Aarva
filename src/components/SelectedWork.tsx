
"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Jubilee Hills Residence",
    category: "Contemporary residential interior",
    image: "/images/work1.avif",
  },
  {
    title: "Banjara Hills Home",
    category: "Warm, refined interiors",
    image: "/images/work2.avif",
  },
  {
    title: "Kokapet Residence",
    category: "Modern family home",
    image: "/images/work3.avif",
  },
  {
    title: "Gachibowli Apartment",
    category: "Clean, contemporary living",
    image: "/images/work4.avif",
  },
];

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 640px) and (max-width: 1023px)"
    );

    const updateViewport = () => {
      setIsTablet(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      Math.min(current + 1, projects.length - 1)
    );
  };

  const cardWidth = isTablet ? 70 : 84;

  const carouselTransform = `translate3d(calc(-${activeIndex * cardWidth}vw - ${activeIndex * 12}px), 0, 0)`;

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    document.getElementById("contact")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      className="bg-[#f4f1eb] text-neutral-900"
    >
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-20">
        {/* INTRO */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:gap-20">
          <h2
            className={`max-w-170 font-sans text-[clamp(2.5rem,4.5vw,4.25rem)] font-medium leading-[1.03] tracking-[-0.05em] transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Spaces we&apos;ve brought to life.
          </h2>

          <p
            className={`max-w-130 text-[15px] leading-7 text-neutral-600 sm:text-[16px] md:pt-1 transition-[opacity,transform] duration-700 delay-100 ease-out motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Every home has its own character. Our job is to bring it out
            through thoughtful layouts, considered materials, and details
            that feel distinctly yours.
          </p>
        </div>

        {/* DESKTOP PROJECT GRID */}
        <div className="mt-12 hidden gap-5 lg:grid lg:grid-cols-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-[12px] bg-white transition-[opacity,transform,box-shadow] duration-700 ease-out motion-reduce:transition-none ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              } hover:-translate-y-[3px] hover:shadow-[0_28px_60px_rgba(20,18,15,0.09),0_6px_18px_rgba(20,18,15,0.045)]`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                <Image
                  src={project.image}
                  alt={`${project.title} interior`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 25vw, 84vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                />
              </div>

              <div className="px-5 pb-6 pt-5">
                <h3 className="text-[16px] font-medium leading-[1.35] tracking-[-0.025em] transition-colors duration-300 group-hover:text-neutral-600">
                  {project.title}
                </h3>

                <p className="mt-1.5 max-w-[230px] text-[13px] leading-[1.5] text-neutral-500">
                  {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* MOBILE / TABLET CAROUSEL */}
        <div className="mt-12 overflow-hidden lg:hidden">
          <div
            className="flex gap-3 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
            style={{ transform: carouselTransform }}
          >
            {projects.map((project, index) => (
              <article
                key={project.title}
                aria-hidden={index !== activeIndex}
                className="group w-[84vw] shrink-0 overflow-hidden rounded-[12px] bg-white shadow-[0_8px_30px_rgba(20,18,15,0.035)] sm:w-[70vw]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                  <Image
                    src={project.image}
                    alt={`${project.title} interior`}
                    fill
                    sizes="(min-width: 640px) and (max-width: 1023px) 70vw, 84vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                  />
                </div>

                <div className="px-5 pb-6 pt-5">
                  <h3 className="text-[16px] font-medium leading-[1.35] tracking-[-0.025em]">
                    {project.title}
                  </h3>

                  <p className="mt-1.5 max-w-[230px] text-[13px] leading-[1.5] text-neutral-500">
                    {project.category}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CAROUSEL CONTROLS */}
        <div className="mt-6 flex items-center justify-between lg:hidden">
          <div
            className="text-[13px] tracking-[-0.01em] text-neutral-500"
            aria-live="polite"
          >
            <span className="text-neutral-900">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <span className="mx-1.5 text-neutral-400">/</span>

            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white text-neutral-900 transition-colors duration-300 hover:border-neutral-400 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-2"
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </button>

            <button
              type="button"
              onClick={goToNext}
              disabled={activeIndex === projects.length - 1}
              aria-label="Next project"
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white text-neutral-900 transition-colors duration-300 hover:border-neutral-400 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-2"
            >
              <ArrowRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-12 flex justify-center transition-[opacity,transform] duration-700 ease-out sm:mt-14 motion-reduce:transition-none ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <a
            href="#contact"
            onClick={handleContactClick}
            className="group inline-flex items-center gap-3 rounded-lg bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/10 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_14px_30px_rgba(20,18,15,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 focus-visible:ring-offset-2"
          >
            Discuss Your Project

            <ArrowRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
