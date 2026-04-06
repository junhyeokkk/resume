"use client";

import { Printer } from "lucide-react";

export default function PrintResumeButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      aria-label="이력서 인쇄 또는 PDF 저장"
      className="
        print:hidden
        fixed bottom-8 right-8 z-50
        flex h-14 w-14 items-center justify-center
        rounded-2xl
        border border-slate-200
        bg-white/95
        text-slate-700
        shadow-lg
        backdrop-blur
        transition
        hover:-translate-y-0.5
        hover:border-blue-200
        hover:text-blue-600
        hover:shadow-xl
      "
    >
      <Printer className="h-5 w-5" />
    </button>
  );
}