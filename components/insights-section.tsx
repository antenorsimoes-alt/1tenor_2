import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Radar, Cctv, Train, Car, TrafficCone, Zap } from "lucide-react"

const insights = [
  {
    icon: Radar,
    category: "LiDAR Technology",
    title: "3D Traffic Sensing with LiDAR",
    description:
      "LiDAR sensors create precise 3D models of traffic flow, enabling anonymous vehicle counting, speed detection, and near-miss analysis at intersections without privacy concerns.",
    tags: ["Point Clouds", "Traffic Analysis", "Privacy-First"],
  },
  {
    icon: Cctv,
    category: "Smart Cameras",
    title: "AI-Powered Speed Cameras",
    description:
      "Next-generation enforcement cameras use AI to detect speeding, red-light violations, and dangerous driving behaviors while providing real-time traffic analytics.",
    tags: ["Edge AI", "Enforcement", "Analytics"],
  },
  {
    icon: TrafficCone,
    category: "Signal Control",
    title: "Adaptive Traffic Signals",
    description:
      "Smart traffic lights that respond to real-time conditions, prioritizing emergency vehicles, optimizing green waves, and reducing congestion at peak hours.",
    tags: ["Real-Time", "Emergency Priority", "Green Waves"],
  },
  {
    icon: Train,
    category: "Rail Systems",
    title: "Smart Rail & Transit",
    description:
      "Integrated monitoring systems for trains, trams, and metro networks that optimize schedules, predict maintenance needs, and enhance passenger information.",
    tags: ["Predictive Maintenance", "Scheduling", "Passenger Info"],
  },
  {
    icon: Car,
    category: "Connected Vehicles",
    title: "V2X Communication",
    description:
      "Vehicle-to-everything technology enabling cars to communicate with traffic signals, other vehicles, and infrastructure for safer, more efficient roads.",
    tags: ["V2I", "V2V", "Safety Alerts"],
  },
  {
    icon: Zap,
    category: "EV Infrastructure",
    title: "Smart Charging Networks",
    description:
      "Intelligent EV charging stations with dynamic pricing, grid balancing, and integration with public transit hubs for seamless multimodal journeys.",
    tags: ["Grid Balancing", "Transit Integration", "Dynamic Pricing"],
  },
]

export function InsightsSection() {
  return (
    <section id="insights" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Ideas & Insights
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Technologies Shaping Tomorrow&apos;s Cities
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            We stay at the forefront of emerging technologies that are revolutionizing
            urban mobility and smart city development. Here&apos;s what we&apos;re excited about.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <Card
              key={insight.title}
              className="group flex flex-col border-border/50 bg-background transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <insight.icon className="h-6 w-6" />
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
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-primary hover:underline"
          >
            <span>Discuss these technologies with us</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
