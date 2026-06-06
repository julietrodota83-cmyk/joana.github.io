// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Floating particles in hero
const particleContainer = document.getElementById('particles');
function createParticle() {
  const p = document.createElement('div');
  p.style.cssText = `
    position:absolute;
    width:${Math.random() * 4 + 2}px;
    height:${Math.random() * 4 + 2}px;
    border-radius:50%;
    background:rgba(${Math.random() > 0.5 ? '155,111,212' : '196,143,181'},${Math.random() * 0.5 + 0.2});
    left:${Math.random() * 100}%;
    bottom:${Math.random() * 30}%;
    animation: particleFade ${Math.random() * 4 + 3}s ease-out forwards;
  `;
  particleContainer.appendChild(p);
  setTimeout(() => p.remove(), 7000);
}
setInterval(createParticle, 400);

// Scroll reveal
const revealEls = document.querySelectorAll('.project-card, .cert-card, .about-grid, .section-title, .about-text, .about-card');
revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${i * 0.06}s`;
});

function checkReveal() {
  revealEls.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);
checkReveal();
setTimeout(checkReveal, 300);
setTimeout(checkReveal, 800);