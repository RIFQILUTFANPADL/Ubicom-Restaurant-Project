/* src/pages/Home.js */

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

function Home() {
  const [daftarMenu, setDaftarMenu] = useState([]);

  useEffect(() => {
    // Ambil daftar menu saat komponen dipasang
    const ambilDaftarMenu = async () => {
      try {
        const data = await ApiService.getDaftarMenu();
        setDaftarMenu(data);
      } catch (error) {
        console.error('Error saat mengambil daftar menu:', error);
      }
    };

    ambilDaftarMenu();
  }, []);

  return (
    <div>
      <h1>Selamat Datang di Restoran Kami!</h1>
      <p>Jelajahi menu lezat kami:</p>
      <ul>
        {daftarMenu.map((item) => (
          <li key={item.id}>{item.nama} - Rp. {item.harga}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
