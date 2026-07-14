<div align="center">

# ✨ Vaibhav Mahajan — Personal Portfolio Website

**Premium Black & Gold AI/ML Engineer Portfolio**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-D4AF37?style=for-the-badge)](https://your-username.github.io/portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vaibhav-mahajan-4b4713328)

</div>

---

## 📸 Preview

> Premium glassmorphism design with Black `#0A0A0A` background and Gold `#D4AF37` accents — inspired by luxury brand aesthetics.

---

## 👤 About

This is my personal portfolio website showcasing my journey as an **AI & Machine Learning Enthusiast** and **Full Stack Developer**. Currently pursuing B.Tech in Computer Science & Engineering at Sandip University, Nashik (2023–2027), I build intelligent solutions that combine AI/ML with modern web development.

---

## 🗂️ Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-screen landing with animated particle background, typing animation, and profile photo ring |
| 2 | **About** | Personal introduction with animated stat counters (Internships, Projects, Technologies) |
| 3 | **Education** | B.Tech CSE timeline at Sandip University, Nashik (2023–2027) |
| 4 | **Skills** | Programming, AI/ML, Web Development, and Professional skills displayed as chip cards |
| 5 | **Certificates** | Academic and professional certifications earned |
| 6 | **Hackathon** | Hackathon participations including Google Cloud GenAI Exchange |
| 7 | **Experience** | Internships — HunarIntern (AI/ML) & SmartED Innovations (Full Stack) |
| 8 | **Projects** | AI Resume Analyzer, Student Performance Prediction, Smart Attendance System, Portfolio Website |
| 9 | **Achievements** | Key milestones — B.Tech, 2 internships, AI/ML expertise, Full Stack development |
| 10 | **Vision** | Career goals to become an AI/ML Engineer building impactful intelligent systems |
| 11 | **Contact** | Contact form + direct links for Phone, Email, LinkedIn, and Location |

---

## ✨ Features

### 🎨 Design
- **Black & Gold luxury theme** — `#0A0A0A` background with `#D4AF37` gold accents
- **Glassmorphism cards** — frosted glass effect with gold-glow borders on hover
- **Dark / Light mode toggle** — persisted in `localStorage`
- **Fully responsive** — Mobile, Tablet, and Desktop layouts

### ⚡ Animations & Interactions
- **Animated particle canvas** — connected gold dot network on the hero background
- **Typing animation** — auto-cycles through roles: AI Enthusiast → Full Stack Developer → Problem Solver…
- **Custom gold cursor** — smooth dot + outline with hover expand effect
- **AOS scroll reveal** — elements fade and slide in as you scroll
- **Tilt effect** — 3D perspective tilt on project and glass cards
- **Counter animation** — stats count up when scrolled into view
- **Rotating profile ring** — conic-gradient spinning border around the hero photo

### 🧩 UI Components
- **Scroll progress bar** — gold gradient bar at the very top of the page
- **Loading screen** — "VM" animated logo with progress bar on first load
- **Floating social sidebar** — fixed LinkedIn / GitHub / Email icons on the left
- **Mobile hamburger nav** — slide-in drawer for small screens
- **Back to top button** — appears after scrolling 600px, smooth scroll on click
- **Validated contact form** — inline success / error status messages

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Markup | HTML5 (semantic, accessible, SEO-optimized) |
| Styling | CSS3 — Custom Properties, Flexbox, Grid, Glassmorphism |
| Scripting | Vanilla JavaScript (ES6+) — no frameworks or build tools |
| Icons | Font Awesome 6.5 |
| Fonts | Cormorant Garamond · Outfit · JetBrains Mono (Google Fonts) |
| Animations | CSS keyframes + Intersection Observer API |
| Canvas | HTML5 Canvas API (particle system) |

---

## 📁 Project Structure

```
portfolio/
│
├── index.html              ← Main HTML — all 11 sections
│
├── css/
│   ├── base.css            ← CSS variables, reset, typography, global utilities
│   ├── components.css      ← Navbar, cursor, loader, back-to-top, floating socials
│   └── sections.css        ← Per-section styles (hero → footer)
│
├── js/
│   ├── main.js             ← Particles, cursor, scroll progress, AOS, counters
│   └── ui.js               ← Typing animation, theme toggle, contact form, tilt
│
└── README.md
```

---

## 🚀 Getting Started

No build step or npm install needed — pure HTML/CSS/JS.

**Option 1 — Open directly**
```
Double-click index.html → opens in browser
```

**Option 2 — Local server (recommended for full feature support)**
```bash
# Python
python -m http.server 8080

# Node.js
npx serve .

# VS Code
Install "Live Server" extension → Right-click index.html → Open with Live Server
```
Then visit `http://127.0.0.1:8080` (or whatever port your server uses).

---

## 🎨 Customization

### Change Colors
Edit CSS variables at the top of `css/base.css`:
```css
--gold:       #D4AF37;   /* Primary gold accent */
--gold-light: #F0D060;   /* Lighter gold for highlights */
--black:      #0A0A0A;   /* Main background */
```

### Update Content
All text content lives directly in `index.html`. Each section is clearly marked with a comment block:
```html
<!-- ═══════════════════════
     SECTION NAME
═══════════════════════ -->
```

### Add / Remove Typing Roles
Edit the `texts` array in `js/ui.js`:
```js
const texts = [
  "AI & Machine Learning Enthusiast",
  "Full Stack Developer",
  "Your Custom Role Here",
];
```

---

## 💼 Internship Experience

| Role | Company | Duration |
|------|---------|----------|
| AI & Machine Learning Intern | HunarIntern | Dec 2024 – Feb 2025 |
| Full Stack Web Development Intern | SmartED Innovations | Apr 2025 – Jul 2025 |

---

## 🚧 Featured Projects
 
| # | Project | Description | Tech Stack |
|---|---------|-------------|------------|
| 01 | **Inventory Management System** | Full-featured system to track stock, manage products, handle suppliers, and generate inventory reports | Python · FastAPI · PostgreSQL · React · SQLAlchemy |
| 02 | **Task & Project Management System** | Production-ready project management app with task tracking, role-based access, real-time updates via WebSockets, and AI-powered features | FastAPI · React · PostgreSQL · Redis · Celery · Docker · Claude API |
| 03 | **Portfolio Website** | Premium personal portfolio with Black-Gold glassmorphism UI, particle animations, dark/light mode, and smooth scroll effects — this site | HTML · CSS · JavaScript |
| 04 | **AI Recruitment Platform** | AI-driven recruitment system that screens resumes, ranks candidates against job descriptions, and automates shortlisting using NLP | Python · NLP · Machine Learning · FastAPI · React |

---

## 📬 Contact

| Channel | Details |
|---------|---------|
| 📧 Email | [mahajanvaibhav5001@gmail.com](mailto:mahajanvaibhav5001@gmail.com) |
| 📱 Phone | +91 80108 166** |
| 💼 LinkedIn | [vaibhav-mahajan-4b4713328](https://www.linkedin.com/in/vaibhav-mahajan-4b4713328) |
| 📍 Location | Nashik, Maharashtra, India |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this as inspiration for your own portfolio — just give credit if you do! 🙏

---

<div align="center">

**⭐ If you found this helpful, please star the repo!**

Made with ❤️ and ☕ by **Vaibhav Mahajan**

*Built with Passion and Innovation*

</div>
