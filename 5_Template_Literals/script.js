//Template literal/Template string adalah sebuah konsep dimana string literal dapat memungkingkan adanya expression di dalamnnya

//string literal
const namaA = "agus";
const namaB = "budi";
const namaC = `anjay`;

//dengan menggunakan back tick sebuah template literal dapat di buat

//ex

// `string biasa`;

// `string multi line string
// string multi line string
// string mutli line string`;

// `string text ${expression} string`; // atau di sebut juga embedded expression dengan menggunaan ${}

// tag`string text ${expression} string`; //sebuah string tagged template

let awal = 4;
let akhir = 5;
const hasil = `hasil dari ${awal} + ${akhir} adalah ${awal - akhir}`;

let umur = 30;

const tahun = `seseorang yang bernama ${namaA} sekarang berumur ${umur} tahun`;

//dan juga bisa menggunakan ternary karena hitungannya expresion

let x = 5;
const apakah = `${x % 2 == 0 ? "genap" : "ganjil"}`;

//Togged template
//adalah bentuk yang lebih kompleks dari template literals dimana template literals dapat menggunakan sebuah function di depan nya semisal

const namaX = "budi arto";
const gmail = "budia@gmail.com";

function cetak(string, ...sisah) {
  //   let hasil = "";
  //   string.forEach((str, i) => {
  //     hasil += `${str}${sisah[i] || ""}`;
  //   });
  //   return hasil;

  return string.reduce((hasil, str, i) => {
    return `${hasil}${str}${sisah[i] || ""}`;
  }, "");
}

const p = `Halo ${namaX} ,selamat anda berhasil mendaftar dengan gmail ${gmail}`;
