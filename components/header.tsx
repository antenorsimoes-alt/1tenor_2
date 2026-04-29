"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react" // Adicionei o ícone Globe
import { useState } from "react"
import { useLanguage } from "@/components/language-provider" // Importação do nosso hook

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage() // Pegando funções e textos

  // Movemos o array para dentro para ele ter acesso ao objeto 't'
  const navLinks = [
    { href: "#insights", label: t.header.insights },
    { href: "#about", label: t.header.about },
    { href: "#contact", label: t.header.contact },
  ]

  // Função para alternar o idioma
  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

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
          
          {/* Botão de Trocar Idioma (Desktop) */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors ml-2 cursor-pointer"
          >
            <Globe className="h-4 w-4" />
            {language === 'pt' ? 'EN' : 'PT'}
          </button>

          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 ml-2">
            <a href="#contact">{t.header.getStarted}</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Botão de Trocar Idioma (Mobile) */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center text-sm font-medium text-foreground/80 cursor-pointer"
          >
            <Globe className="h-5 w-5 mr-1" />
            {language === 'pt' ? 'EN' : 'PT'}
          </button>

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