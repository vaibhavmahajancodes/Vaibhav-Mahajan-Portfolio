/* ============================================================
   UI.JS — Typing Animation, Theme Toggle, Contact Form
   ============================================================ */

"use strict";

// ── Typing Animation ─────────────────────────────────────────
(function initTyping() {
  const el     = document.getElementById("typing-text");
  const cursor = document.getElementById("typing-cursor");
  if (!el) return;

  const texts = [
    "AI & Machine Learning Enthusiast",
    "Full Stack Developer",
    "B.Tech CS Student",
    "Problem Solver",
    "Tech Innovator"
  ];

  let textIdx = 0, charIdx = 0, deleting = false, paused = false;

  function type() {
    if (paused) return;
    const current = texts[textIdx];

    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        paused = true;
        setTimeout(() => { deleting = true; paused = false; type(); }, 2000);
        return;
      }
      setTimeout(type, 65);
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        textIdx  = (textIdx + 1) % texts.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 35);
    }
  }

  setTimeout(type, 800);
})();

// ── Theme Toggle ─────────────────────────────────────────────
(function initTheme() {
  const btn  = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const icon = document.getElementById("theme-icon");
  if (!btn) return;

  const stored = localStorage.getItem("vm-theme") || "light";
  applyTheme(stored);


  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next    = current === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("vm-theme", next);
  });

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (icon) icon.textContent = theme === "light" ? "🌙" : "☀️";
  }
})();

// ── Contact Form ──────────────────────────────────────────────
(function initContactForm() {
  const form   = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showStatus("Please fill in all fields.", "error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }

    btn.disabled    = true;
    btn.textContent = "Sending…";

    // Simulate send (replace with real endpoint if needed)
    await new Promise(r => setTimeout(r, 1500));

    btn.disabled    = false;
    btn.textContent = "Send Message";
    form.reset();
    showStatus("✓ Message sent! I'll be in touch soon.", "success");
  });

  function showStatus(msg, type) {
    if (!status) return;
    status.textContent = msg;
    status.className   = `status-${type}`;
    setTimeout(() => { status.textContent = ""; status.className = ""; }, 5000);
  }
})();

// ── Tilt effect on project cards ─────────────────────────────
(function initTilt() {
  const cards = document.querySelectorAll(".project-card, .glass-card");
  if (window.matchMedia("(pointer: coarse)").matches) return;

  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width / 2;
      const cy     = rect.top  + rect.height / 2;
      const rx     = ((e.clientY - cy) / (rect.height / 2)) * 5;
      const ry     = ((e.clientX - cx) / (rect.width  / 2)) * -5;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
})();
