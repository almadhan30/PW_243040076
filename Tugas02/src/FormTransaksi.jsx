import { useState } from 'react';

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('Pemasukan');

  const nominalAngka = Number(nominal);
  const tidakValid =
    keterangan.trim() === '' ||
    nominal.trim() === '' ||
    !Number.isFinite(nominalAngka) ||
    nominalAngka <= 0;

  const tanganiKirim = (event) => {
    event.preventDefault();

    if (tidakValid) return;

    onTambah({
      id: Date.now(),
      keterangan: keterangan.trim(),
      nominal: nominalAngka,
      jenis
    });

    setKeterangan('');
    setNominal('');
    setJenis('Pemasukan');
  };

  return (
    <form onSubmit={tanganiKirim}>
      <label htmlFor="keterangan">Keterangan</label>
      <input
        id="keterangan"
        className="input"
        type="text"
        placeholder="Contoh: Gaji bulanan"
        value={keterangan}
        onChange={(event) => setKeterangan(event.target.value)}
      />

      <label htmlFor="nominal">Nominal (Rp)</label>
      <input
        id="nominal"
        className="input"
        type="number"
        min="1"
        placeholder="Contoh: 50000"
        value={nominal}
        onChange={(event) => setNominal(event.target.value)}
      />

      <label htmlFor="jenis">Jenis Transaksi</label>
      <select
        id="jenis"
        className="input"
        value={jenis}
        onChange={(event) => setJenis(event.target.value)}
      >
        <option value="Pemasukan">Pemasukan</option>
        <option value="Pengeluaran">Pengeluaran</option>
      </select>

      <button className="tombol" type="submit" disabled={tidakValid}>
        Tambah Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;