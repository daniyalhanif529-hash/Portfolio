/* =========================================
   DATA REPOSITORY FOR DANIYAL HANIF
   ========================================= */
const OWNER_EMAIL = "daniyalhanif529@gmail.com";

const roles = [
  "Digital Strategy",
  "Web & App Development",
  "Adobe Illustrator Art",
  "Photoshop Visuals",
  "Growth Campaigns"
];

const skillsData = {
  marketing: [
    {
      icon: "📈",
      title: "Growth & Campaign Strategy",
      level: "BS Major",
      percent: 92,
      desc: "Designing full-funnel acquisition campaigns, audience segmentation, and conversion optimization backed by Iqra University coursework."
    },
    {
      icon: "🔍",
      title: "SEO & Search Marketing",
      level: "Core Focus",
      percent: 88,
      desc: "Keyword intent research, on-page technical optimization, and high-CTR search ad copywriting."
    },
    {
      icon: "📱",
      title: "Social Media & Content Funnels",
      level: "Advanced",
      percent: 94,
      desc: "Building platform-native content calendars, engagement loops, and paid social creative testing."
    },
    {
      icon: "📊",
      title: "Marketing Analytics & ROI",
      level: "Data-Driven",
      percent: 86,
      desc: "Tracking KPIs, CTR, bounce rates, and customer acquisition cost to guide agile campaign pivots."
    }
  ],
  development: [
    {
      icon: "🌐",
      title: "Frontend Web Development",
      level: "Certified",
      percent: 90,
      desc: "Crafting responsive, fast-loading websites and interactive landing pages using semantic HTML5, modern CSS3, and JavaScript."
    },
    {
      icon: "📲",
      title: "App Development Fundamentals",
      level: "Certified",
      percent: 84,
      desc: "Building mobile-first web apps, intuitive user flows, and interactive UI components tailored for seamless UX."
    },
    {
      icon: "⚡",
      title: "Conversion-Focused Landing Pages",
      level: "Specialist",
      percent: 92,
      desc: "Merging marketing psychology with clean code to turn ad clicks into measurable leads and signups."
    },
    {
      icon: "🛠️",
      title: "Interactive DOM & UI Logic",
      level: "Hands-On",
      percent: 85,
      desc: "Developing dynamic filters, modals, form validations, and smooth animations without bloated dependencies."
    }
  ],
  design: [
    {
      icon: "✒️",
      title: "Adobe Illustrator",
      level: "Proficient",
      percent: 91,
      desc: "Vector brand logos, custom monograms, scalable icon systems, packaging layouts, and sharp typographic compositions."
    },
    {
      icon: "🎨",
      title: "Adobe Photoshop",
      level: "Proficient",
      percent: 93,
      desc: "High-impact social media ad creatives, photo manipulation, color grading, mockups, and digital campaign banners."
    },
    {
      icon: "🧩",
      title: "Brand Identity Systems",
      level: "Creative",
      percent: 89,
      desc: "Cohesive visual guidelines combining color psychology, typography, and recognizable brand assets."
    },
    {
      icon: "📐",
      title: "UI/UX Visual Prototyping",
      level: "Cross-Skill",
      percent: 87,
      desc: "Designing clean web and mobile interface assets ready for direct translation into production code."
    }
  ]
};

const softSkillsData = [
  {
    id: "problem-solving",
    icon: "🧩",
    title: "Problem Solving",
    desc: "Breaking down complex marketing bottlenecks, low conversion rates, or frontend code bugs into root causes and engineering practical, measurable fixes.",
    practice: "Diagnosing high landing-page bounce rates by auditing both ad audience targeting and page load/UI friction simultaneously."
  },
  {
    id: "time-management",
    icon: "⏱️",
    title: "Time Management",
    desc: "Balancing BS Digital Marketing coursework at Iqra University alongside hands-on web development builds and design deadlines without sacrificing quality.",
    practice: "Using structured sprint blocks to take a campaign from Illustrator concept to coded landing page on schedule."
  },
  {
    id: "communication",
    icon: "🗣️",
    title: "Good Communication Skills",
    desc: "Translating technical development concepts for marketing stakeholders and aligning visual storytelling with clear, persuasive brand messaging.",
    practice: "Presenting campaign pitches and project walkthroughs with clarity, active listening, and persuasive copywriting."
  },
  {
    id: "critical-thinking",
    icon: "🧠",
    title: "Critical Thinking",
    desc: "Questioning vanity metrics and surface-level trends to uncover what genuinely drives user trust, retention, and sustainable brand growth.",
    practice: "Evaluating A/B ad creative performance objectively rather than relying on guesswork or personal bias."
  },
  {
    id: "decision-making",
    icon: "🎯",
    title: "Decision-Making",
    desc: "Making confident, timely choices under uncertainty by weighing data insights, user experience impact, and resource constraints.",
    practice: "Prioritizing high-leverage features and ad channels during tight launch windows to maximize return on effort."
  },
  {
    id: "stress-management",
    icon: "🌊",
    title: "Stress Management",
    desc: "Maintaining composure, focus, and creative clarity during high-pressure campaign launches, exams, and last-minute client revisions.",
    practice: "Keeping workflows organized and modular so urgent design or code updates are handled calmly and accurately."
  }
];

const projectsData = [
  {
    id: 1,
    category: "marketing",
    categoryLabel: "Digital Marketing",
    bannerClass: "banner-marketing",
    emoji: "🚀",
    title: "Campus Launchpad Growth Campaign",
    summary: "End-to-end digital acquisition strategy, social media funnel, and custom ad creative suite for a student-focused tech service.",
    tags: ["Digital Strategy", "Meta Ads", "Photoshop", "Analytics"],
    challenge: "Low organic reach and high cost-per-click among university students aged 18–24.",
    execution: "Segmented audiences by academic interest, designed thumb-stopping carousel ads in Adobe Photoshop, and A/B tested landing page headlines.",
    outcome: "+48% click-through rate improvement and 32% lower cost per lead across a 3-week sprint."
  },
  {
    id: 2,
    category: "dev",
    categoryLabel: "Web & App Dev",
    bannerClass: "banner-dev",
    emoji: "💻",
    title: "PulseCommerce Interactive Storefront",
    summary: "Responsive single-page web application with dynamic product filtering, cart state logic, and conversion-optimized checkout UX.",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    challenge: "Traditional product pages suffered from slow navigation and cluttered mobile layouts.",
    execution: "Engineered a lightweight, mobile-first web app with instant category filtering, interactive modals, and clean visual hierarchy.",
    outcome: "Sub-second UI interactions and a streamlined 2-step user journey built from scratch."
  },
  {
    id: 3,
    category: "design",
    categoryLabel: "Illustrator & Photoshop",
    bannerClass: "banner-design",
    emoji: "✒️",
    title: "Aura Roast — Complete Brand Identity",
    summary: "Vector logo suite, custom packaging mockups, and social media visual kit created in Adobe Illustrator and Photoshop.",
    tags: ["Adobe Illustrator", "Adobe Photoshop", "Brand Identity", "Typography"],
    challenge: "A new specialty coffee brand needed an unmistakable visual identity that scaled from tiny app icons to storefront signage.",
    execution: "Constructed geometric vector marks in Illustrator and composited realistic lighting and texture mockups in Photoshop.",
    outcome: "Delivered a cohesive 18-asset brand kit ready for print, web, and paid social campaigns."
  },
  {
    id: 4,
    category: "dev",
    categoryLabel: "Web & App Dev",
    bannerClass: "banner-dev",
    emoji: "📊",
    title: "Campaign ROI & Funnel Calculator App",
    summary: "Interactive web utility allowing marketers to simulate ad spend, conversion rates, and projected customer acquisition costs.",
    tags: ["JavaScript", "Marketing Math", "Responsive UI"],
    challenge: "Marketers often struggle to visualize how small improvements in landing-page conversion impact overall campaign ROI.",
    execution: "Built a real-time interactive calculator with instant visual feedback and clean dashboard styling.",
    outcome: "Turned complex funnel formulas into an intuitive decision-making tool."
  }
];

/* =========================================
   1. TYPING EFFECT
   ========================================= */
const typedRoleEl = document.getElementById("typed-role");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typedRoleEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedRoleEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 42 : 82;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 350;
  }

  setTimeout(typeLoop, speed);
}
typeLoop();

/* =========================================
   2. NAVBAR SCROLL & MOBILE MENU
   ========================================= */
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

/* =========================================
   3. INTERACTIVE CURSOR SPOTLIGHT & 3D TILT
   ========================================= */
function attachSpotlightListeners() {
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  });
}
attachSpotlightListeners();

const tiltCard = document.getElementById("tilt-card");
if (tiltCard) {
  tiltCard.addEventListener("mousemove", (e) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltCard.style.transform = `perspective(950px) rotateY(${x * 11}deg) rotateX(${-y * 11}deg)`;
  });

  tiltCard.addEventListener("mouseleave", () => {
    tiltCard.style.transform = "perspective(950px) rotateY(0deg) rotateX(0deg)";
  });
}

/* =========================================
   4. TECHNICAL & CREATIVE SKILLS TABS
   ========================================= */
const skillsContainer = document.getElementById("skills-container");
const tabButtons = document.querySelectorAll(".tab-btn");

function renderSkills(category) {
  const items = skillsData[category] || [];
  skillsContainer.innerHTML = items
    .map(
      (skill) => `
      <div class="glass-card spotlight-card skill-card">
        <div class="skill-top">
          <span class="skill-icon">${skill.icon}</span>
          <span class="skill-level">${skill.level}</span>
        </div>
        <h3>${skill.title}</h3>
        <p>${skill.desc}</p>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${skill.percent}%"></div>
        </div>
      </div>
    `
    )
    .join("");
  attachSpotlightListeners();
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderSkills(btn.dataset.tab);
  });
});

renderSkills("marketing");

/* =========================================
   5. CORE SOFT SKILLS INTERACTIVE HUB
   ========================================= */
const softPillsGrid = document.getElementById("soft-pills-grid");
const softIcon = document.getElementById("soft-icon");
const softTitle = document.getElementById("soft-title");
const softDescription = document.getElementById("soft-description");
const softPractice = document.getElementById("soft-practice");

function renderSoftSkills() {
  softPillsGrid.innerHTML = softSkillsData
    .map(
      (item, idx) => `
      <button type="button" class="soft-pill-btn ${idx === 0 ? "active" : ""}" data-id="${item.id}">
        <span>${item.icon}</span>
        <span>${item.title}</span>
      </button>
    `
    )
    .join("");

  softPillsGrid.querySelectorAll(".soft-pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      softPillsGrid.querySelectorAll(".soft-pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selected = softSkillsData.find((s) => s.id === btn.dataset.id);
      if (selected) {
        softIcon.textContent = selected.icon;
        softTitle.textContent = selected.title;
        softDescription.textContent = selected.desc;
        softPractice.textContent = selected.practice;
      }
    });
  });
}

renderSoftSkills();

/* =========================================
   6. PROJECTS FILTER & MODAL
   ========================================= */
const projectsGrid = document.getElementById("projects-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");

function renderProjects(filter = "all") {
  const filtered =
    filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

  projectsGrid.innerHTML = filtered
    .map(
      (proj) => `
      <article class="glass-card spotlight-card project-card">
        <div class="project-banner ${proj.bannerClass}">
          <span class="project-cat-badge">${proj.categoryLabel}</span>
          <span class="project-emoji">${proj.emoji}</span>
        </div>
        <div class="project-body">
          <h3>${proj.title}</h3>
          <p>${proj.summary}</p>
          <div class="tag-row">
            ${proj.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
          <button type="button" class="project-cta" data-project-id="${proj.id}">
            View Case Study <span>→</span>
          </button>
        </div>
      </article>
    `
    )
    .join("");

  projectsGrid.querySelectorAll(".project-cta").forEach((btn) => {
    btn.addEventListener("click", () => {
      const proj = projectsData.find((p) => p.id === Number(btn.dataset.projectId));
      if (proj) openModal(proj);
    });
  });

  attachSpotlightListeners();
}

function openModal(proj) {
  document.getElementById("modal-category").textContent = proj.categoryLabel;
  document.getElementById("modal-title").textContent = proj.title;
  document.getElementById("modal-summary").textContent = proj.summary;
  document.getElementById("modal-challenge").textContent = proj.challenge;
  document.getElementById("modal-execution").textContent = proj.execution;
  document.getElementById("modal-outcome").textContent = proj.outcome;
  document.getElementById("modal-tags").innerHTML = proj.tags
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

renderProjects("all");

/* =========================================
   7. CONTACT FORM (MAILTO + COPY EMAIL + TOAST)
   ========================================= */
const toastEl = document.getElementById("toast");

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 3500);
}

const copyEmailBtn = document.getElementById("copy-email-btn");
copyEmailBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(OWNER_EMAIL).then(() => {
    showToast(`Copied ${OWNER_EMAIL} to clipboard!`);
  });
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showToast("Please fill in your name, email, and project details.");
    return;
  }

  const subject = encodeURIComponent(`Portfolio Inquiry: ${service} — from ${name}`);
  const body = encodeURIComponent(
    `Hi Daniyal,\n\nName: ${name}\nEmail: ${email}\nArea of Interest: ${service}\n\nMessage:\n${message}`
  );

  showToast(`Opening your email app to send to ${OWNER_EMAIL}...`);
  window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
  contactForm.reset();
});

/* =========================================
   8. SCROLL REVEAL & AMBIENT PARTICLE CANVAS
   ========================================= */
document.getElementById("year").textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Interactive particle mesh background
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 46; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.38,
    vy: (Math.random() - 0.5) * 0.38,
    r: Math.random() * 1.9 + 0.6
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(56, 189, 248, 0.5)";

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const dx = p.x - particles[j].x;
      const dy = p.y - particles[j].y;
      const dist = Math.hypot(dx, dy);
      if (dist < 135) {
        ctx.strokeStyle = `rgba(129, 140, 248, ${0.14 * (1 - dist / 135)})`;
        ctx.lineWidth = 0.85;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();