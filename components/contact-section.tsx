"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from "@/app/actions"
import { useLanguage } from "@/components/language-provider"

export function ContactSection() {
  const { t } = useLanguage()
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)

    if (formData.get("bot_field")) {
      setIsSuccess(true)
      return
    }

    setIsPending(true)
    
    try {
      await sendEmail(formData)
      setIsSuccess(true)
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      alert(t.contact.errorAlert)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              {t.contact.badge}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.contact.description}
            </p>
          </div>

          {/* Área do Formulário */}
          <div className="rounded-2xl bg-card p-6 shadow-lg md:p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                <div className="mb-4 rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t.contact.successTitle}</h3>
                <p className="mt-2 text-muted-foreground">
                  {t.contact.successDescription}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => setIsSuccess(false)}
                >
                  {t.contact.successButton}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* CAMPO HONEYPOT */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="bot_field">{t.contact.form.honeypot}</label>
                  <input type="text" id="bot_field" name="bot_field" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      {t.contact.form.firstNameLabel}
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder={t.contact.form.firstNamePlaceholder}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      {t.contact.form.lastNameLabel}
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder={t.contact.form.lastNamePlaceholder}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    {t.contact.form.emailLabel}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="organization" className="text-sm font-medium text-foreground">
                    {t.contact.form.organizationLabel}
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    placeholder={t.contact.form.organizationPlaceholder}
                    className="bg-background"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    {t.contact.form.messageLabel}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={4}
                    required
                    className="bg-background"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isPending ? t.contact.form.buttonSending : t.contact.form.buttonSend}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}