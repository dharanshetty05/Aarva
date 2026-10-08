// components/Hero.tsx

import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[680px] overflow-hidden bg-neutral-900">
      {/* Background image */}
      <picture className="absolute inset-0">
        {/* Mobile crop */}
        <source
          media="(max-width: 567px)"
          srcSet="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&h=1400&q=88"
        />

        {/* Desktop crop */}
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&h=1400&q=90"
          alt="Contemporary residential interior"
          className="
            hero-image
            absolute inset-0
            h-full w-full
            object-cover
            object-[58%_center]
            max-[567px]:object-[55%_75%]
            md:object-center
          "
        />
      </picture>

      {/* Image treatment */}
      <div className="absolute inset-0 bg-black/[0.14]" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

      {/* Mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 md:hidden" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[820px] text-white">

          {/* Headline */}
          <h1 className="hero-heading font-sans text-[clamp(3rem,4.6vw,4.7rem)] font-medium leading-[1.02] tracking-[-0.05em]">
            <span className="hero-line block">
              Interiors that feel like they
            </span>

            <span
  className={`hero-line block font-normal italic tracking-[-0.025em] ${playfair.className}`}
  style={{ animationDelay: "140ms" }}
>
  belong to you.
</span>
          </h1>

          {/* Description */}
          <p
            className="hero-copy mt-7 max-w-[510px] text-[15px] leading-7 text-white/85 sm:text-[17px]"
            style={{ animationDelay: "400ms" }}
          >
            Thoughtfully designed homes across Hyderabad for people who care
            about how their space looks, feels, and works.
          </p>

          {/* Actions */}
          <div
            className="hero-actions mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "540ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-neutral-900 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-xl"
            >
              Discuss Your Project

              <ArrowRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center rounded-lg border border-white/45 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-[3px] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/[0.08]"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}