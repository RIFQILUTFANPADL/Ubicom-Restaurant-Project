// src/utils/helpers.js

// Fungsi untuk menghitung total harga dari keranjang belanja
const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Fungsi untuk memformat harga ke dalam format mata uang
const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
};

export { calculateTotalPrice, formatCurrency };
