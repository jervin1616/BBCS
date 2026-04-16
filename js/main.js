/* ============================================================
   Busy B's Cleaning Service — main.js
   Handles: component injection, nav, mobile menu, forms,
            FAQ, scroll animations
   ============================================================ */

const SITE_ROOT = '/BBCS';

/* ── Bee SVG (inline, reused in header + footer) ─────────── */
const beeSVG = (size = 32) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 38"
     width="${size}" height="${Math.round(size * 1.19)}"
     fill="none" aria-hidden="true">
  <!-- Wings -->
  <ellipse cx="8"  cy="13" rx="7.5" ry="5"
    fill="rgba(255,255,255,0.85)" stroke="#0D0D0D" stroke-width="1.3"/>
  <ellipse cx="24" cy="13" rx="7.5" ry="5"
    fill="rgba(255,255,255,0.85)" stroke="#0D0D0D" stroke-width="1.3"/>
  <!-- Body -->
  <ellipse cx="16" cy="26" rx="7" ry="11"
    fill="#F5C518" stroke="#0D0D0D" stroke-width="1.3"/>
  <!-- Stripes -->
  <path d="M9 22 Q16 24 23 22" stroke="#0D0D0D" stroke-width="1.6"
    fill="none" stroke-linecap="round"/>
  <path d="M9 28 Q16 30 23 28" stroke="#0D0D0D" stroke-width="1.6"
    fill="none" stroke-linecap="round"/>
  <path d="M10 34 Q16 36 22 34" stroke="#0D0D0D" stroke-width="1.6"
    fill="none" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="16" cy="11" r="6" fill="#0D0D0D"/>
  <!-- Antennae -->
  <line x1="13" y1="6" x2="10" y2="1.5"
    stroke="#0D0D0D" stroke-width="1.3" stroke-linecap="round"/>
  <circle cx="10" cy="1.5" r="1.5" fill="#F5C518"/>
  <line x1="19" y1="6" x2="22" y2="1.5"
    stroke="#0D0D0D" stroke-width="1.3" stroke-linecap="round"/>
  <circle cx="22" cy="1.5" r="1.5" fill="#F5C518"/>
</svg>`;

/* ── Dashed flight-path SVG ──────────────────────────────── */
const flightPathSVG = `
<svg class="hero-flight-path" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 200 80" fill="none" aria-hidden="true">
  <path d="M10 70 Q50 10 100 40 Q150 70 190 10"
    stroke="#F5C518" stroke-width="2"
    stroke-dasharray="6 4" stroke-linecap="round"/>
</svg>`;

/* ── Header HTML ─────────────────────────────────────────── */
const headerHTML = `
<header id="site-header">
  <div class="container">
    <div class="header-inner">

      <a href="${SITE_ROOT}/" class="logo" aria-label="Busy B's Cleaning Service Home">
        <div class="logo-bee">${beeSVG(32)}</div>
        <div class="logo-text">
          <span class="logo-name">Busy B's</span>
          <span class="logo-tagline">Cleaning Services &mdash; Wilmington, NC</span>
        </div>
      </a>

      <nav class="main-nav" aria-label="Main navigation">
        <a href="${SITE_ROOT}/">Home</a>
        <a href="${SITE_ROOT}/about.html">About</a>
        <div class="nav-dropdown">
          <a href="${SITE_ROOT}/services.html" aria-haspopup="true">Services</a>
          <div class="dropdown-menu" role="menu">
            <a href="${SITE_ROOT}/services/recurring-cleaning.html"       role="menuitem">Recurring Cleaning</a>
            <a href="${SITE_ROOT}/services/airbnb-cleaning.html"          role="menuitem">Airbnb &amp; Vacation Rental</a>
            <a href="${SITE_ROOT}/services/move-out-cleaning.html"        role="menuitem">Move-In / Move-Out</a>
            <a href="${SITE_ROOT}/services/deep-cleaning.html"            role="menuitem">Deep Cleaning</a>
            <a href="${SITE_ROOT}/services/commercial-cleaning.html"      role="menuitem">Commercial Cleaning</a>
            <a href="${SITE_ROOT}/services/new-construction-cleaning.html" role="menuitem">New Construction</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <a href="${SITE_ROOT}/locations/wilmington.html" aria-haspopup="true">Locations</a>
          <div class="dropdown-menu" role="menu">
            <a href="${SITE_ROOT}/locations/wilmington.html"    role="menuitem">Wilmington</a>
            <a href="${SITE_ROOT}/locations/leland.html"        role="menuitem">Leland / Brunswick County</a>
            <a href="${SITE_ROOT}/locations/carolina-beach.html" role="menuitem">Carolina Beach</a>
            <a href="${SITE_ROOT}/locations/hampstead.html"     role="menuitem">Hampstead / Pender County</a>
            <a href="${SITE_ROOT}/locations/southport.html"     role="menuitem">Southport / Oak Island</a>
          </div>
        </div>
        <a href="${SITE_ROOT}/blog/">Blog</a>
        <a href="${SITE_ROOT}/contact.html">Contact</a>
      </nav>

      <div class="header-cta">
        <a href="tel:9107464663" class="header-phone btn-header-hide"
           aria-label="Call us at (910) 746-4663">
          📞 (910) 746-4663
        </a>
        <a href="${SITE_ROOT}/contact.html" class="btn btn-primary btn-sm">Book Now</a>
        <button class="hamburger" id="hamburger"
                aria-label="Toggle mobile menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>

    </div>
  </div>
</header>

<nav class="mobile-nav" id="mobile-nav"
     aria-label="Mobile navigation" aria-hidden="true">
  <a href="${SITE_ROOT}/">Home</a>
  <a href="${SITE_ROOT}/about.html">About Us</a>
  <span class="mobile-nav-label">Services</span>
  <div class="mobile-nav-sub">
    <a href="${SITE_ROOT}/services.html">All Services</a>
    <a href="${SITE_ROOT}/services/recurring-cleaning.html">Recurring Cleaning</a>
    <a href="${SITE_ROOT}/services/airbnb-cleaning.html">Airbnb &amp; Vacation Rental</a>
    <a href="${SITE_ROOT}/services/move-out-cleaning.html">Move-In / Move-Out</a>
    <a href="${SITE_ROOT}/services/deep-cleaning.html">Deep Cleaning</a>
    <a href="${SITE_ROOT}/services/commercial-cleaning.html">Commercial Cleaning</a>
    <a href="${SITE_ROOT}/services/new-construction-cleaning.html">New Construction</a>
  </div>
  <span class="mobile-nav-label">Locations</span>
  <div class="mobile-nav-sub">
    <a href="${SITE_ROOT}/locations/wilmington.html">Wilmington</a>
    <a href="${SITE_ROOT}/locations/leland.html">Leland / Brunswick County</a>
    <a href="${SITE_ROOT}/locations/carolina-beach.html">Carolina Beach</a>
    <a href="${SITE_ROOT}/locations/hampstead.html">Hampstead / Pender County</a>
    <a href="${SITE_ROOT}/locations/southport.html">Southport / Oak Island</a>
  </div>
  <a href="${SITE_ROOT}/blog/">Blog</a>
  <a href="${SITE_ROOT}/contact.html">Contact</a>
  <a href="${SITE_ROOT}/contact.html" class="btn btn-primary">Book Your Clean</a>
</nav>
`;

/* ── Footer HTML ─────────────────────────────────────────── */
const footerHTML = `
<footer id="site-footer">
  <div class="container">
    <div class="footer-grid">

      <!-- Brand + Contact -->
      <div class="footer-brand">
        <div class="footer-bee">${beeSVG(40)}</div>
        <a href="${SITE_ROOT}/" class="logo" style="margin-bottom:0.5rem;display:inline-flex;text-decoration:none;">
          <div class="logo-text">
            <span class="logo-name">Busy B's</span>
            <span class="logo-tagline">We don't cut corners, we clean them</span>
          </div>
        </a>
        <p>Professional residential and commercial cleaning serving New Hanover, Pender, and Brunswick Counties. Veteran-owned, eco-friendly, fully insured.</p>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📞</span>
          <a href="tel:9107464663">(910) 746-4663</a>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">✉️</span>
          <a href="mailto:Sellersb224@gmail.com">Sellersb224@gmail.com</a>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📍</span>
          <span>7203 Anaca Point Rd, Wilmington, NC 28411</span>
        </div>
        <div class="footer-social" style="margin-top:1rem;">
          <a href="https://www.facebook.com/p/Busy-Bs-Cleaning-Services-100075826284703/"
             target="_blank" rel="noopener noreferrer"
             class="social-btn" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@busybcleaningservice"
             target="_blank" rel="noopener noreferrer"
             class="social-btn" aria-label="TikTok">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Services -->
      <div>
        <span class="footer-heading">Our Services</span>
        <ul class="footer-links">
          <li><a href="${SITE_ROOT}/services/recurring-cleaning.html">Recurring Cleaning</a></li>
          <li><a href="${SITE_ROOT}/services/airbnb-cleaning.html">Airbnb &amp; Vacation Rental</a></li>
          <li><a href="${SITE_ROOT}/services/move-out-cleaning.html">Move-In / Move-Out</a></li>
          <li><a href="${SITE_ROOT}/services/deep-cleaning.html">Deep Cleaning</a></li>
          <li><a href="${SITE_ROOT}/services/commercial-cleaning.html">Commercial Cleaning</a></li>
          <li><a href="${SITE_ROOT}/services/new-construction-cleaning.html">New Construction</a></li>
        </ul>
      </div>

      <!-- Locations + Quick Links -->
      <div>
        <span class="footer-heading">Service Areas</span>
        <ul class="footer-links">
          <li><a href="${SITE_ROOT}/locations/wilmington.html">Wilmington, NC</a></li>
          <li><a href="${SITE_ROOT}/locations/leland.html">Leland / Brunswick Co.</a></li>
          <li><a href="${SITE_ROOT}/locations/carolina-beach.html">Carolina &amp; Kure Beach</a></li>
          <li><a href="${SITE_ROOT}/locations/hampstead.html">Hampstead / Pender Co.</a></li>
          <li><a href="${SITE_ROOT}/locations/southport.html">Southport / Oak Island</a></li>
        </ul>
        <span class="footer-heading" style="margin-top:1.5rem;display:block;">Quick Links</span>
        <ul class="footer-links">
          <li><a href="${SITE_ROOT}/about.html">About Us</a></li>
          <li><a href="${SITE_ROOT}/blog/">Blog</a></li>
          <li><a href="${SITE_ROOT}/contact.html">Contact &amp; Booking</a></li>
        </ul>
      </div>

      <!-- Hours + Areas -->
      <div>
        <span class="footer-heading">Business Hours</span>
        <div class="footer-areas" style="margin-bottom:1.5rem;">
          Monday – Friday: 8:00 AM – 6:00 PM<br>
          Saturday: 9:00 AM – 4:00 PM<br>
          Sunday: By appointment only
        </div>
        <span class="footer-heading">Counties Served</span>
        <div class="footer-areas">
          New Hanover County<br>
          Pender County<br>
          Brunswick County<br><br>
          Wilmington &middot; Carolina Beach &middot; Kure Beach &middot; Leland
          &middot; Hampstead &middot; Burgaw &middot; Southport &middot; Oak Island
          &middot; Castle Hayne &middot; Ogden
        </div>
      </div>

    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <p>&copy; <span id="footer-year"></span> Busy B's Cleaning Service LLC.
      All rights reserved. Wilmington, NC &bull; (910) 746-4663
      &bull; Licensed &bull; Insured &bull; Veteran-Owned</p>
    </div>
  </div>
</footer>

<!-- Floating Phone Button (mobile) -->
<a href="tel:9107464663" class="float-phone"
   aria-label="Call Busy B's Cleaning Service">
  <span class="float-phone-pulse" aria-hidden="true"></span>
  📞
</a>
`;

/* ── Inject Components ───────────────────────────────────── */
function injectComponents() {
  const headerTarget = document.getElementById('header-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');

  if (headerTarget) headerTarget.outerHTML = headerHTML;
  if (footerTarget) footerTarget.outerHTML = footerHTML;

  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initHeader();
  initMobileMenu();
  highlightActiveNav();
  injectFlightPath();
}

/* ── Inject flight-path on homepage hero ─────────────────── */
function injectFlightPath() {
  const hero = document.querySelector('.hero-home');
  if (!hero) return;
  hero.insertAdjacentHTML('beforeend', flightPathSVG);
}

/* ── Sticky Header ───────────────────────────────────────── */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Menu ─────────────────────────────────────────── */
function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
}

/* ── Active Nav Link ─────────────────────────────────────── */
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('#site-header .main-nav a, #mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.replace(SITE_ROOT, '');
    const pagePath = currentPath.replace(SITE_ROOT, '');
    if (linkPath === '/' && (pagePath === '/' || pagePath === '/index.html')) {
      link.classList.add('active');
    } else if (linkPath && linkPath !== '/' && pagePath.startsWith(linkPath)) {
      link.classList.add('active');
    }
  });
}

/* ── FAQ Accordion ───────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer  = btn.nextElementSibling;
      const isOpen  = btn.classList.contains('open');
      document.querySelectorAll('.faq-question.open').forEach(q => {
        q.classList.remove('open');
        q.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
      }
    });
  });
}

/* ── Scroll Animations (Intersection Observer) ───────────── */
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll(
    '.service-card, .testimonial-card, .blog-card, .location-card, ' +
    '.feature-item, .community-item, .stat-block, .faq-item, ' +
    '.section-head, .about-split, .contact-form'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
}

/* ── Contact Form Handler ────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn  = form.querySelector('[type="submit"]');
    const successMsg = document.getElementById('form-success');
    const name  = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const phone = form.querySelector('[name="phone"]');

    if (!name.value.trim() || !email.value.trim() || !phone.value.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    submitBtn.disabled    = true;
    submitBtn.textContent = 'Sending…';

    const formspreeEndpoint = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID';

    fetch(formspreeEndpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(res => {
      if (res.ok) {
        form.reset();
        form.style.display = 'none';
        if (successMsg) {
          successMsg.classList.add('show');
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        fallbackMailto(form);
      }
    })
    .catch(() => fallbackMailto(form))
    .finally(() => {
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Send My Request';
    });
  });
}

function fallbackMailto(form) {
  const data    = new FormData(form);
  const subject = encodeURIComponent('New Cleaning Request from Website');
  const body    = encodeURIComponent(
    `Name: ${data.get('name')}\n` +
    `Email: ${data.get('email')}\n` +
    `Phone: ${data.get('phone')}\n` +
    `Service: ${data.get('service') || 'Not specified'}\n` +
    `Date: ${data.get('date') || 'Not specified'}\n` +
    `Message: ${data.get('message') || 'None'}`
  );
  window.location.href = `mailto:Sellersb224@gmail.com?subject=${subject}&body=${body}`;
}

/* ── Smooth Scroll for anchor links ──────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Initialize ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  injectComponents();
  initFAQ();
  initContactForm();
  initSmoothScroll();
  initScrollAnimations();
});
