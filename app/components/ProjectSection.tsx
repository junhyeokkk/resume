import SectionTitle from "./SectionTitle";
import { projects } from "@/app/data/resume";

export default function ProjectSection() {
    return (
        <section id="project" className="mb-14 scroll-mt-24">
            <SectionTitle title="PROJECT" />

            <div className="mt-6 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200/70 space-y-6 text-[15px] leading-7 text-slate-700">
                {projects.map((project, i) => (
                    <div
                        key={`${project.title}-${project.period}`}
                        className="grid grid-cols-12 gap-6 border-b border-slate-200 pb-8 last:border-none"
                    >
                        {/* 기간 */}
                        <div className="col-span-12 md:col-span-3">
                            <div className="border-l-2 border-blue-500 pl-3">
                                <span className="text-sm font-semibold tracking-wide text-slate-500">
                                    {project.period}
                                </span>
                            </div>
                        </div>

                        {/* 내용 */}
                        <div className="col-span-12 md:col-span-9">
                            <h3 className="text-lg font-semibold text-slate-900">
                                {project.title}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                {project.subtitle}
                            </p>

                            <ul className="mt-4 space-y-2 text-[15px] leading-7 text-slate-700">
                                {project.descriptions.map((desc, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                                        <span>{desc}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}