import SectionTitle from "./SectionTitle";
import { educations } from "@/app/data/resume";

export default function EducationSection() {
  return (
    <section id="education" className="mb-14 scroll-mt-24">
      <SectionTitle title="EDUCATION" />

      <div className="mt-6 rounded-3xl bg-white px-8 py-8 shadow-sm ring-1 ring-slate-200/70">
        <div className="relative">
          {/* 타임라인 */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-10">
            {educations.map((edu, i) => (
              <div key={`${edu.school}-${edu.period}`} className="relative pl-12">
                
                {/* 점 */}
                <div className="absolute left-2 top-1.5 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-white" />

                <div className="grid grid-cols-12 gap-6">
                  
                  {/* 기간 */}
                  <div className="col-span-12 md:col-span-3">
                    <div className="text-xs font-semibold tracking-wider text-slate-400">
                      {edu.period}
                    </div>
                  </div>

                  {/* 내용 */}
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="text-lg font-bold text-slate-900">
                      {edu.school}
                    </h3>

                    {edu.major && (
                      <p className="mt-1 text-sm text-slate-600">
                        {edu.major}
                      </p>
                    )}

                    {edu.description && (
                      <p className="mt-1 text-sm text-slate-500">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>

                {i !== educations.length - 1 && (
                  <div className="mt-8 border-b border-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}