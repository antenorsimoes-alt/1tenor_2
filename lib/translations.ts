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
  href?: string;
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

type FooterLink = {
  label: string;
  href: string;
};

type FocusTag = { 
  label: string; 
  href?: string; 
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
    focusTags: FocusTag[];
  };
  insights: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    items: (InsightItem & { href?: string })[];
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
  bluecityHotsite: {
    backLink: string; // <-- Tipagem adicionada aqui
    hero: { title: string; span: string; subtitle: string; badge: string };
    architecture: { title: string; span: string; heading: string; description: string; items: string[] };
    comparison: { title: string; span: string; cards: Array<{ title: string; description: string }> };
    intersections: { title: string; span: string; heading: string; items: string[] };
    highways: { title: string; span: string; heading: string; items: string[] };
    installation: { title: string; span: string; heading: string; items: string[] };
    certifications: { title: string; span: string; cards: Array<{ title: string; description: string }> };
    footer: { title: string; span: string; subtitle: string; name: string; role: string };
  };
  privacyPolicy: {
    title: string;
    lastUpdated: string;
    sections: Array<{ title: string; content: string }>;
  };
  termsOfService: {
    title: string;
    lastUpdated: string;
    sections: Array<{ title: string; content: string }>;
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
      focusTags: [
        { label: "Sensores LiDAR", href: "/bluecity" },
        { label: "Sistemas de Visão IA" },
        { label: "Redes IoT" },
        { label: "Gêmeos Digitais" }
      ]
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
          tags: ["Nuvens de Pontos", "Análise de Tráfego", "Foco na Privacidade"],
          href: "/bluecity"
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
          description: "Tecnologia de mapeamento 3D para análise precisa de tráfego",
          href: "/bluecity"
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
      paragraph2: "Como uma nova consultoria, oferecemos a agilidade para adotar soluções de ponta sem restrições de sistemas legados. Fazemos parcerias com organizações inovadoras prontas para moldar o futuro da mobilidade urbana.",
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
        firstNamePlaceholder: "Seu Nome",
        lastNameLabel: "Sobrenome",
        lastNamePlaceholder: "Seu Sobrenome",
        emailLabel: "E-mail",
        emailPlaceholder: "nome@exemplo.com",
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
        { label: "Soluções LiDAR", href: "/bluecity" },
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
    },
    bluecityHotsite: {
      backLink: "Voltar para o Início",
      hero: {
        title: "BlueCity",
        span: "LiDAR",
        subtitle: "Solução completa de LiDAR 3D com inteligência artificial para operações de tráfego, planejamento e segurança viária.",
        badge: "Atuação | Análise | Alertas"
      },
      architecture: {
        title: "Arquitetura de",
        span: "Última Geração",
        heading: "BlueCity LiDAR",
        description: "O sensor captura o ambiente com precisão cirúrgica em 3D.",
        items: ["5 Milhões de pontos por segundo", "128 feixes de laser independentes", "Amplo campo de visão espacial", "Certificação NEMA TS2"]
      },
      comparison: {
        title: "Vantagem Tecnológica:",
        span: "LiDAR",
        cards: [
          { title: "Luminosidade", description: "Opera no escuro total. Sem necessidade de iluminação pública para detecção precisa." },
          { title: "Clima Adverso", description: "Imune a chuva, neblina e brilho solar excessivo que cegam câmeras comuns." },
          { title: "Privacidade", description: "Privacidade nativa. Sem reconhecimento facial ou captura de placas (GDPR/LGPD compliance)." }
        ]
      },
      intersections: {
        title: "Gestão de",
        span: "Cruzamentos",
        heading: "Atuação Multimodal",
        items: ["Detecção de faixa de parada", "Extensão de tempo para pedestres", "Integração V2X (veículos conectados)", "Gêmeo digital de tráfego em tempo real"]
      },
      highways: {
        title: "Segurança em",
        span: "Rodovias",
        heading: "Alertas em Tempo Real",
        items: ["Detecção de veículos na contramão", "Identificação de veículos parados", "Monitoramento de rampas e acessos", "Integração via API e Mensagens SAE"]
      },
      installation: {
        title: "Instalação",
        span: "Rápida e Fácil",
        heading: "Eficiência Operacional",
        items: ["Instalado em 3 a 5 horas por cruzamento", "Fixado em postes existentes", "Baixa manutenção e calibração remota", "MTBF superior a 250.000 horas"]
      },
      certifications: {
        title: "Confiabilidade",
        span: "Certificada",
        cards: [
          { title: "NEMA TS2", description: "Padrão global para hardware de tráfego" },
          { title: "ISO 27001", description: "Segurança da Informação e Dados" },
          { title: "IP68 & IP69K", description: "Resistência total a água e poeira" }
        ]
      },
      footer: {
        title: "Vamos modernizar suas",
        span: "vias?",
        subtitle: "Uma solução escalável, integrada e com excelente relação custo-benefício.",
        name: "Antenor Simões",
        role: "Consultor ITS | 1Tenor Consulting"
      }
    },
    privacyPolicy: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: Abril de 2026",
      sections: [
        {
          title: "1. Coleta de Informações",
          content: "Coletamos informações pessoais que você nos fornece voluntariamente, como nome, endereço de e-mail e organização ao preencher formulários de contato em nosso site. Também podemos coletar dados de navegação não identificáveis para melhorar a experiência do usuário."
        },
        {
          title: "2. Uso das Informações",
          content: "As informações coletadas são utilizadas exclusivamente para responder às suas consultas, fornecer serviços solicitados, enviar comunicações relevantes sobre nossos serviços de consultoria em mobilidade urbana e melhorar nosso site."
        },
        {
          title: "3. Compartilhamento de Dados",
          content: "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Seus dados podem ser compartilhados com prestadores de serviços confiáveis que nos auxiliam na operação do site, sujeitos a acordos rígidos de confidencialidade."
        },
        {
          title: "4. Segurança",
          content: "Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição acidental ou ilícita."
        },
        {
          title: "5. Seus Direitos",
          content: "Você tem o direito de solicitar acesso, correção, atualização ou exclusão de suas informações pessoais. Para exercer esses direitos ou para qualquer dúvida relacionada à privacidade, entre em contato conosco."
        }
      ]
    },
    termsOfService: {
      title: "Termos de Serviço",
      lastUpdated: "Última atualização: Abril de 2026",
      sections: [
        {
          title: "1. Aceitação dos Termos",
          content: "Ao acessar e utilizar o site da 1Tenor Consulting, você concorda em cumprir e ficar vinculado a estes Termos de Serviço e a todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site."
        },
        {
          title: "2. Uso dos Serviços",
          content: "O conteúdo deste site destina-se apenas a fins informativos gerais sobre nossos serviços de consultoria em cidades inteligentes. Você concorda em usar o site apenas para fins lícitos e de maneira que não infrinja os direitos de terceiros ou restrinja o uso e aproveitamento do site por qualquer outra pessoa."
        },
        {
          title: "3. Propriedade Intelectual",
          content: "Todo o conteúdo, design, textos, gráficos, interfaces e a seleção e organização dos mesmos neste site são de propriedade da 1Tenor Consulting ou de seus licenciadores, protegidos por leis de direitos autorais e propriedade intelectual."
        },
        {
          title: "4. Limitação de Responsabilidade",
          content: "Em nenhuma circunstância a 1Tenor Consulting será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do seu acesso ou uso, ou incapacidade de acessar ou usar, o site e seus conteúdos."
        },
        {
          title: "5. Alterações nos Termos",
          content: "Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento, sem aviso prévio. Ao continuar a usar o site após quaisquer alterações, você aceita os Termos de Serviço revisados."
        }
      ]
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
      focusTags: [
        { label: "LiDAR Sensing", href: "/bluecity" },
        { label: "AI Vision Systems" },
        { label: "IoT Networks" },
        { label: "Digital Twins" }
      ]
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
          tags: ["Point Clouds", "Traffic Analysis", "Privacy-First"],
          href: "/bluecity"
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
          description: "3D mapping technology for precise traffic analysis",
          href: "/bluecity"
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
      paragraph2: "As a new consultancy, we offer the agility to embrace cutting-edge solutions without legacy constraints. We partner with forward-thinking organizations ready to shape the future of urban mobility.",
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
        firstNamePlaceholder: "Your Name",
        lastNameLabel: "Last Name",
        lastNamePlaceholder: "Your Last Name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        organizationLabel: "Organization",
        organizationPlaceholder: "Your Organization",
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
        { label: "LiDAR Solutions", href: "/bluecity" },
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
    },
    bluecityHotsite: {
      backLink: "Back to Home",
      hero: {
        title: "BlueCity",
        span: "LiDAR",
        subtitle: "Complete 3D LiDAR solution with AI for traffic operations, planning, and road safety.",
        badge: "Actuation | Analysis | Alerts"
      },
      architecture: {
        title: "Next-Gen",
        span: "Architecture",
        heading: "BlueCity LiDAR",
        description: "The sensor captures the environment with surgical 3D precision.",
        items: ["5 Million points per second", "128 independent laser beams", "Wide spatial field of view", "NEMA TS2 Certified"]
      },
      comparison: {
        title: "Technological Advantage:",
        span: "LiDAR",
        cards: [
          { title: "Luminosity", description: "Operates in total darkness. No need for public lighting for precise detection." },
          { title: "Adverse Weather", description: "Immune to rain, fog, and excessive sun glare that blind common cameras." },
          { title: "Privacy", description: "Privacy by design. No facial recognition or plate capture (GDPR/LGPD compliant)." }
        ]
      },
      intersections: {
        title: "Intersection",
        span: "Management",
        heading: "Multimodal Actuation",
        items: ["Stop bar detection", "Pedestrian clearance extension", "V2X integration (connected vehicles)", "Real-time digital traffic twin"]
      },
      highways: {
        title: "Highway",
        span: "Safety",
        heading: "Real-Time Alerts",
        items: ["Wrong-way driver detection", "Stopped vehicle identification", "Ramp and access monitoring", "API and SAE message integration"]
      },
      installation: {
        title: "Quick & Easy",
        span: "Installation",
        heading: "Operational Efficiency",
        items: ["3 to 5 hours per intersection", "Installed on existing poles", "Low maintenance and remote calibration", "MTBF over 250,000 hours"]
      },
      certifications: {
        title: "Certified",
        span: "Reliability",
        cards: [
          { title: "NEMA TS2", description: "Global standard for traffic hardware" },
          { title: "ISO 27001", description: "Information and Data Security" },
          { title: "IP68 & IP69K", description: "Total water and dust resistance" }
        ]
      },
      footer: {
        title: "Let's modernize your",
        span: "roads?",
        subtitle: "A scalable, integrated, and cost-effective solution.",
        name: "Antenor Simões",
        role: "ITS Consultant | 1Tenor Consulting"
      }
    },
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: April 2026",
      sections: [
        {
          title: "1. Information Collection",
          content: "We collect personal information that you voluntarily provide to us, such as your name, email address, and organization when filling out contact forms on our website. We may also collect non-identifiable browsing data to improve user experience."
        },
        {
          title: "2. Use of Information",
          content: "The information collected is used exclusively to respond to your inquiries, provide requested services, send relevant communications about our urban mobility consulting services, and improve our website."
        },
        {
          title: "3. Data Sharing",
          content: "We do not sell, rent, or share your personal information with third parties for marketing purposes. Your data may be shared with trusted service providers who assist us in operating our website, subject to strict confidentiality agreements."
        },
        {
          title: "4. Security",
          content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or accidental or unlawful destruction."
        },
        {
          title: "5. Your Rights",
          content: "You have the right to request access, correction, update, or deletion of your personal information. To exercise these rights or for any privacy-related inquiries, please contact us."
        }
      ]
    },
    termsOfService: {
      title: "Terms of Service",
      lastUpdated: "Last updated: April 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing and using the 1Tenor Consulting website, you agree to comply with and be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
        },
        {
          title: "2. Use of Services",
          content: "The content on this website is intended for general informational purposes only regarding our smart city consulting services. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website."
        },
        {
          title: "3. Intellectual Property",
          content: "All content, design, text, graphics, interfaces, and the selection and arrangements thereof on this site are the property of 1Tenor Consulting or its licensors, protected by copyright and intellectual property laws."
        },
        {
          title: "4. Limitation of Liability",
          content: "In no event shall 1Tenor Consulting be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of, or inability to access or use, the website and its contents."
        },
        {
          title: "5. Changes to Terms",
          content: "We reserve the right to modify these Terms of Service at any time without prior notice. By continuing to use the site after any changes, you accept the revised Terms of Service."
        }
      ]
    }
  }
};
