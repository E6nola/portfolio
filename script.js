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

// ---------- project expand/collapse controller ----------
const projectMoreAction = document.querySelector(".project-more-action");
const projectToggleMore = document.getElementById("project-toggle-more");
const projectMoreText = projectToggleMore ? projectToggleMore.querySelector(".project-more-text") : null;
let isProjectExpanded = false;
let currentProjectArea = "semua";
const COMPACT_PROJECT_LIMIT = 3; // Menampilkan 3 proyek reguler (+ featured jika ada) pada mode ringkas

function updateProjectToggleUI(totalMatching) {
  if (!projectMoreAction || !projectToggleMore || !projectMoreText) return;

  // Jika hasil filter <= 4 (misal saat menyaring per domain spesifik), semua muat tanpa perlu tombol extend
  if (totalMatching <= 4) {
    projectMoreAction.style.display = "none";
    return;
  }

  projectMoreAction.style.display = "flex";
  if (isProjectExpanded) {
    projectMoreText.textContent = "Tampilkan Lebih Sedikit (Ringkas)";
    projectToggleMore.setAttribute("aria-expanded", "true");
  } else {
    projectMoreText.textContent = `Tampilkan Seluruh ${totalMatching} Proyek`;
    projectToggleMore.setAttribute("aria-expanded", "false");
  }
}

function applyFilter(area) {
  currentProjectArea = area;
  filterBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === area)));

  const allItems = Array.from(listEl.querySelectorAll("[data-area]"));
  const matchingItems = allItems.filter(
    (item) => area === "semua" || item.dataset.area === area
  );

  let regularCount = 0;
  let actuallyShown = 0;

  allItems.forEach((item) => {
    const matches = area === "semua" || item.dataset.area === area;
    if (!matches) {
      item.hidden = true;
      item.style.display = "none";
      item.classList.remove("is-revealed");
      return;
    }

    const isFeatured = item.classList.contains("featured");
    let shouldShow = false;

    if (isFeatured) {
      shouldShow = true;
    } else {
      regularCount++;
      if (isProjectExpanded || matchingItems.length <= 4 || regularCount <= COMPACT_PROJECT_LIMIT) {
        shouldShow = true;
      } else {
        shouldShow = false;
      }
    }

    item.hidden = !shouldShow;
    item.style.display = shouldShow ? "" : "none";
    if (shouldShow) actuallyShown++;
  });

  updateProjectToggleUI(matchingItems.length);

  if (statusEl) {
    if (area === "semua") {
      statusEl.textContent = isProjectExpanded
        ? `Menampilkan seluruh ${matchingItems.length} portofolio proyek rekayasa.`
        : `Menampilkan ${actuallyShown} dari ${matchingItems.length} portofolio proyek rekayasa (tampilan ringkas).`;
    } else {
      statusEl.textContent = isProjectExpanded || matchingItems.length <= 4
        ? `Menampilkan seluruh ${matchingItems.length} proyek dalam domain ${AREA_LABEL[area]}.`
        : `Menampilkan ${actuallyShown} dari ${matchingItems.length} proyek dalam domain ${AREA_LABEL[area]} (tampilan ringkas).`;
    }
  }
}

if (projectToggleMore) {
  projectToggleMore.addEventListener("click", () => {
    isProjectExpanded = !isProjectExpanded;
    applyFilter(currentProjectArea);

    if (isProjectExpanded) {
      const visibleProjects = listEl.querySelectorAll(".project:not([hidden])");
      visibleProjects.forEach((p, idx) => {
        if (idx >= COMPACT_PROJECT_LIMIT) {
          p.classList.remove("is-revealed");
          void p.offsetWidth; // force reflow
          p.classList.add("is-revealed");
        }
      });
    } else {
      const proyekSection = document.getElementById("proyek");
      if (proyekSection) {
        proyekSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
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
