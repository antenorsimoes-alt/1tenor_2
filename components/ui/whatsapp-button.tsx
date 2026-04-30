"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function WhatsAppButton() {
  const { t } = useLanguage()
  
  const phoneNumber = "5521998387013" 
  const message = encodeURIComponent(t.whatsapp.defaultMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      // Adicionamos 'flex items-center' para alinhar o texto com o botão
      className="fixed bottom-6 right-6 z-50 flex items-center group"
      aria-label="WhatsApp"
    >
      {/* Balão de texto (Tooltip) - Visível apenas no hover e em telas maiores (md:block) */}
      <span className="absolute right-full mr-4 hidden md:block whitespace-nowrap rounded-md bg-foreground/90 px-3 py-1.5 text-sm font-medium text-background opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
        WhatsApp
      </span>

      <Button 
        size="icon" 
        className="rounded-full h-14 w-14 bg-[#25D366] hover:bg-[#20ba5a] shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
    </a>
  )
}