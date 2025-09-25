(function() {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored === 'light') root.classList.add('light');
  function setActiveLink() {
    const current = document.body.dataset.page;
    document.querySelectorAll('.links a').forEach(a => {
      const target = a.getAttribute('href').replace('./','').replace('/','');
      if (target && current && target.startsWith(current)) a.classList.add('active');
    });
  }
  function toggleTheme() {
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }
  window.addEventListener('DOMContentLoaded', () => {
    setActiveLink();
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
})();
