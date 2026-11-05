# Product Requirements Document (PRD)
## Personal Portfolio Website

**Versi:** 1.0  
**Status:** Initial Planning  
**Platform:** Web  
**Tipe Produk:** Personal Portfolio Website

---

## 1. Product Overview

Website portfolio pribadi yang berfungsi sebagai representasi profesional pemilik website di internet.

Website harus mampu memperkenalkan identitas profesional, menampilkan keahlian, memperlihatkan proyek yang pernah dikerjakan, serta menyediakan informasi kontak yang mudah diakses.

Konsep utama: **Simple, Professional, and Project-Oriented.**

Website dibuat sebagai static website agar ringan, cepat, mudah dikelola, dan dapat di-hosting secara gratis.

## 2. Product Goals

Tujuan utama website:

1. Memperkenalkan diri secara profesional dalam waktu singkat.
2. Menampilkan skill dan teknologi yang dikuasai.
3. Memperlihatkan proyek-proyek yang pernah dibuat beserta kontribusi dan hasilnya.
4. Menyediakan akses ke GitHub, LinkedIn, CV, dan kontak.
5. Menjadi personal branding sekaligus media pendukung saat melamar pekerjaan atau mencari peluang kolaborasi.

## 3. Target Audience

- **Recruiter / HR:** Ingin mengetahui profil, kemampuan, dan pengalaman kandidat.
- **Potential Client:** Ingin melihat kemampuan dan hasil pekerjaan.
- **Developer / Collaborator:** Ingin mengetahui teknologi yang digunakan dan proyek yang pernah dikerjakan.

## 4. Website Structure

Website menggunakan satu halaman utama dengan navigasi berbasis section.

### A. Navigation Bar

Elemen:
- Nama atau inisial pemilik website.
- About
- Projects
- Skills
- Contact

Ketentuan:
- Sticky navigation.
- Navigasi menggunakan anchor ke section terkait.
- Responsive untuk perangkat mobile.

### B. Hero Section

Bagian pertama yang dilihat pengunjung.

Informasi:
- Nama lengkap.
- Professional title / role.
- Deskripsi singkat maksimal 2 kalimat.
- CTA: View Projects.
- CTA: Contact Me.
- Link GitHub dan LinkedIn.

Contoh format:

"Halo, saya [Nama], seorang [Professional Role] yang berfokus pada pengembangan aplikasi web dengan pengalaman menggunakan [teknologi utama]."

Tujuan: Pengunjung langsung memahami siapa pemilik website dan bidang yang dikuasai.

### C. About Me

Berisi pengenalan profesional yang singkat.

Informasi:
- Latar belakang singkat.
- Bidang yang diminati atau ditekuni.
- Fokus pekerjaan.
- Nilai atau pendekatan dalam menyelesaikan masalah.

Ketentuan:
- Maksimal 2 paragraf pendek.
- Tidak perlu menceritakan perjalanan hidup secara panjang.
- Fokus pada informasi yang relevan secara profesional.

### D. Skills & Technologies

Menampilkan teknologi dan keahlian yang dikuasai.

Kategori yang dapat digunakan:

- Frontend Development
- Backend Development
- Database
- Tools & Platforms

Setiap kategori menampilkan nama teknologi menggunakan icon atau label.

Catatan: Hanya tampilkan teknologi yang benar-benar pernah digunakan. Hindari skill rating berupa persentase yang tidak memiliki dasar pengukuran.

### E. Featured Projects

**Section terpenting dalam website.**

Menampilkan sekitar 3–5 proyek terbaik yang pernah dikerjakan.

Informasi setiap proyek:
- Project thumbnail / screenshot.
- Nama proyek.
- Deskripsi singkat.
- Masalah atau kebutuhan yang diselesaikan.
- Kontribusi atau tanggung jawab pribadi.
- Teknologi yang digunakan.
- Link Live Demo (jika tersedia).
- Link GitHub Repository (jika tersedia).

Format deskripsi yang disarankan:

**Project Name**

"Web application untuk membantu [target pengguna] dalam [kebutuhan atau masalah]. Saya bertanggung jawab mengembangkan [bagian yang dikerjakan] menggunakan [teknologi]."

Ketentuan:
- Prioritaskan kualitas dibanding kuantitas.
- Proyek unggulan ditampilkan lebih menonjol.
- Jangan hanya menampilkan nama dan screenshot proyek.
- Jelaskan kontribusi dan hasil pekerjaan secara konkret.

### F. Experience / Education (Optional)

Bagian ini hanya ditampilkan apabila memiliki informasi yang relevan.

Informasi:
- Nama perusahaan, organisasi, atau institusi.
- Posisi atau jabatan.
- Periode.
- Deskripsi tanggung jawab atau pencapaian.

Jika belum memiliki pengalaman profesional, bagian ini dapat diganti dengan pengalaman organisasi, freelance, internship, atau dihilangkan.

### G. Contact Section

Bagian terakhir untuk memudahkan pengunjung menghubungi pemilik website.

Informasi:
- Email.
- LinkedIn.
- GitHub.
- CTA: Let's Work Together / Get in Touch.

Untuk versi pertama, cukup gunakan link email (`mailto:`) dan tautan media profesional. Tidak perlu membuat contact form atau backend.

### H. Footer

Informasi:
- Copyright.
- Nama pemilik website.
- Link GitHub atau LinkedIn.

---

## 5. Functional Requirements

| ID | Fitur | Prioritas |
|---|---|---|
| FR-01 | Navigasi antar-section | Must Have |
| FR-02 | Menampilkan profil dan informasi personal | Must Have |
| FR-03 | Menampilkan skills dan technologies | Must Have |
| FR-04 | Menampilkan daftar proyek | Must Have |
| FR-05 | Link GitHub dan LinkedIn | Must Have |
| FR-06 | Link email untuk menghubungi pemilik | Must Have |
| FR-07 | Responsive navigation | Must Have |
| FR-08 | Download CV dalam PDF | Should Have |
| FR-09 | Dark / Light Mode | Could Have |
| FR-10 | Animasi transisi sederhana | Could Have |

## 6. UI/UX Requirements

Arah desain:

- Minimalist dan modern.
- Profesional, tidak terlalu ramai.
- Mengutamakan keterbacaan.
- Memiliki whitespace yang cukup.
- Menggunakan maksimal 1 warna aksen utama.
- Menggunakan typography yang konsisten.
- Animasi seperlunya, tidak mengganggu pengalaman pengguna.

Referensi pendekatan desain:
- Personal portfolio developer.
- Modern SaaS landing page.
- Minimalist editorial layout.

Ketentuan responsive:
- Mobile first.
- Optimal untuk smartphone, tablet, dan desktop.
- Project cards menyesuaikan ukuran layar.
- Tidak boleh ada horizontal overflow.

## 7. Technical Requirements

### Frontend

- HTML5
- CSS
- Tailwind CSS
- JavaScript (Vanilla JS)

### Backend

Tidak diperlukan untuk MVP.

Website hanya menampilkan informasi statis sehingga Node.js, Express.js, dan MongoDB belum diperlukan.

### Deployment

- Source code disimpan di GitHub.
- Deployment menggunakan layanan static hosting.
- Mendukung HTTPS.
- Mendukung custom domain apabila tersedia di kemudian hari.
- Setiap perubahan pada repository dapat di-deploy secara otomatis.

### SEO

- Page title.
- Meta description.
- Open Graph metadata.
- Favicon.
- Semantic HTML.
- Sitemap dan robots.txt.
- Setiap gambar memiliki alt text yang sesuai.

## 8. Non-Functional Requirements

| Kategori | Requirement |
|---|---|
| Performance | Website ringan dan cepat dimuat |
| Responsive | Mendukung mobile, tablet, desktop |
| Accessibility | Navigasi keyboard dan kontras teks yang baik |
| SEO | Memiliki metadata dasar |
| Maintainability | Struktur file mudah dipahami dan dikembangkan |
| Security | Tidak menyimpan data sensitif atau credential di frontend |
| Availability | Menggunakan layanan hosting dengan HTTPS |

## 9. Scope & Out of Scope

### MVP — Wajib Dibangun

- Navigation.
- Hero section.
- About Me.
- Skills & Technologies.
- Featured Projects.
- Contact.
- Footer.
- Responsive layout.
- SEO dasar.
- Deployment ke layanan hosting gratis.

### Out of Scope — Tidak Dibangun untuk Sekarang

- Admin dashboard.
- Authentication / Login.
- Database.
- Backend API.
- Blog atau CMS.
- Contact form dengan penyimpanan database.
- Multi-language.
- Sistem pengelolaan proyek secara dinamis.

Fitur-fitur tersebut dapat dipertimbangkan apabila website berkembang di kemudian hari.

## 10. Acceptance Criteria

Website dianggap selesai apabila:

1. Seluruh section utama tersedia dan dapat diakses.
2. Informasi profil mudah dipahami tanpa membaca terlalu banyak teks.
3. Minimal 3 proyek unggulan ditampilkan apabila materi proyek tersedia.
4. Setiap proyek memiliki deskripsi, teknologi, dan informasi kontribusi.
5. Seluruh link eksternal berfungsi.
6. Email dapat dibuka melalui aplikasi email.
7. Website berjalan dengan baik pada perangkat mobile dan desktop.
8. Tidak terdapat broken image atau broken link.
9. Website dapat diakses secara publik melalui hosting.
10. Website memiliki metadata SEO dasar.

## 11. Content Requirements

Sebelum pengembangan dimulai, materi berikut perlu disiapkan:

- Nama lengkap.
- Professional title.
- Deskripsi singkat tentang diri.
- Foto profil (opsional).
- Daftar teknologi yang dikuasai.
- Minimal 3 proyek terbaik.
- Screenshot masing-masing proyek.
- Deskripsi dan kontribusi untuk setiap proyek.
- Link GitHub dan Live Demo.
- Pengalaman kerja atau pendidikan (opsional).
- Email profesional.
- Link LinkedIn.
- CV PDF (opsional).

---

**Final Product Direction:** Sebuah personal portfolio satu halaman yang ringan, responsif, profesional, dan berfokus pada kemampuan serta hasil pekerjaan pemilik website.