// Módulo de internacionalização (i18n)

const textos = {
  pt: {
    brand: 'GUILHERME LOPES DEV',
    heroTitulo: 'Construo APIs robustas, escaláveis e de alta performance.',
    heroDesc: 'Estudante de Engenharia de Software na Gran Facultad e. Construo APIs completas com TypeScript, Prisma, testes automatizados com Jest e deploy em nuvem.',
    eyebrow: 'Desenvolvedor Back-end',
    sobreSectionLabel: 'Sobre mim',
    sobreTitulo: 'Quem sou',
    sobreDesc: 'Tenho 20 anos, sou estudante de Engenharia de Software na Gran Facultad e. Focado em back-end, construo APIs confiáveis, performáticas e bem estruturadas. Gosto de código limpo e de fácil manutenção.',
    techTitulo: 'Principais tecnologias',
    stackTitulo: 'Tecnologias que uso',
    projetosSubtitle: 'Projetos',
    projetosTitulo: 'Trabalhos em destaque',

    projeto1Titulo: 'API TypeScript com Prisma & Testes',
    projeto1Desc: 'API REST tipada com TypeScript, Prisma ORM, 11 testes automatizados (Jest + Supertest) e container Docker.',
    projeto2Titulo: 'API de Clientes com Autenticação',
    projeto2Desc: 'API completa com Node.js, Express e PostgreSQL. CRUD de clientes, autenticação JWT, arquitetura em camadas (routes/controllers/services) e deploy no Render.',
    projeto3Titulo: 'Sistema de Login e Dashboard',
    projeto3Desc: 'Interface web com Bootstrap 5 consumindo API própria. Registro, login, CRUD de clientes e agendamentos com proteção JWT. Deploy no GitHub Pages.',
    contatoSubtitle: 'Contato',
    contatoTitulo: 'Vamos trabalhar juntos',
    contatoDesc: 'Estou aberto a novas oportunidades como Desenvolvedor Back-end. Vamos conversar sobre como posso contribuir com seu time.',

    verProjetos: 'Ver projetos',
    falarComigo: 'Falar comigo',
    enviar: 'Enviar mensagem',
    modoClaro: 'Modo claro',
    modoEscuro: 'Modo escuro',
    nomeLabel: 'Nome',
    emailLabel: 'Email',
    mensagemLabel: 'Mensagem',
    nomePlaceholder: 'Seu nome',
    emailPlaceholder: 'seu@email.com',
    mensagemPlaceholder: 'Escreva sua mensagem...',
    backendTitulo: 'Backend',
    bancoTitulo: 'Banco de Dados',
    devopsTitulo: 'Ferramentas & DevOps',
    footerDireitos: '© 2026 Guilherme Lopes. Todos os direitos reservados.',
    verDeploy: 'Ver Deploy',
    pageTitle: 'Guilherme Lopes | Desenvolvedor Back-end'
  },
  en: {
    brand: 'GUILHERME LOPES DEV',
    heroTitulo: 'I build robust, scalable, and high-performance APIs.',
    heroDesc: 'Software Engineering student at Gran Facultad e. I build complete APIs with TypeScript, Prisma, automated tests with Jest, and cloud deployment.',
    eyebrow: 'Back-end Developer',
    sobreSectionLabel: 'About me',
    sobreTitulo: 'Who I am',
    sobreDesc: 'I am 20 years old, a Software Engineering student at Gran Facultad e. Focused on back-end, I build reliable, performant, and well-structured APIs. I like clean and easy-to-maintain code.',
    techTitulo: 'Main technologies',
    stackTitulo: 'Technologies I use',
    projetosSubtitle: 'Projects',
    projetosTitulo: 'Featured projects',

    projeto1Titulo: 'TypeScript API with Prisma & Tests',
    projeto1Desc: 'Typed REST API with TypeScript, Prisma ORM, 11 automated tests (Jest + Supertest) and Docker container.',
    projeto2Titulo: 'Customer API with Authentication',
    projeto2Desc: 'Complete API with Node.js, Express and PostgreSQL. Customer CRUD, JWT authentication, layered architecture (routes/controllers/services) and deploy on Render.',
    projeto3Titulo: 'Login and Dashboard System',
    projeto3Desc: 'Web interface with Bootstrap 5 consuming own API. Registration, login, customer CRUD and scheduling with JWT protection. Deploy on GitHub Pages.',
    contatoSubtitle: 'Contact',
    contatoTitulo: "Let's work together",
    contatoDesc: 'I am open to new opportunities as a Back-end Developer. Let us talk about how I can contribute to your team.',

    verProjetos: 'View projects',
    falarComigo: 'Contact me',
    enviar: 'Send message',
    modoClaro: 'Light mode',
    modoEscuro: 'Dark mode',
    nomeLabel: 'Name',
    emailLabel: 'Email',
    mensagemLabel: 'Message',
    nomePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    mensagemPlaceholder: 'Write your message...',
    backendTitulo: 'Backend',
    bancoTitulo: 'Database',
    devopsTitulo: 'Tools & DevOps',
    footerDireitos: '© 2026 Guilherme Lopes. All rights reserved.',
    verDeploy: 'View Deploy',
    pageTitle: 'Guilherme Lopes | Back-end Developer'
  }
};

// Idioma atual (padrão: pt)
let idiomaAtual = 'pt';

/**
 * Obtém o texto traduzido para uma chave específica
 * @param {string} chave - A chave do texto a buscar
 * @returns {string} O texto traduzido ou a chave se não encontrado
 */
function getTexto(chave) {
  return textos[idiomaAtual][chave] || chave;
}

/**
 * Alterna entre os idiomas pt e en
 * @returns {string} O novo idioma após a alternância
 */
function alternarIdioma_i18n() {
  idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
  return idiomaAtual;
}

/**
 * Obtém o idioma atual
 * @returns {string} O idioma atual ('pt' ou 'en')
 */
function getIdioma() {
  return idiomaAtual;
}

// Expor para window (para uso em script.js)
window.i18n = {
  textos: textos,
  get idiomaAtual() {
    return idiomaAtual;
  },
  set idiomaAtual(val) {
    idiomaAtual = val;
  },
  getTexto: getTexto,
  alternarIdioma_i18n: alternarIdioma_i18n,
  getIdioma: getIdioma,
  get modoClaro() {
    return textos[idiomaAtual].modoClaro;
  },
  get modoEscuro() {
    return textos[idiomaAtual].modoEscuro;
  }
};
