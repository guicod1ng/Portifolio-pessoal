// script.js
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const root = document.documentElement;

function setTheme(mode) {
  if (mode === 'light') {
    root.setAttribute('data-theme', 'light');
  } else {
    root.removeAttribute('data-theme');
  }
  localStorage.setItem('site-theme', mode);
}

function aplicarTextos() {
  const idioma = window.i18n.idiomaAtual;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const chave = el.getAttribute('data-i18n');
    if (window.i18n.textos[idioma] && window.i18n.textos[idioma][chave]) {
      el.innerHTML = window.i18n.textos[idioma][chave];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const chave = el.getAttribute('data-i18n-placeholder');
    if (window.i18n.textos[idioma] && window.i18n.textos[idioma][chave]) {
      el.setAttribute('placeholder', window.i18n.textos[idioma][chave]);
    }
  });

  document.documentElement.lang = idioma === 'pt' ? 'pt-BR' : 'en';

  if (window.i18n.textos[idioma] && window.i18n.textos[idioma].pageTitle) {
    document.title = window.i18n.textos[idioma].pageTitle;
  }

  langToggle.textContent = idioma === 'pt' ? 'EN' : 'PT';
  themeToggle.textContent = root.hasAttribute('data-theme') ? window.i18n.modoEscuro : window.i18n.modoClaro;
}

function alternarIdioma() {
  window.i18n.alternarIdioma_i18n();
  aplicarTextos();
}

function initTheme() {
  const savedTheme = localStorage.getItem('site-theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight ? 'light' : 'dark');
  }
}

themeToggle.addEventListener('click', () => {
  const isLight = root.hasAttribute('data-theme');
  setTheme(isLight ? 'dark' : 'light');
  aplicarTextos();
});

langToggle.addEventListener('click', alternarIdioma);

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

initTheme();
window.aplicarTextos = aplicarTextos;
aplicarTextos();
