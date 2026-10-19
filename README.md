# 🌐 Web Development Lab: GitHub Actions + GitHub Pages

[![Deploy Static Website](https://github.com/67160157-cloud/WEB_DEVELOPMENT_LAB/actions/workflows/deploy.yml/badge.svg)](https://github.com/67160157-cloud/WEB_DEVELOPMENT_LAB/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?logo=github)](https://67160157-cloud.github.io/WEB_DEVELOPMENT_LAB/)

> โครงงานห้องปฏิบัติการวิชา Web Development: การผสานรวมระบบอัตโนมัติ **CI/CD (Continuous Integration / Continuous Deployment)** ด้วย **GitHub Actions** และการเผยแพร่เว็บไซต์แบบ Static ผ่าน **GitHub Pages**

---

## 👤 ข้อมูลผู้พัฒนา (Student Info)

- **ชื่อ-นามสกุล:** นายสุริเยนทร์ กงทิพย์ (Mr. Suriyen Kongthip)
- **รหัสนิสิต:** `67160157`
- **GitHub Username:** [@67160157-cloud](https://github.com/67160157-cloud)
- **อีเมล:** [suriyen3469@gmail.com](mailto:suriyen3469@gmail.com)
- **Repository URL:** [https://github.com/67160157-cloud/WEB_DEVELOPMENT_LAB](https://github.com/67160157-cloud/WEB_DEVELOPMENT_LAB)
- **GitHub Pages Live URL:** [https://67160157-cloud.github.io/WEB_DEVELOPMENT_LAB/](https://67160157-cloud.github.io/WEB_DEVELOPMENT_LAB/)

---

## 🚀 สถาปัตยกรรมและหลักการทำงาน (CI/CD Architecture)

```
[ Local Development ] 
        │
        ▼ (git commit & git push origin main)
[ GitHub Repository: 67160157-cloud/WEB_DEVELOPMENT_LAB ]
        │
        ▼ (Trigger on: push to main)
[ GitHub Actions Runner (ubuntu-latest) ]
        ├── 1. Checkout source code (actions/checkout@v6)
        ├── 2. Verify index.html exists (Lab Challenge: test -f index.html)
        ├── 3. Setup Pages environment (actions/configure-pages@v5)
        ├── 4. Upload static artifact (actions/upload-pages-artifact@v4)
        └── 5. Deploy to GitHub Pages (actions/deploy-pages@v4)
        │
        ▼
[ GitHub Pages Live Website ] 🌟 (https://67160157-cloud.github.io/WEB_DEVELOPMENT_LAB/)
```

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
WEB_DEVELOPMENT_LAB/
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD Deployment Workflow
├── index.html              # โครงสร้างหน้าเว็บหลัก (Semantic HTML5)
├── style.css               # การตกแต่ง CSS3 (รองรับ Light / Dark Mode & Responsive)
├── script.js               # Logic เชิงโต้ตอบ (Theme Toggle, Event Listeners)
├── .gitignore              # ละเว้นไฟล์ที่ไม่จำเป็นในการ commit
├── README.md               # เอกสารอธิบายโปรเจกต์
└── LAB_REPORT.md           # รายงานสรุปและคำตอบคำถามท้ายแลปฉบับสมบูรณ์
```

---

## 🌟 ฟีเจอร์เด่นตามแบบฝึกหัด (Implemented Features)

1. **Exercise 1 (ข้อมูลตนเอง):** ระบุชื่อ-นามสกุล, รหัสนิสิต และข้อความต้อนรับครบถ้วน
2. **Exercise 2 (UI ครบ 3 ส่วน):**
   - **About Me:** ข้อมูลผู้พัฒนา การศึกษา และแนวคิดการเรียนรู้
   - **Technical Skills:** หมวดหมู่ทักษะ Frontend, Git & CI/CD DevOps, และ Tools พร้อมแถบความเชี่ยวชาญ
   - **Contact:** ช่องทางติดต่อ (Email, GitHub, Repo link) พร้อมแบบฟอร์มจำลอง
3. **Exercise 3 (JavaScript & Theme Toggle):**
   - ปุ่มสลับธีม **Dark / Light Mode** สวยงาม พร้อมบันทึกลง `localStorage`
   - ปุ่ม **Say Hello** ที่เปลี่ยนสถานะ `<p id="status">` และแสดงข้อความตอบกลับ
   - ปุ่ม **สุ่มคำคม DevOps** และปุ่ม **คัดลอกอีเมล** พร้อม Toast Notification
4. **Challenge (การตรวจสอบก่อน Deploy):**
   - ใส่คำสั่ง `test -f index.html` ใน workflow เพื่อยืนยันว่ามีไฟล์ `index.html` ก่อนนำขึ้น GitHub Pages

---

## 💻 วิธีการรันและทดสอบบนเครื่อง (Local Testing)

เปิดไฟล์ `index.html` ผ่านเบราว์เซอร์ได้ทันที หรือรันผ่าน Local HTTP Server:

```bash
# รันผ่าน Python built-in server
python -m http.server 8000
```
เปิดเบราว์เซอร์ที่: `http://localhost:8000`
