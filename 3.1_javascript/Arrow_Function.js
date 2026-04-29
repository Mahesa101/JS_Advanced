/**
 * 3.1 ARROW FUNCTION
 * -------------------
 * Kelebihan: Sintaks lebih pendek, tidak butuh keyword 'function'.
 */

// --- 1. Basic Arrow Function ---
// Dibaca: Variabel Skill diisi sebuah fungsi yang menerima parameter 'namaMagic'
const Skill = (namaMagic) => {
  return `[Action] ${namaMagic}`;
};
console.log(Skill("Api"));

// --- 2. Multiple Parameters ---
// Wajib menggunakan kurung ( ) jika parameter lebih dari satu
const Skills = (namaMagics, Damage) => {
  return `[Action] ${namaMagics} Dengan Kerusakan ${Damage}`;
};
console.log(Skills("ES", 50));

// --- 3. Implicit Return (Satu Baris) ---
// Jika isinya cuma satu baris, kita bisa hapus kurung kurawal { } dan keyword 'return'
const Skil = (nMagic) => `[Action] ${nMagic}`;
console.log(Skil("Angin"));

// --- 4. No Parameter ---
// Wajib menggunakan kurung kosong () sebagai tanda itu adalah fungsi
const skl = () => `[Action] Merapal`;
console.log(skl());

// ---------------------------------------------------------

/**
 * IMPLEMENTASI PADA ARRAY (Higher Order Function)
 * ---------------------------------------------------------
 */
let players = ["arthur", "funny", "aura"];

// Kasus: Mendapatkan jumlah huruf dari tiap nama dalam array

// A. Versi Return Array (Simple)
// .map() akan menjalankan fungsi untuk setiap elemen di array
let jumlahHurufArray = players.map((nama) => nama.length);
// Hasil: [6, 5, 4]

// B. Versi Return Object (Implicit)
// PENTING: Jika ingin mengembalikan Object secara implisit,
// wajib dibungkus dengan kurung biasa ({ ... }) agar tidak dianggap sebagai body fungsi.
let dataPlayers = players.map((nama) => ({
  Name: nama,
  jumlahHuruf: nama.length,
}));

console.table(dataPlayers); // Pakai console.table agar tampilan object lebih rapi di console
