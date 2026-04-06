import { introduce } from "../data/resume";
import SectionTitle from "./SectionTitle";

export default function IntroduceSection() {
    return (
        <section id="introduce" className="mb-14 scroll-mt-24">
            <SectionTitle title="INTRODUCE" />

            <div className="mt-6 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200/70 space-y-6 text-[15px] leading-7 text-slate-700">
                {introduce.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
            </div>
        </section>
    );
}