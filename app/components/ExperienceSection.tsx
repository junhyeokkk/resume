import SectionTitle from "./SectionTitle";
import { experiences } from "@/app/data/resume";

export default function ExperienceSection() {
  return (
    <section id="experience"  className="mb-14 scroll-mt-24">
      <SectionTitle title="EXPERIENCE" />

      <div className="mt-6 space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="grid grid-cols-12 gap-6">

              {/* 기간 */}
              <div className="col-span-12 md:col-span-3">
                <div className="border-l-2 border-blue-500 pl-3 text-sm font-medium text-slate-600">
                  {exp.period}
                </div>
              </div>

              {/* 내용 */}
              <div className="col-span-12 md:col-span-9">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {exp.company}
                    </h3>
                    {exp.companyTagline && (
                      <p className="mt-0.5 text-xs text-slate-500">
                        {exp.companyTagline}
                      </p>
                    )}
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {exp.position}
                    </p>
                  </div>

                  {exp.status && (
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {exp.status}
                    </span>
                  )}
                </div>

                {/* bullet */}
                <ul className="mt-5 space-y-2 text-[15px] leading-7 text-slate-700">
                  {exp.descriptions.map((desc, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}