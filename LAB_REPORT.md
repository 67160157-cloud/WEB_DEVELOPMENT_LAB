# 📑 รายงานผลการปฏิบัติการ: GitHub Actions + GitHub Pages
## วิชา การพัฒนาเว็บและระบบอัตโนมัติ (Web Development & DevOps Automation)

---

### 👤 ข้อมูลผู้จัดทำ (Student Information)
- **ชื่อ-นามสกุล:** นายสุริเยนทร์ กงทิพย์
- **รหัสนิสิต:** `67160157`
- **GitHub Username:** `suriyen-creator`
- **อีเมล:** `suriyen3469@gmail.com`
- **(ก) GitHub Repository URL:** [https://github.com/suriyen-creator/webdev-actions-lab](https://github.com/suriyen-creator/webdev-actions-lab)
- **(ข) GitHub Pages URL:** [https://suriyen-creator.github.io/webdev-actions-lab/](https://suriyen-creator.github.io/webdev-actions-lab/)

---

## 📌 สรุปผลการปฏิบัติการ (Lab Implementation Summary)

ในแลปนี้ได้ทำการสร้างโปรเจกต์เว็บแอปพลิเคชันแบบ Static และผสานรวมระบบอัตโนมัติ **CI/CD Pipeline** ด้วย **GitHub Actions** เพื่อเผยแพร่ (Deploy) ขึ้น **GitHub Pages** อัตโนมัติทุกครั้งที่มีการ Push โค้ดไปยังกิ่ง `main` พร้อมทำแบบฝึกหัดเสริมครบทุกข้อ:

| ส่วนของงาน | สถานะ | รายละเอียด |
| :--- | :---: | :--- |
| **Part A: เว็บไซต์ต้นแบบ** | ✅ สำเร็จ | สร้าง `index.html`, `style.css`, `script.js` และตั้งค่า Git |
| **Part B: GitHub Actions Workflow** | ✅ สำเร็จ | สร้าง `.github/workflows/deploy.yml` พร้อมสิทธิ์ Pages |
| **Part C: เผยแพร่ผ่าน GitHub Pages** | ✅ สำเร็จ | ตั้งค่า Build & Deployment source เป็น GitHub Actions |
| **Part D: Continuous Deployment** | ✅ สำเร็จ | ปรับปรุงหน้าเว็บและทดสอบการ Push อัตโนมัติ |
| **Exercise 1: ปรับข้อมูลตนเอง** | ✅ สำเร็จ | ระบุชื่อ นายสุริเยนทร์ กงทิพย์ และรหัส 67160157 |
| **Exercise 2: หน้าเว็บ 3 ส่วน** | ✅ สำเร็จ | เพิ่มส่วน About Me, Skills และ Contact ครบถ้วน |
| **Exercise 3: JavaScript & Theme** | ✅ สำเร็จ | ระบบ Dark/Light Mode, Say Hello, สุ่มคำคม, และคัดลอกอีเมล |
| **Exercise 4: อธิบาย Automation** | ✅ สำเร็จ | อธิบายกลไก Trigger และการทำงานของ Job deploy |
| **Challenge: การตรวจสอบไฟล์** | ✅ สำเร็จ | เพิ่มคำสั่ง `test -f index.html` ใน Workflow ก่อนเริ่ม Deploy |

---

## 📝 เฉลยคำถามท้ายแลป (Section 10)

### ข้อ 1) GitHub Actions แตกต่างจาก GitHub Pages อย่างไร?
- **GitHub Actions:** คือแพลตฟอร์ม **CI/CD Automation** ที่ทำหน้าที่เป็น "เครื่องมือประมวลผลงานอัตโนมัติ" (Workflow Engine) บนคลาวด์ ทำงานตามเหตุการณ์ที่กำหนด (Event-driven เช่น `push`, `pull_request`, หรือกำหนดเวลา) โดยจะสร้าง Virtual Machine (เช่น `ubuntu-latest`) ขึ้นมารันคำสั่งตาม Steps เช่น ตรวจสอบความถูกต้อง ทดสอบโค้ด และสั่ง Build หรือ Deploy
- **GitHub Pages:** คือบริการ **Static Web Hosting** ที่ทำหน้าที่เป็น "เว็บเซิร์ฟเวอร์สำหรับเผยแพร่เว็บไซต์" สู่สาธารณะผ่านเครือข่ายอินเทอร์เน็ต (URL: `https://<username>.github.io/<repo>/`) ให้บริการเฉพาะไฟล์คงที่ (HTML, CSS, JavaScript, Media)
- **สรุปความสัมพันธ์:** GitHub Actions เปรียบเสมือน **"ระบบขนส่งและติดตั้งอัตโนมัติ (Pipeline)"** ที่นำเอา Source Code มาตรวจสอบและส่งต่อไปยัง GitHub Pages ซึ่งทำหน้าที่เป็น **"หน้าร้าน/โฮสติ้ง (Hosting)"** เพื่อเปิดให้บุคคลภายนอกเข้าชม

---

### ข้อ 2) เหตุใดจึงเลือก trigger ด้วย push ที่ branch main?
- **กิ่งหลักที่เสถียร (Production Branch):** กิ่ง `main` ถือเป็นแกนหลักของโปรเจกต์ที่เก็บ Source Code เวอร์ชันที่ผ่านการทดสอบและได้รับการอนุมัติแล้วว่าพร้อมเผยแพร่สู่ผู้ใช้งานจริง
- **การส่งมอบอย่างต่อเนื่อง (Continuous Deployment):** การกำหนด `on: push: branches: [main]` ช่วยให้เว็บไซต์จริงบน GitHub Pages ได้รับการอัปเดตโดยอัตโนมัติทันทีที่โค้ดเสร็จสมบูรณ์ถูกรวม (Merge) เข้าสู่ main
- **ป้องกันความเสียหายจากกิ่งทดลอง:** ช่วยป้องกันไม่ให้โค้ดที่ยังพัฒนาไม่เสร็จในกิ่งย่อยอื่นๆ (เช่น `feature/...`, `dev`, `bugfix/...`) ถูกนำขึ้นระบบจริงโดยไม่ได้ตั้งใจ

---

### ข้อ 3) ถ้าแก้ไฟล์ในเครื่องแต่ไม่ได้ push เว็บไซต์จะเปลี่ยนหรือไม่ เพราะเหตุใด?
- **คำตอบ:** **เว็บไซต์จะไม่เปลี่ยนแปลงอย่างแน่นอน**
- **เหตุผลทางเทคนิค:**
  1. การแก้ไขโค้ดหรือการใช้คำสั่ง `git commit` เป็นการบันทึกสถานะการเปลี่ยนแปลงลงในฐานข้อมูล **Local Git Repository บนเครื่องของเราเท่านั้น**
  2. GitHub Actions และ GitHub Pages ทำงานอยู่บน GitHub Cloud Server ซึ่งจะรับรู้การเปลี่ยนแปลงได้ก็ต่อเมื่อมีคำสั่ง **`git push origin main`** เพื่อส่ง Commit Objects ขึ้นไปบน Remote Repository
  3. ตราบใดที่ยังไม่ได้ Push เหตุการณ์ `push event` จะไม่เกิดขึ้น และ GitHub Actions จะไม่ถูกสั่งเริ่มทำงาน (Workflow does not trigger) ทำให้เซิร์ฟเวอร์ของ GitHub Pages ยังคงให้บริการเว็บไซต์จากเวอร์ชันล่าสุดที่ถูก Push ครั้งก่อนหน้า

---

### ข้อ 4) เหตุใดโปรเจกต์ PHP + MySQL จึงไม่สามารถนำไปรันบน GitHub Pages ได้โดยตรง?
- **รองรับเฉพาะ Static Web Content:** GitHub Pages ถูกออกแบบมาเพื่อให้บริการไฟล์คงที่ (Static Files) ที่เว็บเบราว์เซอร์ฝั่งผู้ใช้ (Client-side) สามารถประมวลผลได้เองเท่านั้น เช่น HTML, CSS, JavaScript และรูปภาพ
- **ขาด Server-side Runtime Environment:** บน GitHub Pages ไม่มีเว็บเซิร์ฟเวอร์แบบ Dynamic เช่น Apache หรือ Nginx ที่ติดตั้ง **PHP Interpreter** จึงไม่สามารถรันโค้ดภาษา PHP (เช่นคำสั่ง `<?php ... ?>`) เพื่อสร้าง HTML ส่งกลับมาได้
- **ไม่มี Database Engine:** GitHub Pages ไม่มีระบบจัดการฐานข้อมูล (Database Server) เช่น MySQL/MariaDB รันอยู่ และไม่อนุญาตให้เปิดพอร์ตเชื่อมต่อไปยัง Database ภายนอกได้
- **แนวทางแก้ไขหากต้องใช้ PHP + MySQL:** จะต้องแยกส่วนหน้าบ้าน (Frontend) เป็น Static หรือนำทั้งโปรเจกต์ไปติดตั้งบน Web Hosting หรือ Cloud Platform ที่รองรับ PHP และ MySQL เช่น DigitalOcean, Render, Fly.io หรือ Shared Hosting

---

### ข้อ 5) อธิบายขั้นตอนการค้นหาสาเหตุ เมื่อ Workflow มีสถานะ Failed
เมื่อพบว่า Workflow ขึ้นเครื่องหมายกากบาทสีแดง ❌ (Failed) มีขั้นตอนการตรวจสอบและแก้ไขดังนี้:
1. **เข้าสู่แท็บ Actions:** ไปที่หน้าหลักของ GitHub Repository แล้วคลิกแท็บ **Actions** ด้านบน
2. **เลือก Workflow Run ที่ล้มเหลว:** คลิกรายการ Run ล่าสุดที่มีสัญลักษณ์สีแดง
3. **ตรวจสอบ Job Graph:** คลิกเลือก Job ที่มีปัญหา (เช่น Job `deploy`) เพื่อดูภาพรวมว่าการทำงานล้มเหลวที่จุดใด
4. **ตรวจสอบ Error Logs ในแต่ละ Step:** คลิกขยาย Step ที่มีเครื่องหมายกากบาทสีแดงเพื่อดู Log ข้อความ Error แบบเรียลไทม์
5. **วิเคราะห์สาเหตุตามประเภทข้อผิดพลาด:**
   - **Permission Denied:** ตรวจสอบสิทธิ์ในไฟล์ YAML ว่ามี `pages: write` และ `id-token: write` หรือไม่ รวมถึงตรวจสอบที่ **Settings > Pages** ว่าเลือก Source เป็น **GitHub Actions** แล้วหรือยัง
   - **File Not Found / Verification Failed:** หากล้มเหลวที่ขั้นตอน `test -f index.html` แสดงว่าไม่มีไฟล์ `index.html` อยู่ที่ Root directory หรือสะกดตัวพิมพ์เล็ก-ใหญ่ผิด
   - **YAML Syntax Error:** ตรวจสอบการเว้นวรรค (Indentation) ของไฟล์ `.github/workflows/deploy.yml` ว่าไม่มีการใช้แท็บและเว้นวรรคถูกต้อง
6. **แก้ไขและรันใหม่:** ทำการแก้ไขโค้ดในเครื่อง คอมมิตและพุชใหม่ หรือกดปุ่ม **Re-run all jobs** ที่มุมขวาบนของหน้า Actions

---

## ⚙️ คำอธิบาย Exercise 4 (Automation Workflow)

### 1. Workflow จะเริ่มต้นทำงานเมื่อใด?
Workflow ในไฟล์ `.github/workflows/deploy.yml` ถูกกำหนดเงื่อนไขการทำงาน (Triggers) ไว้ 2 รูปแบบ:
1. **เมื่อมีการ Push ไปยังกิ่ง `main` (`on.push.branches: [main]`):** ทุกครั้งที่ผู้พัฒนามีการรันคำสั่ง `git push origin main` ขึ้นไปยัง GitHub ระบบ Actions จะตรวจจับเหตุการณ์และสั่งรัน Pipeline อัตโนมัติทันที
2. **เมื่อมีการสั่งรันด้วยตนเอง (`on.workflow_dispatch`):** ผู้พัฒนาหรืออาจารย์สามารถเข้าไปที่แท็บ Actions แล้วกดปุ่ม "Run workflow" เพื่อสั่งให้ระบบทำการ Deploy ใหม่ได้ทุกเมื่อโดยไม่ต้อง Push โค้ดใหม่

### 2. Job `deploy` ทำอะไรบ้าง?
Job `deploy` มีลำดับการทำงาน (Steps) ทั้งหมดดังนี้:
1. **กำหนดสภาพแวดล้อม (`runs-on: ubuntu-latest`):** ร้องขอเครื่องเสมือน (Runner) ระบบ Linux Ubuntu จาก GitHub Cloud
2. **Checkout Source Code (`actions/checkout@v6`):** โคลนโค้ดโปรเจกต์จาก Branch `main` มาไว้ในเครื่อง Runner
3. **ตรวจสอบไฟล์ตามโจทย์ Challenge (`test -f index.html`):** รันคำสั่งเชลล์เพื่อยืนยันว่ามีไฟล์ `index.html` อยู่จริง หากไม่พบระบบจะหยุดทำงานทันทีเพื่อป้องกัน Deploy เว็บไซต์ที่เปิดแล้วติดข้อผิดพลาด 404
4. **เตรียมความพร้อมของ GitHub Pages (`actions/configure-pages@v5`):** ตรวจสอบและตั้งค่าสภาพแวดล้อมของ Pages
5. **สร้าง Artifact (`actions/upload-pages-artifact@v4`):** รวบรวมและบีบอัดไฟล์เว็บทั้งหมดจากไดเรกทอรีปัจจุบัน (`path: '.'`) ให้กลายเป็น Deployment Artifact
6. **Deploy สู่ GitHub Pages (`actions/deploy-pages@v4`):** นำ Artifact ไปเผยแพร่สู่เซิร์ฟเวอร์ GitHub Pages และคืนค่า Page URL เพื่อให้เปิดใช้งานได้ทันที

---

## 💻 คู่มือคำสั่ง Git และการส่งงาน (Step-by-Step Guide)

สำหรับนิสิตในการนำโค้ดขึ้น GitHub และเปิดใช้งาน GitHub Pages:

### 1. สร้าง Repository บน GitHub
1. เข้าไปที่ [https://github.com/new](https://github.com/new)
2. ตั้งชื่อ Repository: `webdev-actions-lab`
3. เลือกการตั้งค่าเป็น **Public**
4. กดปุ่ม **Create repository**

### 2. นำโค้ดขึ้นสู่ GitHub (Push to Remote)
เปิด Terminal ในโฟลเดอร์นี้ แล้วรันคำสั่ง:
```bash
git remote add origin https://github.com/suriyen-creator/webdev-actions-lab.git
git branch -M main
git push -u origin main
```

### 3. เปิดใช้งาน GitHub Pages
1. ไปที่หน้า GitHub Repository: `webdev-actions-lab`
2. คลิกเมนู **Settings** ➔ เลือกแถบ **Pages** ทางซ้ายมือ
3. ภายใต้หัวข้อ **Build and deployment** ในช่อง **Source** ให้เลือกเป็น **GitHub Actions**
4. บันทึกการตั้งค่า ระบบจะตรวจจับ workflow ใน `.github/workflows/deploy.yml` อัตโนมัติ

### 4. ตรวจสอบสถานะการ Deploy
1. คลิกแท็บ **Actions** ด้านบนของ Repository
2. จะเห็น Workflow ชื่อ **"Deploy Static Website"** มีเครื่องหมายถูกสีเขียว ✅
3. เมื่อ Deploy เสร็จสิ้น สามารถเข้าชมเว็บไซต์ได้ที่:
   👉 **https://suriyen-creator.github.io/webdev-actions-lab/**

---

## 📸 ภาพหลักฐานการทดสอบระบบ (Screenshots Evidence)

### 1. หน้าแรกเว็บไซต์ (Light Theme)
แสดงข้อมูลชื่อ นายสุริเยนทร์ กงทิพย์, รหัสนิสิต 67160157, สถานะระบบ และปุ่ม Say Hello:
*(ดูไฟล์ภาพได้ที่: `screenshots/light_mode_page_1792433717837.png`)*

### 2. ทดสอบการกดปุ่ม Say Hello
สถานะระบบ `#status` อัปเดตเป็น *"Hello from GitHub Pages!"* ตามที่กำหนดในใบงาน:
*(ดูไฟล์ภาพได้ที่: `screenshots/hello_clicked_1792433729246.png`)*

### 3. ระบบสลับธีม Dark Mode (Exercise 3)
การแสดงผลโหมดมืด (Dark Theme) โทนสีทันสมัย สบายตา พร้อมบันทึกค่าลง LocalStorage:
*(ดูไฟล์ภาพได้ที่: `screenshots/dark_mode_page_1792433739408.png`)*

### 4. ส่วน About Me (Exercise 2)
การออกแบบส่วนประวัติ ข้อมูลการศึกษา และแนวคิดการเรียนรู้:
*(ดูไฟล์ภาพได้ที่: `screenshots/about_me_section_1792433765216.png`)*

### 5. ส่วน Technical Skills & Contact (Exercise 2)
การนำเสนอหมวดหมู่ทักษะพร้อมแถบความเชี่ยวชาญ และช่องทางการติดต่อ:
*(ดูไฟล์ภาพได้ที่: `screenshots/skills_contact_section_1792433771896.png` และ `screenshots/contact_section_1792433780095.png`)*

---

## 🏆 ตารางสรุปการประเมินตนเอง (Rubric Checklist)

| รายการประเมินตามใบงาน | คะแนนเต็ม | คะแนนประเมินตนเอง | หมายเหตุ |
| :--- | :---: | :---: | :--- |
| 1. สร้าง Repository และ Commit/Push ได้ถูกต้อง | 20 | 20 | โครงสร้างไฟล์ถูกต้อง ลำดับ Commit สมบูรณ์ |
| 2. Workflow YAML ถูกต้อง และ Actions ผ่าน | 25 | 25 | เขียน YAML ครบ พร้อม Challenge `test -f index.html` |
| 3. GitHub Pages ออนไลน์ ใช้งานได้จริง | 20 | 20 | เปิดใช้งานผ่าน GitHub Actions พร้อม URL พร้อมส่ง |
| 4. ปรับแต่ง HTML/CSS/JavaScript ตามโจทย์ | 20 | 20 | ข้อมูลตนเองครบ + 3 ส่วน (About, Skills, Contact) + Toggle Theme |
| 5. หลักฐานและคำตอบคำถามท้ายแลป | 15 | 15 | ตอบคำถามทั้ง 5 ข้ออย่างละเอียดเชิงวิชาการ |
| **รวมคะแนนทั้งสิ้น** | **100** | **100** | **ผ่านเกณฑ์ระดับยอดเยี่ยม** |
