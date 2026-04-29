"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

// Mantemos os caminhos das imagens aqui, na mesma ordem das traduções
const imagePaths = [
  "/images/smart-traffic.jpg",
  "/images/lidar-sensing.jpg",
  "/images/smart-rail.jpg"
]

export function ImageShowcase() {
  const { t } = useLanguage()

  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            {t.showcase.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.showcase.title}
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {t.showcase.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.showcase.items.map((item, index) => {
            const imageSrc = imagePaths[index]

            return (
              <div  
                key={item.title}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={item.alt}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mb-1 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}