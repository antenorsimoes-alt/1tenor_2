"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Verifica se a tradução existe antes de renderizar
  if (!t.privacyPolicy) return null;

  return (
    <main className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 relative">
      {/* BOTÃO VOLTAR FIXO */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-[#00c49a] hover:text-white hover:border-[#00c49a]"
        >
          <ChevronLeft size={16} />
          {/* Se você tiver a tradução para "Voltar", ajuste a variável abaixo */}
          {t.backLink || "Voltar"}
        </Link>
      </div>

      {/* Adicionei um mt-8 aqui para o botão não ficar em cima do título em telas menores */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {t.privacyPolicy.title}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {t.privacyPolicy.lastUpdated}
        </p>

        <div className="space-y-8">
          {t.privacyPolicy.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-wrap">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}