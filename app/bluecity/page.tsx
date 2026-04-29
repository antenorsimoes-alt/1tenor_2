"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  Zap, Layers, Maximize, Shield, Moon, CloudRain, ShieldCheck, 
  Check, AlertTriangle, Car, Activity, Wifi, Clock, ArrowUp, 
  Wrench, Award, Lock, Droplets, ChevronLeft
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

// Componente de Slide com a Imagem de Fundo (Nuvem de Pontos)
function Slide({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative flex w-full max-w-6xl flex-col items-start justify-center overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.4)] md:h-[720px] md:p-16 p-10 ${className}`}>
      
      {/* IMAGEM DE FUNDO DO SLIDE (A Nuvem de Pontos) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bluecity/background.png" 
          alt="LiDAR Point Cloud Background" 
          fill 
          className="object-cover opacity-40 grayscale-[0.5]" // Ajuste de opacidade para legibilidade
        />
        {/* Overlay de gradiente para garantir que o texto branco "salte" da imagem */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/80" />
      </div>

      {/* Brilho Verde sutil (decorativo) */}
      <div className="absolute -right-[5%] -top-[5%] z-0 h-[500px] w-[500px] rounded-full bg-[#00c49a] opacity-[0.1] blur-[120px]" />
      
      {/* CONTEÚDO DO SLIDE */}
      <div className="relative z-10 w-full flex-grow flex flex-col justify-center">
        {children}
      </div>
    </div>
  )
}

export default function BlueCityPage() {
  const { t } = useLanguage()
  const content = t.bluecityHotsite

  return (
    /* FUNDO DA PÁGINA (Efeito de vidro sobre o site cinza claro) */
    <main className="flex min-h-screen flex-col items-center gap-20 bg-slate-200/40 backdrop-blur-xl py-20 px-4 font-sans selection:bg-[#00c49a]/30">
      
      {/* BOTÃO VOLTAR FIXO */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-[#00c49a] hover:text-white hover:border-[#00c49a]"
        >
          <ChevronLeft size={16} />
          {content.backLink}
        </Link>
      </div>

      {/* SLIDE 1: Capa */}
      <Slide className="items-center text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-tighter text-white md:text-8xl drop-shadow-md">
          {content.hero.title} <span className="text-[#00c49a]">{content.hero.span}</span>
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-200 md:text-2xl font-medium">
          {content.hero.subtitle}
        </p>
        <div className="mt-12 inline-block rounded-full border border-[#00c49a]/30 bg-[#00c49a]/20 px-8 py-3 text-lg font-bold text-[#00c49a] md:text-xl backdrop-blur-sm">
          {content.hero.badge}
        </div>
      </Slide>

      {/* SLIDE 2: Arquitetura */}
      <Slide>
        <h2 className="mb-12 w-full text-left text-4xl font-bold text-white md:text-5xl">
          {content.architecture.title} <span className="text-[#00c49a]">{content.architecture.span}</span>
        </h2>
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#00c49a]">{content.architecture.heading}</h3>
            <p className="text-xl text-slate-100">{content.architecture.description}</p>
            <ul className="flex flex-col gap-6 text-lg text-slate-300">
              {content.architecture.items.map((item, i) => {
                const icons = [<Zap key={0}/>, <Layers key={1}/>, <Maximize key={2}/>, <Shield key={3}/>]
                return (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-[#00c49a]">{icons[i]}</span> {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm">
            <Image src="/images/bluecity/sensor.png" alt="Sensor" fill className="object-contain p-4" />
          </div>
        </div>
      </Slide>

      {/* SLIDE 3: LiDAR vs Câmera */}
      <Slide>
        <h2 className="mb-12 w-full text-left text-4xl font-bold text-white md:text-5xl">
          {content.comparison.title} <span className="text-[#00c49a]">{content.comparison.span}</span>
        </h2>
        <div className="grid w-full gap-8 md:grid-cols-3">
          {content.comparison.cards.map((card, i) => {
            const icons = [<Moon key={0}/>, <CloudRain key={1}/>, <ShieldCheck key={2}/>]
            return (
              <div key={i} className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-md shadow-inner">
                <span className="mb-6 block text-[#00c49a]">
                    {React.cloneElement(icons[i] as React.ReactElement, { size: 48 })}
                </span>
                <h3 className="mb-4 text-2xl font-bold text-white">{card.title}</h3>
                <p className="text-slate-300">{card.description}</p>
              </div>
            )
          })}
        </div>
      </Slide>

      {/* SLIDE 4: Dashboard */}
      <Slide>
        <h2 className="mb-12 w-full text-left text-4xl font-bold text-white md:text-5xl">
          {content.intersections.title} <span className="text-[#00c49a]">{content.intersections.span}</span>
        </h2>
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm">
            <Image src="/images/bluecity/dashboard.png" alt="Dashboard" fill className="object-contain" />
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[#00c49a]">{content.intersections.heading}</h3>
            <ul className="flex flex-col gap-5 text-lg text-slate-200">
              {content.intersections.items.map((item, i) => (
                <li key={i} className="flex items-center gap-4"><Check className="text-[#00c49a]" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>

      {/* SLIDE 5: Rodovias */}
      <Slide>
        <h2 className="mb-12 w-full text-left text-4xl font-bold text-white md:text-5xl">
          {content.highways.title} <span className="text-[#00c49a]">{content.highways.span}</span>
        </h2>
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[#00c49a]">{content.highways.heading}</h3>
            <ul className="flex flex-col gap-6 text-lg text-slate-200">
              {content.highways.items.map((item, i) => {
                const icons = [<AlertTriangle key={0} className="text-orange-400"/>, <Car key={1}/>, <Activity key={2}/>, <Wifi key={3}/>]
                return (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-[#00c49a]">{icons[i]}</span> {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-white/20">
            <Image src="/images/bluecity/highway.png" alt="Highway" fill className="object-cover" />
          </div>
        </div>
      </Slide>

      {/* SLIDE 6: Instalação */}
      <Slide>
        <h2 className="mb-12 w-full text-left text-4xl font-bold text-white md:text-5xl">
          {content.installation.title} <span className="text-[#00c49a]">{content.installation.span}</span>
        </h2>
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          <div className="relative h-[450px] w-full overflow-hidden rounded-2xl border border-white/20">
            <Image src="/images/bluecity/pole.png" alt="Installation" fill className="object-cover" />
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[#00c49a]">{content.installation.heading}</h3>
            <ul className="flex flex-col gap-6 text-lg text-slate-200">
              {content.installation.items.map((item, i) => {
                const icons = [<Clock key={0}/>, <ArrowUp key={1}/>, <Wrench key={2}/>, <Award key={3}/>]
                return (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-[#00c49a]">{icons[i]}</span> {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Slide>

      {/* SLIDE 7: Certificações */}
      <Slide>
        <h2 className="mb-16 w-full text-left text-4xl font-bold text-white md:text-5xl">
          {content.certifications.title} <span className="text-[#00c49a]">{content.certifications.span}</span>
        </h2>
        <div className="grid w-full gap-8 md:grid-cols-3">
          {content.certifications.cards.map((card, i) => {
            const icons = [<Award key={0}/>, <Lock key={1}/>, <Droplets key={2}/>]
            return (
              <div key={i} className="flex flex-col items-center rounded-3xl border border-white/10 bg-black/60 p-10 text-center shadow-lg backdrop-blur-md">
                <span className="mb-6 block text-[#00c49a]">
                  {React.cloneElement(icons[i] as React.ReactElement, { size: 64 })}
                </span>
                <h4 className="mb-2 text-2xl font-bold text-white">{card.title}</h4>
                <p className="text-slate-300">{card.description}</p>
              </div>
            )
          })}
        </div>
      </Slide>

      {/* SLIDE 8: Contato Final */}
      <Slide className="items-center text-center">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            {content.footer.title} <span className="text-[#00c49a]">{content.footer.span}</span>
          </h2>
          <p className="text-2xl font-medium text-slate-200 md:text-3xl">
            {content.footer.subtitle}
          </p>
          <div className="pt-16">
            <h3 className="text-4xl font-bold text-white">{content.footer.name}</h3>
            <p className="text-xl text-[#00c49a] font-medium">{content.footer.role}</p>
          </div>
        </div>
      </Slide>

    </main>
  )
}