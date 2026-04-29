"use client"

import { CheckCircle, Lightbulb, Target, Rocket } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary">
              <div className="flex h-full w-full items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-card p-6 shadow-lg">
                    <Lightbulb className="h-8 w-8 text-primary" />
                    <span className="text-center text-sm font-medium text-foreground">
                      {t.about.cards.ideas}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-primary p-6 shadow-lg">
                    <Target className="h-8 w-8 text-primary-foreground" />
                    <span className="text-center text-sm font-medium text-primary-foreground">
                      {t.about.cards.vision}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-primary p-6 shadow-lg">
                    <Rocket className="h-8 w-8 text-primary-foreground" />
                    <span className="text-center text-sm font-medium text-primary-foreground">
                      {t.about.cards.innovation}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-card p-6 shadow-lg">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <span className="text-center text-sm font-medium text-foreground">
                      {t.about.cards.results}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              {t.about.badge}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.about.title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.about.paragraph1}
            </p>
            <p className="text-muted-foreground">
              {t.about.paragraph2}
            </p>

            <ul className="flex flex-col gap-3">
              {t.about.highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}