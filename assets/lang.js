// assets/lang.js
const textos = {
  pt: {
    brand: 'GUILHERME LOPES DEV',
    heroTitulo: 'Eu construo a parte dos sistemas que você <span class="accent">nunca vê</span>, mas que mantém tudo de pé.',
    heroDesc: 'APIs, bancos de dados, autenticação e deploy. TypeScript, Node.js e PostgreSQL. Sem mágica, só engenharia.',
    eyebrow: 'Desenvolvedor Back-end',
    sobreSectionLabel: 'Sobre',
    sobreTitulo: 'Quem sou',
    sobreDesc: 'Tenho 20 anos e curso Engenharia de Software na Gran Faculdade. Foco em back-end: construo APIs que escalam, testo o que entrego e documento cada decisão técnica. Trabalho com TypeScript, Prisma, PostgreSQL e AWS Lambda. Docker e CI/CD estão no meu fluxo diário.',
    techTitulo: 'Stack principal',
    stackTitulo: 'Tecnologias que uso',
    projetosSubtitle: 'Projetos',
    projetosTitulo: 'Trabalhos em destaque',
    contatoSubtitle: 'Contato',
    contatoTitulo: 'Vamos trabalhar juntos',
    contatoDesc: 'Estou aberto a oportunidades como Desenvolvedor Back-end.',
    verProjetos: 'Ver projetos',
    falarComigo: 'Contato',
    modoClaro: 'Modo claro',
    modoEscuro: 'Modo escuro',
    footerDireitos: '© 2026 Guilherme Lopes.',
    pageTitle: 'Guilherme Lopes | Desenvolvedor Back-end'
  },
  en: {
    brand: 'GUILHERME LOPES DEV',
    heroTitulo: 'I build the part of systems you <span class="accent">never see</span>, but that keeps everything running.',
    heroDesc: 'APIs, databases, authentication and deploy. TypeScript, Node.js and PostgreSQL. No magic, just engineering.',
    eyebrow: 'Back-end Developer',
    sobreSectionLabel: 'About',
    sobreTitulo: 'Who I am',
    sobreDesc: 'I am 20 years old and study Software Engineering at Gran Faculdade. Back-end focused: I build APIs that scale, test what I deliver and document every technical decision. I work with TypeScript, Prisma, PostgreSQL and AWS Lambda. Docker and CI/CD are part of my daily workflow.',
    techTitulo: 'Main stack',
    stackTitulo: 'Technologies I use',
    projetosSubtitle: 'Projects',
    projetosTitulo: 'Featured projects',
    contatoSubtitle: 'Contact',
    contatoTitulo: "Let's work together",
    contatoDesc: 'I am open to opportunities as a Back-end Developer.',
    verProjetos: 'View projects',
    falarComigo: 'Contact',
    modoClaro: 'Light mode',
    modoEscuro: 'Dark mode',
    footerDireitos: '© 2026 Guilherme Lopes.',
    pageTitle: 'Guilherme Lopes | Back-end Developer'
  }
};

let idiomaAtual = 'pt';

function getTexto(chave) {
  return textos[idiomaAtual][chave] || chave;
}

function alternarIdioma_i18n() {
  idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
  return idiomaAtual;
}

function getIdioma() {
  return idiomaAtual;
}

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