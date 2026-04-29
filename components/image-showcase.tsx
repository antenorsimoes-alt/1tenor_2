"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n"

export function ImageShowcase() {
  const { t } = useLanguage()

  const showcaseImages = [
    {
      src: "/images/smart-traffic.jpg",
      alt: t.imageShowcase.images.traffic.alt,
      title: t.imageShowcase.images.traffic.title,
      description: t.imageShowcase.images.traffic.description,
    },
    {
      src: "/images/lidar-sensing.jpg",
      alt: t.imageShowcase.images.lidar.alt,
      title: t.imageShowcase.images.lidar.title,
      description: t.imageShowcase.images.lidar.description,
    },
    {
      src: "/images/smart-rail.jpg",
      alt: t.imageShowcase.images.rail.alt,
      title: t.imageShowcase.images.rail.title,
      description: t.imageShowcase.images.rail.description,
    },
  ]

  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            {t.imageShowcase.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.imageShowcase.title}
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {t.imageShowcase.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {showcaseImages.map((image) => (
            <div
              key={image.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {image.title}
                </h3>
                <p className="text-sm text-white/80">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
