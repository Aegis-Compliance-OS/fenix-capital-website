// ── Nav scroll behavior ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.05)';
  }
});

// ── Hamburger menu ──
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // close on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── Fade-in on scroll ──
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => observer.observe(el));

// ── Active nav link ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const activateNav = () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--cream)' : '';
  });
};
window.addEventListener('scroll', activateNav);

// ── Contact form (mailto fallback) ──
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = form.querySelector('[name="name"]').value;
    const company = form.querySelector('[name="company"]').value;
    const email   = form.querySelector('[name="email"]').value;
    const type    = form.querySelector('[name="type"]').value;
    const message = form.querySelector('[name="message"]').value;
    const subject = encodeURIComponent(`[Fenix Capital] Inquiry from ${name} — ${company}`);
    const body    = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nType: ${type}\n\n${message}`);
    window.location.href = `mailto:invest@fenixcapitalfund.com?subject=${subject}&body=${body}`;
  });
}
