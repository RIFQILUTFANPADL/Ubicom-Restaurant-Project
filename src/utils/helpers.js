// src/utils/helpers.js

// Fungsi untuk menghitung total harga pesanan
const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Fungsi untuk memformat harga menjadi format mata uang
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount);
};

export { calculateTotalPrice, formatCurrency };
