
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
  });
}

// Simple active link highlighting
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const target = a.getAttribute('href');
  if ((here === '' && target.endsWith('index.html')) || here === target) {
    a.classList.add('active');
  }
});
