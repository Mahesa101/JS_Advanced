//2.1 Execution Context, Hoisting & Scope

/**
 * 1. HOISTING & GLOBAL EXECUTION CONTEXT
 * Saat file dijalankan, sistem masuk ke 'Creation Phase'.
 * Semua variabel 'var' di-hoisting menjadi 'undefined'.
 * Semua 'function' di-hoisting dengan isi fungsinya.
 */

console.log(nama); // Output: undefined (karena baru di fase creation, belum ada value)
var nama = "agus"; // Di fase execution, baru diisi nilai "agus"

// ---------------------------------------------------------

/**
 * 2. LOCAL EXECUTION CONTEXT & SCOPE
 * Saat fungsi dipanggil, JS membuat 'Local Execution Context' baru.
 * 'arguments' adalah objek khusus yang menangkap parameter yang dikirim.
 */

var name = "agus"; // Global variable
var umur = 50;     // Global variable

function sekarang(param) {
  // arguments: Objek yang menampung semua parameter (misal: ['budi'])
  
  var maxSimalUmur = 70; // Local variable (hanya hidup di dalam fungsi ini)
  
  /*
   * SCOPE CHAIN:
   * Jika variabel tidak ditemukan di local (di sini), 
   * JS akan mencari ke luar (Global Scope).
   */
  return `Nama: ${name}, Umur: ${umur}, Rata-rata usia: ${maxSimalUmur}`;
}

console.log(sekarang("budi")); 

// ---------------------------------------------------------

/**
 * 3. CALL STACK & NESTED FUNCTIONS
 * Fungsi dipanggil satu per satu, menumpuk di 'Call Stack'.
 * Eksekusi berjalan dari luar ke dalam.
 */

function a() {
  console.log("ini a");
  
  function b() {
    console.log("ini b");
    
    function c() {
      console.log("ini C");
    }
    c(); // c dipanggil di dalam b
  }
  b(); // b dipanggil di dalam a
}

a(); // a dipanggil pertama kali

/*
 * ILUSTRASI CALL STACK:
 * 1. Global Context masuk ke stack.
 * 2. Fungsi a() dipanggil -> masuk stack.
 * 3. Fungsi b() dipanggil -> masuk stack di atas a.
 * 4. Fungsi c() dipanggil -> masuk stack di atas b.
 * 5. c() selesai -> keluar stack.
 * 6. b() selesai -> keluar stack.
 * 7. a() selesai -> keluar stack.
 */
//javascript visualizer
//https://pythontutor.com/javascript.html#mode=edit
