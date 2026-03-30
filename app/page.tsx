import ExperienceSection from "./components/ExperienceSection";
import ProfileHeader from "./components/ProfileHeader";
import SectionTitle from "./components/SectionTitle";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 lg:py-16">
        <ProfileHeader />

        <section className="mb-14">
          <SectionTitle title="INTRODUCE" />
          <div className="mt-6 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200/70">
            <p className="leading-8 text-slate-700">
              Node.js와 TypeScript 기반 백엔드 개발 경험을 바탕으로
              데이터 처리, 검증 자동화, Azure 환경 운영을 수행해왔습니다.
              운영 환경에서 실제 문제를 해결하는 API를 만들고, 복잡한 데이터
              흐름을 안정적으로 관리하는 일에 강점이 있습니다.
            </p>
          </div>
        </section>

        <ExperienceSection />
      </div>
    </main>
  );
}