"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from "@/app/actions" // 1. IMPORTAMOS A FUNÇÃO AQUI

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Get in Touch
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Let&apos;s Build the Future Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Interested in exploring smart city technologies for your project? 
              Send us a message and we&apos;ll get back to you shortly.
            </p>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-card p-6 shadow-lg md:p-8">
            {/* 2. ADICIONAMOS A ACTION AQUI */}
            <form action={sendEmail} className="flex flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName" // <- ADICIONADO
                    placeholder="John"
                    className="bg-background"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName" // <- ADICIONADO
                    placeholder="Doe"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email" // <- ADICIONADO
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="organization" className="text-sm font-medium text-foreground">
                  Organization
                </label>
                <Input
                  id="organization"
                  name="organization" // <- ADICIONADO
                  placeholder="City of Example"
                  className="bg-background"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message" // <- ADICIONADO
                  placeholder="Tell us about your project or ask about our technology insights..."
                  rows={4}
                  className="bg-background"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
