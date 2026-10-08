"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const areas = [
  {
    name: "Jubilee Hills",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jubilee_hills.jpg",
  },
  {
    name: "Banjara Hills",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Taj_banjarahills_hyderabad.jpg",
  },
{
  name: "Kokapet",
  image:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kokapet%20Skyline%20at%20Dusk%20Wide%20View.jpg",
},
{
  name: "Gachibowli",
  image:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Gachibowli_hyderabad.jpg",
},
  {
    name: "Kondapur",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hyderabad_Kondapur.jpg",
  },
  {
    name: "HITEC City",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hitec_City%2C_Hyderabad.jpg",
  },
{
  name: "Financial District",
  image:
     "https://commons.wikimedia.org/wiki/Special:FilePath/Myscape_Isle_of_Sky_Hyderabad.jpg",
},
  {
    name: "Manikonda",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Urban_sprawl_in_Manikonda%2C_Hyderabad.jpg",
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
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <h2
            id="areas-heading"
            className="translate-y-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-neutral-900 opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:transition-none group-[.is-visible]:translate-y-0 group-[.is-visible]:opacity-100 sm:text-5xl lg:text-[4rem]"
          >
            Designing homes across Hyderabad.
          </h2>

          <p
            className="mt-7 max-w-2xl translate-y-4 text-base leading-7 text-neutral-600 opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:transition-none group-[.is-visible]:translate-y-0 group-[.is-visible]:opacity-100 sm:text-lg sm:leading-8"
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
              className="translate-y-5 opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:transition-none group-[.is-visible]:translate-y-0 group-[.is-visible]:opacity-100"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="overflow-hidden rounded-xl bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={area.image}
                    alt={`${area.name}, Hyderabad`}
                    loading={index < 4 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] motion-reduce:transition-none"
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
          className="mt-20 flex flex-col gap-5 border-t border-neutral-900/10 pt-8 opacity-0 transition-opacity duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none sm:mt-24 sm:flex-row sm:items-center sm:justify-between sm:pt-10 group-[.is-visible]:opacity-100"
          style={{ transitionDelay: "1.45s" }}
        >
          <p className="text-sm leading-6 text-neutral-500 sm:text-base">
            Have a project outside these areas?
          </p>

          <a
            href="#contact"
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