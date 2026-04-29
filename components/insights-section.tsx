"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Radar, Cctv, Train, Car, TrafficCone, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

// Mantemos apenas os ícones aqui, na mesma ordem dos itens do array de tradução
const insightIcons = [Radar, Cctv, TrafficCone, Train, Car, Zap]

export function InsightsSection() {
  const { t } = useLanguage()

  return (
    <section id="insights" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            {t.insights.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.insights.title}
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {t.insights.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.insights.items.map((insight, index) => {
            // Pegamos o ícone correspondente pelo índice (posição no array)
            const IconComponent = insightIcons[index]
            
            return (
              <Card
                key={insight.title}
                className="group flex flex-col border-border/50 bg-background transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-normal">
                      {insight.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-foreground">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-4">
                  <CardDescription className="text-muted-foreground">
                    {insight.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {insight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-primary hover:underline"
          >
            <span>{t.insights.cta}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}