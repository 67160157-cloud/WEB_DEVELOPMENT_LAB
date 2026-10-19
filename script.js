// ==========================================================================
// Theme Management (Exercise 3: Toggle Theme)
// ==========================================================================
const themeToggleBtn = document.querySelector('#themeToggle');
const themeIcon = document.querySelector('#themeIcon');
const htmlElement = document.documentElement;

// Initialize theme from localStorage or system preference
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
}

function setTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    showToast(`เปลี่ยนธีมเป็น: ${newTheme === 'dark' ? 'Dark Mode 🌙' : 'Light Mode ☀️'}`);
  });
}

// Run theme setup immediately
initTheme();

// ==========================================================================
// Mandatory Starter Event: Say Hello (Part A & Lab Specs)
// ==========================================================================
const helloBtn = document.querySelector('#helloBtn');
const statusElem = document.querySelector('#status');
const dynamicMsgBox = document.querySelector('#dynamicMessage');
const msgTitle = document.querySelector('#messageTitle');
const msgTime = document.querySelector('#messageTime');
const msgBody = document.querySelector('#messageBody');

const greetings = [
  "Hello from GitHub Pages! ยินดีต้อนรับสู่โปรเจกต์ Lab!",
  "GitHub Actions Deployment ประสบความสำเร็จ 100%!",
  "Continuous Integration & Continuous Deployment ทำงานสมบูรณ์แบบ!",
  "ยินดีต้อนรับอาจารย์และผู้ตรวจผลงานทุกท่านครับ!",
  "Deploy สำเร็จด้วย GitHub Actions Runner ubuntu-latest!"
];

let greetingIndex = 0;

if (helloBtn) {
  helloBtn.addEventListener('click', () => {
    // 1. Mandatory update required by original lab handout:
    if (statusElem) {
      statusElem.textContent = 'Hello from GitHub Pages!';
      statusElem.style.color = 'var(--success)';
    }

    // 2. Enhanced dynamic feedback with animation
    if (dynamicMsgBox && msgTitle && msgBody && msgTime) {
      dynamicMsgBox.classList.remove('hidden');
      msgTitle.textContent = '👋 สวัสดีจากระบบอัตโนมัติ!';
      msgTime.textContent = new Date().toLocaleTimeString('th-TH');
      msgBody.textContent = greetings[greetingIndex % greetings.length];
      greetingIndex++;
    }

    showToast('กดปุ่ม Say Hello เรียบร้อยแล้ว!');
  });
}

// ==========================================================================
// Random DevOps Quotes Button
// ==========================================================================
const quoteBtn = document.querySelector('#quoteBtn');

const devOpsQuotes = [
  { quote: "Automate everything you can, measure everything you automate.", author: "DevOps Principle" },
  { quote: "If it hurts, do it more frequently, and bring the pain forward.", author: "Jez Humble (Continuous Delivery)" },
  { quote: "Commit early, commit often, and let CI/CD test your code.", author: "Software Engineering Rule" },
  { quote: "Quality is not an act, it is a habit — reinforced by automated workflows.", author: "Engineering Mindset" },
  { quote: "GitHub Actions makes deployment as easy as git push origin main.", author: "Modern Web Dev" }
];

if (quoteBtn) {
  quoteBtn.addEventListener('click', () => {
    const randomItem = devOpsQuotes[Math.floor(Math.random() * devOpsQuotes.length)];
    if (dynamicMsgBox && msgTitle && msgBody && msgTime) {
      dynamicMsgBox.classList.remove('hidden');
      msgTitle.textContent = '💡 คำคมส่งเสริมการเรียนรู้ DevOps';
      msgTime.textContent = new Date().toLocaleTimeString('th-TH');
      msgBody.innerHTML = `<em>"${randomItem.quote}"</em> — <strong>${randomItem.author}</strong>`;
    }
    showToast('สุ่มคำคมสำเร็จ!');
  });
}

// ==========================================================================
// Copy Email functionality
// ==========================================================================
const copyEmailBtn = document.querySelector('#copyEmailBtn');
const emailVal = document.querySelector('#emailVal');

if (copyEmailBtn && emailVal) {
  copyEmailBtn.addEventListener('click', async () => {
    const email = emailVal.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
      showToast(`คัดลอกอีเมลเรียบร้อย: ${email}`);
    } catch (err) {
      // Fallback
      const tempInput = document.createElement('input');
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast(`คัดลอกอีเมลเรียบร้อย: ${email}`);
    }
  });
}

// ==========================================================================
// Quick Contact Form Simulation
// ==========================================================================
const contactForm = document.querySelector('#contactForm');
const formFeedback = document.querySelector('#formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#senderName').value;
    const subject = document.querySelector('#senderSubject').value;

    if (formFeedback) {
      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `✅ ขอบคุณคุณ <strong>${name}</strong> สำหรับข้อความเรื่อง <em>"${subject}"</em> ระบบจำลองการรับส่งข้อมูลเสร็จสมบูรณ์!`;
      formFeedback.classList.remove('hidden');
    }

    contactForm.reset();
    showToast('ส่งข้อความจำลองสำเร็จ!');
  });
}

// ==========================================================================
// Toast Notification Utility
// ==========================================================================
let toastTimer;
function showToast(message) {
  const toast = document.querySelector('#toast');
  if (!toast) return;

  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.remove('hidden');

  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2800);
}

// ==========================================================================
// Active Navbar Link Indicator on Scroll
// ==========================================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let currentId = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    }
  });
});
