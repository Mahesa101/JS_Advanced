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
// 2. FUNCTION DECLARATION (Optimized with Method Reference)
// ==========================================
// PERUBAHAN: Memisahkan method ke object tersendiri agar hemat memori.
const methodUser = {
  actions: function (ac) {
    this.stamina -= this.attack * ac;
    console.log(`[Action] ${this.nama} menyerang! Sisa Stamina: ${this.stamina}`);
  },
  sleeps: function (time) {
    this.stamina += time * 5;
    console.log(`[Sleep] ${this.nama} istirahat. Stamina: ${this.stamina}`);
  },
};

function Users(name, energy, serang) {
  let user = {};
  user.nama = name;
  user.stamina = energy;
  user.attack = serang;

  // PERUBAHAN: Menghubungkan property ke object methodUser (Reference).
  // Di sini kita TIDAK membuat fungsi baru, tapi cuma "menunjuk" ke alamat memori yang sama.
  user.action = methodUser.actions;
  user.sleep = methodUser.sleeps;

  return user;
}

let bayu = Users("bayu", 20, 5);
let mamat = Users("mamat", 30, 3);

// ==========================================
// 3. CONSTRUCTOR FUNCTION
// ==========================================

// Lebih ringkas karena JS melakukan "otomatisasi" di balik layar.
function UserC(name, energy, serang) {
  //JS membuat 'let this = {}' di sini

  this.nama = name; // Kita pakai 'this' untuk menempelkan data ke objek baru
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




// ==========================================
// 4. OBJECT.CREATE (The Prototype Way)
// ==========================================
// PENAMBAHAN: Cara paling efektif karena menggunakan konsep Prototype Inheritance.

const methodUser = {
  actions: function (ac) {
    this.stamina -= this.attack * ac;
    console.log(`[Action] ${this.nama} menyerang! Sisa Stamina: ${this.stamina}`);
  },
  sleeps: function (time) {
    this.stamina += time * 5;
    console.log(`[Sleep] ${this.nama} istirahat. Stamina: ${this.stamina}`);
  },
};


function UsersOptimized(name, energy, serang) {
  // PERUBAHAN UTAMA: Object.create(methodUser)
  // Ini otomatis menghubungkan 'user' dengan 'methodUser' di balik layar (Prototype Link).
  // Kita nggak perlu lagi ketik "user.action = methodUser.actions" secara manual.
  let user = Object.create(methodUser);

  user.nama = name;
  user.stamina = energy;
  user.attack = serang;

  return user; 
}

// Kenapa Object.create lebih sakti?
// Jika JS tidak menemukan method 'actions' di dalam object 'bayu', 
// JS akan otomatis mencari ke "atas" (ke object methodUser) secara otomatis.
let bayu = Users("bayu", 20, 5);
let mamat = Users("mamat", 30, 3);
