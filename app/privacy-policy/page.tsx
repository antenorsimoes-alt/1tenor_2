"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const content = translations[language].privacyPolicy;

  if (!content) return null;

  return (
    <main className="min-h-screen py-20 bg-gray-50 relative">
      {/* BOTÃO VOLTAR FIXO */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-[#00c49a] hover:text-white hover:border-[#00c49a]"
        >
          <ChevronLeft size={16} />
          {content.backLink}
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          {content.title}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {content.lastUpdated}
        </p>

        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}