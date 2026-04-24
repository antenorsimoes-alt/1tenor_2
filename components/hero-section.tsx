"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Link2, Car, Cctv, Train } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-2">
              <Link2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Building Sustainable Urban Futures
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">
                Transforming Cities Through{" "}
              </span>
              <span className="text-primary">Intelligent Mobility</span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              We bring fresh perspectives and cutting-edge technology expertise to
              help governments and organizations navigate the future of urban mobility
              and smart city infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/20 bg-card hover:bg-accent"
              >
                Explore Our Ideas
              </Button>
            </div>

            {/* Divider */}
            <div className="my-4 h-px w-full bg-border" />

            {/* Focus Areas */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-foreground">
                Our Technology Focus
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-secondary px-3 py-1 text-sm text-primary">
                  LiDAR Sensing
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-sm text-primary">
                  AI Vision Systems
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-sm text-primary">
                  IoT Networks
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-sm text-primary">
                  Digital Twins
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual - Animated */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px]">
              {/* Outer circle - slow rotation */}
              <div className="absolute inset-0 animate-[spin_30s_linear_infinite] rounded-full border-2 border-primary/20" />
              
              {/* Middle circle - reverse rotation */}
              <div className="absolute inset-8 animate-[spin_25s_linear_infinite_reverse] rounded-full border-2 border-primary/30" />
              
              {/* Inner filled circle - pulse */}
              <div className="absolute inset-16 animate-pulse rounded-full bg-primary/10" />
              
              {/* Center Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/30 shadow-xl md:h-40 md:w-40 lg:h-48 lg:w-48">
                  <Image
                    src="/images/profile.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Semi-circle arc - rotating */}
              <svg
                className="absolute inset-0 h-full w-full animate-[spin_20s_linear_infinite]"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 70 15 A 40 40 0 0 1 85 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/40"
                />
                <path
                  d="M 30 85 A 40 40 0 0 1 15 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/40"
                />
              </svg>

              {/* Orbiting container for icon cards */}
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                {/* Car icon - top */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 animate-[spin_20s_linear_infinite_reverse]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-card shadow-lg transition-transform duration-300 hover:scale-110 md:h-16 md:w-16">
                    <Car className="h-6 w-6 text-primary md:h-7 md:w-7" />
                  </div>
                </div>

                {/* Speed camera icon - right */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite_reverse]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-card shadow-lg transition-transform duration-300 hover:scale-110 md:h-16 md:w-16">
                    <Cctv className="h-6 w-6 text-primary md:h-7 md:w-7" />
                  </div>
                </div>

                {/* Train icon - bottom left */}
                <div className="absolute bottom-8 left-4 animate-[spin_20s_linear_infinite_reverse]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-card shadow-lg transition-transform duration-300 hover:scale-110 md:h-16 md:w-16">
                    <Train className="h-6 w-6 text-primary md:h-7 md:w-7" />
                  </div>
                </div>
              </div>

              {/* Floating dots decoration */}
              <div className="absolute right-12 top-12 h-2 w-2 animate-ping rounded-full bg-primary/60" style={{ animationDuration: '2s' }} />
              <div className="absolute bottom-20 left-12 h-2 w-2 animate-ping rounded-full bg-primary/60" style={{ animationDuration: '3s', animationDelay: '1s' }} />
              <div className="absolute bottom-12 right-20 h-2 w-2 animate-ping rounded-full bg-primary/60" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
