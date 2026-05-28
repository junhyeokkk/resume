import SectionTitle from "./SectionTitle";
import { skills } from "@/app/data/resume";

export default function SkillSection() {
  return (
    <section id="skill" className="mb-14 scroll-mt-24">
      <SectionTitle title="SKILL" />

      <div className="mt-6 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200/70">
        <div className="space-y-6">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={i !== skills.length - 1 ? "border-b border-slate-200 pb-6" : ""}
            >
              <div className="grid grid-cols-12 gap-4 items-start">
                
                {/* 카테고리 */}
                <div className="col-span-12 md:col-span-3">
                  <h4 className="text-sm font-semibold text-slate-600">
                    {group.category}
                  </h4>
                </div>

                {/* 스킬 */}
                <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}