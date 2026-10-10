const pages = [
  { label: "Home", href: "#home" },
  { label: "Selected Work", href: "#work" },
  { label: "What We Do", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "About Aarva", href: "#about" },
  { label: "Areas We Serve", href: "#areas" },
];

export function Footer() {
  return (
    <footer className="group relative overflow-hidden bg-[#f4f1eb]">
      <div className="relative z-10 mx-auto w-full max-w-375 px-6 pb-10 pt-16 sm:px-8 md:px-10 lg:pb-12 lg:pt-20 xl:px-12">
        {/* Main footer content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Brand and Copyright */}
          <div className="shrink-0">
            <a
              href="#home"
              aria-label="Aarva Interiors home"
              className="inline-block text-[17px] font-semibold tracking-tight text-neutral-900 transition-opacity duration-200 ease-out hover:opacity-65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1eb] motion-reduce:transition-none"
            >
              Aarva Interiors
            </a>

            <p className="mt-6 text-[13px] leading-6 tracking-[-0.01em] text-neutral-500">
                © 2026 Aarva Interiors. All rights reserved.
            </p>
          </div>

          {/* Single Horizontal Navigation Row */}
          <nav aria-label="Footer navigation" className="lg:pt-0.5">
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-5 sm:gap-x-8 lg:justify-end lg:gap-x-7 xl:gap-x-8">
              {pages.map((page) => (
                <li key={page.label} className="shrink-0">
                  <a
                    href={page.href}
                    className="group/link relative inline-block text-[14px] leading-5 tracking-[-0.01em] text-neutral-600 transition-colors duration-200 ease-out hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1eb] motion-reduce:transition-none"
                  >
                    {page.label}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-neutral-900 transition-transform duration-200 ease-out group-hover/link:scale-x-100 group-focus-visible/link:scale-x-100 motion-reduce:transition-none"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Breathing zone before oversized wordmark */}
        <div className="h-[clamp(6rem,11vw,10rem)]" />
      </div>

      {/* Subtle oversized brand wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-0.08em] select-none overflow-hidden whitespace-nowrap text-center"
      >
        <span className="inline-block text-[clamp(3.5rem,10.5vw,10rem)] font-semibold leading-[0.72] tracking-[-0.075em] text-neutral-900/[0.045] transition-[transform,opacity] duration-500 ease-out group-hover:-translate-y-1 group-hover:text-neutral-900/[0.06] motion-reduce:transition-none motion-reduce:transform-none">
          Aarva Interiors
        </span>
      </div>
    </footer>
  );
}