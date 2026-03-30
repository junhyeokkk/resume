import Image from "next/image";

export default function ProfileHeader() {
  return (
    <section className="mb-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200/70 md:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-blue-600">
            BACKEND DEVELOPER
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            최준혁
          </h1>

          <p className="mt-3 text-lg text-slate-600 md:text-xl">
            Node.js · TypeScript · Azure
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700">
            데이터 처리, 검증 자동화, Azure 기반 백엔드 개발에 강점을 가진
            개발자입니다.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:loveu9911@naver.com"
              className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-200"
            >
              loveu9911@naver.com
            </a>

            <a
              href="https://github.com/junhyeokkk"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-200"
            >
              GitHub
            </a>

            <a
              href="https://junhyeokkk.tistory.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-200"
            >
              Blog
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-slate-200 shadow-md md:h-48 md:w-48">
            <Image
              src="/profile.jpg"
              alt="최준혁 프로필 사진"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}