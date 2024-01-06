// src/utils/helpers.js

// Contoh fungsi utilitas
export function formatCurrency(amount) {
  // Implementasi format mata uang sesuai kebutuhan
  const formattedAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount);

  return formattedAmount;
}

// Add more utility functions as needed
