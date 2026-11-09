# Catatan Keuangan Mini — Tugas 02

## Menjalankan

Buka terminal di folder `Tugas02`, lalu jalankan:

```powershell
npm install
npm run dev
```

Buka alamat lokal yang muncul di terminal (biasanya `http://localhost:5173`).

## Fitur
- Form terkendali untuk keterangan, nominal, dan jenis transaksi.
- Validasi agar keterangan dan nominal tidak kosong serta nominal harus lebih dari 0.
- Daftar transaksi dengan tombol hapus.
- Saldo dihitung otomatis dari state menggunakan `reduce()` dan `Number()`.
- Pemasukan berwarna hijau dan pengeluaran berwarna merah.
- Pesan khusus ketika belum ada transaksi.
- Data disimpan dan dibaca dari `localStorage` menggunakan `useEffect` dan lazy initializer `useState`.

## Pembagian komponen
- `App.jsx`: state utama, perhitungan saldo, tambah/hapus transaksi, dan useEffect.
- `FormTransaksi.jsx`: formulir terkendali.
- `DaftarTransaksi.jsx`: menampilkan daftar atau pesan kosong.
- `ItemTransaksi.jsx`: menampilkan satu transaksi dan tombol hapus.
- `Kartu.jsx`: komponen pembungkus dengan props `children`.

## Pengujian yang disarankan
1. Tambahkan pemasukan Rp100.000.
2. Tambahkan pengeluaran Rp25.000. Saldo harus menjadi Rp75.000.
3. Periksa warna: pemasukan hijau, pengeluaran merah.
4. Hapus salah satu transaksi dan pastikan saldo berubah.
5. Refresh halaman dan pastikan transaksi masih tersimpan.
6. Hapus seluruh transaksi dan pastikan pesan belum ada transaksi muncul.

Data tersimpan pada browser di localStorage dengan key `catatan-keuangan`.
