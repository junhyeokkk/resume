import { BookOpen, Mail } from "lucide-react";
import { profile } from "@/app/data/resume";

export default function Footer() {
  return (
    <footer className="print:hidden mt-20 rounded-2xl bg-slate-50/60 px-6 py-8">
      <div className="border-t border-slate-200 pt-8">
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          
          <div>
            <p className="text-base font-semibold tracking-tight text-slate-900">
              최준혁
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">
              Backend Developer
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
            >
              <Mail size={14} />
              <span>{profile.email}</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
            >
              <span>GitHub</span>
            </a>

            <a
              href={profile.blog}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
            >
              <BookOpen size={14} />
              <span>Blog</span>
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-4 text-xs text-slate-400 md:flex-row">
          <span>Built with Next.js & Tailwind CSS</span>
          <span>© {new Date().getFullYear()} Junhyeok Choi</span>
        </div>
      </div>
    </footer>
  );
}