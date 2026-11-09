import { useEffect, useState } from "react";
import Kartu from "./Kartu";
import FormTransaksi from "./FormTransaksi";
import DaftarTransaksi from "./DaftarTransaksi";

function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(angka);
}

function App() {
  // Ambil data tersimpan saat aplikasi pertama kali dibuka.
  const [transaksi, setTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem("catatan-keuangan");
    return dataTersimpan ? JSON.parse(dataTersimpan) : [];
  });

  // Hitung saldo dari state, tidak perlu membuat state saldo baru.
  const totalSaldo = transaksi.reduce((total, item) => {
    return item.jenis === "Pemasukan"
      ? total + Number(item.nominal)
      : total - Number(item.nominal);
  }, 0);

  const totalPemasukan = transaksi
    .filter((item) => item.jenis === "Pemasukan")
    .reduce((total, item) => total + Number(item.nominal), 0);

  const totalPengeluaran = transaksi
    .filter((item) => item.jenis === "Pengeluaran")
    .reduce((total, item) => total + Number(item.nominal), 0);

  const tambahTransaksi = (transaksiBaru) => {
    setTransaksi((dataLama) => [...dataLama, transaksiBaru]);
  };

  const hapusTransaksi = (id) => {
    setTransaksi((dataLama) => dataLama.filter((item) => item.id !== id));
  };

  // Simpan data setiap kali daftar transaksi berubah.
  useEffect(() => {
    localStorage.setItem("catatan-keuangan", JSON.stringify(transaksi));
  }, [transaksi]);

  // Perbarui judul tab berdasarkan nama aplikasi.
  useEffect(() => {
    document.title = "Catatan Keuangan Mini";
  }, []);

  return (
    <main className="wadah">
      <header className="header">
        <div className="brand-mark" aria-hidden="true">
          ↗
        </div>
        <div>
          <p className="label-atas">RUANG KEUANGANMU</p>
          <h1>Catatan Keuangan</h1>
        </div>
      </header>

      <section className="kartu kartu-saldo" aria-label="Ringkasan keuangan">
        <div className="saldo-utama">
          <div className="saldo-heading">
            <span className="ikon-saldo" aria-hidden="true">
              ◈
            </span>
            <span>Total saldo</span>
          </div>
          <p className={`saldo ${totalSaldo < 0 ? "saldo-negatif" : ""}`}>
            {formatRupiah(totalSaldo)}
          </p>
          <p className="saldo-caption">Ringkasan seluruh transaksi kamu</p>
        </div>
        <div className="ringkasan">
          <div className="ringkasan-item">
            <span className="ringkasan-ikon ikon-masuk" aria-hidden="true">
              ↓
            </span>
            <div>
              <span className="ringkasan-label">Pemasukan</span>
              <strong>{formatRupiah(totalPemasukan)}</strong>
            </div>
          </div>
          <div className="ringkasan-item">
            <span className="ringkasan-ikon ikon-keluar" aria-hidden="true">
              ↑
            </span>
            <div>
              <span className="ringkasan-label">Pengeluaran</span>
              <strong>{formatRupiah(totalPengeluaran)}</strong>
            </div>
          </div>
        </div>
        <span className="dekor-saldo dekor-satu" aria-hidden="true" />
        <span className="dekor-saldo dekor-dua" aria-hidden="true" />
      </section>

      <div className="grid-dashboard">
        <Kartu judul="Tambah transaksi">
          <p className="deskripsi-kartu">Catat uang yang masuk atau keluar.</p>
          <FormTransaksi onTambah={tambahTransaksi} />
        </Kartu>

        <Kartu judul="Riwayat transaksi">
          <p className="deskripsi-kartu">
            Semua catatan keuanganmu, di satu tempat.
          </p>
          <DaftarTransaksi transaksi={transaksi} onHapus={hapusTransaksi} />
        </Kartu>
      </div>
    </main>
  );
}

export default App;
