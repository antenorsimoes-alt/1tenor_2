"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type Locale = "en" | "pt-BR"

// Dictionary structure
export const dictionaries = {
  en: {
    // Header
    nav: {
      insights: "Ideas & Insights",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
    },
    // Hero Section
    hero: {
      badge: "Building Sustainable Urban Futures",
      title1: "Transforming Cities Through ",
      title2: "Intelligent Mobility",
      description: "We bring fresh perspectives and cutting-edge technology expertise to help governments and organizations navigate the future of urban mobility and smart city infrastructure.",
      cta1: "Schedule a Consultation",
      cta2: "Explore Our Ideas",
      focusTitle: "Our Technology Focus",
      tags: {
        lidar: "LiDAR Sensing",
        aiVision: "AI Vision Systems",
        iot: "IoT Networks",
        digitalTwins: "Digital Twins",
      },
    },
    // Image Showcase
    imageShowcase: {
      badge: "Visual Insights",
      title: "The Future of Urban Mobility",
      description: "From intelligent intersections to connected rail networks, these technologies are reshaping how cities move.",
      images: {
        traffic: {
          title: "Connected Intersections",
          description: "AI-powered traffic management systems that adapt in real-time",
          alt: "Smart traffic intersection with connected vehicles and adaptive signals",
        },
        lidar: {
          title: "LiDAR Sensing",
          description: "3D mapping technology for precise traffic analysis",
          alt: "LiDAR point cloud visualization of urban traffic",
        },
        rail: {
          title: "Smart Rail Systems",
          description: "Integrated transit monitoring and passenger information",
          alt: "Modern smart rail station with digital displays",
        },
      },
    },
    // Insights Section
    insights: {
      badge: "Ideas & Insights",
      title: "Technologies Shaping Tomorrow's Cities",
      description: "We stay at the forefront of emerging technologies that are revolutionizing urban mobility and smart city development. Here's what we're excited about.",
      cta: "Discuss these technologies with us",
      cards: {
        lidar: {
          category: "LiDAR Technology",
          title: "3D Traffic Sensing with LiDAR",
          description: "LiDAR sensors create precise 3D models of traffic flow, enabling anonymous vehicle counting, speed detection, and near-miss analysis at intersections without privacy concerns.",
          tags: ["Point Clouds", "Traffic Analysis", "Privacy-First"],
        },
        cameras: {
          category: "Smart Cameras",
          title: "AI-Powered Speed Cameras",
          description: "Next-generation enforcement cameras use AI to detect speeding, red-light violations, and dangerous driving behaviors while providing real-time traffic analytics.",
          tags: ["Edge AI", "Enforcement", "Analytics"],
        },
        signals: {
          category: "Signal Control",
          title: "Adaptive Traffic Signals",
          description: "Smart traffic lights that respond to real-time conditions, prioritizing emergency vehicles, optimizing green waves, and reducing congestion at peak hours.",
          tags: ["Real-Time", "Emergency Priority", "Green Waves"],
        },
        rail: {
          category: "Rail Systems",
          title: "Smart Rail & Transit",
          description: "Integrated monitoring systems for trains, trams, and metro networks that optimize schedules, predict maintenance needs, and enhance passenger information.",
          tags: ["Predictive Maintenance", "Scheduling", "Passenger Info"],
        },
        v2x: {
          category: "Connected Vehicles",
          title: "V2X Communication",
          description: "Vehicle-to-everything technology enabling cars to communicate with traffic signals, other vehicles, and infrastructure for safer, more efficient roads.",
          tags: ["V2I", "V2V", "Safety Alerts"],
        },
        ev: {
          category: "EV Infrastructure",
          title: "Smart Charging Networks",
          description: "Intelligent EV charging stations with dynamic pricing, grid balancing, and integration with public transit hubs for seamless multimodal journeys.",
          tags: ["Grid Balancing", "Transit Integration", "Dynamic Pricing"],
        },
      },
    },
    // Technology Spotlight
    spotlight: {
      badge: "Technology Spotlight",
      title: "Deep Dive: Our Focus Areas",
      lidar: {
        title: "LiDAR for Smart Cities",
        description: "Light Detection and Ranging technology is revolutionizing how cities understand and manage their physical environment.",
        items: {
          traffic: {
            title: "Traffic Flow Analysis",
            description: "Anonymous vehicle and pedestrian counting with speed and trajectory data",
          },
          infrastructure: {
            title: "Infrastructure Monitoring",
            description: "Detect road surface conditions, structural changes, and maintenance needs",
          },
          safety: {
            title: "Safety Applications",
            description: "Near-miss detection and hazard identification at intersections",
          },
        },
      },
      cameras: {
        title: "AI-Powered Smart Cameras",
        description: "Computer vision and edge AI transform standard cameras into intelligent sensors that understand and respond to urban dynamics.",
        items: {
          adaptive: {
            title: "Adaptive Signal Control",
            description: "Real-time adjustment of traffic signals based on actual demand",
          },
          incident: {
            title: "Incident Detection",
            description: "Automatic identification of accidents, breakdowns, and unusual events",
          },
          multimodal: {
            title: "Multimodal Analytics",
            description: "Track vehicles, cyclists, pedestrians, and transit simultaneously",
          },
        },
      },
      cta: "Learn More About Our Approach",
    },
    // About Section
    about: {
      badge: "About Us",
      title: "A New Perspective on Urban Mobility",
      description1: "1Tenor Consulting was founded to bridge the gap between emerging technologies and practical urban implementation. We bring together expertise in smart city systems, data analytics, and sustainable transportation planning.",
      description2: "As a new consultancy, we offer the agility to embrace cutting-edge solutions without legacy constraints. We partner with forward-thinking municipalities and organizations ready to shape the future of urban mobility.",
      highlights: [
        "Deep expertise in emerging smart city technologies",
        "Technology-agnostic approach focused on outcomes",
        "Commitment to sustainable and equitable solutions",
        "Collaborative partnership model",
      ],
      cards: {
        ideas: "Fresh Ideas",
        vision: "Clear Vision",
        innovation: "Innovation",
        results: "Results",
      },
    },
    // Contact Section
    contact: {
      badge: "Get in Touch",
      title: "Let's Build the Future Together",
      description: "Interested in exploring smart city technologies for your project? Send us a message and we'll get back to you shortly.",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        organization: "Organization",
        message: "Message",
        messagePlaceholder: "Tell us about your project or ask about our technology insights...",
        submit: "Send Message",
        sending: "Sending...",
        organizationPlaceholder: "City of Example",
      },
      success: {
        title: "Message Sent!",
        description: "Thank you for reaching out. We will get back to you very soon.",
        newMessage: "Send another message",
      },
      error: "Oops! Something went wrong. Please try again.",
    },
    // Footer
    footer: {
      description: "Bringing cutting-edge technology expertise to urban mobility and smart city development. Let's build the future together.",
      sections: {
        technologies: "Technologies",
        company: "Company",
        resources: "Resources",
      },
      links: {
        lidar: "LiDAR Solutions",
        aiVision: "AI Vision Systems",
        iot: "IoT Networks",
        digitalTwins: "Digital Twins",
        about: "About Us",
        approach: "Our Approach",
        contact: "Contact",
        insights: "Ideas & Insights",
        trends: "Technology Trends",
        news: "Industry News",
      },
      legal: {
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    // Language selector
    language: {
      label: "Language",
      en: "English",
      ptBR: "Português",
    },
  },
  "pt-BR": {
    // Header
    nav: {
      insights: "Ideias & Insights",
      about: "Sobre",
      contact: "Contato",
      getStarted: "Comece Agora",
    },
    // Hero Section
    hero: {
      badge: "Construindo Futuros Urbanos Sustentáveis",
      title1: "Transformando Cidades Através da ",
      title2: "Mobilidade Inteligente",
      description: "Trazemos novas perspectivas e expertise em tecnologia de ponta para ajudar governos e organizações a navegar o futuro da mobilidade urbana e infraestrutura de cidades inteligentes.",
      cta1: "Agende uma Consultoria",
      cta2: "Explore Nossas Ideias",
      focusTitle: "Nosso Foco Tecnológico",
      tags: {
        lidar: "Sensoriamento LiDAR",
        aiVision: "Sistemas de Visão IA",
        iot: "Redes IoT",
        digitalTwins: "Gêmeos Digitais",
      },
    },
    // Image Showcase
    imageShowcase: {
      badge: "Insights Visuais",
      title: "O Futuro da Mobilidade Urbana",
      description: "De cruzamentos inteligentes a redes ferroviárias conectadas, essas tecnologias estão transformando como as cidades se movimentam.",
      images: {
        traffic: {
          title: "Cruzamentos Conectados",
          description: "Sistemas de gestão de tráfego com IA que se adaptam em tempo real",
          alt: "Cruzamento inteligente com veículos conectados e semáforos adaptativos",
        },
        lidar: {
          title: "Sensoriamento LiDAR",
          description: "Tecnologia de mapeamento 3D para análise precisa de tráfego",
          alt: "Visualização de nuvem de pontos LiDAR do tráfego urbano",
        },
        rail: {
          title: "Sistemas Ferroviários Inteligentes",
          description: "Monitoramento integrado de trânsito e informações aos passageiros",
          alt: "Estação ferroviária inteligente moderna com displays digitais",
        },
      },
    },
    // Insights Section
    insights: {
      badge: "Ideias & Insights",
      title: "Tecnologias Moldando as Cidades de Amanhã",
      description: "Estamos na vanguarda das tecnologias emergentes que estão revolucionando a mobilidade urbana e o desenvolvimento de cidades inteligentes. Veja o que nos entusiasma.",
      cta: "Discuta essas tecnologias conosco",
      cards: {
        lidar: {
          category: "Tecnologia LiDAR",
          title: "Sensoriamento 3D de Tráfego com LiDAR",
          description: "Sensores LiDAR criam modelos 3D precisos do fluxo de tráfego, permitindo contagem anônima de veículos, detecção de velocidade e análise de quase-acidentes em cruzamentos sem preocupações com privacidade.",
          tags: ["Nuvens de Pontos", "Análise de Tráfego", "Privacidade Primeiro"],
        },
        cameras: {
          category: "Câmeras Inteligentes",
          title: "Câmeras de Velocidade com IA",
          description: "Câmeras de fiscalização de última geração usam IA para detectar excesso de velocidade, avanço de sinal vermelho e comportamentos perigosos, fornecendo análises de tráfego em tempo real.",
          tags: ["IA na Borda", "Fiscalização", "Análises"],
        },
        signals: {
          category: "Controle de Sinais",
          title: "Semáforos Adaptativos",
          description: "Semáforos inteligentes que respondem às condições em tempo real, priorizando veículos de emergência, otimizando ondas verdes e reduzindo congestionamentos nos horários de pico.",
          tags: ["Tempo Real", "Prioridade Emergência", "Ondas Verdes"],
        },
        rail: {
          category: "Sistemas Ferroviários",
          title: "Ferrovia & Trânsito Inteligente",
          description: "Sistemas de monitoramento integrados para trens, bondes e metrôs que otimizam horários, preveem necessidades de manutenção e melhoram informações aos passageiros.",
          tags: ["Manutenção Preditiva", "Agendamento", "Info Passageiros"],
        },
        v2x: {
          category: "Veículos Conectados",
          title: "Comunicação V2X",
          description: "Tecnologia veículo-para-tudo permitindo que carros se comuniquem com semáforos, outros veículos e infraestrutura para estradas mais seguras e eficientes.",
          tags: ["V2I", "V2V", "Alertas de Segurança"],
        },
        ev: {
          category: "Infraestrutura VE",
          title: "Redes de Carregamento Inteligente",
          description: "Estações de carregamento de VE inteligentes com preços dinâmicos, balanceamento de rede e integração com hubs de transporte público para jornadas multimodais sem interrupções.",
          tags: ["Balanceamento de Rede", "Integração Trânsito", "Preços Dinâmicos"],
        },
      },
    },
    // Technology Spotlight
    spotlight: {
      badge: "Destaque Tecnológico",
      title: "Mergulho Profundo: Nossas Áreas de Foco",
      lidar: {
        title: "LiDAR para Cidades Inteligentes",
        description: "A tecnologia de Detecção e Alcance por Luz está revolucionando como as cidades entendem e gerenciam seu ambiente físico.",
        items: {
          traffic: {
            title: "Análise de Fluxo de Tráfego",
            description: "Contagem anônima de veículos e pedestres com dados de velocidade e trajetória",
          },
          infrastructure: {
            title: "Monitoramento de Infraestrutura",
            description: "Detectar condições da superfície viária, mudanças estruturais e necessidades de manutenção",
          },
          safety: {
            title: "Aplicações de Segurança",
            description: "Detecção de quase-acidentes e identificação de perigos em cruzamentos",
          },
        },
      },
      cameras: {
        title: "Câmeras Inteligentes com IA",
        description: "Visão computacional e IA na borda transformam câmeras comuns em sensores inteligentes que entendem e respondem às dinâmicas urbanas.",
        items: {
          adaptive: {
            title: "Controle Adaptativo de Sinais",
            description: "Ajuste em tempo real dos semáforos baseado na demanda real",
          },
          incident: {
            title: "Detecção de Incidentes",
            description: "Identificação automática de acidentes, panes e eventos incomuns",
          },
          multimodal: {
            title: "Análise Multimodal",
            description: "Rastreie veículos, ciclistas, pedestres e transporte simultaneamente",
          },
        },
      },
      cta: "Saiba Mais Sobre Nossa Abordagem",
    },
    // About Section
    about: {
      badge: "Sobre Nós",
      title: "Uma Nova Perspectiva sobre Mobilidade Urbana",
      description1: "A 1Tenor Consulting foi fundada para preencher a lacuna entre tecnologias emergentes e implementação urbana prática. Reunimos expertise em sistemas de cidades inteligentes, análise de dados e planejamento de transporte sustentável.",
      description2: "Como uma nova consultoria, oferecemos a agilidade para abraçar soluções de ponta sem restrições de legado. Fazemos parceria com municípios e organizações visionárias prontas para moldar o futuro da mobilidade urbana.",
      highlights: [
        "Expertise profunda em tecnologias emergentes de cidades inteligentes",
        "Abordagem agnóstica de tecnologia focada em resultados",
        "Compromisso com soluções sustentáveis e equitativas",
        "Modelo de parceria colaborativa",
      ],
      cards: {
        ideas: "Ideias Frescas",
        vision: "Visão Clara",
        innovation: "Inovação",
        results: "Resultados",
      },
    },
    // Contact Section
    contact: {
      badge: "Entre em Contato",
      title: "Vamos Construir o Futuro Juntos",
      description: "Interessado em explorar tecnologias de cidades inteligentes para seu projeto? Envie-nos uma mensagem e retornaremos em breve.",
      form: {
        firstName: "Nome",
        lastName: "Sobrenome",
        email: "E-mail",
        organization: "Organização",
        message: "Mensagem",
        messagePlaceholder: "Conte-nos sobre seu projeto ou pergunte sobre nossos insights tecnológicos...",
        submit: "Enviar Mensagem",
        sending: "Enviando...",
        organizationPlaceholder: "Cidade de Exemplo",
      },
      success: {
        title: "Mensagem Enviada!",
        description: "Obrigado por entrar em contato. Retornaremos muito em breve.",
        newMessage: "Enviar outra mensagem",
      },
      error: "Ops! Algo deu errado. Por favor, tente novamente.",
    },
    // Footer
    footer: {
      description: "Trazendo expertise em tecnologia de ponta para mobilidade urbana e desenvolvimento de cidades inteligentes. Vamos construir o futuro juntos.",
      sections: {
        technologies: "Tecnologias",
        company: "Empresa",
        resources: "Recursos",
      },
      links: {
        lidar: "Soluções LiDAR",
        aiVision: "Sistemas de Visão IA",
        iot: "Redes IoT",
        digitalTwins: "Gêmeos Digitais",
        about: "Sobre Nós",
        approach: "Nossa Abordagem",
        contact: "Contato",
        insights: "Ideias & Insights",
        trends: "Tendências Tecnológicas",
        news: "Notícias do Setor",
      },
      legal: {
        rights: "Todos os direitos reservados.",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço",
      },
    },
    // Language selector
    language: {
      label: "Idioma",
      en: "English",
      ptBR: "Português",
    },
  },
}

export type Dictionary = typeof dictionaries.en

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Check localStorage first
    const savedLocale = localStorage.getItem("locale") as Locale | null
    
    if (savedLocale && (savedLocale === "en" || savedLocale === "pt-BR")) {
      setLocaleState(savedLocale)
    } else {
      // Detect from browser
      const browserLang = navigator.language
      if (browserLang.startsWith("pt")) {
        setLocaleState("pt-BR")
      } else {
        setLocaleState("en")
      }
    }
    setIsInitialized(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const t = dictionaries[locale]

  // Prevent hydration mismatch by showing default locale until initialized
  if (!isInitialized) {
    return (
      <LanguageContext.Provider value={{ locale: "en", setLocale, t: dictionaries.en }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
