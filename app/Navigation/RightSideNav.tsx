"use client";

import { useEffect, useState } from "react";

const menus = [
  { label: "INTRODUCE", id: "introduce" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "PROJECT", id: "project" },
  { label: "PORTFOLIO", id: "portfolio" },
  { label: "SKILL", id: "skill" },
  { label: "EDUCATION", id: "education" },
  { label: "TRAINING", id: "training" },
];

export default function RightSideNav() {
  const [active, setActive] = useState("introduce");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const updateActive = () => {
      const sections = menus
        .map((menu) => document.getElementById(menu.id))
        .filter(Boolean) as HTMLElement[];

      if (!sections.length) return;

      const targetY = window.scrollY + window.innerHeight * 0.45;

      let nextActive = sections[0].id;

      for (let i = 0; i < sections.length; i++) {
        const current = sections[i];
        const next = sections[i + 1];

        const start = current.offsetTop;
        const end = next ? next.offsetTop : Number.POSITIVE_INFINITY;

        if (targetY >= start && targetY < end) {
          nextActive = current.id;
          break;
        }
      }

      setActive(nextActive);
    };

    updateActive();

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const moveToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    setHovered(null);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* desktop */}
      <div className="print:hidden fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 xl:block">
        <nav
          className="flex flex-col items-end gap-5"
          onMouseLeave={() => setHovered(null)}
        >
          {menus.map((menu) => {
            const isActive = active === menu.id;
            const isHovered = hovered === menu.id;
            const showLabel = isActive || isHovered;

            return (
              <div key={menu.id} className="relative flex items-center justify-end">
                {/* 라벨: absolute로 빼서 잔상/레이아웃 꼬임 방지 */}
                <span
                  className={[
                    "pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] tracking-[0.28em] transition-all duration-200",
                    showLabel
                      ? "translate-x-0 opacity-100 text-blue-600"
                      : "translate-x-2 opacity-0 text-slate-400",
                  ].join(" ")}
                >
                  {menu.label}
                </span>

                {/* 라인 */}
                <span
                  className={[
                    "absolute right-3 top-1/2 h-px -translate-y-1/2 transition-all duration-200",
                    showLabel ? "w-5 bg-blue-600" : "w-0 bg-slate-300",
                  ].join(" ")}
                />

                <button
                  type="button"
                  aria-label={menu.label}
                  onMouseEnter={() => setHovered(menu.id)}
                  onFocus={() => setHovered(menu.id)}
                  onBlur={() => setHovered(null)}
                  onClick={() => moveToSection(menu.id)}
                  className="relative flex h-4 w-4 items-center justify-center"
                >
                  <span
                    className={[
                      "rounded-full transition-all duration-200",
                      isActive
                        ? "h-3 w-3 bg-blue-600 shadow-[0_0_0_6px_rgba(37,99,235,0.12)]"
                        : isHovered
                        ? "h-3 w-3 bg-blue-400"
                        : "h-2.5 w-2.5 bg-slate-300",
                    ].join(" ")}
                  />
                </button>
              </div>
            );
          })}
        </nav>
      </div>

      {/* mobile */}
      <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 xl:hidden">
        <nav className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/85 px-4 py-3 shadow-lg backdrop-blur">
          {menus.map((menu) => {
            const isActive = active === menu.id;

            return (
              <button
                key={menu.id}
                type="button"
                aria-label={menu.label}
                onClick={() => moveToSection(menu.id)}
                className="relative flex items-center justify-center"
              >
                <span
                  className={[
                    "pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-2 py-1 text-[10px] tracking-[0.18em] text-white whitespace-nowrap transition-all duration-200",
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-1 opacity-0",
                  ].join(" ")}
                >
                  {menu.label}
                </span>

                <span
                  className={[
                    "rounded-full transition-all duration-200",
                    isActive
                      ? "h-3 w-3 bg-blue-600 shadow-[0_0_0_6px_rgba(37,99,235,0.12)]"
                      : "h-2.5 w-2.5 bg-slate-300",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}