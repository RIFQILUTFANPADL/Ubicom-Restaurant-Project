// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Restaurant Name</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          {/* Tambahkan item menu lainnya sesuai kebutuhan */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
