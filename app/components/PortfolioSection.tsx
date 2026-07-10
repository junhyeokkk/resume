import SectionTitle from "./SectionTitle";
import { featuredProjects } from "@/app/data/resume";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="mb-14 scroll-mt-24">
      <SectionTitle title="PORTFOLIO" />

      <div className="mt-6 space-y-6">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-md"
          >
            {/* gradient top accent */}
            <span
              aria-hidden="true"
              className="photo-ring absolute inset-x-0 top-0 h-1"
            />

            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{project.tagline}</p>
              </div>
              <span className="badge-grad shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
                {project.period}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
              <span>팀 {project.team}</span>
              <span aria-hidden="true">·</span>
              <span>{project.role}</span>
            </div>

            <p className="mt-4 text-[15px] leading-7 text-slate-700">
              {project.summary}
            </p>

            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                주요 성과
              </h4>
              <ul className="mt-3 space-y-2 text-[15px] leading-7 text-slate-700">
                {project.highlights.map((item) => (
                  <li key={item.lead} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        {item.lead}
                      </strong>
                      <span className="text-slate-400"> — </span>
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
