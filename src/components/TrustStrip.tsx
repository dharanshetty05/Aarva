export default function TrustStrip() {
  const items = [
    "Bespoke Interiors",
    "Luxury Residences",
    "Space Planning",
    "Turnkey Execution",
  ];

  return (
    <section
      aria-label="Aarva Interiors design services"
      className="relative z-20 -mt-10 px-5 sm:-mt-12 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-sm border border-[#d8cbb8] bg-[#f5f0e8] shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item}
              className={`
                flex min-h-20 items-center justify-center px-5 py-5
                text-center
                sm:min-h-24
                ${
                  index !== items.length - 1
                    ? "border-b border-[#d8cbb8] sm:border-b-0 sm:border-r"
                    : ""
                }
              `}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#30271f] sm:text-sm">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
