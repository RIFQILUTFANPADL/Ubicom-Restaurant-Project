// src/services/ApiService.js

// Fungsi untuk melakukan request ke API dan mendapatkan data menu
const getMenuData = async () => {
  try {
    const response = await fetch('https://example.com/api/menu');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching menu data:', error);
    throw new Error('Failed to fetch menu data');
  }
};

export { getMenuData };
