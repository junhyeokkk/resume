import Image from "next/image";
import { Mail, Phone, BookOpen } from "lucide-react";
import { profile } from "@/app/data/resume";

export default function ProfileHeader() {
  return (
    <section className="print-card print-section mb-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200/70 md:p-10">
      <div className="print-header-layout flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
        <div className="print-header-text print-left flex-1">
          <span className="badge-grad inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] text-blue-700 ring-1 ring-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
            {profile.role.toUpperCase()}
          </span>

          <h1 className="text-gradient mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-3 text-sm uppercase tracking-widest text-slate-500">
            {profile.role}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700">
            데이터 처리, 검증 자동화, Azure 기반 백엔드 개발에 강점을 가진
            백엔드 개발자입니다.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
            >
              <Mail size={16} />
              {profile.email}
            </a>

            <a
              href={`tel:${profile.phone.replace(/-/g, "")}`}
              className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
            >
              <Phone size={16} />
              {profile.phone}
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.27 7.79 10.77.57.1.78-.25.78-.55 
                0-.27-.01-1.17-.02-2.12-3.17.69-3.84-1.53-3.84-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 
                1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.53-.29-5.2-1.26-5.2-5.62 
                0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16.91-.25 1.88-.38 2.85-.38.97 
                0 1.94.13 2.85.38 2.19-1.47 3.15-1.16 3.15-1.16.62 1.57.23 2.73.11 3.02.73.8 1.17 1.81 1.17 3.05 
                0 4.37-2.67 5.33-5.21 5.62.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.13 0 .3.21.66.79.55 
                4.53-1.5 7.78-5.75 7.78-10.77C23.25 5.48 18.27.5 12 .5z" />
              </svg>
              GitHub
            </a>

            <a
              href={profile.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
            >
              <BookOpen size={16} />
              Blog
            </a>
          </div>
        </div>

        <div className="print-header-photo-wrap flex justify-center md:justify-end">
          <div className="print-header-photo photo-ring relative h-40 w-40 rounded-full p-1 shadow-md md:h-48 md:w-48">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
              <Image
                src="/profile.jpg"
                alt={`${profile.name} 프로필 사진`}
                fill
                sizes="(min-width: 768px) 12rem, 10rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}