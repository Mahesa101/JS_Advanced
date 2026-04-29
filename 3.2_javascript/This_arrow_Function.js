/**
 * 3.2 CONTEXT 'THIS' PADA ARROW FUNCTION
 * --------------------------------------
 * Kuncinya: Arrow function tidak memiliki konsep 'this' sendiri.
 * Ia mewarisi 'this' dari scope luarnya (Lexical This).
 */

// --- 1. DALAM CONSTRUCTOR FUNCTION ---
const Color = function () {
  this.primer = ["Merah", "Biru", "Hijau"];

  // Arrow function di sini BERHASIL karena ia mengambil 'this'
  // dari Constructor 'Color' yang merujuk ke objek baru (instance).
  this.CampurWarna = () => {
    console.log(
      `Warna sekunder: Pink -> campuran ${this.primer[0]} dan ${this.primer[1]}`,
    );
  };
};

const pink = new Color();
pink.CampurWarna();

// ---------------------------------------------------------

// --- 2. DALAM OBJECT LITERAL ---
const Brand = {
  nama: ["Crooz", "Adidas", "Indomie"],
  Harga: [1.5, 2.5, 2500],

  // ERROR/UNDEFINED: Object literal TIDAK memiliki scope.
  // Arrow function akan mencari 'this' ke luar object (Global/Window).
  // Di Global, tidak ada variabel 'nama' atau 'Harga'.
  Beli: () => {
    console.log(`Nama Brand : ${this.nama[1]} Harga : ${this.Harga[1]} Juta`);
  },
};

// Brand.Beli(); // Ini akan menghasilkan error karena 'this' menunjuk ke Window

// ---------------------------------------------------------

// --- 3. KASUS NYATA: DOM & ASYNCHRONOUS (setTimeout) ---
const box = document.querySelector(".box");

box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  // Di sini kita pakai function REGULER supaya 'this' merujuk ke elemen '.box'
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);

  // MAGIC CLOSURE + ARROW FUNCTION:
  // Jika pakai function reguler di dalam setTimeout, 'this' akan kembali ke Global (Window).
  // Dengan Arrow Function, dia meminjam 'this' dari event listener (yaitu si '.box').
  setTimeout(() => {
    this.classList.toggle(dua);
    console.log("Animasi Selesai!");
  }, 600);
});
