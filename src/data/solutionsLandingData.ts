import { SolutionLandingData } from '../types/solutionLanding';

export const solutionsLandingData: Record<string, SolutionLandingData> = {
  // =========================================================================
  // 1. HANWHA VISION
  // =========================================================================
  hanwha: {
    slug: 'hanwha',
    brandName: 'Hanwha Vision',
    solutionName: 'Hanwha Vision AI Surveillance',
    eyebrow: 'VIDEOMONITORAMENTO INTELIGENTE COM IA EMBARCADA',
    heroEyebrow: 'Hanwha Vision • Soluções inteligentes para operações críticas',
    headline: 'Veja o que acontece em tempo real.',
    headlineHighlight: 'Entenda antes que vire um problema.',
    subheadline:
      'Videomonitoramento inteligente com IA embarcada na borda para operações corporativas que precisam detectar, classificar alvos e reagir a eventos com máxima precisão.',
    heroBenefits: [
      'IA com Deep Learning direto no chipset da câmera (Edge AI)',
      'Classificação precisa: pessoas, veículos, rostos e placas sem falsos positivos',
      'Gravadores NVR de alta densidade e throughput corporativo',
      'Compressão dinâmica WiseStream III com até 80% de economia de banda',
    ],
    heroBgImage: '/images/heroes/hero-hanwha.jpg',
    heroImage: '/images/cameras/camera-hanwha.png',
    heroImageLabel: 'Hanwha Vision Dome AI IVA - Detecção e Análise Neural em Shopping / Varejo',
    logo: '/images/marcas/logo-hanwha.png',
    logoAlt: 'Hanwha Vision - Fabricante Homologado',
    partnerBadge: 'Fabricante Homologado • Certificação Oficial VS',
    heroMetrics: [
      { value: 'Edge AI', label: 'Processamento Neural', detail: 'Classificação de alvos na própria câmera' },
      { value: 'Zero Fog', label: 'Desembaçamento Óptico', detail: 'Operação garantida em intempéries severas' },
      { value: '4K / 8K', label: 'Ultra Resolução', detail: 'Sensor CMOS de alta sensibilidade e Forensic WDR' },
      { value: 'FIPS 140-2', label: 'Cibersegurança', detail: 'Chipset criptográfico TPM 2.0 integrado' },
    ],

    problemSection: {
      tag: 'DIAGNÓSTICO OPERACIONAL',
      title: 'Segurança não pode ser reativa.',
      narrative: [
        'Em operações de médio e grande porte, câmeras convencionais geram centenas de horas de gravação passiva. Quando um incidente acontece, a equipe precisa rebobinar horas de material para entender o ocorrido.',
        'Falhas de monitoramento, sobrecarga de operadores com alarmes falsos causados por chuva ou animais, sistemas legados fragmentados e falta de integração tornam a resposta lenta e a infraestrutura vulnerável.',
      ],
      painPoints: [
        {
          title: 'Operações fragmentadas e sistemas legados',
          desc: 'Ilhas de vídeo isoladas que não se comunicam com controle de acesso, alarmes ou central de monitoramento unificada.',
        },
        {
          title: 'Fadiga de alertas e falsos positivos',
          desc: 'Centrais de comando bombardeadas por detecções de movimento causadas por vento, sombras ou vegetação, camuflando incidentes reais.',
        },
        {
          title: 'Resposta lenta e investigação demorada',
          desc: 'Dificuldade de localizar indivíduos, veículos ou objetos suspeitos entre terabytes de vídeo não categorizados.',
        },
        {
          title: 'Gargalo de largura de banda e storage',
          desc: 'Transmissão contínua de vídeo bruto sobrecarregando links de rede corporativos e servidores de armazenamento.',
        },
      ],
      solutionBridge: 'É aqui que entra a engenharia de videomonitoramento inteligente da Hanwha Vision.',
    },

    technologiesTitle: 'Uma arquitetura. Múltiplas camadas de proteção.',
    technologiesSubtitle: 'Componentes projetados para transformar vídeo bruto em inteligência operacional imediata.',
    technologies: [
      {
        title: 'Câmeras com IA Embarcada e Deep Learning',
        category: 'Sensoriamento de Borda',
        description:
          'Modelos de redes neurais profundas pré-treinados executam algoritmos de visão computacional diretamente no hardware da câmera, filtrando atributos como tipo de veículo, cor, presença de máscara, capacete e direção de movimento sem depender de servidores analíticos caros.',
        features: [
          'Classificação simultânea de múltiplos objetos em cena',
          'Tecnologia WiseStream III para redução de até 80% do consumo de banda',
          'Forensic WDR de 150dB para cenas com iluminação mista e contra-luz intensa',
          'Detecção de vadiagem (loitering), travessia de linha virtual e intrusão de área restrita',
        ],
        specs: {
          'Chipset': 'Wisenet 7 / AI SoC dedicado',
          'Compressão': 'H.265 / H.264 / WiseStream III',
          'Proteções': 'IP66, IP67, IK10, NEMA 4X',
        },
        tag: 'IA na Borda',
        image: '/images/cameras/camera-hanwha.png',
      },
      {
        title: 'Gravadores NVR Corporativos de Alto Throughput',
        category: 'Armazenamento & Gravação',
        description:
          'Sistemas de gravação em rede desenvolvidos para operações ininterruptas 24/7, com suporte a dezenas de canais 4K, gravação redundante em RAID e busca forense imediata por metadados de IA.',
        features: [
          'Gravação contínua com suporte a RAID 5/6 contra falhas de disco',
          'Armazenamento de metadados enriquecidos para busca forense instantânea',
          'Fontes de alimentação redundantes hot-swap para máxima disponibilidade',
          'Visualização síncrona de múltiplos canais com baixa latência de decodificação',
        ],
        specs: {
          'Throughput': 'Até 400 Mbps por gravador',
          'Capacidade': 'Até 16 baías SATA com hot-swap',
          'Redundância': 'RAID 0/1/5/6/10 e Failover N+1',
        },
        tag: 'Gravador de Rede',
        image: '/images/equipamentos/hanwha-nvr-rack.png',
      },
      {
        title: 'Áudio em Rede & Integração de Acesso Unificada',
        category: 'Resposta Ativa',
        description:
          'Alto-falantes IP tipo corneta e caixas de som de rede acionados automaticamente por regras de análise de vídeo. Mensagens de voz pré-gravadas ou transmissão ao vivo para dissuasão imediata de intrusos no perímetro.',
        features: [
          'Alertas sonoros automáticos mediante violação de cerca virtual',
          'Interfonia IP bidirecional integrada aos pontos de triagem',
          'Protocolos abertos SIP e ONVIF Perfil S, G e T',
          'Sincronização com controladoras de acesso e acionamento de eclusas',
        ],
        specs: {
          'Protocolos': 'SIP, ONVIF, HTTP, TCP/IP',
          'Potência': 'Até 30W PoE+',
          'Pressão Sonora': 'Até 120 dB SPL a 1m',
        },
        tag: 'Áudio IP & Resposta',
        image: '/images/equipamentos/hanwha-audio-horn.png',
      },
    ],

    businessBenefits: [
      {
        number: '01',
        title: 'IA NA BORDA',
        desc: 'Processamento inteligente diretamente nos dispositivos, reduzindo a dependência de servidores analíticos dedicados e infraestrutura de rede sobrecarregada.',
        image: '/images/beneficios/beneficio-inteligencia-ia.png',
        highlights: [
          'Elimina a necessidade de servidores GPU caros na central',
          'Transmite apenas metadados de eventos quando a rede estiver congestionada',
          'Garante análise local contínua mesmo se o enlace principal oscilar',
        ],
      },
      {
        number: '02',
        title: 'RESPOSTA MAIS RÁPIDA',
        desc: 'Eventos relevantes são transformados em informação acionável em frações de segundo, permitindo que os operadores atuem antes que um incidente se concretize.',
        image: '/images/beneficios/beneficio-resposta-rapida.png',
        highlights: [
          'Alertas precisos com indicação visual de cor, direção e tipo de objeto',
          'Avisos automáticos por áudio em rede dissuadindo invasões perimetrais',
          'Filtro forense que reduz buscas de dias para segundos',
        ],
      },
      {
        number: '03',
        title: 'INFRAESTRUTURA ESCALÁVEL',
        desc: 'Arquitetura preparada para expansão gradual, integrando-se com facilidade a sistemas legados, softwares VMS abertos e controles de acesso existentes.',
        image: '/images/beneficios/beneficio-alta-disponibilidade.png',
        highlights: [
          'Compatibilidade aberta com padrões globais ONVIF e APIs RESTful',
          'Expansão canal a canal sem obrigação de substituir hardware pré-existente',
          'Projetado para operações distribuídas com gestão centralizada',
        ],
      },
    ],

    architectureTitle: 'Monte sua arquitetura',
    architectureSubtitle: 'Passe o mouse ou toque em cada camada para entender o fluxo de dados e inteligência.',
    architectureLayers: [
      {
        step: '01',
        label: 'CÂMERAS',
        sublabel: 'Captura Óptica',
        detail: 'Sensores 4K e térmicos de alta sensibilidade operando em condições críticas de iluminação e intempéries.',
        metrics: '4K • 60fps • WDR 150dB',
        iconName: 'Camera',
      },
      {
        step: '02',
        label: 'EDGE AI',
        sublabel: 'Inferência na Borda',
        detail: 'Chipset Wisenet executando modelos de Deep Learning em tempo real para classificação de pessoas e veículos.',
        metrics: 'Inferência < 15ms',
        iconName: 'Cpu',
      },
      {
        step: '03',
        label: 'NETWORK',
        sublabel: 'Transporte Seguro',
        detail: 'Backbone de fibra óptica e switches industriais com compressão inteligente WiseStream III.',
        metrics: '-80% consumo de banda',
        iconName: 'Network',
      },
      {
        step: '04',
        label: 'VMS & NVR',
        sublabel: 'Gravação & Metadados',
        detail: 'Armazenamento redundante em RAID com indexação imediata de metadados forenses.',
        metrics: 'Throughput 400 Mbps',
        iconName: 'Server',
      },
      {
        step: '05',
        label: 'ANALYTICS',
        sublabel: 'Correlação de Regras',
        detail: 'Cruzamento de regras de negócios, cerca virtual, controle de fluxo e detecção de anomalias.',
        metrics: 'Regras ilimitadas',
        iconName: 'ShieldCheck',
      },
      {
        step: '06',
        label: 'CONTROL ROOM',
        sublabel: 'Operação Centralizada',
        detail: 'Interface integrada para operadores, videowalls, resposta por áudio e acionamento de protocolos.',
        metrics: 'Resposta ativa em segundos',
        iconName: 'Monitor',
      },
    ],

    applicationsTitle: 'Projetado para ambientes que não podem parar',
    applications: [
      {
        title: 'Indústria & Plantas Fabris',
        segment: 'Produção Contínua',
        description:
          'Monitoramento de linhas produtivas, controle de uso de EPIs por visão computacional, pátios de expedição e proteção perimetral quilométrica.',
        relevance: 'Ambientes com poeira, vibração mecânica e interferência eletromagnética.',
        iconName: 'Factory',
      },
      {
        title: 'Centros Logísticos & Armazéns',
        segment: 'Cadeia de Suprimentos',
        description:
          'Supervisão de docas de carregamento, rastreamento visual de encomendas em esteiras e controle de fluxo de caminhões e empilhadeiras.',
        relevance: 'Grandes áreas cobertas com iluminação mista e alto tráfego de frotas.',
        iconName: 'Truck',
      },
      {
        title: 'Infraestrutura Crítica & Energia',
        segment: 'Alta Confiabilidade',
        description:
          'Subestações elétricas, pátios de transformadores e reservatórios que demandam análise térmica preventiva e detecção precisa de intrusão perimetral.',
        relevance: 'Operações remotas ou desatendidas que necessitam de telemetria visual confiável.',
        iconName: 'Zap',
      },
      {
        title: 'Edifícios Corporativos & Governo',
        segment: 'Acesso Restrito',
        description:
          'Recepção, garagens subterrâneas, data centers e andares executivos com controle de permanência não autorizada e busca forense veloz.',
        relevance: 'Exigência de sigilo, gravação contínua e conformidade estrita.',
        iconName: 'Building2',
      },
    ],

    compliance: {
      title: 'Tecnologia preparada para ambientes com altas exigências.',
      subtitle:
        'A engenharia da VS implementa soluções que apoiam sua organização a cumprir exigências normativas e de governança corporativa quando corretamente projetadas.',
      items: [
        {
          title: 'Proteção de Dados & Privacidade',
          desc: 'Recursos nativos de mascaramento dinâmico de rostos e placas de veículos para adequação a diretrizes de proteção de dados pessoais (LGPD).',
          supportedStandard: 'Recursos para apoio à LGPD',
        },
        {
          title: 'Cibersegurança de Hardware',
          desc: 'Criptografia ponta a ponta, chipset com inicialização segura (Secure Boot), firmware assinado e conformidade com práticas de hardening reconhecidas pelo setor.',
          supportedStandard: 'Certificação FIPS 140-2 / TPM 2.0',
        },
        {
          title: 'Rastreabilidade e Cadeia Forense',
          desc: 'Marca d’água digital criptografada nas gravações para verificação de autenticidade e histórico de logs de auditoria de acessos de operadores.',
          supportedStandard: 'Integridade Forense de Evidências',
        },
        {
          title: 'Alta Disponibilidade Operacional',
          desc: 'Projetos em conformidade com normas ABNT e diretrizes de redundância para continuidade de negócios sem pontos únicos de falha.',
          supportedStandard: 'Normas ABNT & Práticas TIA/EIA',
        },
      ],
    },

    casesTitle: 'Projetos que exigem confiabilidade',
    cases: [
      {
        client: 'EDP Goiânia',
        highlight: 'Integração avançada',
        description:
          'Monitoramento perimetral inteligente com análise de vídeo na borda, anel redundante de fibra óptica e controle térmico de transformadores em ambiente de alta tensão.',
        image: '/images/projetos/projeto-edp-goiania.png',
        tag: 'Energia & Utilidades',
      },
      {
        client: 'Hospital Israelita Albert Einstein',
        highlight: 'Projeto Turn-key',
        description:
          'Videomonitoramento clínico de alta resolução, integração de acesso touchless para áreas cirúrgicas e infraestrutura cabeada com zero halogênio.',
        image: '/images/projetos/projeto-hospital-albert-einstein.png',
        tag: 'Saúde & Alta Complexidade',
      },
      {
        client: 'Quartel General do Exército — QGEX',
        highlight: 'Infraestrutura crítica de segurança',
        description:
          'Implantação de sistemas de vigilância eletrônica e infraestrutura de rede para complexo militar estratégico com requisitos rigorosos de disponibilidade.',
        image: '/images/projetos/projeto-qgex.png',
        tag: 'Defesa & Governo',
      },
    ],

    faq: [
      {
        question: 'A solução Hanwha pode ser integrada à infraestrutura existente da minha empresa?',
        answer:
          'Sim. As câmeras e gravadores Hanwha Vision seguem padrões abertos da indústria (ONVIF Perfil S, G, T e M) e contam com APIs abertas. Nossa equipe de engenharia realiza o diagnóstico para reaproveitar cabeamento e integrar o sistema ao seu VMS atual ou propor a migração mais eficiente.',
      },
      {
        question: 'A VS Tecnologia realiza todo o projeto e instalação?',
        answer:
          'Sim. Atuamos no modelo turn-key completo: realizamos o levantamento de campo, projeto executivo com cálculo de iluminação e lentes, fornecimento oficial com garantia, instalação física por técnicos certificados, comissionamento e treinamento da sua equipe.',
      },
      {
        question: 'É possível expandir o sistema futuramente adicionando mais câmeras?',
        answer:
          'Com certeza. A arquitetura é totalmente modular e permite que você comece cobrindo as áreas mais críticas e adicione novos dispositivos e licenças conforme o orçamento e a necessidade da sua operação.',
      },
      {
        question: 'A solução atende operações corporativas com múltiplos locais ou filiais?',
        answer:
          'Sim. É possível centralizar a visualização e gestão de múltiplas plantas ou unidades remotas em uma única sala de controle (CCO), mantendo a gravação redundante em cada unidade para segurança contra oscilações de link.',
      },
      {
        question: 'Como funciona o atendimento de um especialista da VS?',
        answer:
          'Ao preencher o formulário ou entrar em contato via WhatsApp, nosso engenheiro especialista entra em contato para entender a planta, os desafios do local e estruturar uma proposta técnica personalizada com estudo de viabilidade.',
      },
    ],

    finalCTA: {
      headline: 'Sua operação não precisa de mais uma câmera.',
      subheadline: 'Precisa de uma solução de engenharia integrada e confiável.',
      buttonText: 'FALAR COM UM ESPECIALISTA',
    },

    formSource: 'landing_page_hanwha',
    whatsappMessage: 'Olá! Vim pela página da solução Hanwha Vision e gostaria de falar com um especialista da VS sobre um projeto.',
    seoTitle: 'Soluções Hanwha Vision | Videomonitoramento Inteligente | VS Tecnologia',
    seoDescription:
      'Soluções de videomonitoramento inteligente Hanwha Vision com inteligência artificial na borda, NVRs de alto desempenho e integração completa realizada pela engenharia da VS Tecnologia.',
  },

  // =========================================================================
  // 2. AVIGILON
  // =========================================================================
  avigilon: {
    slug: 'avigilon',
    brandName: 'Avigilon',
    solutionName: 'Avigilon Unity & Alta Security',
    eyebrow: 'INTELIGÊNCIA QUE AJUDA SUA OPERAÇÃO A ENCONTRAR O QUE IMPORTA',
    heroEyebrow: 'Avigilon • Monitoramento e analytics de alta precisão',
    headline: 'Menos tempo procurando alvos.',
    headlineHighlight: 'Mais tempo para agir com precisão.',
    subheadline:
      'Vídeo analítico com inteligência artificial e busca acelerada por aparência para operações corporativas que exigem localização imediata e gestão unificada de segurança.',
    heroBenefits: [
      'Busca Avançada por Aparência (Avigilon Appearance Search™)',
      'Detecção de Movimento Incomum e Anomalias de Comportamento (UMD)',
      'Câmeras Panorâmicas H6A e Multisensores de altíssima definição',
      'Plataforma unificada de vídeo com controle de acesso integrado',
    ],
    heroBgImage: '/images/heroes/hero-avigilon.jpg',
    heroImage: '/images/cameras/camera-avigilon.png',
    heroImageLabel: 'Avigilon H5A PTZ - Câmera Externa de Alta Definição e Resposta Rápida',
    logo: '/images/marcas/logo-avigilon.png',
    logoAlt: 'Avigilon - Fabricante Homologado',
    partnerBadge: 'Fabricante Homologado • Certificação Oficial VS',
    heroMetrics: [
      { value: 'Appearance Search', label: 'Busca por Aparência', detail: 'Localização rápida de indivíduos em toda a planta' },
      { value: 'HDSM 2.0', label: 'Gestão de Banda', detail: 'Transmissão inteligente apenas de pixels necessários' },
      { value: '32 MP', label: 'Cobertura Total', detail: 'Multisensores com 180° e 360° contínuos' },
      { value: 'Unificado', label: 'Vídeo + Acesso', detail: 'Correlação nativa de imagens com crachás' },
    ],

    problemSection: {
      tag: 'DIAGNÓSTICO OPERACIONAL',
      title: 'Segurança não pode ser reativa.',
      narrative: [
        'Quando ocorre um incidente crítico em uma grande área — como um galpão logístico ou complexo hospitalar —, os operadores de segurança perdem horas preciosas navegando manualmente por dezenas de câmeras desconexas para reconstruir a rota de uma pessoa ou veículo.',
        'Sistemas convencionais acumulam terabytes de vídeo inútil e exigem esforço humano desproporcional. Sem inteligência analítica para classificar o que é normal e o que é anômalo, incidentes só são descobertos quando os danos já se consolidaram.',
      ],
      painPoints: [
        {
          title: 'Horas perdidas em busca manual de gravações',
          desc: 'Operadores navegando por barras de tempo infinitas tentando localizar o momento exato de uma ocorrência.',
        },
        {
          title: 'Incapacidade de rastrear suspeitos entre câmeras',
          desc: 'Perda de continuidade visual quando uma pessoa suspeita ou veículo se desloca por diferentes setores da empresa.',
        },
        {
          title: 'Eventos atípicos despercebidos',
          desc: 'Movimentações em horários incomuns ou em sentidos contrários ao fluxo que não geram alertas por falta de aprendizado de máquina.',
        },
        {
          title: 'Sistemas de acesso desconectados do vídeo',
          desc: 'Dificuldade de validar se a pessoa que usou um crachá em uma porta restrita é realmente o titular da credencial.',
        },
      ],
      solutionBridge: 'É aqui que entra a engenharia de segurança inteligente da Avigilon.',
    },

    technologiesTitle: 'Uma arquitetura. Múltiplas camadas de proteção.',
    technologiesSubtitle: 'Ferramentas de análise preditiva projetadas para acelerar a tomada de decisão da equipe de segurança.',
    technologies: [
      {
        title: 'Câmeras Multissensor H6A e Panorâmicas 360°',
        category: 'Cobertura Ampla',
        description:
          'Projetadas para substituir múltiplos dispositivos pontuais por um único equipamento de alta densidade óptica. Quatro sensores ajustáveis independentes com costura de imagem perfeita proporcionam cobertura ininterrupta de 180° ou 360° consumindo apenas uma porta de rede e uma licença.',
        features: [
          'Resolução combinada de até 32 MP para identificação forense de detalhes',
          'Gestão Dinâmica de Fluxo de Alta Definição (HDSM 2.0) poupando rede',
          'Iluminação infravermelha inteligente adaptativa em todos os quadrantes',
          'Classificação de pessoas, veículos e contagem precisa de fluxo',
        ],
        specs: {
          'Resolução': 'Até 32 MP (4 x 8 MP)',
          'Alimentação': 'PoE+ (IEEE 802.3at) ou 24V',
          'Proteções': 'IP66, IP67, IK10',
        },
        tag: 'Câmera Multissensor',
        image: '/images/cameras/camera-avigilon.png',
      },
      {
        title: 'Avigilon AI Appliance & Servidores Analíticos',
        category: 'Aceleração de Inteligência',
        description:
          'Dispositivo de computação de borda de alta densidade que adiciona capacidade de aprendizado de máquina e busca por aparência até mesmo a câmeras convencionais já instaladas na planta, protegendo investimentos legados do cliente.',
        features: [
          'Capacidade de processar dezenas de fluxos de vídeo simultâneos com IA',
          'Habilita busca forense de indivíduos por tipo e cor de vestimenta',
          'Alimentação redundante e hardware de padrão industrial corporativo',
          'Integração nativa com software de gerenciamento Avigilon Control Center (ACC/Unity)',
        ],
        specs: {
          'Capacidade': 'Até 60+ canais de análise simultânea',
          'Armazenamento': 'RAID corporativo hot-swap',
          'Conectividade': 'Portas Gigabit e 10GbE',
        },
        tag: 'IA Appliance',
        image: '/images/equipamentos/avigilon-ai-server.png',
      },
      {
        title: 'Gerenciamento Centralizado Unity & Controle de Acesso',
        category: 'Plataforma Unificada',
        description:
          'Ambiente unificado onde eventos de controle de acesso geram verificação visual instantânea com vídeo ao vivo. Alertas de portas forçadas, credenciais não autorizadas e antipassback são enriquecidos com a gravação precisa do momento.',
        features: [
          'Interface gráfica intuitiva com mapas georreferenciados interativos',
          'Verificação visual de credenciais em tempo real nos pontos de acesso',
          'Relatórios de auditoria com exportação protegida contra adulteração',
          'App móvel corporativo para visualização e resposta a incidentes remotos',
        ],
        specs: {
          'Arquitetura': 'Cliente-Servidor escalável',
          'Compatibilidade': 'ONVIF Perfil S, G, T e M',
          'Segurança': 'Criptografia FIPS 140-2 nível 3',
        },
        tag: 'VMS & Acesso Unificado',
        image: '/images/equipamentos/avigilon-unity-vms.png',
      },
    ],

    businessBenefits: [
      {
        number: '01',
        title: 'ANÁLISE INTELIGENTE',
        desc: 'Ajuda as equipes a encontrar eventos relevantes em grandes volumes de vídeo gravado sem necessidade de rever horas de gravações contínuas.',
        image: '/images/beneficios/beneficio-inteligencia-ia.png',
        highlights: [
          'Busca por atributos físicos (ex.: pessoa com camisa vermelha e mochila)',
          'Detecção automática de comportamentos incomuns de pedestres e frotas',
          'Notificações proativas antes que a invasão perimetral se consolide',
        ],
      },
      {
        number: '02',
        title: 'OPERAÇÃO CENTRALIZADA',
        desc: 'Concentra vídeo analítico, alertas de intrusão e controle de acesso físico em uma única tela de comando de alto impacto.',
        image: '/images/beneficios/beneficio-resposta-rapida.png',
        highlights: [
          'Validação visual instantânea no momento de leitura do crachá',
          'Mapas interativos integrados mostrando a posição exata de cada sensor',
          'Redução drástica do tempo de resposta da equipe patrimonial',
        ],
      },
      {
        number: '03',
        title: 'ESCALA CORPORATIVA',
        desc: 'Arquitetura adequada para operações complexas, plantas fabris extensas e redes distribuídas com dezenas de unidades.',
        image: '/images/beneficios/beneficio-alta-disponibilidade.png',
        highlights: [
          'Gestão de banda HDSM transmitindo apenas o recorte visual focado',
          'Armazenamento otimizado com redução sensível do custo de servidores',
          'Expansão progressiva conforme as novas etapas do plano diretor da empresa',
        ],
      },
    ],

    architectureTitle: 'Monte sua arquitetura',
    architectureSubtitle: 'Entenda como o ecossistema Avigilon conecta câmeras, appliances analíticos e operadores.',
    architectureLayers: [
      {
        step: '01',
        label: 'CÂMERAS H6A',
        sublabel: 'Captura Panorâmica',
        detail: 'Sensores multimegapixel cobrindo 180° ou 360° contínuos com detalhamento forense.',
        metrics: 'Até 32 MP • HDSM 2.0',
        iconName: 'Camera',
      },
      {
        step: '02',
        label: 'AI APPLIANCE',
        sublabel: 'Processamento de Vídeo',
        detail: 'Motor de inteligência artificial indexando pessoas, veículos e trajetos em tempo real.',
        metrics: 'Classificação neural de alvos',
        iconName: 'Cpu',
      },
      {
        step: '03',
        label: 'NETWORK & STORAGE',
        sublabel: 'Armazenamento HDSM',
        detail: 'Compressão patenteada que transmite apenas os pixels necessários para visualização.',
        metrics: 'Economia de banda e storage',
        iconName: 'HardDrive',
      },
      {
        step: '04',
        label: 'UNITY VMS',
        sublabel: 'Plataforma Unificada',
        detail: 'Centralização de gravações, regras de automação e histórico de controle de acesso.',
        metrics: 'Mapas interativos e logs',
        iconName: 'Server',
      },
      {
        step: '05',
        label: 'APPEARANCE SEARCH',
        sublabel: 'Busca Forense',
        detail: 'Localização instantânea de alvos em todo o parque de câmeras através de características visuais.',
        metrics: 'Localização em segundos',
        iconName: 'Search',
      },
      {
        step: '06',
        label: 'CONTROL ROOM',
        sublabel: 'Tomada de Ação',
        detail: 'Acionamento imediato de bloqueio de portas, avisos à segurança e notificação à diretoria.',
        metrics: 'Resposta tática integrada',
        iconName: 'ShieldAlert',
      },
    ],

    applicationsTitle: 'Projetado para ambientes que não podem parar',
    applications: [
      {
        title: 'Complexos Hospitalares & Saúde',
        segment: 'Alta Complexidade',
        description:
          'Rastreamento de movimentações em farmácias centrais, corredores cirúrgicos, berçários e controle estrito de credenciais em áreas estéreis.',
        relevance: 'Garantia de atendimento a protocolos clínicos e proteção de pacientes.',
        iconName: 'HeartPulse',
      },
      {
        title: 'Centros Logísticos & Pátios de Cargas',
        segment: 'Prevenção de Perdas',
        description:
          'Identificação precisa de carretas, rastreabilidade visual de mercadorias de alto valor e cobertura ampla de docas sem pontos cegos.',
        relevance: 'Auditoria de sinistros e minimização de tempo de investigação.',
        iconName: 'Truck',
      },
      {
        title: 'Indústrias Farmacêuticas & Químicas',
        segment: 'Conformidade Regulamentar',
        description:
          'Monitoramento de salas limpas, detecção de tráfego em sentido inadequado e proteção de propriedade intelectual em laboratórios.',
        relevance: 'Atendimento a rígidas normas de controle de processos e auditoria.',
        iconName: 'Factory',
      },
      {
        title: 'Edifícios Comerciais Triple A',
        segment: 'Segurança Executiva',
        description:
          'Controle de saguões de alto fluxo, cancelas de estacionamento, elevadores inteligentes e áreas de diretoria com discrição e sofisticação.',
        relevance: 'Equilíbrio entre acolhimento ao visitante e blindagem corporativa.',
        iconName: 'Building2',
      },
    ],

    compliance: {
      title: 'Tecnologia preparada para ambientes com altas exigências.',
      subtitle:
        'Soluções que auxiliam a sua empresa a cumprir requisitos técnicos de segurança da informação, auditoria e preservação de registros.',
      items: [
        {
          title: 'Conformidade com Privacidade (LGPD)',
          desc: 'Recursos configuráveis para ofuscação de rostos e descarte seguro de gravações após os períodos regulatórios definidos pela governança do cliente.',
          supportedStandard: 'Governança & Adequação LGPD',
        },
        {
          title: 'Proteção Criptográfica Avançada',
          desc: 'Comunicação protegida por certificados digitais e criptografia de ponta a ponta entre câmeras, controladoras e servidores.',
          supportedStandard: 'Criptografia FIPS 140-2',
        },
        {
          title: 'Auditoria e Logs Imutáveis',
          desc: 'Registro completo de todas as ações de operadores, exportações de vídeo e consultas forenses para fins de conformidade interna e externa.',
          supportedStandard: 'Trilha de Auditoria AuditLog',
        },
        {
          title: 'Engenharia com Garantia Oficial',
          desc: 'Projetos especificados por integradores homologados com ART (Anotação de Responsabilidade Técnica) e suporte de fábrica.',
          supportedStandard: 'Padrão CREA & Boas Práticas',
        },
      ],
    },

    casesTitle: 'Projetos que exigem confiabilidade',
    cases: [
      {
        client: 'Hospital Israelita Albert Einstein',
        highlight: 'Projeto Turn-key',
        description:
          'Controle de acesso touchless, monitoramento de alta definição em corredores clínicos e gestão unificada em ambiente hospitalar de excelência.',
        image: '/images/projetos/projeto-hospital-albert-einstein.png',
        tag: 'Saúde & Alta Complexidade',
      },
      {
        client: 'EDP Goiânia',
        highlight: 'Integração avançada',
        description:
          'Segurança perimetral inteligente com análise de vídeo e controle térmico de transformadores em subestação elétrica de alta potência.',
        image: '/images/projetos/projeto-edp-goiania.png',
        tag: 'Energia & Utilidades',
      },
      {
        client: 'Quartel General do Exército — QGEX',
        highlight: 'Infraestrutura crítica de segurança',
        description:
          'Vigilância eletrônica integrada e infraestrutura de rede corporativa para complexo de segurança militar.',
        image: '/images/projetos/projeto-qgex.png',
        tag: 'Defesa & Governo',
      },
    ],

    faq: [
      {
        question: 'É possível utilizar os recursos de IA da Avigilon com as câmeras que minha empresa já possui?',
        answer:
          'Sim. Com o Avigilon AI Appliance é possível injetar recursos de inteligência artificial (como classificação de pessoas e busca por aparência) em câmeras de terceiros já existentes na sua infraestrutura, desde que atendam aos requisitos mínimos de resolução e protocolo ONVIF.',
      },
      {
        question: 'O que é a tecnologia de busca por aparência (Appearance Search)?',
        answer:
          'É um motor de pesquisa baseado em Deep Learning que localiza rapidamente uma pessoa ou veículo específico em todo o parque de câmeras gravadas, utilizando critérios físicos como cor da roupa, características gerais ou a partir da foto do indivíduo.',
      },
      {
        question: 'A tecnologia HDSM realmente economiza armazenamento e banda?',
        answer:
          'Sim. O protocolo High Definition Stream Management transmite apenas a porção de pixels que o operador está de fato visualizando na tela, mantendo a gravação gravada em resolução máxima no servidor sem sobrecarregar a rede local nem computadores clientes.',
      },
      {
        question: 'A VS Tecnologia presta suporte contínuo pós-implantação?',
        answer:
          'Sim. Oferecemos contratos de manutenção preventiva, suporte técnico especializado de engenharia, atualização de firmware e atendimento a chamados com SLA definido.',
      },
      {
        question: 'Como solicitar uma demonstração técnica ou estudo de viabilidade?',
        answer:
          'Basta preencher o formulário desta página ou entrar em contato pelo WhatsApp. Nossa equipe de engenharia agendará uma reunião técnica para analisar sua planta e apresentar a solução adequada.',
      },
    ],

    finalCTA: {
      headline: 'Sua operação não precisa de mais uma câmera.',
      subheadline: 'Precisa de inteligência visual que encontre respostas em segundos.',
      buttonText: 'FALAR COM UM ESPECIALISTA',
    },

    formSource: 'landing_page_avigilon',
    whatsappMessage: 'Olá! Vim pela página da solução Avigilon e gostaria de conversar sobre um projeto com um especialista da VS.',
    seoTitle: 'Soluções Avigilon para Segurança Inteligente | VS Tecnologia',
    seoDescription:
      'Soluções completas Avigilon com inteligência de vídeo, busca por aparência e gestão unificada para ambientes corporativos e infraestrutura crítica com a VS Tecnologia.',
  },

  // =========================================================================
  // 3. AXIS COMMUNICATIONS
  // =========================================================================
  axis: {
    slug: 'axis',
    brandName: 'Axis Communications',
    solutionName: 'Axis Connected Ecosystem',
    eyebrow: 'ECOSSISTEMA DE SEGURANÇA CONECTADO',
    heroEyebrow: 'Axis Communications • Ecossistema de segurança conectado',
    headline: 'Vídeo, áudio, controle de acesso e analytics.',
    headlineHighlight: 'Uma operação integrada e protegida.',
    subheadline:
      'Ecossistema conectado de dispositivos inteligentes em rede com padrões abertos, cibersegurança nativa e confiabilidade absoluta para operações corporativas.',
    heroBenefits: [
      'Ecossistema convergente: Vídeo IP, Áudio em Rede, Acesso e Sensores',
      'Processador ARTPEC-8 de última geração com unidade DLPU na borda',
      'Tecnologias líderes de imagem: Lightfinder 2.0 e Forensic WDR',
      'Plataforma aberta (VAPIX / ACAP) imune ao aprisionamento tecnológico',
    ],
    heroBgImage: '/images/heroes/hero-axis.jpg',
    heroImage: '/images/cameras/camera-axis.png',
    heroImageLabel: 'AXIS Q6000-E / Q60 PTZ - Monitoramento 360° em Terminal de Transporte',
    logo: '/images/marcas/logo-axis.png',
    logoAlt: 'Axis Communications - Fabricante Homologado',
    partnerBadge: 'Fabricante Homologado • Certificação Oficial VS',
    heroMetrics: [
      { value: 'ARTPEC-8', label: 'Chipset Proprietário', detail: 'DLPU para inferência neural ultraveloz' },
      { value: 'Lightfinder', label: 'Cores no Escuro', detail: 'Visão colorida em condições extremas de baixa luz' },
      { value: 'Edge Vault', label: 'Módulo Criptográfico', detail: 'Certificação IEEE 802.1AR e Secure Boot' },
      { value: 'Zipstream', label: 'Compressão Dinâmica', detail: 'Reduz largura de banda preservando detalhes' },
    ],

    problemSection: {
      tag: 'DIAGNÓSTICO OPERACIONAL',
      title: 'Segurança não pode ser reativa.',
      narrative: [
        'Na maioria das empresas, os sistemas de vigilância por vídeo, sonorização de ambientes, alarmes perimetrais e controle de portas funcionam como quatro subsistemas completamente independentes, comprados de fornecedores diferentes e sem nenhuma sincronia.',
        'Quando uma invasão ocorre no perímetro, o alarme toca em uma sala, a câmera grava em outro servidor e o porteiro precisa procurar manualmente o telefone para acionar o alerta. Essa falta de conexão gera atrasos fatais na resposta.',
      ],
      painPoints: [
        {
          title: 'Ilhas de tecnologia isoladas e incompatíveis',
          desc: 'Câmeras que não conversam com alto-falantes de aviso e não acionam cancelas de segurança de forma automatizada.',
        },
        {
          title: 'Vulnerabilidades cibernéticas em dispositivos de rede',
          desc: 'Equipamentos sem mecanismos de inicialização segura (Secure Boot), facilitando invasões em redes corporativas.',
        },
        {
          title: 'Perda de nitidez e cores em iluminação crítica',
          desc: 'Câmeras comuns que geram imagens granuladas em preto e branco no período noturno, impossibilitando a identificação pericial.',
        },
        {
          title: 'Aprisionamento tecnológico a sistemas proprietários fechados',
          desc: 'Dificuldade de trocar de software ou expandir a infraestrutura sem ter que descartar todo o parque de equipamentos existente.',
        },
      ],
      solutionBridge: 'É aqui que entra o ecossistema aberto e conectado da Axis Communications.',
    },

    technologiesTitle: 'Uma arquitetura. Múltiplas camadas de proteção.',
    technologiesSubtitle: 'Dispositivos inteligentes cooperando de ponta a ponta sobre a mesma rede IP.',
    technologies: [
      {
        title: 'Câmeras de Rede 4K com ARTPEC-8 e Lightfinder 2.0',
        category: 'Captura Visual Avançada',
        description:
          'Equipamentos de alta robustez mecânica (IK10+ e IP66/67) dotados do processador ARTPEC-8. Executam análises com Deep Learning na borda (AXIS Object Analytics), mantendo fidelidade absoluta de cores mesmo em iluminação próxima de zero lux com a tecnologia Lightfinder 2.0.',
        features: [
          'Diferenciação granular de pessoas, automóveis, ônibus e caminhões',
          'Módulo de segurança cibernética Axis Edge Vault protegendo chaves criptográficas',
          'Compressão Axis Zipstream com economia de até 50% de banda e armazenamento',
          'Estabilização eletrônica de imagem (EIS) contra vibrações de vento e tráfego',
        ],
        specs: {
          'Chipset': 'Axis ARTPEC-8 com DLPU',
          'Resolução': '4K UHD (8 MP) a 60 fps',
          'Segurança': 'TPM 2.0 / IEEE 802.1AR',
        },
        tag: 'Câmera Dome / Bullet',
        image: '/images/cameras/camera-axis.png',
      },
      {
        title: 'Áudio IP em Rede e Alto-Falantes Corneta',
        category: 'Intervenção Ativa',
        description:
          'Alto-falantes inteligentes conectados diretamente à rede PoE. Quando a análise da câmera detecta uma invasão perimetral, o próprio ecossistema dispara imediatamente um aviso de voz pré-programado ou permite ao operador falar ao vivo, desestimulando a ação criminosa.',
        features: [
          'Alimentação direta via cabo de rede PoE (sem cabeamento de áudio analógico)',
          'DSP (Processamento Digital de Sinais) embutido para clareza vocal cristalina',
          'Mensagens de voz automáticas ativadas por regras analíticas de vídeo',
          'Autoteste de saúde do alto-falante gerando relatórios de disponibilidade',
        ],
        specs: {
          'Alimentação': 'PoE IEEE 802.3af/at',
          'SPL': 'Até 121 dB para uso externo em pátios',
          'Protocolos': 'SIP, RTP, Axis VAPIX',
        },
        tag: 'Áudio em Rede',
        image: '/images/equipamentos/axis-audio-horn.png',
      },
      {
        title: 'Controladoras de Acesso de Rede e AXIS Camera Station',
        category: 'Controle & Orquestração',
        description:
          'Controladoras de porta compactas operando em protocolo aberto (OSDP v2 seguro), gerenciando fechaduras, leitoras biométricas e interfonia com inteligência descentralizada que continua operando mesmo se o servidor central cair.',
        features: [
          'Plataforma aberta compatível com os principais softwares de mercado',
          'Memória local não volátil para até 70.000 usuários e 200.000 eventos',
          'Alimentação de fechaduras diretamente pelas portas supervisionadas PoE+',
          'Software VMS AXIS Camera Station para gestão fluida de vídeo e acesso',
        ],
        specs: {
          'Portas': '2 leitoras OSDP / Wiegand supervisionadas',
          'Capacidade': '70.000 credenciais salvas em memória local',
          'Certificação': 'UL 294, CE, FCC',
        },
        tag: 'Controladora IP',
        image: '/images/equipamentos/axis-door-controller.png',
      },
    ],

    businessBenefits: [
      {
        number: '01',
        title: 'ECOSSISTEMA INTEGRADO',
        desc: 'Vídeo, áudio em rede, controle de acesso e analytics inteligentes trabalhando como uma única engrenagem automatizada.',
        image: '/images/beneficios/beneficio-inteligencia-ia.png',
        highlights: [
          'Avisos de voz disparados automaticamente por violação visual de perímetro',
          'Verificação fotográfica em tela para cada passagem em catracas e portas',
          'Redução substancial da necessidade de rondas manuais noturnas',
        ],
      },
      {
        number: '02',
        title: 'INTELIGÊNCIA DISTRIBUÍDA',
        desc: 'Processamento de analytics realizado diretamente na ponta (Edge Computing), reduzindo tráfego e acelerando a resposta.',
        image: '/images/beneficios/beneficio-resposta-rapida.png',
        highlights: [
          'Dispositivos tomam decisões locais sem depender da estabilidade do link central',
          'Classificação precisa de objetos evitando disparos falsos de sirenes',
          'Metadados estruturados para geração de relatórios de ocupação e fluxo',
        ],
      },
      {
        number: '03',
        title: 'ARQUITETURA ABERTA',
        desc: 'Baseada em padrões abertos e APIs documentadas, permitindo integração harmoniosa com a infraestrutura existente do seu projeto.',
        image: '/images/beneficios/beneficio-alta-disponibilidade.png',
        highlights: [
          'Compatibilidade universal via ONVIF e protocolo Axis VAPIX aberto',
          'Liberdade para escolher ou migrar de software VMS sem trocar o hardware',
          'Ciclo de vida estendido dos equipamentos com suporte contínuo de firmware',
        ],
      },
    ],

    architectureTitle: 'Monte sua arquitetura',
    architectureSubtitle: 'Veja como os nós inteligentes do ecossistema Axis interagem sobre a mesma rede.',
    architectureLayers: [
      {
        step: '01',
        label: 'SENSORES & CÂMERAS',
        sublabel: 'Visão & Detecção',
        detail: 'Câmeras 4K ópticas e térmicas monitorando pontos críticos com Lightfinder 2.0.',
        metrics: '4K • 60fps • WDR Forense',
        iconName: 'Camera',
      },
      {
        step: '02',
        label: 'EDGE VAULT & DLPU',
        sublabel: 'Inferência Segura',
        detail: 'Chipset seguro protegendo a identidade do nó e processando redes neurais na borda.',
        metrics: 'Certificado IEEE 802.1AR',
        iconName: 'Cpu',
      },
      {
        step: '03',
        label: 'REDE IP POE+',
        sublabel: 'Comunicação Unificada',
        detail: 'Switches e fibra óptica conduzindo vídeo, dados de acesso e áudio pelo mesmo cabo.',
        metrics: 'Zipstream • OSDP v2',
        iconName: 'Network',
      },
      {
        step: '04',
        label: 'ÁUDIO & ACESSO',
        sublabel: 'Intervenção Local',
        detail: 'Alto-falantes de corneta e controladoras de porta acionados automaticamente por regras.',
        metrics: 'Dissuasão em tempo real',
        iconName: 'Volume2',
      },
      {
        step: '05',
        label: 'AXIS CAMERA STATION',
        sublabel: 'Gestão Operacional',
        detail: 'Visualização integrada de câmeras, mapas de calor, controle de portas e gravações.',
        metrics: 'VMS intuitivo e robusto',
        iconName: 'Server',
      },
      {
        step: '06',
        label: 'CCO / RESPOSTA',
        sublabel: 'Comando Estratégico',
        detail: 'Tomada de decisão ágil pelos gestores com relatórios de ocupação e histórico de incidentes.',
        metrics: 'Operação fluida e proativa',
        iconName: 'ShieldCheck',
      },
    ],

    applicationsTitle: 'Projetado para ambientes que não podem parar',
    applications: [
      {
        title: 'Subestações & Concessionárias de Energia',
        segment: 'Infraestrutura Crítica',
        description:
          'Proteção perimetral contra intrusões, monitoramento térmico de barramentos elétricos e avisos automáticos de segurança por áudio corneta.',
        relevance: 'Ambientes sujeitos a indução eletromagnética que exigem equipamentos dielétricos.',
        iconName: 'Zap',
      },
      {
        title: 'Centros Hospitalares e Clínicas',
        segment: 'Saúde & Confiabilidade',
        description:
          'Controle de farmácias com controladoras de porta abertas, interfonia de emergência SIP e monitoramento discreto em áreas de triagem.',
        relevance: 'Garantia de assepsia, facilidade de uso e conformidade com normas hospitalares.',
        iconName: 'HeartPulse',
      },
      {
        title: 'Indústrias Químicas e Manufatura',
        segment: 'Plantas Industriais',
        description:
          'Câmeras à prova de intempéries, detecção de permanência não autorizada em zonas de risco e comunicação sonora para evacuação segura.',
        relevance: 'Equipamentos com certificação NEMA 4X e proteção contra corrosão e pós.',
        iconName: 'Factory',
      },
      {
        title: 'Sedes Corporativas & Data Centers',
        segment: 'Alta Governança',
        description:
          'Acesso com dupla autenticação a salas seguras, monitoramento de corredores de servidores e integração fluida com sistemas prediais (BMS).',
        relevance: 'Necessidade de criptografia nativa e ausência de backdoors de segurança.',
        iconName: 'Building2',
      },
    ],

    compliance: {
      title: 'Tecnologia preparada para ambientes com altas exigências.',
      subtitle:
        'A Axis Communications é referência global em cibersegurança e padrões éticos de fabricação de hardware de segurança.',
      items: [
        {
          title: 'Cibersegurança com Axis Edge Vault',
          desc: 'Ambiente de execução confiável de hardware com inicialização segura que impede a instalação de firmwares adulterados em sua rede.',
          supportedStandard: 'Padrão IEEE 802.1AR / Secure Boot',
        },
        {
          title: 'Interoperabilidade Aberta',
          desc: 'Total suporte a especificações abertas da indústria, garantindo compatibilidade com sistemas legados homologados e evitando lock-in.',
          supportedStandard: 'Padrão ONVIF (Perfil S, G, T, M, A e C)',
        },
        {
          title: 'Transparência de Vulnerabilidades (CVE)',
          desc: 'Política ativa de divulgação responsável de vulnerabilidades e correções regulares de software sem custos adicionais de licença.',
          supportedStandard: 'Programa CVE & Boas Práticas',
        },
        {
          title: 'Responsabilidade Ambiental e Materiais',
          desc: 'Componentes livres de substâncias perigosas (RoHS) e carcaças projetadas para longa vida útil em campo.',
          supportedStandard: 'Diretiva RoHS e ISO 14001',
        },
      ],
    },

    casesTitle: 'Projetos que exigem confiabilidade',
    cases: [
      {
        client: 'EDP Goiânia',
        highlight: 'Integração avançada',
        description:
          'Emprego de câmeras térmicas radiométricas e ópticas de alta definição da AXIS com alarme de temperatura preventivo em subestação elétrica.',
        image: '/images/projetos/projeto-edp-goiania.png',
        tag: 'Energia & Utilidades',
      },
      {
        client: 'Hospital Israelita Albert Einstein',
        highlight: 'Projeto Turn-key',
        description:
          'Monitoramento com câmeras discretas de alta sensibilidade luminosa e integração com infraestrutura estruturada de cabeamento.',
        image: '/images/projetos/projeto-hospital-albert-einstein.png',
        tag: 'Saúde & Alta Complexidade',
      },
      {
        client: 'Quartel General do Exército — QGEX',
        highlight: 'Infraestrutura crítica de segurança',
        description:
          'Vigilância eletrônica corporativa com equipamentos de alto grau antivandalismo e anel de rede de dados de alta disponibilidade.',
        image: '/images/projetos/projeto-qgex.png',
        tag: 'Defesa & Governo',
      },
    ],

    faq: [
      {
        question: 'O que diferencia o ecossistema Axis de câmeras convencionais de mercado?',
        answer:
          'A Axis foi a pioneira em inventar a primeira câmera de rede do mundo. Seu grande diferencial é o processador proprietário ARTPEC, o ecossistema aberto de aplicativos (ACAP) e recursos nativos de cibersegurança (Edge Vault) que transformam cada dispositivo em um computador analítico seguro na borda.',
      },
      {
        question: 'Como os alto-falantes IP podem ser acionados pelas câmeras?',
        answer:
          'Por estarem todos conectados na mesma rede IP sob a mesma linguagem aberta, você pode criar regras simples: quando uma câmera detectar invasão em horário proibido, ela mesma envia um comando de rede para a corneta tocar uma mensagem gravada de advertência.',
      },
      {
        question: 'A Axis cobra mensalidades obrigatórias pelo firmware das câmeras?',
        answer:
          'Não. As atualizações de segurança e melhorias de firmware dos equipamentos são disponibilizadas gratuitamente pelo fabricante ao longo de todo o ciclo de vida do produto.',
      },
      {
        question: 'A VS Tecnologia fornece os equipamentos e executa a instalação?',
        answer:
          'Sim. Fornecemos os equipamentos originais com garantia formal, realizamos a instalação de cabeamento certificado, configuramos os parâmetros de rede e prestamos o treinamento operacional.',
      },
      {
        question: 'Como dar o primeiro passo para um projeto com tecnologia Axis?',
        answer:
          'Entre em contato pelo formulário ou WhatsApp informando sua necessidade. Nossos engenheiros realizarão uma análise do seu cenário para dimensionar as câmeras, lentes e equipamentos de rede ideais.',
      },
    ],

    finalCTA: {
      headline: 'Sua operação não precisa de mais uma câmera.',
      subheadline: 'Precisa de um ecossistema conectado que antecipe riscos e proteja seus ativos.',
      buttonText: 'FALAR COM UM ESPECIALISTA',
    },

    formSource: 'landing_page_axis',
    whatsappMessage: 'Olá! Vim pela página da solução Axis Communications e gostaria de conversar sobre um projeto com um especialista da VS.',
    seoTitle: 'Soluções Axis Communications | Ecossistema de Segurança Conectado | VS Tecnologia',
    seoDescription:
      'Soluções corporativas Axis Communications com vídeo IP, áudio em rede, controle de acesso e análise avançada com a engenharia da VS Tecnologia.',
  },

  // =========================================================================
  // 4. PELCO
  // =========================================================================
  pelco: {
    slug: 'pelco',
    brandName: 'Pelco',
    solutionName: 'Pelco VideoXpert Enterprise',
    eyebrow: 'VIDEOMONITORAMENTO PARA OPERAÇÕES QUE EXIGEM CONTROLE CONTÍNUO',
    heroEyebrow: 'Pelco • Infraestrutura confiável para ambientes exigentes',
    headline: 'Quando perder um evento',
    headlineHighlight: 'não é uma opção na sua operação.',
    subheadline:
      'Plataformas robustas de videomonitoramento, software VideoXpert Enterprise e câmeras industriais para infraestruturas críticas com operação ininterrupta 24 horas por dia.',
    heroBenefits: [
      'Software VMS VideoXpert Enterprise com arquitetura tolerante a falhas',
      'Câmeras panorâmicas Sarix e linhas PTZ Spectra de alta durabilidade',
      'Gravação ininterrupta com redundância e failover N+1 em tempo real',
      'Conformidade com normas industriais IK10, IP67 e cibersegurança nativa',
    ],
    heroBgImage: '/images/heroes/hero-pelco.jpg',
    heroImage: '/images/cameras/camera-pelco.png',
    heroImageLabel: 'Pelco Sarix Multi Pro - Cobertura Panorâmica Multidirecional Externa',
    logo: '/images/marcas/logo-pelco.png',
    logoAlt: 'Pelco - Fabricante Homologado',
    partnerBadge: 'Fabricante Homologado • Certificação Oficial VS',
    heroMetrics: [
      { value: 'VideoXpert', label: 'VMS Corporativo', detail: 'Gestão intuitiva para centrais de grande porte' },
      { value: 'Spectra PTZ', label: 'Mecânica Extrema', detail: 'Movimento contínuo 360° com durabilidade lendária' },
      { value: 'Failover N+1', label: 'Alta Disponibilidade', detail: 'Gravação ininterrupta mesmo com falha de servidor' },
      { value: 'ONVIF Total', label: 'Interoperabilidade', detail: 'Integração transparente com centenas de fabricantes' },
    ],

    problemSection: {
      tag: 'DIAGNÓSTICO OPERACIONAL',
      title: 'Segurança não pode ser reativa.',
      narrative: [
        'Em operações de missão crítica — como plantas industriais pesadas, portos, aeroportos e centros penitenciários —, a queda momentânea de um servidor de gravação ou o travamento mecânico de uma câmera PTZ não é apenas um transtorno operacional: é uma violação grave de segurança.',
        'Sistemas genéricos não suportam condições climáticas hostis, poeira abrasiva, variações de temperatura ou o estresse de operações contínuas de 24 horas nos 365 dias do ano, gerando custos ocultos constantes de manutenção.',
      ],
      painPoints: [
        {
          title: 'VMS complexos e difíceis de operar em emergências',
          desc: 'Interfaces confusas que demandam muitos cliques para exportar um vídeo ou alternar visualizações durante uma crise.',
        },
        {
          title: 'Vulnerabilidade mecânica de equipamentos em ambientes severos',
          desc: 'Câmeras externas que quebram com tempestades, oscilação de calor ou maresia por falta de grau de proteção industrial.',
        },
        {
          title: 'Falta de redundância e perda irreversível de imagens',
          desc: 'Gravadores que param quando um disco falha ou uma placa queima, criando lacunas inaceitáveis de registros.',
        },
        {
          title: 'Dificuldade de integrar novos módulos a sistemas legados',
          desc: 'Softwares que obrigam a compra de equipamentos da mesma marca, encarecendo desnecessariamente as expansões.',
        },
      ],
      solutionBridge: 'É aqui que entra a confiabilidade comprovada da engenharia Pelco.',
    },

    technologiesTitle: 'Uma arquitetura. Múltiplas camadas de proteção.',
    technologiesSubtitle: 'Engenharia projetada para resistir ao tempo, ao clima e às exigências de segurança mais duras do planeta.',
    technologies: [
      {
        title: 'Pelco VideoXpert Enterprise VMS',
        category: 'Gerenciamento de Vídeo',
        description:
          'Software de gestão de vídeo desenvolvido com foco na ergonomia do operador e na confiabilidade da infraestrutura. Permite gerenciar milhares de câmeras distribuídas com failover automático de servidores, mapas interativos e decodificação fluida de múltiplos fluxos 4K.',
        features: [
          'Interface gráfica simplificada com tempo de treinamento reduzido para operadores',
          'Arquitetura modular de alta resiliência com redundância N+1 de gravação',
          'Compatibilidade aberta com dispositivos de terceiros através do protocolo ONVIF',
          'Ferramentas colaborativas para compartilhamento de evidências entre operadores',
        ],
        specs: {
          'Escalabilidade': 'Dezenas a milhares de canais',
          'Redundância': 'Failover em tempo real sem perda de gravação',
          'Padrões': 'ONVIF Perfil S, G e T',
        },
        tag: 'VMS Enterprise',
        image: '/images/equipamentos/pelco-videoxpert-vms.png',
      },
      {
        title: 'Câmeras PTZ Spectra Série Profissional',
        category: 'Monitoramento Móvel Extremo',
        description:
          'A lendária linha Spectra de câmeras PTZ de alta velocidade, construída com gabinetes industriais anticorrosivos, sistema de posicionamento de precisão e zoom óptico potente para identificação de pessoas e placas a longas distâncias.',
        features: [
          'Giro contínuo 360° com rotação de alta precisão até 450° por segundo',
          'Iluminação infravermelha adaptativa de longo alcance para escuridão total',
          'Desembaçamento térmico e cúpula resistente a impactos mecânicos IK10',
          'Analíticos integrados de cerca virtual, velocidade e direção proibida',
        ],
        specs: {
          'Zoom Óptico': 'Até 40x com foco instantâneo',
          'Proteções': 'IP66, IP67, NEMA 4X, IK10',
          'Temperatura': '-40 °C a 60 °C',
        },
        tag: 'PTZ Industrial',
        image: '/images/equipamentos/pelco-spectra-ptz.png',
      },
      {
        title: 'Câmeras Panorâmicas Sarix e Térmicas Sarix Thermal',
        category: 'Perímetro & Áreas Amplas',
        description:
          'Equipamentos de lente fixa e sensores radiométricos com imunidade a poeira, fumaça e névoa densa. Garantem detecção precoce de intrusos em perímetros sem iluminação artificial e alerta antecipado de sobreaquecimento.',
        features: [
          'Detecção térmica precisa de silhuetas humanas e motores aquecidos a quilômetros',
          'Combinação com sensores visuais para conferência pericial rápida',
          'Invólucros com proteção antivandalismo e contra jatos fortes de água',
          'Homologadas para operação contínua em refinarias, usinas e subestações',
        ],
        specs: {
          'Sensor Térmico': 'Microbolômetro não resfriado de óxido de vanádio',
          'Carcaça': 'Alumínio naval com pintura epóxi',
          'Alimentação': 'PoE+ ou 24V AC/DC',
        },
        tag: 'Térmica & Panorâmica',
        image: '/images/cameras/camera-pelco.png',
      },
    ],

    businessBenefits: [
      {
        number: '01',
        title: 'VISÃO CENTRALIZADA',
        desc: 'Operações complexas e plantas industriais monitoradas através de uma plataforma integrada com visualização ágil e mapas georreferenciados.',
        image: '/images/beneficios/beneficio-inteligencia-ia.png',
        highlights: [
          'Videowalls corporativos com layouts dinâmicos configuráveis por perfil',
          'Localização visual imediata de alarmes sobre plantas baixas da instalação',
          'Exportação criptografada de incidentes para fins de auditoria jurídica',
        ],
      },
      {
        number: '02',
        title: 'CYBERSECURITY NATIVA',
        desc: 'Recursos robustos voltados à blindagem da infraestrutura de vídeo contra invasões lógicas e acessos não autorizados.',
        image: '/images/beneficios/beneficio-resposta-rapida.png',
        highlights: [
          'Autenticação de dois fatores e integração com diretórios corporativos (LDAP/AD)',
          'Comunicação criptografada por TLS 1.3 entre câmeras e servidores',
          'Registro inalterável de todas as interações e consultas de usuários',
        ],
      },
      {
        number: '03',
        title: 'INTEROPERABILIDADE COMPROVADA',
        desc: 'Integração transparente com dispositivos legados, sistemas de terceiros e sensores de alarme via protocolos universais.',
        image: '/images/beneficios/beneficio-alta-disponibilidade.png',
        highlights: [
          'Conformidade integral com os perfis ONVIF do mercado',
          'Flexibilidade para manter investimentos anteriores enquanto moderniza a central',
          'Suporte técnico de engenharia com homologação de fábrica',
        ],
      },
    ],

    architectureTitle: 'Monte sua arquitetura',
    architectureSubtitle: 'A estrutura resiliente do ecossistema Pelco VideoXpert.',
    architectureLayers: [
      {
        step: '01',
        label: 'CÂMERAS SARIX & SPECTRA',
        sublabel: 'Captura Perimétrica',
        detail: 'Câmeras fixas, panorâmicas e PTZ com resistência mecânica para condições adversas.',
        metrics: 'IK10 • IP67 • NEMA 4X',
        iconName: 'Camera',
      },
      {
        step: '02',
        label: 'REDE INDUSTRIAL',
        sublabel: 'Backbone de Alta Confiabilidade',
        detail: 'Infraestrutura de rede com anéis ópticos de fibra e switches industriais redundantes.',
        metrics: 'Zero perda de pacotes',
        iconName: 'Network',
      },
      {
        step: '03',
        label: 'CORE SERVERS',
        sublabel: 'Gerenciamento de Mídia',
        detail: 'Servidores de banco de dados e controle de usuários com tolerância a falhas.',
        metrics: 'Cluster de alta disponibilidade',
        iconName: 'Database',
      },
      {
        step: '04',
        label: 'RECORDING STORAGE',
        sublabel: 'Gravação em RAID',
        detail: 'Unidades de gravação contínua com failover N+1 assumindo em caso de parada de nós.',
        metrics: 'Gravação ininterrupta 24/7',
        iconName: 'HardDrive',
      },
      {
        step: '05',
        label: 'VIDEOXPERT VMS',
        sublabel: 'Inteligência de Interface',
        detail: 'Ambiente ergonômico para operadores com atalhos rápidos e mapas interativos.',
        metrics: 'Navegação fluida e veloz',
        iconName: 'Server',
      },
      {
        step: '06',
        label: 'CENTRAL DE OPERAÇÕES',
        sublabel: 'Resposta & Despacho',
        detail: 'Videowalls, integração com brigadas de incêndio e equipes táticas de campo.',
        metrics: 'Controle contínuo e absoluto',
        iconName: 'Monitor',
      },
    ],

    applicationsTitle: 'Projetado para ambientes que não podem parar',
    applications: [
      {
        title: 'Centros Penitenciários & Segurança Pública',
        segment: 'Controle Máximo',
        description:
          'Monitoramento de pátios, muralhas e galerias com câmeras à prova de depredação e retenção inviolável de gravações.',
        relevance: 'Tolerância zero a falhas ou pontos cegos visuais.',
        iconName: 'ShieldAlert',
      },
      {
        title: 'Usinas de Energia, Hidrelétricas & Óleo e Gás',
        segment: 'Operações Severas',
        description:
          'Proteção de reservatórios, tubulações, áreas com risco de explosão e monitoramento perimetral contra invasões noturnas.',
        relevance: 'Resistência a intempéries agressivas e altas variações térmicas.',
        iconName: 'Zap',
      },
      {
        title: 'Mineração, Siderurgia & Logística Portuária',
        segment: 'Ambientes Hostis',
        description:
          'Supervisão de correias transportadoras, pátios de minério, cais de atracação e tráfego de guindastes pesados.',
        relevance: 'Equipamentos resistentes a vibração, poeira suspensa e corrosão salina.',
        iconName: 'Factory',
      },
      {
        title: 'Grandes Complexos Educacionais & Campi',
        segment: 'Espaços Abertos',
        description:
          'Cobertura de amplos estacionamentos, vias internas e edifícios dispersos com centralização em única sala de segurança.',
        relevance: 'Otimização de equipe patrimonial por meio de monitoramento inteligente.',
        iconName: 'Building2',
      },
    ],

    compliance: {
      title: 'Tecnologia preparada para ambientes com altas exigências.',
      subtitle:
        'Soluções com tradição global em segurança física, projetadas para manter conformidade com normas regulamentares de continuidade operacional.',
      items: [
        {
          title: 'Conformidade com Normas de TI e Privacidade',
          desc: 'Políticas configuráveis de retenção de gravações, mascaramento de privacidade e conformidade com diretrizes da LGPD.',
          supportedStandard: 'Governança & Privacidade LGPD',
        },
        {
          title: 'Resistência Mecânica Homologada',
          desc: 'Certificações internacionais de impacto e estanqueidade que garantem a segurança do equipamento contra vandalismo e tempestades.',
          supportedStandard: 'Graus de Proteção IK10 e IP66/67',
        },
        {
          title: 'Cibersegurança Corporativa',
          desc: 'Proteção contra ataques de negação de serviço, senhas fortes obrigatórias e fechamento de portas de rede não utilizadas.',
          supportedStandard: 'Padrão Hardening Corporativo',
        },
        {
          title: 'Projetos com Responsabilidade Técnica',
          desc: 'Projetos executivos desenvolvidos por engenheiros registrados no CREA com fornecimento oficial e documentação as-built.',
          supportedStandard: 'Engenharia com ART / CREA-GO',
        },
      ],
    },

    casesTitle: 'Projetos que exigem confiabilidade',
    cases: [
      {
        client: 'Quartel General do Exército — QGEX',
        highlight: 'Infraestrutura crítica de segurança',
        description:
          'Implantação de equipamentos de segurança física e infraestrutura de rede para complexo militar estratégico com alta exigência operacional.',
        image: '/images/projetos/projeto-qgex.png',
        tag: 'Defesa & Governo',
      },
      {
        client: 'EDP Goiânia',
        highlight: 'Integração avançada',
        description:
          'Monitoramento perimetral e controle de subestação elétrica sob severo campo eletromagnético com alta disponibilidade de gravação.',
        image: '/images/projetos/projeto-edp-goiania.png',
        tag: 'Energia & Utilidades',
      },
      {
        client: 'Hospital Israelita Albert Einstein',
        highlight: 'Projeto Turn-key',
        description:
          'Infraestrutura integrada de segurança e controle de circulação em centro médico avançado.',
        image: '/images/projetos/projeto-hospital-albert-einstein.png',
        tag: 'Saúde & Alta Complexidade',
      },
    ],

    faq: [
      {
        question: 'O software VideoXpert da Pelco suporta câmeras de outros fabricantes?',
        answer:
          'Sim. O VideoXpert foi desenvolvido sobre arquitetura aberta e oferece suporte total ao padrão ONVIF, permitindo conectar câmeras já existentes no cliente ou mesclar diferentes fabricantes conforme a necessidade técnica do projeto.',
      },
      {
        question: 'O que acontece com as gravações se um dos servidores de gravação queimar?',
        answer:
          'Nas configurações com failover redundante N+1 que projetamos, um servidor reserva assume imediatamente a gravação das câmeras sem qualquer interrupção, mantendo o histórico protegido e alertando a equipe técnica.',
      },
      {
        question: 'As câmeras PTZ da Pelco são indicadas para áreas externas agressivas?',
        answer:
          'Sim. A linha Spectra é mundialmente famosa justamente pela robustez mecânica contra tempestades, altas temperaturas, granizo e ventos fortes, sendo padrão em pontes, portos e indústrias pesadas.',
      },
      {
        question: 'A VS Tecnologia executa a migração de sistemas antigos para a Pelco?',
        answer:
          'Sim. Avaliamos a fiação e equipamentos legados para elaborar um plano de migração progressivo, evitando que sua operação precise parar para a modernização da central.',
      },
      {
        question: 'Como solicitar um orçamento com a engenharia da VS?',
        answer:
          'Preencha o formulário nesta página ou clique no botão do WhatsApp. Um engenheiro especialista entrará em contato para agendar o diagnóstico e dimensionar a solução adequada.',
      },
    ],

    finalCTA: {
      headline: 'Sua operação não precisa de mais uma câmera.',
      subheadline: 'Precisa de robustez inabalável para manter o controle dia e noite.',
      buttonText: 'FALAR COM UM ESPECIALISTA',
    },

    formSource: 'landing_page_pelco',
    whatsappMessage: 'Olá! Vim pela página da solução Pelco e gostaria de conversar sobre um projeto com um especialista da VS.',
    seoTitle: 'Soluções Pelco para Videomonitoramento | VS Tecnologia',
    seoDescription:
      'Soluções de videomonitoramento de alta confiabilidade Pelco e software VideoXpert com projeto, fornecimento e implantação da VS Tecnologia.',
  },

  // =========================================================================
  // 5. TYCO / iSTAR ULTRA G2 (CONTROLE DE ACESSO CORPORATIVO)
  // =========================================================================
  tyco: {
    slug: 'tyco',
    brandName: 'Tyco / Software House',
    solutionName: 'iSTAR Ultra G2 Access Control',
    eyebrow: 'CONTROLE DE ACESSO CORPORATIVO & INFRAESTRUTURA CRÍTICA',
    heroEyebrow: 'Tyco / Johnson Controls • Controle e segurança integrada',
    headline: 'Controle de acesso de alta densidade',
    headlineHighlight: 'para operações que não podem parar.',
    subheadline:
      'Controladoras iSTAR Ultra G2, comunicação criptografada OSDP v2 e operação 100% autônoma offline para ambientes corporativos que demandam segurança física intransigente.',
    heroBenefits: [
      'Capacidade para até 1.000.000 de usuários e 16 leitoras simultâneas (expansível até 32)',
      'Comunicação ultra-segura com criptografia AES de 256 bits e protocolo OSDP v2 Secure Channel',
      'Operação offline autônoma: mantém validações de acesso mesmo sem conexão de rede',
      'Conformidade com padrões governamentais e corporativos (FICAM, 802.1X e TEE)',
    ],
    heroBgImage: '/images/heroes/hero-tyco.jpg',
    heroImage: '/images/cameras/camera-tyco.png',
    heroImageLabel: 'Tyco Illustra Pro Multi-Sensor - 4 Sensores Ajustáveis e Cobertura Total',
    logo: '/images/marcas/logo-tyco.png',
    logoAlt: 'Tyco Johnson Controls - Fabricante Homologado',
    partnerBadge: 'Fabricante Homologado • Certificação Oficial VS',
    heroMetrics: [
      { value: '1.000.000', label: 'Usuários Suportados', detail: 'Memória local massiva para credenciais' },
      { value: '16 Portas', label: 'Leitores Simultâneos', detail: 'Expansão até 32 portas por gabinete' },
      { value: 'AES 256', label: 'Criptografia de Ponta', detail: 'Blindagem contra interceptações na rede' },
      { value: '100% Offline', label: 'Operação Resiliente', detail: 'Continua operando mesmo com queda de servidor' },
    ],

    problemSection: {
      tag: 'DIAGNÓSTICO OPERACIONAL',
      title: 'Segurança não pode ser reativa.',
      narrative: [
        'Em instalações corporativas de alta complexidade, portas, catracas e eclusas controlam o fluxo de milhares de colaboradores, prestadores e visitantes. Controladoras convencionais dependem de conexão constante com um servidor central para validar se um crachá é válido.',
        'Se o switch queima, o cabo de rede rompe ou o servidor oscila, catracas travam gerando filas caóticas — ou, pior ainda, abrem portas desprotegidas. Além disso, leitoras com fiação Wiegand antiga transmitem dados desprotegidos suscetíveis a clonagem e grampos de fiação.',
      ],
      painPoints: [
        {
          title: 'Vulnerabilidade crítica de comunicação Wiegand antiga',
          desc: 'Leitoras sem criptografia que transmitem números de crachá em texto puro, permitindo grampos eletrônicos fáceis nos fios.',
        },
        {
          title: 'Colapso de circulação em quedas de link ou servidor',
          desc: 'Controladoras dependentes de nuvem ou servidor que deixam portas trancadas ou abertas quando a rede oscila.',
        },
        {
          title: 'Gargalo de expansão de portas e lentidão de resposta',
          desc: 'Controladoras limitadas a 2 ou 4 portas que exigem dezenas de fontes espalhadas e caixas de passagem desorganizadas.',
        },
        {
          title: 'Falta de lógica avançada de eclusas e antipassback',
          desc: 'Incapacidade de impedir que duas portas de segurança abram ao mesmo tempo ou que um crachá seja passado para trás.',
        },
      ],
      solutionBridge: 'É aqui que entra a engenharia do controlador iSTAR Ultra G2 da Tyco / Software House.',
    },

    technologiesTitle: 'Uma arquitetura. Múltiplas camadas de proteção.',
    technologiesSubtitle: 'Hardware de nível governamental projetado para gerenciar acessos com tolerância zero a falhas.',
    technologies: [
      {
        title: 'Controlador de Alta Densidade iSTAR Ultra G2',
        category: 'Núcleo de Processamento',
        description:
          'O controlador de acesso corporativo mais poderoso da categoria. Equipado com processador ARM multinúcleo, sistema operacional Linux embutido e memória para gerenciar até 1 milhão de usuários e 500.000 eventos offline. Controla até 16 leitoras em sua placa nativa e expande para até 32 portas.',
        features: [
          'Processador de alta performance com Trusted Execution Environment (TEE)',
          'Duas portas de rede Gigabit Ethernet com suporte a failover automático e IPv6',
          'Autenticação de rede 802.1X para proteção contra conexões não autorizadas no rack',
          'Lógica avançada de antipassback global, intertravamento de eclusas e lockdown imediato',
        ],
        specs: {
          'Usuários': 'Até 1.000.000 de credenciais salvas localmente',
          'Capacidade': '16 leitoras nativas (expansível a 32)',
          'Criptografia': 'AES 256 bits / TLS 1.3 / FIPS 197',
        },
        tag: 'Controlador iSTAR Ultra G2',
        image: '/images/equipamentos/tyco-istar-controller.png',
      },
      {
        title: 'Comunicação Segura OSDP v2 Secure Channel',
        category: 'Segurança de Borda',
        description:
          'Substituição definitiva da vulnerável fiação Wiegand pelo protocolo bidirecional supervisionado OSDP v2 (Open Supervised Device Protocol). Dados entre leitoras de crachá/biometria e o painel iSTAR trafegam sob criptografia militar AES de 128/256 bits com detecção de violação.',
        features: [
          'Impedimento absoluto de grampos eletrônicos e clonagem na fiação do leitor',
          'Supervisão contínua da saúde da leitora com aviso imediato de desconexão',
          'Fiação simplificada em barramento RS-485 em longas distâncias até 1.200 metros',
          'Suporte a credenciais móveis no smartphone (NFC e BLE) e cartões inteligentes DESFire',
        ],
        specs: {
          'Protocolo': 'SIA OSDP v2.2 Secure Channel',
          'Alcance': 'Até 1.200 metros por barramento',
          'Compatibilidade': 'Leitoras biométricas, faciais e smartcards',
        },
        tag: 'Protocolo OSDP Seguro',
        image: '/images/equipamentos/tyco-osdp-reader.png',
      },
      {
        title: 'Gerenciamento de Energia Inteligente & I/O Supervisionado',
        category: 'Resiliência Elétrica',
        description:
          'Gabinete industrial com fonte de alimentação redundante e monitoramento avançado de bateria. Entradas digitais supervisionadas por resistores de fim de linha (EOL) que diferenciam porta aberta, porta fechada, corte de cabo e curto-circuito.',
        features: [
          'Monitoramento em tempo real da voltagem, carga de bateria e temperatura do painel',
          'Saídas de relé com proteção contra sobrecorrente para travas eletromagnéticas',
          'Relatórios preditivos de troca de baterias antes que ocorra a falha',
          'Gabinete com sensor de abertura (tamper) anti-violação física',
        ],
        specs: {
          'Alimentação': '110/220 VAC com backup de bateria duplo',
          'Entradas/Saídas': 'Entradas supervisionadas duplas analógicas',
          'Certificações': 'UL 294, FICAM, CE',
        },
        tag: 'Gestão Elétrica Resiliente',
        image: '/images/equipamentos/tyco-power-cabinet.png',
      },
    ],

    businessBenefits: [
      {
        number: '01',
        title: 'CONTROLA ACESSOS EM ESCALA',
        desc: 'Projetado para lidar com o fluxo de centenas de milhares de pessoas sem lentidão na resposta ou atraso na liberação das catracas.',
        image: '/images/beneficios/beneficio-inteligencia-ia.png',
        highlights: [
          'Liberação de portas em milissegundos mesmo com 1 milhão de usuários cadastrados',
          'Concentra até 32 portas em um único ponto, reduzindo cabeamento e switches',
          'Gestão unificada de colaboradores, prestadores de serviço e visitantes',
        ],
      },
      {
        number: '02',
        title: 'MANTÉM OPERAÇÃO EM CENÁRIOS DE FALHA',
        desc: 'Operação 100% autônoma offline que preserva a inteligência e as regras de segurança mesmo com a perda total da conexão de rede.',
        image: '/images/beneficios/beneficio-resposta-rapida.png',
        highlights: [
          'Validação completa de permissões e horários sem consultar o servidor',
          'Buffer local para até 500.000 eventos que sincronizam assim que a rede volta',
          'Garante circulação segura em evacuações de emergência e rotas de fuga',
        ],
      },
      {
        number: '03',
        title: 'REDUZ COMPLEXIDADE DE INFRAESTRUTURA',
        desc: 'Arquitetura limpa que consolida fontes de alimentação, relés e inteligência de controle em gabinetes organizados e auditáveis.',
        image: '/images/beneficios/beneficio-alta-disponibilidade.png',
        highlights: [
          'Fiação OSDP de longa distância reduzindo custos de infraestrutura de tubulação',
          'Duas portas de rede Gigabit eliminando a necessidade de switches adicionais',
          'Menor tempo de manutenção e facilidade de diagnóstico técnico em campo',
        ],
      },
    ],

    architectureTitle: 'Monte sua arquitetura',
    architectureSubtitle: 'A topologia segura do fluxo de acesso corporativo Tyco.',
    architectureLayers: [
      {
        step: '01',
        label: 'CREDENTIAL',
        sublabel: 'Identificação Pessoal',
        detail: 'Cartões inteligentes MIFARE DESFire EV3, biometria facial ou credencial móvel no smartphone.',
        metrics: 'Criptografia de alta segurança',
        iconName: 'CreditCard',
      },
      {
        step: '02',
        label: 'READER',
        sublabel: 'Leitura Criptografada',
        detail: 'Leitoras de parede e catracas transmitindo via barramento seguro OSDP v2 supervisionado.',
        metrics: 'AES 256 bits • Barramento RS-485',
        iconName: 'ScanFace',
      },
      {
        step: '03',
        label: 'iSTAR ULTRA G2',
        sublabel: 'Decisão Local Autônoma',
        detail: 'Controlador de alta densidade processando regras de acesso e autorizações em memória local.',
        metrics: 'Validação em < 20ms • 100% offline',
        iconName: 'Cpu',
      },
      {
        step: '04',
        label: 'NETWORK 802.1X',
        sublabel: 'Backbone Corporativo',
        detail: 'Portas de rede Gigabit redundantes protegidas por autenticação 802.1X e TLS 1.3.',
        metrics: 'Failover de rede automático',
        iconName: 'Network',
      },
      {
        step: '05',
        label: 'MANAGEMENT',
        sublabel: 'C•CURE 9000 VMS',
        detail: 'Software de gestão de segurança empresarial consolidando eventos, crachás e alarmes.',
        metrics: 'Sincronização com RH e ERP',
        iconName: 'Server',
      },
      {
        step: '06',
        label: 'ACCESS EVENT',
        sublabel: 'Ação Física',
        detail: 'Acionamento de travas eletromagnéticas, torniquetes, cancelas e geração de logs auditáveis.',
        metrics: 'Controle contínuo e blindado',
        iconName: 'Lock',
      },
    ],

    applicationsTitle: 'Projetado para ambientes que não podem parar',
    applications: [
      {
        title: 'Data Centers & Salas Seguras',
        segment: 'Conformidade Rigorosa',
        description:
          'Eclusas com intertravamento de portas, autenticação dupla (cartão + biometria), antipassback rigoroso e trilha de auditoria completa.',
        relevance: 'Atendimento a normas internacionais de segurança física da informação.',
        iconName: 'Server',
      },
      {
        title: 'Complexos Hospitalares & Centros Cirúrgicos',
        segment: 'Saúde & Controle Sanitário',
        description:
          'Eclusas automáticas touchless, controle de acesso estrito a farmácias e salas de gases medicinais, e liberação instantânea de rotas de fuga.',
        relevance: 'Prioridade absoluta para velocidade da equipe médica e proteção de áreas estéreis.',
        iconName: 'HeartPulse',
      },
      {
        title: 'Indústrias Pesadas & Plantas Químicas',
        segment: 'Operações Críticas',
        description:
          'Controle de portarias com catracas de alto fluxo, cancelas de caminhões pesados e controle de evacuação com contagem de pessoas em áreas de refúgio.',
        relevance: 'Gestão de segurança patrimonial integrada à segurança do trabalho.',
        iconName: 'Factory',
      },
      {
        title: 'Sedes Corporativas & Instituições Financeiras',
        segment: 'Alto Padrão Corporativo',
        description:
          'Gerenciamento de milhares de colaboradores, integração com catracas speed gates de vidro e auditoria de acessos aos andares de tesouraria.',
        relevance: 'Equilíbrio entre agilidade de fluxo e blindagem de áreas confidenciais.',
        iconName: 'Building2',
      },
    ],

    compliance: {
      title: 'Tecnologia preparada para ambientes com altas exigências.',
      subtitle:
        'O iSTAR Ultra G2 atende a rigorosos requisitos de segurança cibernética e física de governos e corporações globais.',
      items: [
        {
          title: 'Homologação Governamental FICAM',
          desc: 'Aprovado pelo programa governamental dos EUA (Federal Identity, Credential, and Access Management) para instalações de segurança máxima.',
          supportedStandard: 'Conformidade FICAM / FIPS 201',
        },
        {
          title: 'Criptografia de Hardware de Nível Militar',
          desc: 'Comunicação ponta a ponta criptografada por AES de 256 bits com módulos criptográficos validados e ausência de portas inseguras.',
          supportedStandard: 'Padrão FIPS 197 / AES-256',
        },
        {
          title: 'Segurança de Conexão à Rede Local',
          desc: 'Autenticação de porta 802.1X garantindo que apenas dispositivos autorizados consigam se comunicar com o switch da rede da empresa.',
          supportedStandard: 'Protocolo IEEE 802.1X & TLS 1.3',
        },
        {
          title: 'Engenharia com Certificação Oficial',
          desc: 'Instalação executada por equipe com treinamento oficial de fábrica e registro de projeto executivo com ART no CREA.',
          supportedStandard: 'Padrão CREA-GO & Fabricante',
        },
      ],
    },

    casesTitle: 'Projetos que exigem confiabilidade',
    cases: [
      {
        client: 'Hospital Israelita Albert Einstein',
        highlight: 'Projeto Turn-key',
        description:
          'Controle de acesso touchless com leitoras avançadas integradas a portas de eclusa, farmácia hospitalar e áreas estéreis.',
        image: '/images/projetos/projeto-hospital-albert-einstein.png',
        tag: 'Saúde & Alta Complexidade',
      },
      {
        client: 'EDP Goiânia',
        highlight: 'Integração avançada',
        description:
          'Controle de acesso perimetral e em salas de controle operacional de subestação elétrica com registro estrito de credenciais.',
        image: '/images/projetos/projeto-edp-goiania.png',
        tag: 'Energia & Utilidades',
      },
      {
        client: 'Quartel General do Exército — QGEX',
        highlight: 'Infraestrutura crítica de segurança',
        description:
          'Controle de acessos e monitoramento integrado para instalações de defesa militar com exigência de operação ininterrupta.',
        image: '/images/projetos/projeto-qgex.png',
        tag: 'Defesa & Governo',
      },
    ],

    faq: [
      {
        question: 'O iSTAR Ultra G2 continua liberando portas se a internet ou o servidor cair?',
        answer:
          'Sim. O iSTAR Ultra G2 possui arquitetura distribuída autônoma: ele armazena até 1.000.000 de credenciais e todas as regras de horário e níveis de acesso em sua memória local. As portas continuam funcionando normalmente e os eventos são guardados na memória para sincronização posterior.',
      },
      {
        question: 'Por que substituir a fiação Wiegand pelo padrão OSDP v2?',
        answer:
          'O protocolo Wiegand tradicional não tem criptografia e transmite o número do crachá aberto, permitindo que invasores conectem grampos físicos nos fios do leitor e clonem credenciais. O OSDP v2 utiliza criptografia AES-128/256 bits e monitora continuamente a integridade do circuito.',
      },
      {
        question: 'Quantas portas um único gabinete iSTAR Ultra G2 consegue controlar?',
        answer:
          'Ele possui 16 interfaces de leitora nativas na placa principal e pode ser expandido com módulos adicionais para gerenciar até 32 leitoras no mesmo gabinete, reduzindo enormemente o número de fontes e passagens de cabeamento.',
      },
      {
        question: 'A VS Tecnologia realiza o comissionamento e a parametrização de software?',
        answer:
          'Sim. Nossa equipe de engenharia realiza todo o projeto elétrico, montagem de gabinetes, conectorização, certificação e configuração lógica de grupos de acesso, níveis de permissão e integração com sistemas legados.',
      },
      {
        question: 'Como solicitar um dimensionamento para a minha empresa?',
        answer:
          'Basta preencher o formulário ou chamar no WhatsApp da engenharia. Levantamos a quantidade de portas, tipos de leitoras (cartão, biometria ou celular) e enviamos uma proposta técnica detalhada.',
      },
    ],

    finalCTA: {
      headline: 'Controle de acesso não é só abrir portas.',
      subheadline: 'É controlar quem, quando e onde, com resiliência total mesmo em cenários de falha.',
      buttonText: 'FALAR COM UM ESPECIALISTA',
    },

    formSource: 'landing_page_tyco',
    whatsappMessage: 'Olá! Vim pela página da solução Tyco / iSTAR Ultra G2 e gostaria de conversar sobre um projeto de controle de acesso corporativo com a VS.',
    seoTitle: 'iSTAR Ultra G2 e Controle de Acesso Tyco | VS Tecnologia',
    seoDescription:
      'Controladores corporativos de alta densidade iSTAR Ultra G2 da Tyco / Software House com comunicação segura OSDP, operação offline e projeto turn-key da VS Tecnologia.',
  },
};
