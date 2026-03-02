// Closures

// Creation phase and Excution phase Global context

var nama = "agus";
console.log(nama);

//Creation phase
/**
 * sebuah awalaan kinerja javascript dimana javascript memulai semua nya dengan mencari
 * var dan function
 * jika salahs satu di temukan maka akan di isi undefined atau function itu sendiri
 *
 * Contoh
 *  nama variable = undefined
 * nama function = function()
 * Dua konsep di atas di sebut
 *
 *
 * hoisting
 *
 *
 * dimana jika sebuah var itu semisal di bawah  dia akan di naik kan semisal
 * di code
 * console.log(nama)
 * var nama = 'agus'
 *
 * saat mesin menjalan kan;
 * nama var = undefined;
 * console.log(nama)
 * var nama = 'agus'
 * selain dua hal itu javscript membuat dua hal lain nya yaitu
 * window = global object serta
 * this = window
 */

//Excution phase
/**
 * setelah  itu menjalan kan
 * nama var = undefined;
 * console.log(nama)
 * var nama = 'agus'
 *
 * atau
 * ini jika ingin menghasilkan nilai
 * nama var = undefined;
 * var nama = 'agus'
 * console.log(nama)
 */

// dan itu juga kenapa function dapat di panggil sebelum di delarasikan
//karena function mengambil diri nya sendiri atau function= function()

//Function
/**
 * dalam function juga membuat sebuah local Creation phase and Excution phase yang berisi juga windom dll
 * yang bersifat hanya local yang memiliki cara kerja yang sama cuman beda scope nya saja
 */

// bisa melakukan percobaan di link di bawah
//https://pythontutor.com/javascript.html#mode=edit

//Closure
function init() {
  let nama = "agus"; // local variabel
  function tampil() { //inner function(closure)
    console.log(nama); // akses ke parent variabel
  }
  tampil();
}

init;

//inti closure adalah bagaimana sebuah function dalam function/ inner function dapat berinteraksi dengan scope di luar diri sendiri atau lexical scope
//semisal

function tempat(kota) {
  let agus = 3; //private method
  return function (nama) {
    console.log(
      `halo ${nama}, selamat datang di Kota ${kota} ,jangan lupa taati aturan`,
    );
  };
}

let kotaA = tempat("Jakarta");
let kotaB = tempat("Badung");
let kotaC = tempat("Semarang"); //function factories

kotaA("agus");
kotaB("budi");
kotaC("nabil");

//okey function tempat sebagai pareht fucntion dan return function adalah inner dimana karena return function memperlukan sebuah varibael/parameter kota jadi di menggambil di luar scope nya yang bisa di sebut closure atau perilakukan bisa di sebut lexical scope

//dimana saat function tempat di panggil tanpa variabel maka sistem nya berjalan setengah karena yang di aktif kan adalah function parent bukan inner yang di mana perlu varibael untuk menjalan kan inner sekaligus mengisi varibael/parameter inner

//tetapi ada cara agar tidak membuat variabel baru yaitu dengan membuat function menjadi immediately invoked function expression

let hewan = (function (binatang) {
  return function (nama) {
    console.log(
      `perkenalan ini hewan ini bernama ${nama}, dengan jenis ${binatang} ,jangan untuk tidak menyentuh hewan di sini`,
    );
  };
})();

//hasil dari pengguna
