# Portfolio Website — Design Specification

**Versi:** 1.0  
**Status:** Design direction / siap menjadi acuan implementasi  
**Referensi visual:** Screenshot portfolio bergaya scrapbook, ruled paper, dan editorial layout yang diberikan.

## 1. Design Direction

### Konsep

**Digital scrapbook meets developer portfolio.** Website terasa seperti lembar catatan kreatif yang disusun dengan rapi: latar grid, kertas bergaris, label seperti stiker, foto yang ditempel dengan tape, serta kartu proyek berwarna kontras.

Karakter visual harus tetap profesional. Elemen dekoratif digunakan sebagai aksen, bukan sampai mengalahkan informasi utama.

### Prinsip desain

1. **Personal, bukan generik.** Nama, foto, dan proyek menjadi pusat perhatian.
2. **Scannable.** Pengunjung dapat memahami role, kemampuan, dan proyek unggulan dalam beberapa detik.
3. **Playful but structured.** Detail scrapbook boleh ekspresif, tetapi grid, jarak, dan hierarki tetap konsisten.
4. **Project-first.** Bagian proyek mendapatkan ruang visual paling besar setelah hero.
5. **Lightweight.** Hindari animasi berat, video autoplay, dan aset dekoratif berukuran besar.

## 2. Visual Reference Breakdown

Elemen referensi yang dipertahankan:

- Background abu-abu dengan pola grid tipis.
- Canvas utama berwarna putih/off-white dengan garis horizontal seperti kertas binder.
- Navigasi tipis di bagian atas canvas.
- Hero terpusat dengan nama besar dalam outline frame.
- Label kecil berbentuk pill/sticker di sekitar nama dan headline.
- Foto profil dan foto pendukung dengan efek kertas, bayangan lembut, serta tape.
- Skill ditampilkan sebagai potongan label warna-warni.
- Project ditampilkan dalam panel besar dengan warna kontras, tab nomor proyek, dan screenshot yang tampak ditempel.

Adaptasi untuk portfolio developer:

- Gunakan istilah **About**, **Stack**, **Projects**, dan **Contact**.
- Ganti narasi desain produk pada referensi dengan pernyataan singkat tentang bidang pengembangan web.
- Tampilkan kontribusi teknis pada setiap proyek: masalah, solusi, peran, teknologi, dan tautan demo/repository.
- Tidak perlu meniru seluruh dekorasi secara literal. Utamakan keterbacaan dan keaslian identitas pemilik.

## 3. Layout & Grid

### Desktop

- Canvas utama: `max-width: 1180px` (dapat disesuaikan mengikuti viewport).
- Lebar canvas: sekitar `92vw`.
- Posisi: rata tengah dengan margin atas/bawah.
- Padding horizontal konten: `clamp(24px, 5vw, 72px)`.
- Navigasi berada di bagian atas canvas dan tetap terlihat saat scroll (sticky di dalam page).
- Konten utama menggunakan satu kolom vertikal; beberapa section boleh memakai komposisi dua kolom.

### Struktur halaman

```text
┌──────────────────────────────────────────────────────┐
│ NAV: monogram | HOME ABOUT PROJECTS       SOCIAL CTA  │
├──────────────────────────────────────────────────────┤
│                                                      │
│                    HERO                              │
│          small labels + NAME FRAME                  │
│             short value proposition                 │
│                [VIEW PROJECTS]                       │
│                                                      │
├──────────────────────────────────────────────────────┤
│ ABOUT                                                │
│  portrait/photo      short bio + working photo       │
│                      skill sticker labels            │
├──────────────────────────────────────────────────────┤
│ SELECTED WORK / PROJECTS                             │
│  [01 tab] ┌──────── project card ────────────────┐   │
│           │ project details        screenshot    │   │
│           └──────────────────────────────────────┘   │
│       [02 tab] ┌──── alternating project card ──┐   │
│                └────────────────────────────────┘   │
├──────────────────────────────────────────────────────┤
│ CONTACT / LET'S BUILD SOMETHING                       │
├──────────────────────────────────────────────────────┤
│ FOOTER                                                │
└──────────────────────────────────────────────────────┘
```

### Mobile

- Canvas menggunakan hampir seluruh lebar layar (`width: 100%`).
- Kurangi margin luar dan ornamen grid agar konten tidak terasa sempit.
- Semua komposisi dua kolom berubah menjadi satu kolom.
- Navigasi desktop diganti menu ringkas atau horizontal scroll yang tetap mudah digunakan.
- Project card ditumpuk: detail terlebih dahulu, screenshot sesudahnya.
- Hindari overlap antar-card pada layar kecil.

## 4. Design Tokens

Warna berikut adalah perkiraan dari referensi visual dan dapat disesuaikan saat implementasi.

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-surround` | `#929292` | Latar luar canvas |
| `--color-grid` | `#C8C8C8` | Garis grid luar |
| `--color-paper` | `#F7F7F3` | Background canvas |
| `--color-paper-line` | `#DEDED8` | Garis horizontal kertas |
| `--color-ink` | `#191715` | Teks utama, panel gelap |
| `--color-muted` | `#6F6B65` | Teks sekunder |
| `--color-yellow` | `#F4CE4E` | Aksen utama / project panel |
| `--color-blue` | `#3159CC` | Aksen sekunder / tab proyek |
| `--color-orange` | `#F0784E` | Outline / detail kecil |
| `--color-mint` | `#A9D9C5` | Sticker / label |
| `--color-green` | `#15966C` | Label skill |
| `--color-pink` | `#EC4D91` | Aksen dekoratif |
| `--color-white` | `#FFFFFF` | Card dan teks di atas warna gelap |

### Aturan penggunaan warna

- Paper dan ink menjadi dasar seluruh halaman.
- Yellow dan blue menjadi warna aksen utama.
- Orange, mint, green, dan pink hanya muncul pada sticker, badge, atau detail kecil.
- Jangan menggunakan semua warna aksen dalam satu komponen.
- Pastikan teks kecil tetap memiliki kontras yang cukup, terutama di atas warna kuning dan mint.

## 5. Typography

Gunakan maksimal tiga keluarga font agar halaman tetap konsisten.

| Peran | Rekomendasi | Penggunaan |
|---|---|---|
| Display | `Barlow Condensed` atau `Bebas Neue` | Nama besar dan judul proyek |
| Sans-serif | `DM Sans` atau `Inter` | Navigasi, body copy, tombol, metadata |
| Handwritten | `Caveat` atau `Kalam` | Catatan kecil dan label dekoratif |

### Skala tipografi desktop

- Hero name: `clamp(4rem, 10vw, 7.5rem)`, uppercase, bold/condensed.
- Hero headline: `clamp(2rem, 4vw, 3.2rem)`, weight 700, line-height rapat.
- Section heading: `clamp(2rem, 3vw, 3rem)`.
- Project title: `clamp(2rem, 4vw, 3.5rem)`.
- Body: `1rem`–`1.125rem`, line-height `1.6`.
- Eyebrow/metadata: `0.7rem`–`0.8rem`, uppercase, letter spacing `0.12em`.
- Handwritten notes: `1.1rem`–`1.4rem`; hanya untuk teks pendek.

### Aturan tipografi

- Jangan memakai font handwritten untuk paragraf utama.
- Batasi headline hero maksimal 2 baris.
- Deskripsi proyek idealnya 1–3 kalimat pendek.
- Hindari teks uppercase panjang untuk body copy.

## 6. Section Specifications

### 6.1 Navigation

**Tujuan:** memberi orientasi dan akses cepat ke konten utama.

Konten:
- Monogram atau inisial di sisi kiri.
- Navigasi: `Home`, `About`, `Projects`.
- Link sosial opsional: GitHub dan LinkedIn.
- Tombol `Contact` di sisi kanan.

Visual:
- Background paper/putih, border bawah tipis.
- Tinggi sekitar 56–64px pada desktop.
- Item aktif memakai highlight kuning seperti tab kertas.
- Icon sosial berbentuk lingkaran kecil; gunakan icon resmi/sederhana.

Perilaku:
- Anchor scroll ke section yang dituju.
- Sticky ketika scroll, tanpa menutupi heading section.
- Pada mobile, sederhanakan menu dan pertahankan CTA Contact.

### 6.2 Hero

**Tujuan:** menjelaskan identitas profesional dan fokus utama dalam satu layar.

Urutan konten:
1. Label kecil, contoh: `BUILDING FOR THE WEB`.
2. Teks pengantar: `Hi, my name is`.
3. Nama lengkap dalam frame outline warna orange.
4. Role singkat, contoh: `FULL-STACK WEB DEVELOPER`.
5. Headline utama yang menjelaskan nilai atau fokus kerja.
6. CTA utama: `VIEW PROJECTS`.
7. CTA sekunder: `CONTACT ME` atau link GitHub.

Arahan visual:
- Komposisi rata tengah.
- Nama menjadi elemen paling dominan.
- Frame nama sedikit tidak simetris agar terasa handmade, tetapi jangan mengganggu keterbacaan.
- Tambahkan 2–3 sticker/label kecil di sekitar hero.
- Foto avatar kecil boleh ditempatkan di sisi kiri/kanan headline pada desktop; hilangkan bila membuat layout sesak.

Contoh copy (placeholder, wajib diganti):

> Hi, I'm [Nama]. I build web experiences that are useful, clear, and reliable.

Jangan mengklaim spesialisasi atau pengalaman yang belum benar-benar dimiliki.

### 6.3 About

**Tujuan:** memberi konteks singkat tentang orang di balik proyek.

Layout desktop:
- Foto profil di kiri, dengan frame putih dan efek tape.
- Bio di tengah atau kanan.
- Foto workspace/proses kerja sebagai visual pendukung opsional.
- Daftar skill berbentuk sticker di bawah bio.

Konten:
- Heading kecil: `A LITTLE ABOUT ME`.
- Subheading: `What's up?` atau judul personal yang setara.
- Bio maksimal 2 paragraf pendek.
- Fokus pada bidang yang dikerjakan, cara berpikir, dan jenis masalah yang disukai.

Skill stickers:
- Kelompokkan label, misalnya `Frontend`, `Backend`, `Database`, `Tools`.
- Gunakan warna berbeda secara terkontrol.
- Tampilkan hanya teknologi yang benar-benar pernah digunakan.
- Hindari progress bar atau persentase skill yang tidak terukur.

### 6.4 Projects / Selected Work

**Tujuan:** membuktikan kemampuan melalui pekerjaan nyata. Ini adalah section terpenting setelah hero.

Heading section:
- Eyebrow: `SELECTED WORK`.
- Judul: `Things I've built` atau `Featured Projects`.
- Keterangan singkat opsional: `A selection of projects I've worked on.`

Project card:

| Elemen | Ketentuan |
|---|---|
| Nomor proyek | Tab/sticker di bagian atas card, contoh `PROJECT 01` |
| Tanggal | Bulan/tahun; opsional jika tidak relevan |
| Nama proyek | Judul besar dan mudah dipindai |
| Ringkasan | 1–2 kalimat mengenai masalah dan solusi |
| Kontribusi | Bagian yang dikerjakan secara pribadi |
| Tech stack | 3–6 label teknologi yang relevan |
| Screenshot | Satu visual utama dengan frame/tape |
| Aksi | `LIVE DEMO` dan/atau `SOURCE CODE` |

Visual card:
- Gunakan panel lebar dengan dua area: teks dan screenshot.
- Card pertama menggunakan background ink gelap dengan teks putih dan aksen biru.
- Card berikutnya dapat menggunakan background kuning dengan teks ink.
- Card selanjutnya kembali ke paper/warna gelap agar variasi tetap seimbang.
- Screenshot diberi border/frame putih, sedikit rotasi opsional, dan tape dekoratif.
- Tab proyek boleh overlap tipis pada bagian atas card, tetapi tidak boleh menutupi konten.

Urutan informasi yang disarankan:

```text
[PROJECT 01]
MAR 2026
Project Name
Masalah yang diselesaikan dan solusi yang dibuat.
My role: Frontend, API integration, database design.
[HTML] [Tailwind CSS] [Node.js] [MongoDB]
[VIEW LIVE] [SOURCE CODE]
                         [PROJECT SCREENSHOT]
```

Aturan konten:
- Prioritaskan 3 proyek terkuat; tambah proyek lain hanya jika kualitasnya sebanding.
- Jelaskan kontribusi pribadi, khususnya jika proyek dikerjakan dalam tim.
- Jangan menyamakan proyek latihan dengan proyek produksi.
- Jika demo tidak tersedia, tampilkan repository atau penjelasan singkat yang jujur.
- Jika proyek bersifat privat, jangan menampilkan informasi rahasia.

### 6.5 Contact

**Tujuan:** mengubah ketertarikan pengunjung menjadi percakapan.

Layout:
- Satu blok CTA besar dengan kalimat langsung.
- Contoh heading: `Have a project in mind?` atau `Let's talk.`
- Tombol email utama.
- Link GitHub dan LinkedIn sebagai alternatif.

Gunakan `mailto:` untuk email. Contact form tidak diperlukan pada versi pertama karena website tidak membutuhkan backend.

### 6.6 Footer

- Nama atau monogram.
- Copyright dengan tahun berjalan.
- Link GitHub dan LinkedIn.
- Kalimat singkat opsional, misalnya `Designed & built with care.`

## 7. Components & Reusable UI

Komponen yang perlu dibuat:

- `SiteNavigation`
- `HeroSection`
- `SectionLabel`
- `StickerTag`
- `PhotoFrame`
- `AboutSection`
- `SkillGroup`
- `ProjectCard`
- `ProjectTab`
- `ContactSection`
- `SiteFooter`

Gaya komponen:

- Border cenderung tipis dan tegas.
- Shadow digunakan terutama pada foto dan screenshot.
- Radius tidak terlalu membulat; gunakan sudut kecil atau bentuk custom pada sticker.
- Sticker dapat memakai variasi rotasi ringan (`-2deg` sampai `2deg`).
- Hindari efek glassmorphism, gradient berlebihan, dan card UI generik.

## 8. Interaction & Motion

Interaksi harus halus dan tidak menghambat akses informasi.

- Navigation: smooth scroll dengan offset untuk sticky header.
- Link/button: perubahan warna atau sedikit pergeseran saat hover.
- Sticker: rotasi kecil saat hover, opsional.
- Project card: screenshot dapat bergerak/terangkat sedikit saat hover.
- Reveal animation: section boleh fade/slide ringan ketika masuk viewport.
- Hormati `prefers-reduced-motion`; nonaktifkan atau kurangi gerakan jika pengguna meminta reduced motion.

Tidak perlu cursor custom, parallax berat, loading intro, atau animasi yang menghalangi konten.

## 9. Responsive Behaviour

| Area | Desktop | Tablet | Mobile |
|---|---|---|---|
| Canvas | Terpusat, max-width | Lebar hampir penuh | Full width |
| Background grid | Terlihat jelas | Lebih halus | Sangat halus/minimal |
| Navigation | Menu horizontal | Menu ringkas | Menu sederhana |
| Hero | Terpusat, dekoratif | Terpusat | Satu kolom, tanpa ornamen berlebih |
| About | 2–3 kolom | 2 kolom atau stack | Satu kolom |
| Skills | Beberapa baris sticker | Wrap | Wrap, ukuran lebih kecil |
| Projects | Teks + gambar berdampingan | Stack atau split | Stack penuh |
| Decorative tape | Boleh tampil | Dikurangi | Opsional, jangan mengganggu |

Breakpoint awal yang disarankan:
- Mobile: `< 640px`
- Tablet: `640px–1023px`
- Desktop: `>= 1024px`

## 10. Accessibility & Usability

- Gunakan semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Semua link dan tombol dapat diakses dengan keyboard.
- Focus state harus terlihat.
- Jangan menggunakan warna sebagai satu-satunya cara menyampaikan informasi.
- Beri alt text deskriptif untuk foto proyek dan foto profil.
- Jaga kontras teks, terutama teks kecil pada panel berwarna.
- Sediakan label yang jelas untuk icon-only links.
- Pastikan ukuran target sentuh cukup nyaman pada perangkat mobile.

## 11. Asset Checklist

Materi visual yang perlu disiapkan:

- Foto profil dengan crop portrait.
- Foto workspace/proses kerja (opsional).
- Screenshot 3 proyek unggulan.
- Logo atau favicon berbasis inisial.
- Icon GitHub dan LinkedIn.
- Foto/gambar harus dikompres ke WebP/AVIF bila memungkinkan.

Arahan gambar proyek:
- Gunakan screenshot asli aplikasi, bukan mockup generik jika screenshot tersedia.
- Pastikan informasi sensitif pada screenshot sudah dihilangkan.
- Gunakan rasio gambar yang konsisten, idealnya 16:10 atau 4:3.
- Berikan `width` dan `height` agar layout tidak bergeser saat gambar dimuat.

## 12. Implementation Notes

Target implementasi mengikuti stack portfolio yang telah ditentukan:

- HTML5.
- Tailwind CSS.
- Vanilla JavaScript.
- Tanpa framework frontend dan tanpa backend pada MVP.

Rekomendasi teknis:
- Simpan konten proyek dalam array/object JavaScript atau markup HTML yang konsisten agar mudah diperbarui.
- Buat warna dan spacing sebagai design tokens/CSS variables.
- Gunakan CSS custom untuk detail scrapbook seperti ruled paper, grid background, frame, tape, dan bentuk tab.
- Gunakan SVG inline atau icon library ringan untuk icon.
- Hindari memasukkan informasi rahasia atau API key ke source code.

Contoh struktur file:

```text
portfolio/
├── index.html
├── assets/
│   ├── images/
│   │   ├── profile.webp
│   │   ├── workspace.webp
│   │   └── projects/
│   └── icons/
├── src/
│   ├── input.css
│   └── main.js
├── dist/                 # hasil build, jika memakai Tailwind CLI
├── README.md
└── package.json          # jika memakai Tailwind CLI/build process
```

Jika menggunakan Tailwind Play CDN untuk prototipe, jangan menjadikannya pilihan final untuk website production. Untuk hasil final, gunakan proses build Tailwind agar CSS yang dikirim lebih kecil dan terkontrol.

## 13. Definition of Done

Desain dianggap berhasil diimplementasikan jika:

- [ ] Karakter scrapbook/editorial dari referensi terasa, tetapi konten tetap profesional.
- [ ] Nama dan role dapat dipahami pada pandangan pertama.
- [ ] About section ringkas dan mudah dipindai.
- [ ] Skill ditampilkan sebagai label, bukan klaim persentase.
- [ ] Minimal 3 project cards dapat ditampilkan dengan informasi yang lengkap.
- [ ] Screenshot proyek tampil tajam dan tidak terpotong secara tidak sengaja.
- [ ] CTA Contact dan seluruh tautan eksternal berfungsi.
- [ ] Layout responsif tanpa horizontal overflow.
- [ ] Animasi ringan dan menghormati reduced-motion preference.
- [ ] Kontras, keyboard navigation, dan focus state layak digunakan.
- [ ] Halaman tetap ringan dan tidak memerlukan backend.

---

## 14. Final Design Summary

Bangun portfolio sebagai **lembar kertas digital di atas latar grid**, dengan hero yang kuat, about section yang personal, skill stickers yang ekspresif, dan project cards besar yang menampilkan bukti pekerjaan secara nyata.

Nuansa visual boleh playful, tetapi struktur informasinya harus tegas: **siapa Anda → apa yang Anda kuasai → apa yang sudah Anda bangun → bagaimana menghubungi Anda.**
