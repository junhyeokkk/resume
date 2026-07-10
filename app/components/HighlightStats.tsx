import { Clock, RefreshCw, Database, Layers, type LucideIcon } from "lucide-react";
import { highlightStats, type HighlightStat } from "@/app/data/resume";

const ICONS: Record<HighlightStat["icon"], LucideIcon> = {
  automation: Clock,
  migration: RefreshCw,
  database: Database,
  fullstack: Layers,
};

export default function HighlightStats() {
  return (
    <section aria-label="핵심 성과" className="print-section mb-14">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {highlightStats.map((stat) => {
          const Icon = ICONS[stat.icon];

          return (
            <div
              key={stat.label}
              className="print-card group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className="photo-ring absolute inset-x-0 top-0 h-1"
              />

              <span className="badge-grad mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl text-blue-600 ring-1 ring-blue-100">
                <Icon size={18} aria-hidden="true" />
              </span>

              <p className="text-gradient text-[1.6rem] font-bold leading-tight tracking-tight">
                {stat.value}
              </p>

              <p className="mt-1.5 text-sm font-semibold text-slate-800">
                {stat.label}
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
