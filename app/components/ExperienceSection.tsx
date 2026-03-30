import SectionTitle from "./SectionTitle";

export default function ExperienceSection() {
  return (
    <section className="mb-14">
      <SectionTitle title="EXPERIENCE" />

      <div className="mt-6 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-md">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">(주) 랩오투원</h3>
            <p className="mt-1 text-base font-medium text-slate-600">
              백엔드 개발자
            </p>
          </div>

          <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            재직 중
          </span>
        </div>

        <ul className="mt-6 space-y-3 text-[15px] leading-7 text-slate-700">
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
            <span>선박 데이터 검증 및 관리 백엔드 API 개발</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
            <span>Azure Cosmos DB 및 Blob Storage 기반 데이터 처리</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
            <span>Jenkins 기반 Azure App Service CI/CD 구성</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
            <span>운영 데이터 비교 및 검증 자동화 기능 구현</span>
          </li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Node.js",
            "TypeScript",
            "Express",
            "MSSQL",
            "Azure Cosmos DB",
            "Azure Blob Storage",
            "Jenkins",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}