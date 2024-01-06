/* src/services/ApiService.js */

const ApiService = {
  // Dummy daftar menu
  daftarMenu: [
    { id: 1, nama: 'Nasi Goreng', harga: 15000 },
    { id: 2, nama: 'Mie Ayam', harga: 12000 },
    { id: 3, nama: 'Ayam Goreng', harga: 18000 },
    // Tambahkan menu lainnya sesuai progres proyek
  ],

  // Proses pesanan, bisa diubah sesuai kebutuhan
  prosesPesanan: (pesanan) => {
    // Proses pesanan, bisa disimpan ke database atau dilakukan tindakan lainnya
    console.log('Pesanan berhasil diproses:', pesanan);
  },
};

export default ApiService;
