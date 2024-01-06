/* src/pages/Menu.js */

import React, { useState } from 'react';
import ApiService from '../services/ApiService';

function Menu() {
  const [pesanan, setPesanan] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);

  const tambahPesanan = (item) => {
    const pesananBaru = [...pesanan, item];
    setPesanan(pesananBaru);

    // Hitung total harga pesanan
    const total = pesananBaru.reduce((acc, curr) => acc + curr.harga, 0);
    setTotalHarga(total);
  };

  const hapusPesanan = (index) => {
    const pesananBaru = [...pesanan];
    pesananBaru.splice(index, 1);
    setPesanan(pesananBaru);

    // Hitung ulang total harga pesanan
    const total = pesananBaru.reduce((acc, curr) => acc + curr.harga, 0);
    setTotalHarga(total);
  };

  const buatPesanan = () => {
    // Kirim pesanan ke API atau lakukan proses selanjutnya
    ApiService.prosesPesanan(pesanan);

    // Reset state pesanan
    setPesanan([]);
    setTotalHarga(0);
  };

  return (
    <div>
      <h1>Daftar Menu</h1>
      <ul>
        {ApiService.daftarMenu.map((item) => (
          <li key={item.id}>
            {item.nama} - Rp. {item.harga}
            <button onClick={() => tambahPesanan(item)}>Tambahkan</button>
          </li>
        ))}
      </ul>
      
      <h2>Pesanan Anda</h2>
      <ul>
        {pesanan.map((item, index) => (
          <li key={index}>
            {item.nama} - Rp. {item.harga}
            <button onClick={() => hapusPesanan(index)}>Hapus</button>
          </li>
        ))}
      </ul>
      
      <p>Total Harga: Rp. {totalHarga}</p>
      <button onClick={buatPesanan}>Buat Pesanan</button>
    </div>
  );
}

export default Menu;
