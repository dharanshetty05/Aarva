
"use client";

type ScrollToSectionProps = {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

export default function ScrollToSection({
  sectionId,
  children,
  className,
  onNavigate,
}: ScrollToSectionProps) {
  function handleClick() {
    const section = document.getElementById(sectionId);

    section?.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
      block: "start",
    });

    onNavigate?.();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
