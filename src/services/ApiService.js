// src/services/ApiService.js

// Fungsi untuk melakukan request ke API
const fetchMenuItems = async () => {
  try {
    const response = await fetch('https://api.restaurant.com/menu');
    if (!response.ok) {
      throw new Error('Gagal mendapatkan data menu');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Terjadi kesalahan:', error.message);
    throw error;
  }
};

export { fetchMenuItems };
