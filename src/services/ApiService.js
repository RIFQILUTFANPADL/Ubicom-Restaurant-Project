/* src/services/ApiService.js */
const ApiService = {
  daftarMenu: [
    { id: 1, nama: 'Nasi Goreng', harga: 15000 },
    { id: 2, nama: 'Mie Ayam', harga: 12000 },
    { id: 3, nama: 'Ayam Goreng', harga: 18000 },
    // Tambahkan menu lainnya sesuai progres proyek
  ],

  prosesPesanan: (pesanan) => {
    console.log('Pesanan berhasil diproses:', pesanan);
  },
};

export default ApiService;
