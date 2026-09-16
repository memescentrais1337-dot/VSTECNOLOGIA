import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { companyData } from '../data/company';
import { ShieldCheck, FileText, Lock, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'cookies' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const { navigate } = useNavigation();

  const getTitle = () => {
    switch (type) {
      case 'privacy':
        return 'Política de Privacidade e Proteção de Dados (LGPD)';
      case 'cookies':
        return 'Política de Cookies e Gestão de Preferências';
      case 'terms':
        return 'Termos de Uso e Condições Gerais de Fornecimento B2B';
    }
  };

  return (
    <main className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para a Página Inicial</span>
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Governança & Conformidade Legal</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {getTitle()}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Última atualização: Março de {new Date().getFullYear()} • Versão 2.1
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              1. Identificação do Controlador
            </h2>
            <p>
              Este portal é de propriedade e operado por <strong>{companyData.legalName}</strong>, inscrita no CNPJ sob o nº <strong>{companyData.cnpj}</strong>, com sede na {companyData.address.street}, Nº {companyData.address.number}, {companyData.address.neighborhood}, Goiânia - GO, CEP {companyData.address.zipCode}.
            </p>
          </section>

          {type === 'privacy' && (
            <>
              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  2. Tratamento de Dados Pessoais Corporativos
                </h2>
                <p>
                  A VS Tecnologia e Automação trata dados pessoais exclusivamente no contexto de relações comerciais B2B (Business-to-Business). Os dados coletados através de nossos formulários de contato, solicitação de cotação e modais de atendimento técnico incluem:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nome completo do representante ou responsável técnico;</li>
                  <li>E-mail corporativo institucional;</li>
                  <li>Telefone / WhatsApp de contato profissional;</li>
                  <li>Razão Social e CNPJ da empresa representada;</li>
                  <li>Informações técnicas relativas ao projeto e necessidades operacionais.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  3. Bases Legais e Finalidade (Art. 7º da Lei 13.709/2018 - LGPD)
                </h2>
                <p>
                  O tratamento dos dados apoia-se nas seguintes bases legais:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Execução de procedimentos preliminares a contrato:</strong> elaboração de orçamentos técnicos, memoriais descritivos e propostas de engenharia a pedido do titular;</li>
                  <li><strong>Legítimo interesse:</strong> comunicação corporativa estritamente relacionada às atividades de engenharia e segurança solicitadas;</li>
                  <li><strong>Cumprimento de obrigação legal ou regulatória:</strong> emissão de notas fiscais, registros de ART junto ao CREA-GO e conformidade fiscal.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  4. Compartilhamento e Armazenamento Seguro
                </h2>
                <p>
                  Não comercializamos dados sob nenhuma hipótese. Os dados poderão ser compartilhados tão somente com fabricantes homologados (como AXIS, CAME, Furukawa) estritamente quando necessário para registro oficial de oportunidade ou emissão de garantia estendida de projeto.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  5. Direitos do Titular
                </h2>
                <p>
                  O titular poderá solicitar a confirmação, correção, anonimização ou exclusão de seus dados mediante envio de solicitação ao Encarregado de Dados (DPO) através do e-mail <strong>{companyData.email}</strong>.
                </p>
              </section>
            </>
          )}

          {type === 'cookies' && (
            <>
              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  2. O que são Cookies e como os utilizamos
                </h2>
                <p>
                  Cookies são pequenos arquivos de texto armazenados no navegador do visitante para viabilizar funções técnicas essenciais, memorizar preferências e coletar métricas estatísticas anônimas de tráfego.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  3. Categorias de Cookies Utilizados
                </h2>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="font-bold text-slate-900">Cookies Estritamente Necessários</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Essenciais para a navegação segura, carregamento de rotas e armazenamento da ciência sobre a exibição de modais e termos. Não podem ser desativados.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="font-bold text-slate-900">Cookies de Performance & Analítica</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Permitem mensurar o volume de acessos e páginas mais procuradas sem identificar nominalmente o visitante, subsidiando melhorias em nosso catálogo.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {type === 'terms' && (
            <>
              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  2. Escopo do Catálogo e Informações Técnicas
                </h2>
                <p>
                  As informações, códigos de part number, fotografias e especificações contidas neste site possuem finalidade técnica e consultiva. A VS Tecnologia e Automação reserva-se o direito de atualizar especificações conforme revisões dos fabricantes homologados sem aviso prévio.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  3. Ausência de Transações Comerciais Diretas (E-Commerce)
                </h2>
                <p>
                  Este portal não realiza transações financeiras, checkout online ou cobrança em cartão. Qualquer aquisição, locação ou contratação de serviços é formalizada através de proposta comercial técnica, contrato de fornecimento e emissão de nota fiscal faturada diretamente contra o CNPJ contratante.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  4. Foro Competente
                </h2>
                <p>
                  Para dirimir quaisquer controvérsias decorrentes do uso deste portal, fica eleito o Foro da Comarca de Goiânia, Estado de Goiás, com exclusão de qualquer outro.
                </p>
              </section>
            </>
          )}

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mt-8">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
              Contato do Departamento de Conformidade
            </h3>
            <p className="text-xs text-slate-600">
              E-mail: <strong>{companyData.email}</strong> • Telefone: <strong>{companyData.phone}</strong><br />
              {companyData.legalName} • Goiânia - GO
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};
