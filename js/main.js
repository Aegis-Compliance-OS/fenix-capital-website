// ── Nav scroll shadow ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 40
    ? '0 4px 24px rgba(30,26,22,0.1)'
    : '0 2px 12px rgba(30,26,22,0.08)';
});

// ── Hamburger ──
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ── Fade-in on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Active nav ──
const sections    = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navAnchors.forEach(a => { a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--ink)' : ''; });
});

// ── Contact form → mailto ──
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('[name="name"]').value;
    const company = form.querySelector('[name="company"]').value;
    const email   = form.querySelector('[name="email"]').value;
    const type    = form.querySelector('[name="type"]').value;
    const message = form.querySelector('[name="message"]').value;
    const subject = encodeURIComponent(`[Fenix Capital] ${type} — ${name}, ${company}`);
    const body    = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nType: ${type}\n\n${message}`);
    window.location.href = `mailto:invest@fenixcapital.vc?subject=${subject}&body=${body}`;
  });
}
