// Closures


// Creation phase and Excution phase Global context

var nama = 'agus';
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
 * hoisting
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
