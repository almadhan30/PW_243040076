import ItemTransaksi from './ItemTransaksi';

function DaftarTransaksi({ transaksi, onHapus }) {
  if (transaksi.length === 0) {
    return (
      <p className="kosong">
        Belum ada transaksi. Silakan tambahkan pemasukan atau pengeluaran.
      </p>
    );
  }

  return (
    <ul className="daftar-transaksi">
      {transaksi.map((item) => (
        <ItemTransaksi
          key={item.id}
          transaksi={item}
          onHapus={onHapus}
        />
      ))}
    </ul>
  );
}

export default DaftarTransaksi;