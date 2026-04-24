import { Radar, Cctv, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TechnologySpotlight() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Technology Spotlight
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Deep Dive: Our Focus Areas
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
                  LiDAR for Smart Cities
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Light Detection and Ranging technology is revolutionizing how cities
                  understand and manage their physical environment.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Traffic Flow Analysis</p>
                    <p className="text-sm text-muted-foreground">
                      Anonymous vehicle and pedestrian counting with speed and trajectory data
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Infrastructure Monitoring</p>
                    <p className="text-sm text-muted-foreground">
                      Detect road surface conditions, structural changes, and maintenance needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Safety Applications</p>
                    <p className="text-sm text-muted-foreground">
                      Near-miss detection and hazard identification at intersections
                    </p>
                  </div>
                </div>
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
                  AI-Powered Smart Cameras
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Computer vision and edge AI transform standard cameras into intelligent
                  sensors that understand and respond to urban dynamics.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Adaptive Signal Control</p>
                    <p className="text-sm text-muted-foreground">
                      Real-time adjustment of traffic signals based on actual demand
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Incident Detection</p>
                    <p className="text-sm text-muted-foreground">
                      Automatic identification of accidents, breakdowns, and unusual events
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Multimodal Analytics</p>
                    <p className="text-sm text-muted-foreground">
                      Track vehicles, cyclists, pedestrians, and transit simultaneously
                    </p>
                  </div>
                </div>
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
            Learn More About Our Approach
          </Button>
        </div>
      </div>
    </section>
  )
}
