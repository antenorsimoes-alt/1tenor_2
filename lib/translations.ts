export type Language = 'pt' | 'en';

type InsightItem = {
  category: string;
  title: string;
  description: string;
  tags: string[];
};

type ShowcaseItem = {
  alt: string;
  title: string;
  description: string;
};

type SpotlightFeature = {
  title: string;
  description: string;
};

type SpotlightCard = {
  title: string;
  description: string;
  features: SpotlightFeature[];
};

// Tipo para os links do rodapé
type FooterLink = {
  label: string;
  href: string;
};

export type Translation = {
  header: {
    insights: string;
    about: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    headingPart1: string;
    headingPart2: string;
    description: string;
    buttonContact: string;
    buttonExplore: string;
    focusTitle: string;
    focusTags: string[];
  };
  insights: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    items: InsightItem[];
  };
  showcase: {
    badge: string;
    title: string;
    description: string;
    items: ShowcaseItem[];
  };
  spotlight: {
    badge: string;
    title: string;
    lidarCard: SpotlightCard;
    cameraCard: SpotlightCard;
    buttonLearMore: string;
  };
  about: {
    badge: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    highlights: string[];
    cards: {
      ideas: string;
      vision: string;
      innovation: string;
      results: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    successTitle: string;
    successDescription: string;
    successButton: string;
    errorAlert: string;
    form: {
      honeypot: string;
      firstNameLabel: string;
      firstNamePlaceholder: string;
      lastNameLabel: string;
      lastNamePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      organizationLabel: string;
      organizationPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      buttonSending: string;
      buttonSend: string;
    };
  };
  footer: {
    description: string;
    technologiesTitle: string;
    technologiesLinks: FooterLink[];
    companyTitle: string;
    companyLinks: FooterLink[];
    resourcesTitle: string;
    resourcesLinks: FooterLink[];
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
  };
};

export const translations: Record<Language, Translation> = {
  pt: {
    header: {
      insights: "Ideias e Artigos",
      about: "Sobre",
      contact: "Contato",
      getStarted: "Começar Agora"
    },
    hero: {
      badge: "Construindo Futuros Urbanos Sustentáveis",
      headingPart1: "Transformando Cidades Através da ",
      headingPart2: "Mobilidade Inteligente",
      description: "Trazemos novas perspectivas e experiência em tecnologia de ponta para ajudar governos e organizações a navegar pelo futuro da mobilidade urbana e infraestrutura de cidades inteligentes.",
      buttonContact: "Agendar uma Consultoria",
      buttonExplore: "Explorar Nossas Ideias",
      focusTitle: "Nosso Foco Tecnológico",
      focusTags: ["Sensores LiDAR", "Sistemas de Visão IA", "Redes IoT", "Gêmeos Digitais"]
    },
    insights: {
      badge: "Ideias e Artigos",
      title: "Tecnologias Moldando as Cidades do Amanhã",
      description: "Estamos na vanguarda das tecnologias emergentes que estão revolucionando a mobilidade urbana e o desenvolvimento de cidades inteligentes. Veja o que nos entusiasma.",
      cta: "Discuta essas tecnologias conosco",
      items: [
        {
          category: "Tecnologia LiDAR",
          title: "Sensoriamento de Tráfego 3D com LiDAR",
          description: "Sensores LiDAR criam modelos 3D precisos do fluxo de tráfego, permitindo contagem anônima de veículos, detecção de velocidade e análise de quase-acidentes em cruzamentos, sem problemas de privacidade.",
          tags: ["Nuvens de Pontos", "Análise de Tráfego", "Foco na Privacidade"]
        },
        {
          category: "Câmeras Inteligentes",
          title: "Câmeras de Velocidade com IA",
          description: "Câmeras de fiscalização de próxima geração usam IA para detectar excesso de velocidade, avanço de sinal vermelho e comportamentos perigosos, fornecendo análises de tráfego em tempo real.",
          tags: ["IA na Borda", "Fiscalização", "Análises"]
        },
        {
          category: "Controle de Semáforos",
          title: "Semáforos Adaptativos",
          description: "Semáforos inteligentes que respondem às condições em tempo real, priorizando veículos de emergência, otimizando ondas verdes e reduzindo congestionamentos nos horários de pico.",
          tags: ["Tempo Real", "Prioridade de Emergência", "Ondas Verdes"]
        },
        {
          category: "Sistemas Ferroviários",
          title: "Trânsito e Ferrovias Inteligentes",
          description: "Sistemas de monitoramento integrados para trens, bondes e redes de metrô que otimizam horários, preveem necessidades de manutenção e melhoram as informações aos passageiros.",
          tags: ["Manutenção Preditiva", "Agendamento", "Info aos Passageiros"]
        },
        {
          category: "Veículos Conectados",
          title: "Comunicação V2X",
          description: "Tecnologia vehicle-to-everything permitindo que carros se comuniquem com semáforos, outros veículos e infraestrutura para vias mais seguras e eficientes.",
          tags: ["V2I", "V2V", "Alertas de Segurança"]
        },
        {
          category: "Infraestrutura de VE",
          title: "Redes de Carregamento Inteligentes",
          description: "Estações de carregamento de veículos elétricos inteligentes com preços dinâmicos, balanceamento de rede e integração com hubs de transporte público para jornadas multimodais perfeitas.",
          tags: ["Balanceamento de Rede", "Integração de Transporte", "Preço Dinâmico"]
        }
      ]
    },
    showcase: {
      badge: "Insights Visuais",
      title: "O Futuro da Mobilidade Urbana",
      description: "De cruzamentos inteligentes a redes ferroviárias conectadas, essas tecnologias estão remodelando a forma como as cidades se movem.",
      items: [
        {
          alt: "Cruzamento de tráfego inteligente com veículos conectados e semáforos adaptativos",
          title: "Cruzamentos Conectados",
          description: "Sistemas de gerenciamento de tráfego com IA que se adaptam em tempo real"
        },
        {
          alt: "Visualização em nuvem de pontos LiDAR do tráfego urbano",
          title: "Sensoriamento LiDAR",
          description: "Tecnologia de mapeamento 3D para análise precisa de tráfego"
        },
        {
          alt: "Estação ferroviária inteligente moderna com telas digitais",
          title: "Sistemas Ferroviários Inteligentes",
          description: "Monitoramento de trânsito integrado e informações aos passageiros"
        }
      ]
    },
    spotlight: {
      badge: "Destaque Tecnológico",
      title: "Aprofundando: Nossas Áreas de Foco",
      lidarCard: {
        title: "LiDAR para Cidades Inteligentes",
        description: "A tecnologia de Detecção e Telemetria por Luz está revolucionando como as cidades entendem e gerenciam seu ambiente físico.",
        features: [
          {
            title: "Análise de Fluxo de Tráfego",
            description: "Contagem anônima de veículos e pedestres com dados de velocidade e trajetória"
          },
          {
            title: "Monitoramento de Infraestrutura",
            description: "Detecta condições da superfície da via, mudanças estruturais e necessidades de manutenção"
          },
          {
            title: "Aplicações de Segurança",
            description: "Detecção de quase-acidentes e identificação de perigos em cruzamentos"
          }
        ]
      },
      cameraCard: {
        title: "Câmeras Inteligentes com IA",
        description: "A visão computacional e a IA na borda transformam câmeras padrão em sensores inteligentes que entendem e respondem à dinâmica urbana.",
        features: [
          {
            title: "Controle de Semáforo Adaptativo",
            description: "Ajuste em tempo real dos semáforos com base na demanda real"
          },
          {
            title: "Detecção de Incidentes",
            description: "Identificação automática de acidentes, quebras e eventos incomuns"
          },
          {
            title: "Análises Multimodais",
            description: "Rastreamento simultâneo de veículos, ciclistas, pedestres e transporte público"
          }
        ]
      },
      buttonLearMore: "Saiba Mais Sobre Nossa Abordagem"
    },
    about: {
      badge: "Sobre Nós",
      title: "Uma Nova Perspectiva sobre Mobilidade Urbana",
      paragraph1: "A 1Tenor Consulting foi fundada para preencher a lacuna entre as tecnologias emergentes e a implementação urbana prática. Reunimos expertise em sistemas de cidades inteligentes, análise de dados e planejamento de transporte sustentável.",
      paragraph2: "Como uma nova consultoria, oferecemos a agilidade para adotar soluções de ponta sem restrições de sistemas legados. Fazemos parcerias com municípios e organizações inovadoras prontas para moldar o futuro da mobilidade urbana.",
      highlights: [
        "Profunda expertise em tecnologias emergentes de cidades inteligentes",
        "Abordagem agnóstica à tecnologia com foco em resultados",
        "Compromisso com soluções sustentáveis e equitativas",
        "Modelo de parceria colaborativa"
      ],
      cards: {
        ideas: "Novas Ideias",
        vision: "Visão Clara",
        innovation: "Inovação",
        results: "Resultados"
      }
    },
    contact: {
      badge: "Entre em Contato",
      title: "Vamos Construir o Futuro Juntos",
      description: "Interessado em explorar tecnologias de cidades inteligentes para o seu projeto? Envie-nos uma mensagem e retornaremos em breve.",
      successTitle: "Mensagem Enviada!",
      successDescription: "Obrigado por entrar em contato. Retornaremos muito em breve.",
      successButton: "Enviar outra mensagem",
      errorAlert: "Oops! Algo deu errado. Por favor, tente novamente.",
      form: {
        honeypot: "Não preencha isso se você for humano",
        firstNameLabel: "Nome",
        firstNamePlaceholder: "Nome",
        lastNameLabel: "Sobrenome",
        lastNamePlaceholder: "Sobrenome",
        emailLabel: "E-mail",
        emailPlaceholder: "email@exemplo.com",
        organizationLabel: "Organização",
        organizationPlaceholder: "Organização",
        messageLabel: "Mensagem",
        messagePlaceholder: "Conte-nos sobre o seu projeto ou pergunte sobre nossas tecnologias...",
        buttonSending: "Enviando...",
        buttonSend: "Enviar Mensagem"
      }
    },
    footer: {
      description: "Trazendo expertise tecnológica de ponta para a mobilidade urbana e desenvolvimento de cidades inteligentes. Vamos construir o futuro juntos.",
      technologiesTitle: "Tecnologias",
      technologiesLinks: [
        { label: "Soluções LiDAR", href: "#insights" },
        { label: "Sistemas de Visão IA", href: "#insights" },
        { label: "Redes IoT", href: "#insights" },
        { label: "Gêmeos Digitais", href: "#insights" },
      ],
      companyTitle: "Empresa",
      companyLinks: [
        { label: "Sobre Nós", href: "#about" },
        { label: "Nossa Abordagem", href: "#insights" },
        { label: "Contato", href: "#contact" },
      ],
      resourcesTitle: "Recursos",
      resourcesLinks: [
        { label: "Ideias e Artigos", href: "#insights" },
        { label: "Tendências Tecnológicas", href: "#" },
        { label: "Notícias da Indústria", href: "#" },
      ],
      copyright: "1Tenor Consulting. Todos os direitos reservados.",
      privacyPolicy: "Política de Privacidade",
      termsOfService: "Termos de Serviço"
    }
  },
  en: {
    header: {
      insights: "Ideas & Insights",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started"
    },
    hero: {
      badge: "Building Sustainable Urban Futures",
      headingPart1: "Transforming Cities Through ",
      headingPart2: "Intelligent Mobility",
      description: "We bring fresh perspectives and cutting-edge technology expertise to help governments and organizations navigate the future of urban mobility and smart city infrastructure.",
      buttonContact: "Schedule a Consultation",
      buttonExplore: "Explore Our Ideas",
      focusTitle: "Our Technology Focus",
      focusTags: ["LiDAR Sensing", "AI Vision Systems", "IoT Networks", "Digital Twins"]
    },
    insights: {
      badge: "Ideas & Insights",
      title: "Technologies Shaping Tomorrow's Cities",
      description: "We stay at the forefront of emerging technologies that are revolutionizing urban mobility and smart city development. Here's what we're excited about.",
      cta: "Discuss these technologies with us",
      items: [
        {
          category: "LiDAR Technology",
          title: "3D Traffic Sensing with LiDAR",
          description: "LiDAR sensors create precise 3D models of traffic flow, enabling anonymous vehicle counting, speed detection, and near-miss analysis at intersections without privacy concerns.",
          tags: ["Point Clouds", "Traffic Analysis", "Privacy-First"]
        },
        {
          category: "Smart Cameras",
          title: "AI-Powered Speed Cameras",
          description: "Next-generation enforcement cameras use AI to detect speeding, red-light violations, and dangerous driving behaviors while providing real-time traffic analytics.",
          tags: ["Edge AI", "Enforcement", "Analytics"]
        },
        {
          category: "Signal Control",
          title: "Adaptive Traffic Signals",
          description: "Smart traffic lights that respond to real-time conditions, prioritizing emergency vehicles, optimizing green waves, and reducing congestion at peak hours.",
          tags: ["Real-Time", "Emergency Priority", "Green Waves"]
        },
        {
          category: "Rail Systems",
          title: "Smart Rail & Transit",
          description: "Integrated monitoring systems for trains, trams, and metro networks that optimize schedules, predict maintenance needs, and enhance passenger information.",
          tags: ["Predictive Maintenance", "Scheduling", "Passenger Info"]
        },
        {
          category: "Connected Vehicles",
          title: "V2X Communication",
          description: "Vehicle-to-everything technology enabling cars to communicate with traffic signals, other vehicles, and infrastructure for safer, more efficient roads.",
          tags: ["V2I", "V2V", "Safety Alerts"]
        },
        {
          category: "EV Infrastructure",
          title: "Smart Charging Networks",
          description: "Intelligent EV charging stations with dynamic pricing, grid balancing, and integration with public transit hubs for seamless multimodal journeys.",
          tags: ["Grid Balancing", "Transit Integration", "Dynamic Pricing"]
        }
      ]
    },
    showcase: {
      badge: "Visual Insights",
      title: "The Future of Urban Mobility",
      description: "From intelligent intersections to connected rail networks, these technologies are reshaping how cities move.",
      items: [
        {
          alt: "Smart traffic intersection with connected vehicles and adaptive signals",
          title: "Connected Intersections",
          description: "AI-powered traffic management systems that adapt in real-time"
        },
        {
          alt: "LiDAR point cloud visualization of urban traffic",
          title: "LiDAR Sensing",
          description: "3D mapping technology for precise traffic analysis"
        },
        {
          alt: "Modern smart rail station with digital displays",
          title: "Smart Rail Systems",
          description: "Integrated transit monitoring and passenger information"
        }
      ]
    },
    spotlight: {
      badge: "Technology Spotlight",
      title: "Deep Dive: Our Focus Areas",
      lidarCard: {
        title: "LiDAR for Smart Cities",
        description: "Light Detection and Ranging technology is revolutionizing how cities understand and manage their physical environment.",
        features: [
          {
            title: "Traffic Flow Analysis",
            description: "Anonymous vehicle and pedestrian counting with speed and trajectory data"
          },
          {
            title: "Infrastructure Monitoring",
            description: "Detect road surface conditions, structural changes, and maintenance needs"
          },
          {
            title: "Safety Applications",
            description: "Near-miss detection and hazard identification at intersections"
          }
        ]
      },
      cameraCard: {
        title: "AI-Powered Smart Cameras",
        description: "Computer vision and edge AI transform standard cameras into intelligent sensors that understand and respond to urban dynamics.",
        features: [
          {
            title: "Adaptive Signal Control",
            description: "Real-time adjustment of traffic signals based on actual demand"
          },
          {
            title: "Incident Detection",
            description: "Automatic identification of accidents, breakdowns, and unusual events"
          },
          {
            title: "Multimodal Analytics",
            description: "Track vehicles, cyclists, pedestrians, and transit simultaneously"
          }
        ]
      },
      buttonLearMore: "Learn More About Our Approach"
    },
    about: {
      badge: "About Us",
      title: "A New Perspective on Urban Mobility",
      paragraph1: "1Tenor Consulting was founded to bridge the gap between emerging technologies and practical urban implementation. We bring together expertise in smart city systems, data analytics, and sustainable transportation planning.",
      paragraph2: "As a new consultancy, we offer the agility to embrace cutting-edge solutions without legacy constraints. We partner with forward-thinking municipalities and organizations ready to shape the future of urban mobility.",
      highlights: [
        "Deep expertise in emerging smart city technologies",
        "Technology-agnostic approach focused on outcomes",
        "Commitment to sustainable and equitable solutions",
        "Collaborative partnership model"
      ],
      cards: {
        ideas: "Fresh Ideas",
        vision: "Clear Vision",
        innovation: "Innovation",
        results: "Results"
      }
    },
    contact: {
      badge: "Get in Touch",
      title: "Let's Build the Future Together",
      description: "Interested in exploring smart city technologies for your project? Send us a message and we'll get back to you shortly.",
      successTitle: "Message Sent!",
      successDescription: "Thank you for reaching out. We will get back to you very soon.",
      successButton: "Send another message",
      errorAlert: "Oops! Something went wrong. Please try again.",
      form: {
        honeypot: "Do not fill this out if you are human",
        firstNameLabel: "First Name",
        firstNamePlaceholder: "First Name",
        lastNameLabel: "Last Name",
        lastNamePlaceholder: "Last Name",
        emailLabel: "Email",
        emailPlaceholder: "email@example.com",
        organizationLabel: "Organization",
        organizationPlaceholder: "Organization",
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your project or ask about our technology insights...",
        buttonSending: "Sending...",
        buttonSend: "Send Message"
      }
    },
    footer: {
      description: "Bringing cutting-edge technology expertise to urban mobility and smart city development. Let's build the future together.",
      technologiesTitle: "Technologies",
      technologiesLinks: [
        { label: "LiDAR Solutions", href: "#insights" },
        { label: "AI Vision Systems", href: "#insights" },
        { label: "IoT Networks", href: "#insights" },
        { label: "Digital Twins", href: "#insights" },
      ],
      companyTitle: "Company",
      companyLinks: [
        { label: "About Us", href: "#about" },
        { label: "Our Approach", href: "#insights" },
        { label: "Contact", href: "#contact" },
      ],
      resourcesTitle: "Resources",
      resourcesLinks: [
        { label: "Ideas & Insights", href: "#insights" },
        { label: "Technology Trends", href: "#" },
        { label: "Industry News", href: "#" },
      ],
      copyright: "1Tenor Consulting. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    }
  }
};