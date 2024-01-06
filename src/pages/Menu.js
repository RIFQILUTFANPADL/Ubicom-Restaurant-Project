// src/pages/Menu.js

import React, { useState, useEffect } from 'react';
import { getMenuData } from '../services/ApiService';
import Header from '../components/Header';

const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Panggil fungsi getMenuData saat komponen di-mount
    const fetchData = async () => {
      try {
        const data = await getMenuData();
        setMenuData(data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchData();
  }, []); // Dependensi kosong, artinya efek hanya dijalankan sekali saat komponen di-mount

  return (
    <div>
      <Header />
      <h2>Menu Ubicom Restaurant</h2>
      <ul>
        {menuData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
