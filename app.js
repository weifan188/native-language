// ===== Navigation =====
const navLinks = document.querySelectorAll('.nav-link');
const pages    = document.querySelectorAll('.page');
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('main-nav');

function showPage(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  navLinks.forEach(l => l.classList.remove('active'));

  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  navLinks.forEach(l => {
    if (l.dataset.page === pageId) l.classList.add('active');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  mainNav.classList.remove('open');
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

// Feature cards on homepage
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('click', () => {
    const goto = card.dataset.goto;
    if (goto) showPage(goto);
  });
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Close nav when clicking outside
document.addEventListener('click', e => {
  if (!mainNav.contains(e.target) && e.target !== hamburger) {
    mainNav.classList.remove('open');
  }
});
