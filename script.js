// Data proyek. Ubah atau tambah proyek di sini.
// area: "analisis" | "web" | "bisnis" | "otomasi"
const AREA_LABEL = {
  analisis: "Analisis & perancangan SI",
  web: "Pengembangan web",
  bisnis: "Proses bisnis & data",
  otomasi: "Otomasi & AI",
};

const FEATURED = {
  area: "otomasi",
  title: "Hermes Kuliah",
  summary:
    "Asisten kuliah pribadi yang saya buat sendiri. Asisten ini membaca Kulino dan SiAdin UDINUS, lalu mengirim info tugas dan presensi ke Discord.",
  points: [
    "Memindai Kulino (LMS UDINUS) untuk mencari tugas baru, tenggat, dan materi, lalu menulis ringkasan tugas dalam Markdown.",
    "Mengambil teks dari materi PDF, PPTX, dan DOCX supaya agen AI bisa membantu belajar.",
    "Mengirim pengingat presensi online SiAdin ke Discord, dengan proses latar yang hampir tidak memakai CPU.",
    "Menyimpan kata sandi dan token dalam bentuk terenkripsi dengan Windows DPAPI.",
    "Kalau tampilan situs kampus berubah, skrip menyimpan screenshot dan HTML supaya kesalahan mudah diperbaiki.",
    "Merapikan 400+ berkas kuliah ke 10 folder tema dan membuat katalog materi secara otomatis.",
  ],
  tech: ["Python", "Playwright", "REST API", "Bot Discord", "Windows DPAPI", "Agen AI"],
  pipeline: [
    "Login ke Kulino dan SiAdin",
    "Ambil tugas, materi, dan jadwal",
    "Ekstrak teks dan susun ringkasan",
    "Kirim notifikasi ke Discord",
  ],
};

const PROJECTS = [
  {
    area: "analisis",
    title: "Sistem informasi jasa mahar, Mahar Indah Kudus",
    summary:
      "Analisis dan perancangan sistem pemesanan mahar untuk UMKM di Kudus, dengan dua pendekatan: terstruktur dan berorientasi objek.",
    context: "Tugas UTS dan UAS APSI Terstruktur dan APSI Berorientasi Objek.",
    points: [
      "Memetakan proses bisnis berjalan (pemesanan, pembelian bahan, produksi) dan membuat proses usulan.",
      "Mencari akar masalah dengan diagram fishbone.",
      "Membuat use case untuk 5 aktor: customer, admin, pemilik, produksi, dan kurir.",
      "Membuat diagram konteks, DFD level 0 dan level 1, tabel relasi, serta desain input dan output.",
      "Merancang tampilan toko online, keranjang, dan nota digital.",
    ],
    tech: ["Use case", "Activity diagram", "DFD", "Fishbone", "Desain UI"],
    images: [
      { src: "assets/mahar-usecase.jpg", alt: "Diagram use case sistem Mahar Indah Kudus", caption: "Use case" },
      { src: "assets/mahar-dfd0.jpg", alt: "DFD level 0 sistem Mahar Indah Kudus", caption: "DFD level 0" },
      { src: "assets/mahar-menu.jpg", alt: "Desain halaman produk toko online mahar", caption: "Desain halaman produk" },
    ],
  },
  {
    area: "analisis",
    title: "HealthConnect",
    summary:
      "Rancangan aplikasi layanan kesehatan dengan metode design thinking, dari empati pengguna sampai prototipe.",
    context: "Proyek UAS Interaksi Manusia dan Komputer.",
    points: [
      "Mengikuti tahap design thinking: empathize, define, ideate, prototype, test.",
      "Membuat prototipe tampilan versi pertama.",
      "Pada tugas lain, saya juga mengevaluasi desain antarmuka Twitch.",
    ],
    tech: ["Design thinking", "Prototipe UI", "Evaluasi desain"],
  },
  {
    area: "analisis",
    title: "Skenario test case dan pengujian white box",
    summary:
      "Desain skenario pengujian untuk fitur aplikasi Shopee, dan pengujian white box untuk alur program.",
    context: "Tugas Pengujian Perangkat Lunak dan Implementasi & Pengujian Sistem.",
    points: [
      "Menulis test case dengan langkah, data uji, hasil yang diharapkan, dan hasil nyata.",
      "Menggambar flow graph dan menghitung jalur dasar untuk pengujian white box.",
    ],
    tech: ["Test case", "Black box", "White box"],
  },
  {
    area: "web",
    title: "Sistem peminjaman buku",
    summary:
      "Aplikasi web perpustakaan dengan PHP native pola MVC dan router buatan sendiri.",
    context: "Proyek UTS Pemrograman Web Lanjut.",
    points: [
      "Daftar akun, login, dan logout dengan sesi.",
      "Tambah, ubah, hapus, dan cari data buku.",
      "Upload sampul buku dengan pembuatan thumbnail otomatis.",
      "Pinjam buku: status, peminjam, dan waktu pinjam tercatat di database.",
    ],
    tech: ["PHP 8", "MariaDB", "MVC", "Upload gambar"],
    link: { href: "https://github.com/E6nola/perpustakaan-mvc-php", label: "Lihat kode di GitHub" },
    images: [{ src: "assets/buku-cover.jpg", alt: "Contoh sampul buku pada aplikasi", caption: "Data contoh sampul" }],
  },
  {
    area: "web",
    title: "Inventaris ATK",
    summary:
      "Dashboard inventaris alat tulis kantor dengan login, kelola produk, dan ringkasan nilai stok.",
    context: "Tugas Pemrograman Web Lanjut.",
    points: [
      "Kartu ringkasan: total produk, total stok, dan total nilai persediaan.",
      "Tambah, ubah, hapus produk dengan upload foto barang.",
      "Query memakai prepared statement untuk mencegah SQL injection.",
    ],
    tech: ["PHP", "MySQL", "Prepared statement", "CSS"],
    link: { href: "https://github.com/E6nola/inventaris-atk-php", label: "Lihat kode di GitHub" },
  },
  {
    area: "web",
    title: "Data mahasiswa dengan live search",
    summary:
      "CRUD data mahasiswa pola MVC, dengan pencarian langsung (AJAX) dan export laporan.",
    context: "Tugas minggu 9 Pemrograman Web Lanjut.",
    points: [
      "Hasil pencarian muncul saat mengetik, tanpa memuat ulang halaman.",
      "Export data ke Excel dengan PhpSpreadsheet dan ke PDF dengan Dompdf.",
      "Pustaka dikelola dengan Composer.",
    ],
    tech: ["PHP", "AJAX", "MVC", "Composer", "PhpSpreadsheet", "Dompdf"],
    link: { href: "https://github.com/E6nola/mahasiswa-crud-livesearch", label: "Lihat kode di GitHub" },
  },
  {
    area: "web",
    title: "Inventaris dengan login dan upload",
    summary:
      "Aplikasi CRUD dengan registrasi, login, dan upload gambar. Kode ada di GitHub.",
    context: "Tugas minggu 1 dan 2, semester 4.",
    points: [
      "Registrasi dan login pengguna.",
      "Tambah, ubah, hapus data dengan upload gambar.",
    ],
    tech: ["PHP", "MySQL", "Git"],
    link: { href: "https://github.com/E6nola/crud-inventaris-dasar", label: "Lihat kode di GitHub" },
  },
  {
    area: "web",
    title: "Cek ongkos kirim",
    summary:
      "Halaman cek ongkir yang mengambil data tarif kurir dari API RajaOngkir.",
    context: "Tugas minggu 10 Pemrograman Web Lanjut.",
    points: ["Pengguna memilih kota asal, kota tujuan, berat, dan kurir, lalu melihat tarif."],
    tech: ["PHP", "REST API", "RajaOngkir"],
    link: { href: "https://github.com/E6nola/cek-ongkir-rajaongkir", label: "Lihat kode di GitHub" },
  },
  {
    area: "web",
    title: "Daftar tugas mahasiswa",
    summary:
      "Aplikasi to-do untuk mahasiswa: login dengan NIM, lalu kelola tugas, tenggat, dan status.",
    context: "Proyek UAS Pemrograman Web Dasar.",
    points: ["Login dengan sesi PHP.", "Tambah, ubah, hapus tugas dengan tenggat dan status."],
    tech: ["PHP", "MySQL", "CSS"],
    link: { href: "https://github.com/E6nola/manajemen-tugas-kuliah", label: "Lihat kode di GitHub" },
  },
  {
    area: "web",
    title: "Website subsidi sembako",
    summary:
      "Website informasi program subsidi sembako, responsif dengan Bootstrap 5.",
    context: "Proyek UTS Pemrograman Web Dasar.",
    points: ["Navbar dengan dropdown, halaman promo, dan interaksi JavaScript."],
    tech: ["HTML", "Bootstrap 5", "JavaScript"],
    link: { href: "https://github.com/E6nola/portal-bansos-sembako", label: "Lihat kode di GitHub" },
    demo: { href: "https://e6nola.github.io/portal-bansos-sembako/", label: "Buka Live Demo" },
  },
  {
    area: "bisnis",
    title: "Dari sistem lama ke ERP terintegrasi",
    summary:
      "Studi kasus PT Senja Nusantara dan usaha furnitur: bagaimana ERP menyatukan penjualan, produksi, gudang, dan keuangan.",
    context: "Tugas dan UAS Perencanaan Sumber Daya Perusahaan.",
    points: [
      "Membandingkan alur as-is (sistem terpisah) dan to-be (ERP).",
      "Memetakan alur antar modul: SD, PP, MM, procurement, dan FI/CO.",
      "Membahas perhitungan kebutuhan bahan (MRP) dari BOM.",
    ],
    tech: ["ERP", "MRP", "As-is / to-be"],
    images: [{ src: "assets/erp-tobe.jpg", alt: "Alur to-be ERP usaha furnitur", caption: "Alur to-be ERP" }],
  },
  {
    area: "bisnis",
    title: "Tata kelola dan audit TI",
    summary:
      "Kumpulan tugas tentang cara organisasi mengatur dan memeriksa TI-nya.",
    context: "Audit SI, Manajemen Layanan TI, Transformasi Digital, dan Rencana Strategis.",
    points: [
      "Rencana transformasi digital untuk organisasi (UAS).",
      "Siklus perbaikan PDCA dan istilah ITSM.",
      "Perencanaan audit sistem informasi dan struktur pengendalian internal.",
    ],
    tech: ["Audit SI", "PDCA", "ITSM", "Transformasi digital"],
  },
  {
    area: "bisnis",
    title: "Sistem informasi akuntansi",
    summary: "Studi kasus siklus bisnis dan model data akuntansi dengan diagram REA.",
    context: "Tugas individu dan kelompok SIA.",
    points: ["Menggambar diagram REA (resource, event, agent).", "Menjawab studi kasus siklus transaksi."],
    tech: ["Diagram REA", "Siklus akuntansi"],
  },
  {
    area: "bisnis",
    title: "Perencanaan jaringan VLSM",
    summary: "Membagi alamat IP dengan VLSM dan menerapkan 7 lapisan OSI pada contoh nyata.",
    context: "Tugas Infrastruktur TI.",
    points: ["Menghitung subnet sesuai jumlah host tiap bagian.", "Contoh penerapan tiap lapisan OSI."],
    tech: ["VLSM", "Model OSI", "Subnetting"],
  },
  {
    area: "bisnis",
    title: "Penambangan data",
    status: "Sedang berjalan",
    summary:
      "Semester ini saya mengerjakan rangkaian proyek data mining dengan alur CRISP-DM, sampai proyek capstone.",
    context: "Penambangan Data dan Sistem Pendukung Keputusan, semester 5.",
    points: [
      "Pra-pemrosesan data dan regresi linier.",
      "Perbandingan Decision Tree dan KNN dengan evaluasi K-Fold.",
      "Segmentasi dengan K-Means dan market basket analysis dengan Apriori dan FP-Growth.",
      "Tabel keputusan untuk Sistem Pendukung Keputusan.",
    ],
    tech: ["Python", "Google Colab", "CRISP-DM", "Excel"],
  },
];

// ---------- render ----------
const listEl = document.getElementById("project-list");
const statusEl = document.querySelector(".filter-status");
const filterBtns = document.querySelectorAll(".filters button");

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) if (c) node.append(c);
  return node;
}

function list(items, cls) {
  return el("ul", { class: cls }, items.map((t) => el("li", { text: t })));
}

function renderFeatured() {
  const f = FEATURED;
  return el("article", { class: "featured", "data-area": f.area }, [
    el("div", { class: "featured-main" }, [
      el("span", { class: "tag", text: "Proyek pribadi utama, " + AREA_LABEL[f.area].toLowerCase() }),
      el("h3", { text: f.title }),
      el("p", { class: "summary", text: f.summary }),
      list(f.points, "points"),
      list(f.tech, "chips tech"),
    ]),
    el("aside", { class: "featured-side" }, [
      el("h4", { text: "Cara kerjanya" }),
      el("ol", { class: "pipeline" }, f.pipeline.map((t) => el("li", { text: t }))),
    ]),
  ]);
}

function renderProject(p) {
  const title = el("h3", { text: p.title });
  if (p.status) title.append(el("span", { class: "status", text: p.status }));

  const detail = el("div", { class: "detail" }, [
    p.context ? el("p", { class: "context", text: p.context }) : null,
    p.images
      ? el("div", { class: "gallery" }, p.images.map((img) =>
          el("figure", {}, [
            el("a", { href: img.src, target: "_blank", rel: "noopener" }, [
              el("img", { src: img.src, alt: img.alt, loading: "lazy" }),
            ]),
            el("figcaption", { text: img.caption }),
          ])))
      : null,
    list(p.points, "points"),
    list(p.tech, "chips"),
    p.link ? el("a", { class: "link", href: p.link.href, target: "_blank", rel: "noopener", text: p.link.label }) : null,
    p.demo ? el("a", { class: "link", href: p.demo.href, target: "_blank", rel: "noopener", text: " · " + p.demo.label }) : null,
  ]);

  return el("details", { class: "project", "data-area": p.area }, [
    el("summary", {}, [
      el("div", {}, [el("span", { class: "tag", text: AREA_LABEL[p.area] }), title]),
      el("p", { class: "summary", text: p.summary }),
      el("span", { class: "toggle", "aria-hidden": "true", text: "+" }),
    ]),
    el("div", { class: "project-body" }, [el("div"), detail]),
  ]);
}

listEl.append(renderFeatured(), ...PROJECTS.map(renderProject));

// jumlah proyek per bidang di diagram
const counts = {};
[FEATURED, ...PROJECTS].forEach((p) => (counts[p.area] = (counts[p.area] || 0) + 1));
document.querySelectorAll("[data-count]").forEach((n) => {
  const c = counts[n.dataset.count] || 0;
  n.textContent = c + " proyek";
});

// ---------- filter ----------
function applyFilter(area) {
  filterBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === area)));
  let shown = 0;
  listEl.querySelectorAll("[data-area]").forEach((item) => {
    const show = area === "semua" || item.dataset.area === area;
    item.hidden = !show;
    if (show) shown++;
  });
  statusEl.textContent =
    area === "semua" ? `Menampilkan semua ${shown} proyek.` : `Menampilkan ${shown} proyek di bidang ${AREA_LABEL[area].toLowerCase()}.`;
}

filterBtns.forEach((b) => b.addEventListener("click", () => applyFilter(b.dataset.filter)));
applyFilter("semua");

// ---------- diagram ----------
const lines = document.querySelectorAll(".ctx-lines line");
const entities = document.querySelectorAll(".entity");

function highlight(area) {
  lines.forEach((l) => l.classList.toggle("is-hot", l.dataset.area === area));
  entities.forEach((e) => e.classList.toggle("is-hot", e.dataset.area === area));
}

entities.forEach((e) => {
  const area = e.dataset.area;
  e.setAttribute("aria-label", `${AREA_LABEL[area]}: lihat ${counts[area] || 0} proyek`);
  e.addEventListener("mouseenter", () => highlight(area));
  e.addEventListener("focus", () => highlight(area));
  e.addEventListener("mouseleave", () => highlight(null));
  e.addEventListener("blur", () => highlight(null));
  e.addEventListener("click", () => {
    applyFilter(area);
    document.getElementById("proyek").scrollIntoView();
  });
});

// ---------- theme toggle label sync ----------
if (typeof updateThemeUI === "function") {
  updateThemeUI(document.documentElement.getAttribute("data-theme") || "light");
}

try {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme") && typeof updateThemeUI === "function") {
      updateThemeUI(e.matches ? "dark" : "light");
    }
  });
} catch (e) {}

const CERTIFICATES = [
  {
    "title": "Data Mining Specialization",
    "issuer": "University of Illinois Urbana-Champaign",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/specialization/0LZVXCBNAD1B",
    "type": "Spesialisasi",
    "category": "data"
  },
  {
    "title": "Google Data Analytics Professional Certificate",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/specialization/U385LP27KU2J",
    "type": "Spesialisasi",
    "category": "data"
  },
  {
    "title": "Enterprise Data Integration, Governance and Architecture Specialization",
    "issuer": "SkillUp",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/specialization/1VFNQXVD057R",
    "type": "Spesialisasi",
    "category": "enterprise"
  },
  {
    "title": "CISA: Certified Information Systems Auditor Specialization",
    "issuer": "Packt",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/specialization/1Q4Q9UW3MP6U",
    "type": "Spesialisasi",
    "category": "keamanan"
  },
  {
    "title": "Certified Information Systems Security Professional (CISSP) Specialization",
    "issuer": "Infosec",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/specialization/UNOF3GNI1BRN",
    "type": "Spesialisasi",
    "category": "keamanan"
  },
  {
    "title": "Text Mining and Analytics",
    "issuer": "University of Illinois Urbana-Champaign",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/60XAG09I8XCC",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Assess for Success: Marketing Analytics and Measurement",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/VMH6WOVHDQ46",
    "type": "Kursus",
    "category": "marketing"
  },
  {
    "title": "Python for Data Science, AI & Development",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/VHZ0ISNR1UOX",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Business Intelligence (BI) Essentials",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/ICV4EXMVEVWO",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Generative AI: Elevate your Business Intelligence Career",
    "issuer": "SkillUp",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/EBRCT2V04RT1",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Think Outside the Inbox: Email Marketing",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/X68C89Z4BLGH",
    "type": "Kursus",
    "category": "marketing"
  },
  {
    "title": "Satisfaction Guaranteed: Develop Customer Loyalty Online",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/87N3T1TEBS74",
    "type": "Kursus",
    "category": "marketing"
  },
  {
    "title": "From Likes to Leads: Interact with Customers Online",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/WQXGRA4KA9H4",
    "type": "Kursus",
    "category": "marketing"
  },
  {
    "title": "Attract and Engage Customers with Digital Marketing",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/LB9PNP6YI8ZK",
    "type": "Kursus",
    "category": "marketing"
  },
  {
    "title": "SQL: A Practical Introduction for Querying Databases",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/ECUUZFQ5FUPH",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Foundations of Digital Marketing and E-commerce",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/X10B3Q88SHYM",
    "type": "Kursus",
    "category": "marketing"
  },
  {
    "title": "CISSP Domain 2: Asset Security",
    "issuer": "Infosec",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/TRG4DYUSAN8S",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "CISSP Domain 7: Security Operations",
    "issuer": "Infosec",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/1MNKNZJ3QNU9",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "Data Mining Project",
    "issuer": "University of Illinois Urbana-Champaign",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/EM7VVTLBTWYJ",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Accelerate Your Job Search with AI",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/YZFZK8OUEYVH",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Google Data Analytics Capstone: Complete a Case Study",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/1R3I6XU8PEMD",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Enterprise Data Architecture and Operations",
    "issuer": "SkillUp",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/2FU2NZ00YZA8",
    "type": "Kursus",
    "category": "enterprise"
  },
  {
    "title": "Prepare Data for Exploration",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/ZWNLG215SUAL",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Analyze Data to Answer Questions",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/Q2LQDYV4I8YV",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Share Data Through the Art of Visualization",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/SJV86VNSSG5Y",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Process Data from Dirty to Clean",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/DS6G4L7GE4J7",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Introduction to Data Analysis Using Python",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/X73AVT1CDVG5",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Protection of Information Assets",
    "issuer": "Packt",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/OEZII0JZCVRB",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "Information Systems Operations and Business Resiliency",
    "issuer": "Packt",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/6NILO7J4PX6O",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "Systems Acquisition, Development and Implementation",
    "issuer": "Packt",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/ESQE297LBP6M",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "Ask Questions to Make Data-Driven Decisions",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/9A0WBBY2ZMEK",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Text Retrieval and Search Engines",
    "issuer": "University of Illinois Urbana-Champaign",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/YGVGO7KIHX6A",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Governance and Management of IT",
    "issuer": "Packt",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/70JBSI3X3WGP",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "Information Systems Auditing and Governance",
    "issuer": "Packt",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/RDOAUE2FBFM4",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "CISSP Domain 8: Software development security",
    "issuer": "Infosec",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/OP07HTML7FGT",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "CISSP Domain 6: Security Assessment and Testing",
    "issuer": "Infosec",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/7WK887IAWLDZ",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "CISSP Domain 5: Identity and Access Management (IAM)",
    "issuer": "Infosec",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/OEOPWU82QIXJ",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "CISSP Domain 4: Communication and Network Security",
    "issuer": "Infosec",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/ASQ98TXZQ6MI",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "CISSP Domain 3: Security Architecture and Engineering",
    "issuer": "Infosec",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/EJBIH64RCSMN",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "CISSP Domain 1: Security and Risk Management",
    "issuer": "Infosec",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/QNV3ID685DF4",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "Cluster Analysis in Data Mining",
    "issuer": "University of Illinois Urbana-Champaign",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/MA5UEC4B64C4",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Pattern Discovery in Data Mining",
    "issuer": "University of Illinois Urbana-Champaign",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/1AO1OZXSOZ8Y",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Data Visualization",
    "issuer": "University of Illinois Urbana-Champaign",
    "date": "September 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/XJXVKTZUX470",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Data Privacy, Security, Governance, Risk and Compliance",
    "issuer": "SkillUp",
    "date": "September 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/5KJAMF5Q5UW3",
    "type": "Kursus",
    "category": "keamanan"
  },
  {
    "title": "Foundations: Data, Data, Everywhere",
    "issuer": "Google",
    "date": "April 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/FA5MULWTI470",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "TOGAF 10 Foundation",
    "issuer": "EDUCBA",
    "date": "April 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/P77UVPVWDDX5",
    "type": "Kursus",
    "category": "enterprise"
  },
  {
    "title": "Data Integration, Data Storage, & Data Migration",
    "issuer": "SkillUp",
    "date": "April 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/JPRZ3DA4TXWX",
    "type": "Kursus",
    "category": "enterprise"
  },
  {
    "title": "Enterprise Systems",
    "issuer": "University of Minnesota",
    "date": "April 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/QBVX0GYS0H0O",
    "type": "Kursus",
    "category": "enterprise"
  }
];
// ---------- sertifikasi render ----------
const specListEl = document.getElementById("spec-list");
const certListEl = document.getElementById("cert-list");
const certFilterBtns = document.querySelectorAll(".cert-filters button");
const certStatusEl = document.querySelector(".cert-filter-status");

const CERT_CATEGORY_LABEL = {
  semua: "Semua",
  spesialisasi: "Spesialisasi Profesional",
  data: "Data & AI",
  keamanan: "Keamanan Siber & Audit SI",
  enterprise: "Arsitektur Enterprise",
  marketing: "Pemasaran Digital",
};

function renderSpecCard(c) {
  return el("article", { class: "spec-card" }, [
    el("div", { class: "spec-card-top" }, [
      el("span", { class: "spec-badge", text: "★ Spesialisasi Profesional" }),
      el("h4", { text: c.title }),
      el("p", { class: "meta", text: `${c.issuer} · ${c.date}` }),
    ]),
    el("a", {
      class: "cert-link",
      href: c.url,
      target: "_blank",
      rel: "noopener",
      text: "Verifikasi Kredensial Resmi ↗",
    }),
  ]);
}

function renderCertCard(c) {
  const isSpec = c.type === "Spesialisasi";
  return el(
    "article",
    {
      class: "cert-card",
      "data-cat": c.category,
      "data-type": isSpec ? "spesialisasi" : "kursus",
    },
    [
      el("div", { class: "cert-card-header" }, [
        el("span", { class: "cert-type", text: `${c.type} · ${c.issuer}` }),
        el("h4", { text: c.title }),
      ]),
      el("div", { class: "cert-footer" }, [
        el("span", { text: c.date }),
        el("a", { class: "cert-link", href: c.url, target: "_blank", rel: "noopener", text: "Verifikasi ↗" }),
      ]),
    ]
  );
}

if (specListEl && certListEl) {
  const specs = CERTIFICATES.filter((c) => c.type === "Spesialisasi");
  specListEl.append(...specs.map(renderSpecCard));

  certListEl.append(...CERTIFICATES.map(renderCertCard));

  function applyCertFilter(cat) {
    certFilterBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.certFilter === cat)));
    let shown = 0;
    certListEl.querySelectorAll(".cert-card").forEach((card) => {
      let show = false;
      if (cat === "semua") show = true;
      else if (cat === "spesialisasi") show = card.dataset.type === "spesialisasi";
      else show = card.dataset.cat === cat;
      card.hidden = !show;
      card.style.display = show ? "" : "none";
      if (show) shown++;
    });
    if (certStatusEl) {
      certStatusEl.textContent =
        cat === "semua"
          ? `Menampilkan seluruh ${shown} sertifikat Coursera.`
          : `Menampilkan ${shown} sertifikat kategori ${CERT_CATEGORY_LABEL[cat] || cat}.`;
    }
  }

  certFilterBtns.forEach((b) =>
    b.addEventListener("click", () => applyCertFilter(b.dataset.certFilter))
  );
  applyCertFilter("semua");
}

// ---------- sticky smart header (hide on scroll down, show on scroll up) ----------
const siteHeader = document.querySelector(".site-header");
if (siteHeader) {
  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  const THRESHOLD = 10;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollY > 40) {
        siteHeader.classList.add("is-scrolled");
      } else {
        siteHeader.classList.remove("is-scrolled");
      }

      if (Math.abs(currentScrollY - lastScrollY) < THRESHOLD) return;

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        siteHeader.classList.add("is-hidden");
      } else {
        siteHeader.classList.remove("is-hidden");
      }

      lastScrollY = Math.max(0, currentScrollY);
    },
    { passive: true }
  );
}

