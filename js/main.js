/* ============================================================
   MAIN.JS — Core Interactions: Cursor, Particles, Scroll, AOS
   ============================================================ */

"use strict";

// ── Loader ──────────────────────────────────────────────────
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
  }, 2200);
});

// ── Custom Cursor ────────────────────────────────────────────
(function initCursor() {
  const dot     = document.getElementById("cursor-dot");
  const outline = document.getElementById("cursor-outline");
  if (!dot || !outline) return;
  if (window.matchMedia("(pointer: coarse)").matches) {
    dot.style.display = outline.style.display = "none";
    document.body.style.cursor = "";
    return;
  }

  let mx = 0, my = 0, ox = 0, oy = 0;

  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top  = my + "px";
  });

  // Smooth outline
  (function animateOutline() {
    ox += (mx - ox) * 0.14;
    oy += (my - oy) * 0.14;
    outline.style.left = ox + "px";
    outline.style.top  = oy + "px";
    requestAnimationFrame(animateOutline);
  })();

  // Hover effect on interactive elements
  const hoverTargets = "a, button, .glass-card, input, textarea, .skill-chip, .social-pill, .btn";
  document.addEventListener("mouseover", e => {
    if (e.target.closest(hoverTargets)) document.body.classList.add("cursor-hover");
  });
  document.addEventListener("mouseout", e => {
    if (e.target.closest(hoverTargets)) document.body.classList.remove("cursor-hover");
  });
})();

// ── Particle Canvas ──────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById("hero-canvas");
  const hero   = document.getElementById("hero");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let W, H, particles = [];
  const PARTICLE_COUNT = 80;
  const GOLD = "rgba(212,175,55,";

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", () => { resize(); initP(); });

  if (hero) {
    window.addEventListener("scroll", () => {
      canvas.classList.toggle("hidden", window.scrollY >= hero.offsetHeight);
    }, { passive: true });
  }

  function Particle() {
    this.x   = Math.random() * W;
    this.y   = Math.random() * H;
    this.vx  = (Math.random() - 0.5) * 0.3;
    this.vy  = (Math.random() - 0.5) * 0.3;
    this.r   = Math.random() * 1.8 + 0.3;
    this.a   = Math.random() * 0.55 + 0.05;
    this.pulse = Math.random() * Math.PI * 2;
  }

  Particle.prototype.update = function() {
    this.x += this.vx;
    this.y += this.vy;
    this.pulse += 0.015;
    if (this.x < 0) this.x = W;
    if (this.x > W) this.x = 0;
    if (this.y < 0) this.y = H;
    if (this.y > H) this.y = 0;
  };

  function initP() {
    particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
  }
  initP();

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          const alpha = (1 - dist/120) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = GOLD + alpha + ")";
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      p.update();
      const a = p.a * (0.7 + 0.3 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = GOLD + a + ")";
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

// ── Scroll Progress Bar ──────────────────────────────────────
(function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + "%";
  }, { passive: true });
})();

// ── Navbar Scroll State ──────────────────────────────────────
(function initNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  }, { passive: true });
})();

// ── Active Nav Link ──────────────────────────────────────────
(function initActiveLinks() {
  const sections = document.querySelectorAll("section[id]");
  const links    = document.querySelectorAll(".nav-links a[href^='#']");

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove("active"));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(s => obs.observe(s));
})();

// ── AOS — Animate On Scroll ──────────────────────────────────
(function initAOS() {
  const els = document.querySelectorAll("[data-aos]");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.aosDelay || 0);
        setTimeout(() => e.target.classList.add("aos-animate"), delay);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
})();

// ── Back to Top ──────────────────────────────────────────────
(function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();

// ── Mobile Nav ───────────────────────────────────────────────
(function initMobileNav() {
  const ham    = document.querySelector(".nav-hamburger");
  const drawer = document.querySelector(".nav-mobile-drawer");
  const links  = drawer?.querySelectorAll("a");
  if (!ham || !drawer) return;

  ham.addEventListener("click", () => {
    ham.classList.toggle("open");
    drawer.classList.toggle("open");
  });

  links?.forEach(link => link.addEventListener("click", () => {
    ham.classList.remove("open");
    drawer.classList.remove("open");
  }));
})();

// ── Smooth Scroll for anchor links ───────────────────────────
document.addEventListener("click", e => {
  const anchor = e.target.closest("a[href^='#']");
  if (!anchor) return;
  e.preventDefault();
  const target = document.querySelector(anchor.getAttribute("href"));
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
});

// ── Counter Animation ─────────────────────────────────────────
(function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el    = e.target;
      const target= parseInt(el.dataset.count);
      const dur   = 1600;
      const start = performance.now();
      (function step(now) {
        const progress = Math.min((now - start) / dur, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + (el.dataset.suffix || "");
        if (progress < 1) requestAnimationFrame(step);
      })(start);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
})();
