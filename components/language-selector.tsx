"use client"

import { useLanguage, Locale } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSelector() {
  const { locale, setLocale, t } = useLanguage()

  const languages: { code: Locale; label: string; flag: string }[] = [
    { code: "en", label: t.language.en, flag: "EN" },
    { code: "pt-BR", label: t.language.ptBR, flag: "PT" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-foreground/80 hover:text-foreground"
        >
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">{locale === "en" ? "EN" : "PT"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className={`flex items-center gap-2 ${
              locale === lang.code ? "bg-secondary" : ""
            }`}
          >
            <span className="text-xs font-medium text-muted-foreground">{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
