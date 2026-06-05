// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Scroll reveal — make all visible immediately, then animate on scroll
const revealEls = document.querySelectorAll('.project-card, .cert-card, .about-grid, .section-title');

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${i * 0.07}s`;
});

function checkReveal() {
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);
// Also run immediately
checkReveal();
setTimeout(checkReveal, 300);