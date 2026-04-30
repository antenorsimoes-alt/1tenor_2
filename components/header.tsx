"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, ChevronDown, Check } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Definimos os idiomas fora do componente para facilitar a adição de novos no futuro
const AVAILABLE_LANGUAGES = [
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'en', label: 'EN', name: 'English' },
  // { code: 'es', label: 'ES', name: 'Español' }, <-- Exemplo de como seria fácil adicionar depois
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  const navLinks = [
    { href: "#insights", label: t.header.insights },
    { href: "#about", label: t.header.about },
    { href: "#contact", label: t.header.contact },
  ]

  // Encontra o idioma atual para exibir no trigger do dropdown
  const currentLang = AVAILABLE_LANGUAGES.find((l) => l.code === language) || AVAILABLE_LANGUAGES[0]

  // Extraímos o seletor para um mini-componente interno para não repetir código no Desktop e Mobile
  const LanguageDropdown = ({ isMobile = false }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className={`flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer outline-none ${!isMobile && "ml-2"}`}
        >
          <Globe className={`${isMobile ? "h-5 w-5" : "h-4 w-4"}`} />
          <span>{currentLang.label}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isMobile ? "start" : "end"} className="w-40">
        {AVAILABLE_LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            {lang.name}
            {language === lang.code && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-bold text-foreground">1Tenor</span>
          <span className="text-lg text-muted-foreground">Consulting</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Seletor de Idioma (Desktop) */}
          <LanguageDropdown />

          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 ml-2">
            <a href="#contact">{t.header.getStarted}</a>
          </Button>
        </nav>

        {/* Mobile Menu Button & Language Selector */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Seletor de Idioma (Mobile) */}
          <LanguageDropdown isMobile={true} />

          <button
            className="flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                {t.header.getStarted}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}