"use client"

import { Radar, Cctv, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function TechnologySpotlight() {
  const { t } = useLanguage()

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            {t.spotlight.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.spotlight.title}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* LiDAR Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 transition-all hover:shadow-xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
            <div className="relative flex flex-col gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Radar className="h-8 w-8" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {t.spotlight.lidarCard.title}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {t.spotlight.lidarCard.description}
                </p>
              </div>
              <div className="space-y-3">
                {t.spotlight.lidarCard.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Cameras Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 transition-all hover:shadow-xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
            <div className="relative flex flex-col gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Cctv className="h-8 w-8" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {t.spotlight.cameraCard.title}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {t.spotlight.cameraCard.description}
                </p>
              </div>
              <div className="space-y-3">
                {t.spotlight.cameraCard.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
          >
            {t.spotlight.buttonLearMore}
          </Button>
        </div>
      </div>
    </section>
  )
}