function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(angka);
}

function ItemTransaksi({ transaksi, onHapus }) {
  const pemasukan = transaksi.jenis === 'Pemasukan';

  return (
    <li className="item-transaksi">
      <div className="detail-transaksi">
        <strong>{transaksi.keterangan}</strong>
        <small>{transaksi.jenis}</small>
      </div>

      <span className={pemasukan ? 'nominal masuk' : 'nominal keluar'}>
        {pemasukan ? '+' : '-'} {formatRupiah(transaksi.nominal)}
      </span>

      <button
        className="tombol tombol-hapus"
        type="button"
        onClick={() => onHapus(transaksi.id)}
        aria-label={`Hapus transaksi ${transaksi.keterangan}`}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;