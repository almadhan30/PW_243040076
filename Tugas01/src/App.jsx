// src/App.jsx
import ProjectCard from "./ProjectCard";
import "./App.css";

const buatMockup = (teks, warna) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">
      <defs>
        <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${warna}"/>
          <stop offset="1" stop-color="#172b28"/>
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#background)"/>
      <circle cx="560" cy="50" r="118" fill="#ffffff" opacity=".045"/>
      <circle cx="72" cy="330" r="142" fill="#ffffff" opacity=".035"/>
      <rect x="46" y="35" width="548" height="290" rx="14" fill="#f8faf8"/>
      <path d="M46 49a14 14 0 0 1 14-14h520a14 14 0 0 1 14 14v27H46z" fill="#fff"/>
      <circle cx="68" cy="55" r="4" fill="#e69a86"/>
      <circle cx="82" cy="55" r="4" fill="#e5c779"/>
      <circle cx="96" cy="55" r="4" fill="#8bc3a4"/>
      <rect x="120" y="51" width="120" height="8" rx="4" fill="#e7ebe7"/>
      <rect x="64" y="96" width="116" height="208" rx="8" fill="#edf1ed"/>
      <rect x="80" y="115" width="72" height="9" rx="4" fill="${warna}" opacity=".72"/>
      <rect x="80" y="141" width="56" height="7" rx="3" fill="#cbd3cc"/>
      <rect x="80" y="161" width="72" height="7" rx="3" fill="#cbd3cc"/>
      <rect x="80" y="181" width="48" height="7" rx="3" fill="#cbd3cc"/>
      <rect x="198" y="96" width="376" height="59" rx="8" fill="#fff"/>
      <rect x="216" y="112" width="102" height="8" rx="4" fill="#dce3dd"/>
      <rect x="216" y="129" width="158" height="13" rx="6" fill="${warna}" opacity=".8"/>
      <rect x="198" y="169" width="222" height="135" rx="8" fill="#fff"/>
      <path d="M220 271h176M220 239h176M220 207h176" stroke="#edf0ed" stroke-width="2"/>
      <path d="m222 260 40-28 33 12 38-42 26 15 34-32" fill="none" stroke="${warna}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="436" y="169" width="138" height="62" rx="8" fill="#fff"/>
      <rect x="452" y="185" width="55" height="7" rx="3" fill="#dce3dd"/>
      <rect x="452" y="201" width="91" height="12" rx="6" fill="${warna}" opacity=".65"/>
      <rect x="436" y="241" width="138" height="63" rx="8" fill="#fff"/>
      <rect x="452" y="257" width="72" height="7" rx="3" fill="#dce3dd"/>
      <rect x="452" y="273" width="103" height="12" rx="6" fill="${warna}" opacity=".4"/>
      <title>${teks}</title>
    </svg>`,
  );

function App() {
  // Data portofolio (minimal 4 proyek)
  const daftarProyek = [
    {
      id: 1,
      judul: "Sistem Informasi Akademik",
      deskripsi:
        "Aplikasi web untuk mengelola data mahasiswa, jadwal kuliah, dan nilai semester dengan dasbor yang ringkas.",
      teknologi: ["React", "Vite", "CSS"],
      githubUrl: "https://github.com/almadhan30",
      imageUrl: buatMockup("Sistem Informasi Akademik", "#1B365D"),
    },
    {
      id: 2,
      judul: "Toko Buku Online",
      deskripsi:
        "Katalog buku dengan pencarian, filter kategori, dan keranjang belanja yang tersimpan di sisi klien.",
      teknologi: ["React", "JavaScript", "REST API"],
      githubUrl: "https://github.com/almadhan30",
      imageUrl: buatMockup("Toko Buku Online", "#2C5282"),
    },
    {
      id: 3,
      judul: "Aplikasi Catatan Harian",
      deskripsi:
        "Pencatat tugas harian dengan penanda prioritas dan pengelompokan berdasarkan tanggal.",
      teknologi: ["React", "Vite", "LocalStorage"],
      githubUrl: "https://github.com/almadhan30",
      imageUrl: buatMockup("Aplikasi Catatan Harian", "#34495E"),
    },
    {
      id: 4,
      judul: "Dasbor Cuaca Kota",
      deskripsi:
        "Menampilkan prakiraan cuaca beberapa kota dari API publik dalam bentuk kartu yang responsif.",
      teknologi: ["React", "Fetch API", "CSS"],
      githubUrl: "https://github.com/almadhan30",
      imageUrl: buatMockup("Dasbor Cuaca Kota", "#24527A"),
    },
  ];

  return (
    <div className="portfolio">
      <main id="beranda">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">Modul 1 · React &amp; Vite</p>
            <h1 className="hero__title" id="hero-title">
              Showcase Portofolio
              <br />
              <span>Mini.</span>
            </h1>
            <p className="hero__description">
              Empat proyek web yang menampilkan judul, ringkasan, teknologi yang
              digunakan, serta tautan ke profil GitHub.
            </p>
          </div>
          <div
            className="hero__stat"
            aria-label={`${daftarProyek.length} proyek`}
          >
            <span className="hero__stat-number">
              {String(daftarProyek.length).padStart(2, "0")}
            </span>
            <span className="hero__stat-label">Proyek pilihan</span>
          </div>
        </section>

        <section className="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <h2 className="section-heading__title" id="projects-title">
                Daftar Proyek
              </h2>
              <p className="section-heading__caption">
                Ringkasan, tag teknologi, dan tautan GitHub.
              </p>
            </div>
            <span className="section-heading__count">
              01 — {String(daftarProyek.length).padStart(2, "0")}
            </span>
          </div>

          <div className="project-grid">
            {daftarProyek.map((proyek) => (
              <ProjectCard
                key={proyek.id}
                judul={proyek.judul}
                deskripsi={proyek.deskripsi}
                teknologi={proyek.teknologi}
                githubUrl={proyek.githubUrl}
                imageUrl={proyek.imageUrl}
                nomor={proyek.id}
              />
            ))}
          </div>
          <p className="projects__note">
            Untuk sementara, tombol GitHub mengarah ke profil{" "}
            <a href="https://github.com/almadhan30">almadhan30</a>. Repositori
            proyek dapat ditautkan setelah tersedia.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Showcase Portofolio Mini</span>
      </footer>
    </div>
  );
}

export default App;
