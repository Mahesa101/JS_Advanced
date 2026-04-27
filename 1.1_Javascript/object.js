// ==========================================
// 1. OBJECT LITERAL
// ==========================================
// Cocok untuk objek yang cuma dibuat SATU KALI (singleton). 
// Tidak efisien kalau harus buat banyak user karena harus copy-paste kodenya.
let user = {
  name: "agus",
  stamina: 10,
  attack: 5,
  action: function (ac) {
    // 'this' merujuk ke objek 'user' itu sendiri
    this.stamina = this.stamina - this.attack * ac;
    console.log(
      `Serangan dilakukan sebanyak ${ac} kali, total damage ${10 * ac}. Sisa Stamina: ${this.stamina}`,
    );
  },
};

// ==========================================
// 2. FUNCTION DECLARATION (Factory Function)
// ==========================================
// Seperti pabrik: Kita masukkan bahan (parameter), lalu pabrik bungkus jadi objek dan "dikirim" balik (return).
function Users(name, energy, serang) {
  let user = {}; // Langkah 1: Bikin wadah kosong manual
  
  // Langkah 2: Isi wadah dengan properti dari parameter
  user.nama = name;
  user.stamina = energy;
  user.attack = serang;

  // Langkah 3: Tambah method (fungsi di dalam objek)
  user.action = function (ac) {
    this.stamina -= this.attack * ac;
    console.log(`[Action] ${this.nama} menyerang! Sisa Stamina: ${this.stamina}`);
  };

  user.sleep = function (time) {
    this.stamina += time * 5;
    console.log(`[Sleep] ${this.nama} istirahat. Stamina naik jadi: ${this.stamina}`);
  };

  return user; // Langkah 4: WAJIB dikembalikan manual agar bisa dipakai
}

// Cara pakainya: Panggil fungsinya saja
let bayu = Users("bayu", 20, 5);
let mamat = Users("mamat", 30, 3);

// ==========================================
// 3. CONSTRUCTOR FUNCTION
// ==========================================

// Lebih ringkas karena JS melakukan "otomatisasi" di balik layar.
function UserC(name, energy, serang) {
  //JS membuat 'let this = {}' di sini

  this.nama = name;    // Kita pakai 'this' untuk menempelkan data ke objek baru
  this.stamina = energy;
  this.attack = serang;

  this.action = function (ac) {
    this.stamina -= this.attack * ac;
    console.log(`[Action] ${this.nama} menyerang! Stamina: ${this.stamina}`);
  };

  this.sleep = function (time) {
    this.stamina += time * 5;
    console.log(`[Sleep] ${this.nama} tidur. Stamina: ${this.stamina}`);
  };

  //JS melakukan 'return this' di akhir fungsi
}

// Cara pakainya: WAJIB pakai keyword 'new'
// Kalau lupa 'new', 'this' akan error atau merujuk ke Global Object (window)
let sin = new UserC("Sin", 20, 5);
let sun = new UserC("sun", 30, 3);