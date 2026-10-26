export default function TrustStrip() {
  const items = [
    {
      number: "01",
      title: "Designed Around You",
      description: "Your lifestyle, your space, your vision.",
    },
    {
      number: "02",
      title: "Considered Material Selection",
      description: "Thoughtful choices in materials and finishes.",
    },
    {
      number: "03",
      title: "Clear Project Planning",
      description: "A considered approach before execution.",
    },
    {
      number: "04",
      title: "Concept to Completion",
      description: "A cohesive vision throughout your project.",
    },
  ];

  return (
    <section
      aria-label="The Aarva Interiors approach"
      className="relative z-20 -mt-10 px-5 sm:-mt-12 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-sm border border-[#d8cbb8] bg-[#f5f0e8] shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.number}
              className={`
                flex min-h-28 flex-col justify-center px-6 py-6
                sm:min-h-32 sm:px-5
                ${
                  index !== items.length - 1
                    ? "border-b border-[#d8cbb8] sm:border-r lg:border-b-0"
                    : ""
                }
                ${
                  index === 1
                    ? "lg:border-r"
                    : ""
                }
              `}
            >
              <span className="mb-3 text-[10px] font-medium tracking-[0.2em] text-[#967b5d]">
                {item.number}
              </span>

              <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-[#30271f]">
                {item.title}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-[#71665a]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}