import { CompanyInfo } from '../types';

export const companyData: CompanyInfo = {
  legalName: 'VS Tecnologia e Automação LTDA',
  tradeName: 'VS Tecnologia e Automação',
  cnpj: '26.848.138/0001-39',
  address: {
    street: 'Rua EF 3',
    number: '211',
    neighborhood: 'Residencial Eli Forte',
    city: 'Goiânia',
    state: 'GO',
    zipCode: '74393-270',
  },
  phone: '(62) 3289-5267',
  phoneRaw: '+556232895267',
  whatsapp: '(62) 3289-5267',
  whatsappRaw: '556232895267',
  email: 'contato@vsautomacao.net.br',
  businessHours: 'Segunda a Sexta, das 08h00 às 18h00',
  engineeringDirector: {
    name: 'Hueliton Silva',
    role: 'Diretor de Engenharia',
    phone: '(62) 3289-5267',
    whatsapp: '(62) 3289-5267',
    email: 'hueliton@vsautomacao.net.br',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/vs-tecnologia-automacao',
    instagram: 'https://www.instagram.com/vsautomacao',
    youtube: 'https://www.youtube.com/@vsautomacao',
  },
};

export const turnkeySteps = [
  {
    step: '01',
    title: 'Diagnóstico',
    desc: 'Levantamento minucioso no local, análise de vulnerabilidades, exigências operacionais e infraestrutura existente.',
  },
  {
    step: '02',
    title: 'Projeto',
    desc: 'Engenharia aplicada com plantas detalhadas, cálculos de carga, throughput, cobertura óptica e documentação técnica.',
  },
  {
    step: '03',
    title: 'Especificação',
    desc: 'Seleção técnica imparcial dos melhores equipamentos dos maiores fabricantes globais com homologação garantida.',
  },
  {
    step: '04',
    title: 'Fornecimento',
    desc: 'Cadeia de suprimentos corporativa com garantia oficial de fábrica, procedência legal e entrega pontual.',
  },
  {
    step: '05',
    title: 'Implantação',
    desc: 'Instalação física com equipe própria certificada, seguindo normas ABNT, TIA/EIA, NR-10 e NR-35.',
  },
  {
    step: '06',
    title: 'Integração',
    desc: 'Parametrização fina de softwares VMS, automação, controle de acessos, áudio IP e comissionamento completo.',
  },
  {
    step: '07',
    title: 'Suporte e Manutenção',
    desc: 'SLA garantido, plantão técnico, monitoramento de saúde de ativos e planos preventivos contínuos.',
  },
];
