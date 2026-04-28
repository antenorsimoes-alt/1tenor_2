"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from "@/app/actions"

export function ContactSection() {
  // Estados para controlar a interface de usuário (UX)
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Função que intercepta o envio do formulário
  async function handleSubmit(event) {
    event.preventDefault() // Evita que a página recarregue
    
    const formData = new FormData(event.currentTarget)

    // 1. VERIFICAÇÃO DO HONEYPOT (Anti-Spam)
    // Se o robô preencher este campo escondido, nós o enganamos
    if (formData.get("bot_field")) {
      setIsSuccess(true)
      return
    }

    // 2. INICIA O ENVIO REAL
    setIsPending(true)
    
    try {
      await sendEmail(formData)
      setIsSuccess(true) // Mostra a mensagem de sucesso!
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      alert("Oops! Something went wrong. Please try again.")
    } finally {
      setIsPending(false) // Tira o botão do estado de "carregando"
    }
  }

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

          {/* Área do Formulário */}
          <div className="rounded-2xl bg-card p-6 shadow-lg md:p-8">
            
            {/* Se isSuccess for VERDADEIRO, mostra a mensagem de sucesso */}
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                <div className="mb-4 rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thank you for reaching out. We will get back to you very soon.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => setIsSuccess(false)} // Botão para enviar nova mensagem
                >
                  Send another message
                </Button>
              </div>
            ) : (
              // Se isSuccess for FALSO, mostra o formulário normalmente
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* CAMPO HONEYPOT (Invisível para humanos, visível para robôs) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="bot_field">Do not fill this out if you are human</label>
                  <input type="text" id="bot_field" name="bot_field" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
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
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="organization" className="text-sm font-medium text-foreground">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
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
                    name="message"
                    placeholder="Tell us about your project or ask about our technology insights..."
                    rows={4}
                    required
                    className="bg-background"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isPending} // Desativa o botão enquanto envia
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}