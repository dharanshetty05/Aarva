
"use client";

export default function ScrollToWork() {
  function handleClick() {
    document.getElementById("selected-work")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center rounded-lg border border-white/45 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-[3px] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 motion-reduce:transition-none"
    >
      View Our Work
    </button>
  );
}
