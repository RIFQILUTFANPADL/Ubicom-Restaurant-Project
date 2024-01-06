/* src/pages/Menu.js */

import React from 'react';
import Header from '../components/Header';
import ApiService from '../services/ApiService';

const Menu = () => {
  return (
    <div>
      <Header />
      <h1>Daftar Menu</h1>
      <ul>
        {ApiService.daftarMenu.map((menu) => (
          <li key={menu.id}>
            {menu.nama} - Rp{menu.harga}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
