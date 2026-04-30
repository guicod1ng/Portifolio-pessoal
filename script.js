const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const root = document.documentElement;

// ====================
// IDIOMA (i18n)
// ====================

// Definir tema
function setTheme(mode) {
  if (mode === 'light') {
    root.setAttribute('data-theme', 'light');
    themeToggle.textContent = window.i18n.modoEscuro;
  } else {
    root.removeAttribute('data-theme');
    themeToggle.textContent = window.i18n.modoClaro;
  }
  localStorage.setItem('site-theme', mode);
}

// Aplicar textos traduzidos ao DOM
function aplicarTextos() {
  const idioma = window.i18n.idiomaAtual;
  
  // Atualizar elementos com data-i18n
  const elementos = document.querySelectorAll('[data-i18n]');
  elementos.forEach(el => {
    const chave = el.getAttribute('data-i18n');
    if (window.i18n.textos[idioma] && window.i18n.textos[idioma][chave]) {
      el.textContent = window.i18n.textos[idioma][chave];
    }
  });
  
  // Atualizar placeholders com data-i18n-placeholder
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const chave = el.getAttribute('data-i18n-placeholder');
    if (window.i18n.textos[idioma] && window.i18n.textos[idioma][chave]) {
      el.setAttribute('placeholder', window.i18n.textos[idioma][chave]);
    }
  });
  
  // Atualizar lang do html
  document.documentElement.lang = idioma === 'pt' ? 'pt-BR' : 'en';
  
  // Atualizar title
  if (window.i18n.textos[idioma] && window.i18n.textos[idioma].pageTitle) {
    document.title = window.i18n.textos[idioma].pageTitle;
  }
  
  // Atualizar botão de idioma
  langToggle.textContent = idioma === 'pt' ? 'EN' : 'PT';
  
  // Atualizar tema toggle texto
  const currentTheme = localStorage.getItem('site-theme') || 'dark';
  themeToggle.textContent = currentTheme === 'light' ? window.i18n.modoEscuro : window.i18n.modoClaro;
}


// Alternar idioma
function alternarIdioma() {
  alternarIdioma_i18n();
  aplicarTextos();
}

// Inicializar tema (respeita preferência do sistema)
function initTheme() {
  const savedTheme = localStorage.getItem('site-theme');
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight ? 'light' : 'dark');
  }
}

// Evento do botão tema
themeToggle.addEventListener('click', () => {
  const isLight = root.hasAttribute('data-theme') && root.getAttribute('data-theme') === 'light';
  setTheme(isLight ? 'dark' : 'light');
});

// Evento do botão idioma
langToggle.addEventListener('click', alternarIdioma);

// Animações de scroll
const fadeSections = document.querySelectorAll('.section-fade');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -60px 0px'
});

fadeSections.forEach(section => observer.observe(section));

// Inicialização
initTheme();
aplicarTextos();
