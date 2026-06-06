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

// Scroll reveal — general
const revealEls = document.querySelectorAll('.project-card, .cert-card, .section-title');
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

// About section animations
const aboutHeading = document.querySelector('.about-text h2');
const aboutParagraphs = document.querySelectorAll('.about-text p');
const skillTags = document.querySelectorAll('.skill-tag');
const aboutCard = document.querySelector('.about-card-inner');
const aboutInfoRows = document.querySelectorAll('.about-info p');

function checkAbout() {
  const threshold = window.innerHeight - 80;

  if (aboutHeading?.getBoundingClientRect().top < threshold) {
    aboutHeading.classList.add('visible');
  }

  aboutParagraphs.forEach((p, i) => {
    if (p.getBoundingClientRect().top < threshold) {
      setTimeout(() => p.classList.add('visible'), i * 100);
    }
  });

  if (aboutCard?.getBoundingClientRect().top < threshold) {
    aboutCard.classList.add('visible');

    aboutInfoRows.forEach((row, i) => {
      setTimeout(() => row.classList.add('visible'), 200 + i * 80);
    });
  }

  skillTags.forEach((tag, i) => {
    if (tag.getBoundingClientRect().top < threshold) {
      setTimeout(() => tag.classList.add('visible'), i * 50);
    }
  });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('scroll', checkAbout);
window.addEventListener('load', () => { checkReveal(); checkAbout(); });
checkReveal();
checkAbout();
setTimeout(() => { checkReveal(); checkAbout(); }, 300);
setTimeout(() => { checkReveal(); checkAbout(); }, 800);

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);