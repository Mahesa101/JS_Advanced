//2.2 closure

/**
 * 1. DASAR CLOSURE
 * Fungsi inner bisa mengakses variabel di fungsi parent-nya (Lexical Scope).
 */
function player() {
  let name = "arthur"; // Variabel lokal

  function tampilNama() {
    // Fungsi ini adalah CLOSURE karena ia "membungkus" variabel 'name'
    console.log(name);
  }

  tampilNama();
}
player();

// ---------------------------------------------------------

/**
 * 2. FUNCTION FACTORIES
 * Fungsi yang membuat fungsi lain.
 * 'agus' menjadi fungsi baru yang ingat bahwa ia berasal dari 'players()'.
 */
function players() {
  return function (nama) {
    console.log(nama);
  };
}

let agus = players();
agus("agus");

// ---------------------------------------------------------

/**
 * 3. CLOSURE UNTUK MEMBUAT DATA PRIVATE (Factory Configuration)
 * 'waktu' akan selalu diingat oleh fungsi hasil return-nya.
 * Ini membuat fungsi yang sangat spesifik (selamatPagi, selamatSiang).
 */
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan.`);
  };
}

let selamatPagi = ucapkanSalam("pagi");
let selamatSiang = ucapkanSalam("siang");
let selamatMalam = ucapkanSalam("malam");

selamatPagi("aura");
selamatSiang("dia");

// console.dir digunakan untuk melihat isi Closure di dalam browser/console
console.dir(selamatMalam);

// ---------------------------------------------------------

/**
 * 4. PRIVATE VARIABLE (Emulasi Data Privat)
 * Variabel 'counter' tidak bisa diakses dari luar.
 * Hanya fungsi 'add' yang bisa mengubah 'counter'.
 * IIFE (Immediately Invoked Function Expression) membuat fungsi langsung jalan.
 */
let add = (function () {
  let counter = 0; // Data ini "terkunci" di dalam Closure

  return function () {
    return counter++;
  };
})();

console.log(add()); // 0
console.log(add()); // 1
console.log(add()); // 2
