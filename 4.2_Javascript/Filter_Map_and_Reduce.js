/**
 * 4.2 FILTER, MAP, & REDUCE
 * -------------------------
 * Ketiga method ini TIDAK mengubah array asli (Immutable),
 * tapi menghasilkan array atau nilai baru.
 */

const angka = [-2, -3, -4, 5, 3, 7, 3, 5, 1, 4];

// 1. FILTER: Menyaring data
// Logika: "Ambil data yang memenuhi syarat saja"
const newsAngka = angka.filter((x) => x >= 0);
// x di sini adalah parameter (mewakili tiap elemen di array)
console.log(`Hasil Filter (>=0): ${newsAngka}`);

// 2. MAP: Memetakan/Mengubah data
// Logika: "Ubah semua data di dalam array menjadi bentuk baru"
const kaliAngka = newsAngka.map((x) => x * 2);
console.log(`Hasil Map (x2): ${kaliAngka}`);

// 3. REDUCE: Mengurangi/Menyatukan data
// Logika: "Gabungkan semua elemen jadi SATU nilai tunggal"
const total = kaliAngka.reduce((accumulator, currentValue) => {
  // accumulator = hasil akumulasi sementara
  // currentValue = angka yang sedang diproses saat ini
  return accumulator + currentValue;
}, 0); // 0 di sini adalah nilai awal (initial value)
console.log(`Total Akhir: ${total}`);

// 4. METHOD CHAINING (Abstraksi Tingkat Tinggi)
// Kita menggabungkan semua proses dalam satu aliran pipa (pipeline)
const hasil = angka
  .filter((x) => x > 3) // Langkah 1: Saring yang > 3
  .map((x) => x * 3) // Langkah 2: Hasil saringan dikali 3
  .reduce((acc, curr) => acc + curr); // Langkah 3: Jumlahkan semuanya

console.log(`Hasil Chaining: ${hasil}`);
