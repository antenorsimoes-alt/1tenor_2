import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
// AJUSTE: Importando o nosso provider de idioma
import { LanguageProvider } from '@/components/language-provider'
// AJUSTE: Importando o botão do WhatsApp (da pasta ui, como você solicitou)
import WhatsAppButton from '@/components/ui/whatsapp-button'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '1Tenor Consulting | Urban Mobility & Smart Cities',
  description: 'Transforming cities through intelligent mobility. We partner with governments and organizations to design, implement, and optimize smart city infrastructure and urban mobility solutions.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        {/* AJUSTE: Envolvendo a aplicação inteira com o LanguageProvider */}
        <LanguageProvider>
          {children}
          
          {/* O botão do WhatsApp é renderizado globalmente aqui */}
          <WhatsAppButton />
        </LanguageProvider>
        
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}