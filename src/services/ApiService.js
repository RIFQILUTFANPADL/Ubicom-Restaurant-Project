// src/services/ApiService.js

class ApiService {
  // Contoh implementasi layanan API
  static async fetchMenuItems() {
    try {
      // Implementasi pemanggilan API untuk mendapatkan daftar menu
      const response = await fetch('https://api.example.com/menu');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  }

  // Add more API service methods as needed
}

export default ApiService;
