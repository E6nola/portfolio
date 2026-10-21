// Data portofolio rekayasa sistem informasi
// area: "analisis" | "web" | "bisnis" | "otomasi"
const AREA_LABEL = {
  analisis: "Analisis & Perancangan SI Enterprise",
  web: "Rekayasa Web & Basis Data",
  bisnis: "Tata Kelola & Analitika Data",
  otomasi: "Otomasi Pipeline & Agen AI",
};

const FEATURED = {
  area: "otomasi",
  title: "Hermes Academic Workflow Automation Engine",
  summary:
    "Sistem otomasi otonom berbasis Python yang terintegrasi langsung dengan platform akademik Kulino LMS dan SiAdin UDINUS, mendistribusikan telemetri jadwal, tugas, dan presensi secara real-time ke Discord.",
  points: [
    "Memindai dan mengekstrak data dari LMS Kulino secara terjadwal untuk mendeteksi penugasan baru, batas waktu submit, dan repositori materi, kemudian menyusun rekapitulasi terstruktur dalam format Markdown.",
    "Pipeline ekstraksi teks otomatis dari dokumen multi-format (PDF, PPTX, DOCX) untuk menyediakan konteks komputasi bagi ekosistem agen AI.",
    "Daemon pemantau presensi SiAdin dengan eksekusi background berbeban komputasi rendah (*near-zero CPU overhead*), mengirimkan notifikasi pengingat tepat waktu.",
    "Implementasi keamanan data sensitif menggunakan enkripsi Windows DPAPI untuk melindungi token sesi dan kredensial akses.",
    "Mekanisme fault-tolerance mandiri: menyimpan snapshot DOM HTML dan tangkapan layar saat anomali antarmuka terdeteksi guna memfasilitasi audit dan penanganan instan.",
    "Pengorganisasian otomatis 400+ aset dokumen akademik ke dalam hierarki direktori tematik terindeks.",
  ],
  tech: ["Python", "Playwright", "REST API", "Discord Bot Integration", "Windows DPAPI", "Autonomous AI Agents"],
  pipeline: [
    "Otentikasi Kredensial Kulino & SiAdin",
    "Ekstraksi Jadwal, Tugas & Aset Materi",
    "Pemrosesan Teks & Ringkasan Terstruktur",
    "Pengiriman Notifikasi Real-time ke Discord",
  ],
};

const PROJECTS = [
  {
    area: "analisis",
    title: "Sistem Informasi Jasa Mahar & E-Commerce (Mahar Indah Kudus)",
    summary:
      "Analisis dan perancangan arsitektur sistem informasi pemesanan kustom untuk UMKM di Kudus menggunakan metodologi ganda: terstruktur (Structured Analysis) dan berorientasi objek (OOAD).",
    context: "Dokumentasi Arsitektur Perancangan Sistem Informasi Terstruktur & Berorientasi Objek.",
    points: [
      "Pemodelan proses bisnis komparatif (*as-is vs to-be business process*) mencakup siklus pemesanan, pengadaan bahan baku, produksi kustom, dan distribusi logistik.",
      "Analisis akar masalah (*root cause analysis*) komprehensif menggunakan diagram Fishbone (Ishikawa).",
      "Perancangan Use Case & Activity Diagram multi-role yang mengorkestrasi 5 aktor operasional (Customer, Admin, Pemilik, Tim Produksi, dan Logistik).",
      "Konstruksi Diagram Konteks, DFD Level 0 & Level 1 terperinci, normalisasi tabel relasi database, serta desain antarmuka input/output.",
      "Perancangan antarmuka e-commerce fungsional: katalog produk dinamis, keranjang belanja, dan sistem penerbitan invoice digital.",
    ],
    tech: ["Use Case Modeling", "Activity Diagram", "DFD Level 0-1", "Fishbone Analysis", "UI/UX Design"],
    images: [
      { src: "assets/mahar-usecase.jpg", alt: "Diagram use case sistem Mahar Indah Kudus", caption: "Diagram Use Case" },
      { src: "assets/mahar-dfd0.jpg", alt: "DFD level 0 sistem Mahar Indah Kudus", caption: "DFD Level 0" },
      { src: "assets/mahar-menu.jpg", alt: "Desain halaman produk toko online mahar", caption: "Desain Antarmuka Produk" },
    ],
  },
  {
    area: "analisis",
    title: "HealthConnect: Platform Layanan Kesehatan Terpadu",
    summary:
      "Perancangan antarmuka dan alur interaksi layanan kesehatan digital berbasis metodologi Design Thinking secara komprehensif, mulai dari fase User Empathy hingga Prototype interaktif.",
    context: "Proyek Rekayasa Interaksi Manusia dan Komputer (IMK).",
    points: [
      "Penerapan siklus lengkap Design Thinking: Empathize, Define (Problem Statement), Ideate, High-Fidelity Prototype, dan Usability Testing.",
      "Penyusunan user persona, customer journey mapping, dan perancangan prototipe antarmuka sistem medis.",
      "Studi komparatif dan audit evaluasi heuristik antarmuka platform digital skala besar untuk mengoptimalkan efisiensi navigasi.",
    ],
    tech: ["Design Thinking", "High-Fidelity Prototyping", "Heuristic UI Evaluation", "User Journey Mapping"],
  },
  {
    area: "analisis",
    title: "Skenario Test Case & Pengujian Sistem White-Box",
    summary:
      "Desain komprehensif matriks pengujian fungsionalitas aplikasi e-commerce skala enterprise dan analisis pengujian struktural berbasis White-Box Testing.",
    context: "Implementasi Penjaminan Mutu & Pengujian Perangkat Lunak (QA & Software Testing).",
    points: [
      "Penyusunan matriks test case menyeluruh dengan formulasi parameter input, prasyarat, alur uji, serta verifikasi hasil aktual terhadap ekspektasi sistem.",
      "Konstruksi Flow Graph dan kalkulasi Cyclomatic Complexity untuk memetakan seluruh Independent Paths pada algoritma inti.",
      "Kombinasi metodologi Black-Box (Equivalence Partitioning & Boundary Value Analysis) dan White-Box (Basis Path Testing).",
    ],
    tech: ["Test Case Matrix", "Black-Box Testing", "White-Box Testing", "Cyclomatic Complexity", "Basis Path Testing"],
  },
  {
    area: "web",
    title: "Sistem Manajemen Perpustakaan & Sirkulasi Buku (MVC Architecture)",
    summary:
      "Aplikasi web tata kelola sirkulasi buku berbasis PHP Native murni dengan implementasi arsitektur Model-View-Controller (MVC) terstruktur dan custom routing engine.",
    context: "Proyek Rekayasa Pemrograman Web Berorientasi Objek.",
    points: [
      "Arsitektur MVC modular dengan custom request router untuk pemisahan logika bisnis dan presentasi yang bersih.",
      "Manajemen otentikasi sesi terenkripsi dengan proteksi otorisasi berbasis hak akses.",
      "Manajemen repositori data buku: operasi CRUD dinamis, pencarian terindeks, dan pemrosesan otomatis thumbnail gambar sampul.",
      "Modul sirkulasi transaksi: pencatatan log peminjaman real-time, validasi ketersediaan stok, dan pelacakan riwayat peminjam.",
    ],
    tech: ["PHP 8 Native", "MariaDB / MySQL", "Arsitektur MVC", "Custom Router", "Image Processing"],
    link: { href: "https://github.com/E6nola/perpustakaan-mvc-php", label: "Lihat Kode di GitHub" },
    images: [{ src: "assets/buku-cover.jpg", alt: "Contoh sampul buku pada aplikasi", caption: "Data Contoh Sampul" }],
  },
  {
    area: "web",
    title: "Dashboard Inventaris & Valuasi Aset ATK",
    summary:
      "Platform dashboard terpusat untuk monitoring inventaris dan valuasi persediaan aset perlengkapan kantor secara real-time.",
    context: "Aplikasi Tata Kelola Operasional & Basis Data Relasional.",
    points: [
      "Panel analitik real-time: kalkulasi metrik total SKU, akumulasi stok fisik, dan valuasi finansial persediaan.",
      "Manajemen daur hidup aset (CRUD produk) dengan pipeline unggah dan kompresi media.",
      "Implementasi keamanan basis data menggunakan PDO Prepared Statements untuk mengeliminasi kerentanan SQL Injection.",
    ],
    tech: ["PHP", "MySQL", "PDO Prepared Statements", "Dashboard Analytics", "CSS3"],
    link: { href: "https://github.com/E6nola/inventaris-atk-php", label: "Lihat Kode di GitHub" },
  },
  {
    area: "web",
    title: "Portal Data Mahasiswa Terintegrasi dengan Live Search & Ekspor Laporan",
    summary:
      "Aplikasi manajemen data entitas mahasiswa pola MVC dengan kapabilitas asynchronous real-time querying (AJAX) dan modul ekspor laporan multi-format.",
    context: "Implementasi Web Enterprise & Asynchronous Communication.",
    points: [
      "Mekanisme live search instan berbasis AJAX yang memperbarui representasi DOM secara asinkron tanpa reload halaman.",
      "Integrasi pipeline ekspor data: otomasi pembuatan spreadsheet XLSX via PhpSpreadsheet dan dokumen PDF via Dompdf.",
      "Manajemen dependensi modern terstandarisasi dengan Composer.",
    ],
    tech: ["PHP", "Asynchronous AJAX", "Arsitektur MVC", "Composer", "PhpSpreadsheet", "Dompdf"],
    link: { href: "https://github.com/E6nola/mahasiswa-crud-livesearch", label: "Lihat Kode di GitHub" },
  },
  {
    area: "web",
    title: "Sistem Autentikasi Pengguna & Manajemen Inventaris Aset",
    summary:
      "Aplikasi tata kelola data terproteksi dengan gerbang autentikasi aman, proteksi hak akses pengguna, dan modul manipulasi aset digital.",
    context: "Implementasi Sistem CRUD & Manajemen Kredensial Pengguna.",
    points: [
      "Arsitektur autentikasi registrasi dan verifikasi login pengguna berbasis hashing password aman.",
      "Operasi manipulasi data terpadu (CRUD) dengan upload dan manajemen file media terenkripsi.",
    ],
    tech: ["PHP", "MySQL", "Authentication & Session", "Git Versioning"],
    link: { href: "https://github.com/E6nola/crud-inventaris-dasar", label: "Lihat Kode di GitHub" },
  },
  {
    area: "web",
    title: "Portal Verifikasi Tarif Logistik Multi-Kurir (API Integration)",
    summary:
      "Aplikasi kalkulasi dan komparasi tarif ekspedisi logistik secara real-time melalui konsumsi RESTful API RajaOngkir.",
    context: "Integrasi Antar-Sistem & Layanan Web (REST API Consumption).",
    points: [
      "Integrasi REST API untuk komputasi tarif pengiriman lintas-kurir nasional (JNE, POS, TIKI).",
      "Parsing payload JSON asinkron dan normalisasi data komparasi biaya logistik secara efisien.",
    ],
    tech: ["PHP", "RESTful API", "JSON Parsing", "RajaOngkir Engine"],
    link: { href: "https://github.com/E6nola/cek-ongkir-rajaongkir", label: "Lihat Kode di GitHub" },
  },
  {
    area: "web",
    title: "Sistem Manajemen & Pelacakan Penugasan Akademik Mahasiswa",
    summary:
      "Aplikasi produktivitas berbasis web untuk pelacakan alur penugasan akademik, pemantauan tenggat waktu, dan klasifikasi status penyelesaian.",
    context: "Aplikasi Web Produktivitas & Manajemen Status Tugas.",
    points: [
      "Otentikasi pengguna berbasis identitas akademik (NIM) dengan manajemen sesi aman.",
      "Manajemen penugasan dinamis: prioritas tenggat waktu, pelacakan siklus progres, dan pengarsipan data.",
    ],
    tech: ["PHP", "MySQL", "Session Control", "CSS3 Grid"],
    link: { href: "https://github.com/E6nola/manajemen-tugas-kuliah", label: "Lihat Kode di GitHub" },
  },
  {
    area: "web",
    title: "Portal Distribusi Subsidi Logistik & Sembako Digital",
    summary:
      "Portal informasi publik responsif untuk transparansi distribusi bantuan sosial sembako dengan rancangan antarmuka Bootstrap 5 modular.",
    context: "Pengembangan Antarmuka Web Publik Responsif.",
    points: [
      "Desain antarmuka responsif ramah seluler (*mobile-first design*) berstandar aksesibilitas tinggi.",
      "Struktur navigasi hierarkis, panel interaksi dinamis JavaScript, dan arsitektur tata letak fluid.",
    ],
    tech: ["Semantic HTML5", "Bootstrap 5 Framework", "JavaScript ES6"],
    link: { href: "https://github.com/E6nola/portal-bansos-sembako", label: "Lihat Kode di GitHub" },
    demo: { href: "https://e6nola.github.io/portal-bansos-sembako/", label: "Buka Live Demo ↗" },
  },
  {
    area: "bisnis",
    title: "Transformasi Arsitektur Sistem Legacy Menuju Enterprise Resource Planning (ERP)",
    summary:
      "Studi kasus integrasi proses bisnis komprehensif pada PT Senja Nusantara dan industri manufaktur furnitur: unifikasi silo fungsional penjualan, manufaktur, persediaan, dan akuntansi.",
    context: "Perencanaan Strategis & Arsitektur Enterprise Resource Planning (ERP).",
    points: [
      "Analisis kesenjangan arsitektur proses bisnis *as-is* (sistem terfragmentasi) menuju ekosistem terpadu *to-be* ERP.",
      "Pemetaan keterhubungan antar-modul enterprise: Sales & Distribution (SD), Production Planning (PP), Materials Management (MM), Procurement, dan Financial Accounting/Controlling (FI/CO).",
      "Formulasi kalkulasi Material Requirements Planning (MRP) berbasis Bill of Materials (BOM) multi-level untuk menjamin kepastian pasokan produksi.",
    ],
    tech: ["Enterprise ERP Architecture", "Material Requirements Planning (MRP)", "BOM Engineering", "As-Is / To-Be Analysis"],
    images: [{ src: "assets/erp-tobe.jpg", alt: "Alur to-be ERP usaha furnitur", caption: "Arsitektur To-Be ERP" }],
  },
  {
    area: "bisnis",
    title: "Kerangka Tata Kelola & Audit Sistem Informasi Enterprise",
    summary:
      "Kajian metodologi audit teknologi informasi, kerangka perbaikan mutu berkelanjutan (PDCA), dan strategi manajemen layanan TI (ITSM) korporat.",
    context: "Audit SI, Tata Kelola TI & Manajemen Risiko Korporat.",
    points: [
      "Perumusan roadmap transformasi digital organisasi berorientasi pada penciptaan nilai jangka panjang.",
      "Penerapan siklus perbaikan mutu berkelanjutan Plan-Do-Check-Act (PDCA) yang diselaraskan dengan standar tata kelola ITSM.",
      "Perancangan program audit sistem informasi, evaluasi pengendalian internal, dan mitigasi risiko operasional TI.",
    ],
    tech: ["Audit Sistem Informasi", "Siklus Mutu PDCA", "ITSM Framework", "Digital Transformation Strategy"],
  },
  {
    area: "bisnis",
    title: "Pemodelan Data Semantik Akuntansi Berbasis REA Framework",
    summary:
      "Analisis siklus transaksi bisnis korporat dan perancangan model data relasional akuntansi berbasis kerangka kerja Resource-Event-Agent (REA).",
    context: "Sistem Informasi Akuntansi & Arsitektur Data Keuangan.",
    points: [
      "Konstruksi diagram semantik REA untuk memetakan keterkaitan entitas Sumber Daya (*Resources*), Peristiwa Transaksional (*Events*), dan Pelaku Operasional (*Agents*).",
      "Analisis siklus pendapatan (*revenue cycle*), siklus pengeluaran (*expenditure cycle*), dan siklus konversi produksi terstandarisasi.",
    ],
    tech: ["Pemodelan Semantik REA", "Siklus Transaksi Akuntansi", "Data Flow Financial Modeling"],
  },
  {
    area: "bisnis",
    title: "Rekayasa Alokasi Subnet Jaringan VLSM & Analisis Protokol OSI",
    summary:
      "Perancangan skema pengalamatan jaringan logis menggunakan Variable Length Subnet Mask (VLSM) dan analisis komprehensif 7 Lapisan OSI pada arsitektur jaringan enterprise.",
    context: "Infrastruktur Teknologi Informasi & Komunikasi Data.",
    points: [
      "Optimasi utilisasi ruang alamat IPv4 dengan VLSM untuk meminimalkan pemborosan host (*zero subnet wastage*).",
      "Analisis transmisi data, enkapsulasi paket, dan pemetaan protokol pada setiap tingkatan model referensi 7 Lapisan OSI.",
    ],
    tech: ["Subnetting VLSM", "Model Referensi OSI 7 Layer", "Perancangan Topologi Jaringan"],
  },
  {
    area: "bisnis",
    title: "Analitika Prediktif & Penambangan Data (CRISP-DM Framework)",
    status: "Sedang Berjalan",
    summary:
      "Eksplorasi dan pemodelan penambangan data korporat mengadopsi standar industri CRISP-DM, dari pra-pemrosesan data hingga implementasi model machine learning dan sistem pendukung keputusan.",
    context: "Data Mining & Decision Support Systems (DSS).",
    points: [
      "Pembersihan data (*data cleansing*), rekayasa fitur (*feature engineering*), dan pemodelan regresi prediktif.",
      "Analisis komparatif algoritma klasifikasi (Decision Tree vs. K-Nearest Neighbors) dengan validasi silang K-Fold Cross Validation.",
      "Segmentasi pelanggan menggunakan klastering K-Means dan penambangan pola asosiasi belanja (*Market Basket Analysis*) dengan algoritma Apriori & FP-Growth.",
      "Perancangan matriks keputusan dan integrasi ke dalam Sistem Pendukung Keputusan (SPK) multi-kriteria.",
    ],
    tech: ["Python Data Science", "Google Colab", "Metodologi CRISP-DM", "Machine Learning Pipeline"],
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
      el("span", { class: "tag", text: "Proyek Unggulan · " + AREA_LABEL[f.area] }),
      el("h3", { text: f.title }),
      el("p", { class: "summary", text: f.summary }),
      list(f.points, "points"),
      list(f.tech, "chips tech"),
    ]),
    el("aside", { class: "featured-side" }, [
      el("h4", { text: "Arsitektur Pipeline Eksekusi" }),
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
    area === "semua"
      ? `Menampilkan seluruh ${shown} portofolio proyek rekayasa.`
      : `Menampilkan ${shown} proyek dalam domain ${AREA_LABEL[area]}.`;
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
    "title": "IBM Business Intelligence (BI) Analyst Professional Certificate",
    "issuer": "IBM · SkillUp",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/specialization/7X2MGDIOXVT2",
    "type": "Spesialisasi",
    "category": "data"
  },
  {
    "title": "Applied Data Science Specialization",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/specialization/GOIOZRLKP4OJ",
    "type": "Spesialisasi",
    "category": "data"
  },
  {
    "title": "Google Digital Marketing & E-commerce Professional Certificate",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/specialization/07JPZ5Y6H259",
    "type": "Spesialisasi",
    "category": "marketing"
  },
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
    "title": "Advanced Data Visualization with Tableau",
    "issuer": "SkillUp",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/9LWILMUHFKO6",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Applied Data Science Capstone",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/CCWZ576ZF5ZG",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "The Business Intelligence (BI) Analyst Capstone Project",
    "issuer": "SkillUp",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/JT0RU1DMZ9QU",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Data Visualization with Python",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/B4CF4T5YVHWN",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Data Analysis with Python",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/A1MXO69JWY65",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Getting Started with Tableau",
    "issuer": "SkillUp",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/A4NJGB8VKINX",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Statistical Analysis Fundamentals using Excel",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/A3P1M1FFJP02",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Data Warehouse Fundamentals",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/CYIXYK2OO1N7",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Introduction to Relational Databases (RDBMS)",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/NJ1O0PRON1NB",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Data Visualization and Dashboards with Excel and Cognos",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/64RAKPTHA30H",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Excel Basics for Data Analysis",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/IVSL0R76JR0T",
    "type": "Kursus",
    "category": "data"
  },
  {
    "title": "Make the Sale: Build, Launch, and Manage E-commerce Stores",
    "issuer": "Google",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/DGCLN7R8QO1B",
    "type": "Kursus",
    "category": "marketing"
  },
  {
    "title": "Python Project for Data Science",
    "issuer": "IBM",
    "date": "October 2026",
    "url": "https://www.coursera.org/account/accomplishments/verify/AC12MC7224YR",
    "type": "Kursus",
    "category": "data"
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
  return el("article", { class: "spec-card reveal-init" }, [
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
      class: "cert-card reveal-init",
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

  const certGridWrapper = document.getElementById("cert-grid-wrapper");
  const certToggleMore = document.getElementById("cert-toggle-more");
  const certMoreAction = document.querySelector(".cert-more-action");
  const certMoreText = certToggleMore ? certToggleMore.querySelector(".cert-more-text") : null;

  let currentCategory = "semua";
  let currentShownCount = CERTIFICATES.length;

  function updateCollapsedHeight() {
    if (!certGridWrapper) return;
    if (certGridWrapper.classList.contains("is-collapsed")) {
      const firstCard = certListEl.querySelector(".cert-card:not([hidden])");
      if (firstCard) {
        certGridWrapper.style.maxHeight = `${firstCard.offsetHeight + 18}px`;
      }
    } else {
      certGridWrapper.style.maxHeight = "";
    }
  }

  function updateToggleButtonText(isExpanded) {
    if (!certToggleMore || !certMoreText) return;
    if (isExpanded) {
      certMoreText.textContent = "Tampilkan Lebih Sedikit";
      certToggleMore.setAttribute("aria-expanded", "true");
    } else {
      certMoreText.textContent = `Tampilkan Semua ${currentShownCount} Sertifikat`;
      certToggleMore.setAttribute("aria-expanded", "false");
    }
  }

  function setCertGridExpanded(expand) {
    if (!certGridWrapper || !certToggleMore) return;
    if (expand) {
      certGridWrapper.classList.remove("is-collapsed");
      certGridWrapper.classList.add("is-expanded");
      certGridWrapper.style.maxHeight = "";
      updateToggleButtonText(true);
    } else {
      certGridWrapper.classList.remove("is-expanded");
      certGridWrapper.classList.add("is-collapsed");
      updateCollapsedHeight();
      updateToggleButtonText(false);
    }
  }

  function applyCertFilter(cat) {
    currentCategory = cat;
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
    currentShownCount = shown;

    if (certStatusEl) {
      certStatusEl.textContent =
        cat === "semua"
          ? `Menampilkan seluruh ${shown} kredensial profesional terverifikasi.`
          : `Menampilkan ${shown} kredensial profesional kategori ${CERT_CATEGORY_LABEL[cat] || cat}.`;
    }

    // Dynamic button behavior: if shown <= 3, all cards are already visible without collapsing!
    if (shown <= 3) {
      if (certMoreAction) certMoreAction.style.display = "none";
      if (certGridWrapper) {
        certGridWrapper.classList.remove("is-collapsed");
        certGridWrapper.classList.add("is-expanded");
        certGridWrapper.style.maxHeight = "";
      }
    } else {
      if (certMoreAction) certMoreAction.style.display = "flex";
      // If returning to a category, keep expanded if already expanded, or update label
      const isCurrentlyCollapsed = certGridWrapper && certGridWrapper.classList.contains("is-collapsed");
      updateToggleButtonText(!isCurrentlyCollapsed);
      if (isCurrentlyCollapsed) {
        updateCollapsedHeight();
      }
    }
  }

  if (certToggleMore) {
    certToggleMore.addEventListener("click", () => {
      const isCurrentlyCollapsed = certGridWrapper && certGridWrapper.classList.contains("is-collapsed");
      if (isCurrentlyCollapsed) {
        setCertGridExpanded(true);
      } else {
        setCertGridExpanded(false);
        const anchor = document.querySelector(".all-certs-block");
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  }

  certFilterBtns.forEach((b) =>
    b.addEventListener("click", () => {
      applyCertFilter(b.dataset.certFilter);
    })
  );
  applyCertFilter("semua");
  updateCollapsedHeight();

  window.addEventListener(
    "resize",
    () => {
      if (certGridWrapper && certGridWrapper.classList.contains("is-collapsed")) {
        updateCollapsedHeight();
      }
    },
    { passive: true }
  );
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

// ---------- INTERACTIVE SCROLL & MODERN REVEAL (Khanh Nguyen inspired, calm & refined) ----------
// 1. Reading / Scroll Progress Bar
const progressBar = document.getElementById("scroll-progress-bar");
function updateScrollProgress() {
  if (!progressBar) return;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}
window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

// 2. Active Scroll-Spy on Navigation
const navLinks = document.querySelectorAll(".topbar nav a[href^='#']");
const sections = Array.from(navLinks).map((link) => {
  const id = link.getAttribute("href").slice(1);
  return document.getElementById(id);
}).filter(Boolean);

function updateActiveNav() {
  const scrollPos = (window.pageYOffset || document.documentElement.scrollTop) + 160;
  let activeId = "";

  for (let i = sections.length - 1; i >= 0; i--) {
    const sec = sections[i];
    if (sec && sec.offsetTop <= scrollPos) {
      activeId = sec.id;
      break;
    }
  }

  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("is-active", isCurrent);
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();

// 3. Scroll Reveal via IntersectionObserver
const revealElements = document.querySelectorAll(
  ".section-head, .featured, .project, .skill, .spec-card, .cert-card, .about-card, .edu-body, .contact"
);
revealElements.forEach((el, i) => {
  if (!el.classList.contains("reveal-init")) {
    el.classList.add("reveal-init");
  }
  // Optional stagger index among siblings
  const parent = el.parentElement;
  if (parent) {
    const siblings = Array.from(parent.children);
    const idx = siblings.indexOf(el);
    el.style.setProperty("--reveal-index", idx >= 0 ? idx % 6 : 0);
  }
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("reveal-in"));
}

// 4. Subtle Card Spotlight Glow on Mouse Movement
const interactiveCards = document.querySelectorAll(
  ".spec-card, .cert-card, .about-card, .skill, .featured, .project"
);
interactiveCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

// 5. Floating Back-to-Top Button
const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      backToTopBtn.classList.toggle("is-visible", scrollY > 450);
    },
    { passive: true }
  );

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


// ==========================================================================
// THEME VFX & AUDIO ENGINE (Inspired by Remedy's Control)
// 1. Direction: Strictly Diagonal Top-Right to Bottom-Left (kanan atas -> kiri bawah)
// 2. Normal Mode: Ultra-smooth soft feathered diagonal wave with luminous accent ribbon
// 3. Easter Egg Mode: 3D Isometric Waving Brutalist Blocks (The Oldest House modular shift)
// 4. Procedural Web Audio API:
//    - Tactile Federal Bureau console switch click for normal mode
//    - Sub-bass rumble + stone grinding friction + astral hum + hydraulic lock for easter egg
// 5. Rapid-Click Trigger: >= 4 rapid clicks within 2.2s activates Easter Egg
// ==========================================================================
(function initThemeVFX() {
  const canvas = document.getElementById("theme-vfx-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  // Web Audio API Procedural Sound Engine
  let audioCtx = null;
  function getAudioContext() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return null;
      if (!audioCtx) {
        audioCtx = new AudioContextClass();
      }
      if (audioCtx.state === "suspended") {
        audioCtx.resume().catch(() => {});
      }
      return audioCtx;
    } catch (e) {
      return null;
    }
  }

  // Sound 1: Normal Switch SFX (Crisp Tactile Bureau Switch)
  function playNormalSwitchSFX() {
    const actx = getAudioContext();
    if (!actx) return;
    try {
      const now = actx.currentTime;
      const master = actx.createGain();
      master.gain.setValueAtTime(0.24, now);
      master.connect(actx.destination);

      // High-frequency mechanical latch click
      const bufLen = Math.floor(actx.sampleRate * 0.012);
      const buf = actx.createBuffer(1, bufLen, actx.sampleRate);
      const ch = buf.getChannelData(0);
      for (let i = 0; i < bufLen; i++) {
        ch[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufLen * 0.25));
      }
      const noise = actx.createBufferSource();
      noise.buffer = buf;
      const bFilter = actx.createBiquadFilter();
      bFilter.type = "bandpass";
      bFilter.frequency.setValueAtTime(3100, now);
      bFilter.Q.setValueAtTime(4.5, now);

      const nGain = actx.createGain();
      nGain.gain.setValueAtTime(0.35, now);
      nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.012);
      noise.connect(bFilter);
      bFilter.connect(nGain);
      nGain.connect(master);
      noise.start(now);

      // Heavy console tactile resonance
      const osc = actx.createOscillator();
      const oscGain = actx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(170, now + 0.055);
      oscGain.gain.setValueAtTime(0.3, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(oscGain);
      oscGain.connect(master);
      osc.start(now);
      osc.stop(now + 0.065);
    } catch (e) {}
  }

  // Sound 2: Control Shifting Stone Easter Egg SFX
  function playControlStoneShiftSFX() {
    const actx = getAudioContext();
    if (!actx) return;
    try {
      const now = actx.currentTime;
      const dur = 1.35;
      const master = actx.createGain();
      master.gain.setValueAtTime(0.3, now);
      master.connect(actx.destination);

      // A. Sub-bass tectonic drone (The Oldest House shifting)
      const subOsc = actx.createOscillator();
      const subFilter = actx.createBiquadFilter();
      const subGain = actx.createGain();
      subOsc.type = "sawtooth";
      subFilter.type = "lowpass";
      subFilter.frequency.setValueAtTime(110, now);
      subFilter.frequency.linearRampToValueAtTime(60, now + dur);

      subOsc.frequency.setValueAtTime(64, now);
      subOsc.frequency.exponentialRampToValueAtTime(36, now + dur);

      subGain.gain.setValueAtTime(0.001, now);
      subGain.gain.linearRampToValueAtTime(0.32, now + 0.35);
      subGain.gain.setValueAtTime(0.32, now + 0.75);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

      subOsc.connect(subFilter);
      subFilter.connect(subGain);
      subGain.connect(master);
      subOsc.start(now);
      subOsc.stop(now + dur + 0.05);

      // B. Grinding stone friction / concrete sliding (Pink noise bandpass)
      const noiseSamples = Math.floor(actx.sampleRate * dur);
      const noiseBuf = actx.createBuffer(1, noiseSamples, actx.sampleRate);
      const out = noiseBuf.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < noiseSamples; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.997 * b0 + white * 0.05;
        b1 = 0.963 * b1 + white * 0.11;
        b2 = 0.860 * b2 + white * 0.25;
        out[i] = (b0 + b1 + b2) * 0.45;
      }
      const stoneNoise = actx.createBufferSource();
      stoneNoise.buffer = noiseBuf;

      const stoneFilter = actx.createBiquadFilter();
      stoneFilter.type = "bandpass";
      stoneFilter.Q.setValueAtTime(3.8, now);
      stoneFilter.frequency.setValueAtTime(480, now);
      stoneFilter.frequency.exponentialRampToValueAtTime(150, now + dur);

      const stoneGain = actx.createGain();
      stoneGain.gain.setValueAtTime(0.001, now);
      stoneGain.gain.linearRampToValueAtTime(0.38, now + 0.3);
      stoneGain.gain.setValueAtTime(0.38, now + 0.8);
      stoneGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

      stoneNoise.connect(stoneFilter);
      stoneFilter.connect(stoneGain);
      stoneGain.connect(master);
      stoneNoise.start(now);

      // C. Astral resonance chord (humming supernatural monolith)
      [523.25, 783.99].forEach((freq) => {
        const chordOsc = actx.createOscillator();
        const chordGain = actx.createGain();
        chordOsc.type = "sine";
        chordOsc.frequency.setValueAtTime(freq, now);
        chordGain.gain.setValueAtTime(0.001, now);
        chordGain.gain.linearRampToValueAtTime(0.04, now + 0.4);
        chordGain.gain.exponentialRampToValueAtTime(0.001, now + dur * 0.9);
        chordOsc.connect(chordGain);
        chordGain.connect(master);
        chordOsc.start(now);
        chordOsc.stop(now + dur);
      });

      // D. Concrete locking thud & hydraulic impact at completion
      const lockTime = now + 1.05;
      const thudOsc = actx.createOscillator();
      const thudGain = actx.createGain();
      thudOsc.type = "sine";
      thudOsc.frequency.setValueAtTime(95, lockTime);
      thudOsc.frequency.exponentialRampToValueAtTime(32, lockTime + 0.16);
      thudGain.gain.setValueAtTime(0.001, now);
      thudGain.gain.setValueAtTime(0.42, lockTime);
      thudGain.gain.exponentialRampToValueAtTime(0.001, lockTime + 0.18);
      thudOsc.connect(thudGain);
      thudGain.connect(master);
      thudOsc.start(lockTime);
      thudOsc.stop(lockTime + 0.2);

      const snapOsc = actx.createOscillator();
      const snapGain = actx.createGain();
      snapOsc.type = "triangle";
      snapOsc.frequency.setValueAtTime(1300, lockTime);
      snapOsc.frequency.exponentialRampToValueAtTime(360, lockTime + 0.045);
      snapGain.gain.setValueAtTime(0.001, now);
      snapGain.gain.setValueAtTime(0.18, lockTime);
      snapGain.gain.exponentialRampToValueAtTime(0.001, lockTime + 0.05);
      snapOsc.connect(snapGain);
      snapGain.connect(master);
      snapOsc.start(lockTime);
      snapOsc.stop(lockTime + 0.055);
    } catch (e) {}
  }

  // Viewport resize handler with devicePixelRatio support
  let width = 0;
  let height = 0;
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resize, { passive: true });
  resize();

  // Rapid click tracking state
  let clickHistory = [];
  let isAnimating = false;
  let animId = null;

  // Normal Smooth Diagonal Sweep (Strictly Top-Right to Bottom-Left)
  function runNormalSmoothTransition(nextTheme) {
    if (isAnimating && animId) cancelAnimationFrame(animId);
    isAnimating = true;
    resize();
    canvas.classList.add("is-active");
    playNormalSwitchSFX();

    const duration = 460;
    const startTime = performance.now();
    let themeFlipped = false;
    const isDark = nextTheme === "dark";
    const targetBg = isDark ? "#0E131E" : "#F4F6F9";
    const accentColor = isDark ? "rgba(84, 128, 247, 0.55)" : "rgba(33, 71, 184, 0.4)";

    const W = width;
    const H = height;
    const W2 = W * W;
    const H2 = H * H;
    const totalDist2 = W2 + H2;

    function step(now) {
      const elapsed = now - startTime;
      const p = Math.min(1, elapsed / duration);
      // Cubic easeInOut
      const u = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

      // Trigger DOM theme update at mid-point (wave covering middle)
      if (!themeFlipped && u >= 0.48) {
        themeFlipped = true;
        if (typeof updateThemeUI === "function") updateThemeUI(nextTheme);
        try { localStorage.setItem("theme", nextTheme); } catch (e) {}
      }

      ctx.clearRect(0, 0, W, H);

      // C sweeps from 0 to totalDist2 along diagonal
      const C = u * totalDist2;

      // Point 1 on Top or Left edge
      let p1x = W, p1y = 0;
      if (C <= W2) {
        p1x = W - C / W;
        p1y = 0;
      } else {
        p1x = 0;
        p1y = (C - W2) / H;
      }

      // Point 2 on Right or Bottom edge
      let p2x = W, p2y = 0;
      if (C <= H2) {
        p2x = W;
        p2y = C / H;
      } else {
        p2x = W - (C - H2) / W;
        p2y = H;
      }

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(W, 0); // Always start at Top-Right corner

      // Trace down right edge towards Point 2
      if (C <= H2) {
        ctx.lineTo(p2x, p2y);
      } else {
        ctx.lineTo(W, H); // Include Bottom-Right corner
        ctx.lineTo(p2x, p2y); // Along bottom edge to Point 2
      }

      // Cut across the diagonal line to Point 1
      ctx.lineTo(p1x, p1y);

      // Trace back along top edge to Top-Right corner
      if (C > W2) {
        ctx.lineTo(0, 0); // Include Top-Left corner
      }
      ctx.lineTo(W, 0); // Close back to Top-Right
      ctx.closePath();
      ctx.fillStyle = targetBg;
      ctx.fill();

      // Soft feathered luminous ribbon along the sweeping edge
      if (p > 0.02 && p < 0.98) {
        ctx.save();
        ctx.beginPath();
        const segDx = p2x - p1x;
        const segDy = p2y - p1y;
        // Extend line segment slightly beyond boundaries for smooth ribbon look
        ctx.moveTo(p1x - segDx * 0.08, p1y - segDy * 0.08);
        ctx.lineTo(p2x + segDx * 0.08, p2y + segDy * 0.08);
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = Math.max(18, Math.min(44, W * 0.03)) * (1 - Math.abs(p - 0.5) * 0.4);
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = 24;
        ctx.stroke();
        ctx.restore();
      }

      ctx.restore();

      if (p < 1) {
        animId = requestAnimationFrame(step);
      } else {
        // Complete
        ctx.clearRect(0, 0, W, H);
        canvas.classList.remove("is-active");
        isAnimating = false;
        animId = null;
      }
    }

    animId = requestAnimationFrame(step);
  }

  let isWavingActive = false;

  // Easter Egg Waving Block Transition (Remedy's Control Isometric Shift)
  function runWavingBlockTransition(nextTheme) {
    if (isAnimating && animId) cancelAnimationFrame(animId);
    isAnimating = true;
    isWavingActive = true;
    resize();
    canvas.classList.add("is-active");
    playControlStoneShiftSFX();

    const duration = 1350;
    const startTime = performance.now();
    let themeFlipped = false;
    const isDark = nextTheme === "dark";

    // Palette sets matching user reference images and Remedy's Control
    const darkPalette = {
      top: "#232F42",
      right: "#182232",
      left: "#0F1724",
      rim: "#5480F7",
      seam: "rgba(10, 16, 26, 0.8)",
      glow: "rgba(84, 128, 247, 0.45)"
    };
    const lightPalette = {
      top: "#FFFFFF",
      right: "#E2E8F0",
      left: "#CBD5E1",
      rim: "#2147B8",
      seam: "rgba(148, 163, 184, 0.4)",
      glow: "rgba(33, 71, 184, 0.3)"
    };

    // Before and target palettes
    const targetPal = isDark ? darkPalette : lightPalette;
    const prevPal = isDark ? lightPalette : darkPalette;

    // Grid sizing: adaptive columns and rows
    const dx = Math.max(34, Math.min(52, width / 26));
    const dy = dx * 0.58;
    const cols = Math.ceil(width / dx) + 4;
    const rows = Math.ceil(height / dy) + 8;
    const blockW = dx * 0.94;
    const blockD = dy * 0.84;
    const W = width;
    const H = height;
    const totalDist2 = W * W + H * H;

    // Pre-calculate block positions and hash variations
    const blocks = [];
    for (let r = -2; r < rows; r++) {
      for (let c = -2; c < cols; c++) {
        const xc = c * dx + ((r % 2) * (dx * 0.5));
        const yc = r * dy;
        // Normalized diagonal distance from top-right (W, 0) to bottom-left (0, H)
        const s = (W * (W - xc) + H * yc) / totalDist2;
        // Deterministic pseudo-random variation
        const hash = Math.abs(Math.sin(c * 12.9898 + r * 78.233)) % 1;
        blocks.push({ c, r, xc, yc, s, hash });
      }
    }

    function step(now) {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);

      // Wave front sweeps strictly from top-right to bottom-left
      // T travels from -0.2 to 1.35
      const waveFront = -0.2 + t * 1.55;

      // Trigger DOM theme update at peak coverage
      if (!themeFlipped && t >= 0.48) {
        themeFlipped = true;
        if (typeof updateThemeUI === "function") updateThemeUI(nextTheme);
        try { localStorage.setItem("theme", nextTheme); } catch (e) {}
      }

      ctx.clearRect(0, 0, width, height);

      // Render 3D blocks in depth order (increasing y / row order)
      for (let i = 0; i < blocks.length; i++) {
        const b = blocks[i];
        const dist = b.s - waveFront;
        const absDist = Math.abs(dist);

        // Calculate dynamic height (elevation)
        let h = 0;
        if (absDist < 0.26) {
          const env = Math.exp(-(dist * dist) / (2 * 0.08 * 0.08));
          const ripple = Math.sin(dist * 22 - t * 8) * 0.38 + Math.cos(dist * 14) * 0.25 + 0.65;
          const heightVariance = 0.82 + b.hash * 0.38;
          h = Math.max(0, 78 * env * ripple * heightVariance);
        }

        // Color interpolation based on whether wave has passed
        const hasPassed = dist < -0.04;
        const inCrest = absDist <= 0.08;
        const pal = hasPassed ? targetPal : prevPal;

        const xc = b.xc;
        const yc = b.yc;
        const bw2 = blockW * 0.5;

        // Top face vertices
        const topY = yc - h;
        const pT = { x: xc, y: topY - blockD };
        const pR = { x: xc + bw2, y: topY };
        const pB = { x: xc, y: topY + blockD };
        const pL = { x: xc - bw2, y: topY };

        // 1. Left flank (shadow side)
        ctx.beginPath();
        ctx.moveTo(pL.x, pL.y);
        ctx.lineTo(pB.x, pB.y);
        ctx.lineTo(xc, yc + blockD);
        ctx.lineTo(xc - bw2, yc);
        ctx.closePath();
        ctx.fillStyle = pal.left;
        ctx.fill();

        // 2. Right flank (mid light side)
        ctx.beginPath();
        ctx.moveTo(pB.x, pB.y);
        ctx.lineTo(pR.x, pR.y);
        ctx.lineTo(xc + bw2, yc);
        ctx.lineTo(xc, yc + blockD);
        ctx.closePath();
        ctx.fillStyle = pal.right;
        ctx.fill();

        // 3. Top face (highlight cap)
        ctx.beginPath();
        ctx.moveTo(pT.x, pT.y);
        ctx.lineTo(pR.x, pR.y);
        ctx.lineTo(pB.x, pB.y);
        ctx.lineTo(pL.x, pL.y);
        ctx.closePath();
        ctx.fillStyle = inCrest ? (isDark ? "#2E3E58" : "#FFFFFF") : pal.top;
        ctx.fill();

        // Top face bevel / architectural seam
        ctx.strokeStyle = inCrest ? pal.rim : pal.seam;
        ctx.lineWidth = inCrest ? 1.5 : 0.8;
        ctx.stroke();

        // Extra glowing rim for peak blocks (The Oldest House supernatural resonance)
        if (inCrest && h > 28) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(pT.x, pT.y);
          ctx.lineTo(pR.x, pR.y);
          ctx.lineTo(pB.x, pB.y);
          ctx.strokeStyle = pal.rim;
          ctx.lineWidth = 2;
          ctx.shadowColor = pal.glow;
          ctx.shadowBlur = 12;
          ctx.stroke();
          ctx.restore();
        }
      }

      // Smooth fade-out in final 8% of animation
      if (t > 0.92) {
        const fade = (1 - t) / 0.08;
        canvas.style.opacity = `${fade}`;
      } else {
        canvas.style.opacity = "1";
      }

      if (t < 1) {
        animId = requestAnimationFrame(step);
      } else {
        // Complete
        ctx.clearRect(0, 0, width, height);
        canvas.classList.remove("is-active");
        canvas.style.opacity = "";
        isAnimating = false;
        isWavingActive = false;
        animId = null;
      }
    }

    animId = requestAnimationFrame(step);
  }

  // Unified Toggle Coordinator & Easter Egg Detection
  window.__themeVFX = {
    toggle: function () {
      if (isWavingActive) return;

      // Respect accessibility preferences
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const cur = document.documentElement.getAttribute("data-theme") || (window.getStoredTheme ? window.getStoredTheme() : null) || "light";
        const nxt = cur === "dark" ? "light" : "dark";
        try { localStorage.setItem("theme", nxt); } catch (e) {}
        if (typeof updateThemeUI === "function") updateThemeUI(nxt);
        return;
      }

      const now = performance.now();
      // Track clicks in rolling 2200ms window
      clickHistory = clickHistory.filter((t) => now - t < 2200);
      clickHistory.push(now);

      const currentTheme = document.documentElement.getAttribute("data-theme") || (window.getStoredTheme ? window.getStoredTheme() : null) || "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      // Easter Egg Trigger: If user clicks rapidly (>= 4 clicks within 2.2s)
      if (clickHistory.length >= 4) {
        // Retain seed so continued rapid spamming can trigger again after 2-3 clicks
        clickHistory = [now - 1400];
        runWavingBlockTransition(nextTheme);
      } else {
        runNormalSmoothTransition(nextTheme);
      }
    },
    triggerEasterEgg: function () {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      runWavingBlockTransition(nextTheme);
    },
    triggerNormal: function () {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      runNormalSmoothTransition(nextTheme);
    }
  };
})();
