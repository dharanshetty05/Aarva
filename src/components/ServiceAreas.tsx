"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const areas = [
  {
    name: "Jubilee Hills",
    image: "/images/jubilee-hills.avif"
  },
  {
    name: "Banjara Hills",
    image: "/images/banjara-hills.avif"
  },
{
  name: "Kokapet",
  image: "/images/kokapet.avif"
},
{
  name: "Gachibowli",
  image: "/images/gachibowli.avif"
},
  {
    name: "Kondapur",
    image: "/images/kondapur.avif"
  },
  {
    name: "HITEC City",
    image: "/images/Hitec_City.avif"
  },
{
  name: "Financial District",
  image: "/images/FinancialDistrict.avif"
},
  {
    name: "Manikonda",
    image: "/images/manikonda.avif"
  },
];

export default function AreasWeServe() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="areas-heading"
      className="group overflow-hidden bg-[#f4f1eb] px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40"
      id="areas"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <h2
            id="areas-heading"
            className="translate-y-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-neutral-900 opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none group-[.is-visible]:translate-y-0 group-[.is-visible]:opacity-100 sm:text-5xl lg:text-[4rem]"
          >
            Designing homes across Hyderabad.
          </h2>

          <p
            className="mt-7 max-w-2xl translate-y-4 text-base leading-7 text-neutral-600 opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none group-[.is-visible]:translate-y-0 group-[.is-visible]:opacity-100 sm:text-lg sm:leading-8"
            style={{ transitionDelay: "350ms" }}
          >
            We work with homeowners across Hyderabad and surrounding areas,
            creating considered interiors for apartments, villas, and
            independent homes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-3 gap-y-10 sm:mt-20 sm:gap-x-5 sm:gap-y-12 lg:mt-24 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
          {areas.map((area, index) => (
            <article
              key={area.name}
              className="translate-y-5 opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none group-[.is-visible]:translate-y-0 group-[.is-visible]:opacity-100"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="overflow-hidden rounded-xl bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={`${area.name}, Hyderabad`}
                    fill
                    sizes="(max-width: 639px) calc(50vw - 30px), (max-width: 1023px) calc(50vw - 42px), (max-width: 1456px) calc(25vw - 42px), 332px"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
              </div>

              <h3 className="mt-4 text-base font-medium tracking-[-0.02em] text-neutral-900 sm:mt-5 sm:text-lg">
                {area.name}
              </h3>
            </article>
          ))}
        </div>

        <div
          className="mt-20 flex flex-col gap-5 border-t border-neutral-900/10 pt-8 opacity-0 transition-opacity duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:opacity-100 motion-reduce:transition-none sm:mt-24 sm:flex-row sm:items-center sm:justify-between sm:pt-10 group-[.is-visible]:opacity-100"
          style={{ transitionDelay: "1.45s" }}
        >
          <p className="text-sm leading-6 text-neutral-500 sm:text-base">
            Have a project outside these areas?
          </p>

          <a
            href="https://wa.me/917795116095?text=Hi! I'd like to know more about Aarva Interiors"
            target="_blank"
            className="inline-flex w-fit items-center gap-2 text-base font-medium tracking-[-0.01em] text-neutral-900 transition-opacity duration-300 hover:opacity-60 focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1eb]"
          >
            <span>Let’s talk.</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}