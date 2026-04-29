/**
 * 4.1 HIGHER ORDER FUNCTION (HOF)
 * --------------------------------
 * Konsep: Sebuah fungsi yang menerima fungsi lain sebagai argumen (Callback),
 * ATAU sebuah fungsi yang me-return fungsi lain.
 */

// 1. Mission adalah "Higher Order Function" karena dia menerima parameter berupa fungsi.
// Kita beri nama parameter kedua 'callbackLevel' agar lebih jelas.
function Mission(quest, callbackLevel) {
  console.log(`Misi diterima: Menjalankan Tugas ${quest}`);

  // Di sini keajaibannya: Kita mengeksekusi fungsi yang dikirim dari luar!
  // Abstraksi terjadi di sini: Mission tidak perlu tahu BAGAIMANA cara naik level,
  // dia cuma tahu KAPAN harus memanggil fungsi naik level tersebut.
  callbackLevel();
}

// 2. levels adalah "Callback Function".
// Ini adalah fungsi biasa yang akan "dititipkan" ke fungsi lain.
function levels() {
  console.log(`Quest Selesai! Character kamu Level Up!`);
}

// 3. Eksekusi
// Perhatikan: Kita mengirim 'levels' (tanpa tanda kurung ()).
// Kalau kita tulis 'levels()', fungsinya akan langsung jalan saat itu juga.
// Kita hanya ingin MENGIRIM "buku panduan" fungsinya untuk dijalankan nanti di dalam Mission.
Mission("Berburu Singa", levels);
