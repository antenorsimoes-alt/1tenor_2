import { CheckCircle, Lightbulb, Target, Rocket } from "lucide-react"

const highlights = [
  "Deep expertise in emerging smart city technologies",
  "Technology-agnostic approach focused on outcomes",
  "Commitment to sustainable and equitable solutions",
  "Collaborative partnership model",
]

export function AboutSection() {
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
                    <span className="text-center text-sm font-medium text-foreground">Fresh Ideas</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-primary p-6 shadow-lg">
                    <Target className="h-8 w-8 text-primary-foreground" />
                    <span className="text-center text-sm font-medium text-primary-foreground">Clear Vision</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-primary p-6 shadow-lg">
                    <Rocket className="h-8 w-8 text-primary-foreground" />
                    <span className="text-center text-sm font-medium text-primary-foreground">Innovation</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-card p-6 shadow-lg">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <span className="text-center text-sm font-medium text-foreground">Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A New Perspective on Urban Mobility
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              1Tenor Consulting was founded to bridge the gap between emerging
              technologies and practical urban implementation. We bring together
              expertise in smart city systems, data analytics, and sustainable
              transportation planning.
            </p>
            <p className="text-muted-foreground">
              As a new consultancy, we offer the agility to embrace cutting-edge
              solutions without legacy constraints. We partner with forward-thinking
              municipalities and organizations ready to shape the future of urban mobility.
            </p>

            <ul className="flex flex-col gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
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
