const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Definir tema
function setTheme(mode) {
  if (mode === 'light') {
    root.setAttribute('data-theme', 'light');
    themeToggle.textContent = 'Modo escuro';
  } else {
    root.removeAttribute('data-theme');
    themeToggle.textContent = 'Modo claro';
  }
  localStorage.setItem('site-theme', mode);
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

// Evento do botão
themeToggle.addEventListener('click', () => {
  const isLight = root.hasAttribute('data-theme') && root.getAttribute('data-theme') === 'light';
  setTheme(isLight ? 'dark' : 'light');
});

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