
const trustSignals = [
  {
    value: "10+",
    label: "Years of Experience",
  },
  {
    value: "55+",
    label: "Projects Completed",
  },
  {
    value: "5.0",
    label: "Google Rating",
    suffix: "★",
  },
  {
    value: "Hyderabad",
    label: "Based & Serving",
  },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Aarva Interiors trust signals"
      className="relative z-20 -mt-10 px-5 sm:-mt-12 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 overflow-hidden rounded-sm border border-[#d8cbb8] bg-[#f5f0e8] sm:grid-cols-4">
          {trustSignals.map((item, index) => (
            <div
              key={item.label}
              className={`
                flex min-h-24 flex-col items-center justify-center
                px-4 py-5 text-center sm:min-h-28 sm:px-5
                ${index % 2 === 0 ? "border-r border-[#d8cbb8] sm:border-r" : ""}
                ${index < 2 ? "border-b border-[#d8cbb8] sm:border-b-0" : ""}
                ${index === 1 ? "sm:border-r" : ""}
                ${index === 2 ? "sm:border-r" : ""}
              `}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-medium tracking-tight text-[#30271f] sm:text-2xl">
                  {item.value}
                </span>

                {item.suffix && (
                  <span
                    aria-hidden="true"
                    className="text-lg text-[#967b5d]"
                  >
                    {item.suffix}
                  </span>
                )}
              </div>

              <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#71665a] sm:text-[11px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
