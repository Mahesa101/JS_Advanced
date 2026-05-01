// 5.1 Template Literals

// 1. Multi-line String
// Fitur ini menjaga whitespace dan baris baru tanpa perlu karakter escape seperti \n
console.log(`hallo 1
    hallo2`);


// 2. HTML Fragment
// Sangat berguna untuk membuat struktur UI secara dinamis di JavaScript
const characterProfile = {
  nama: "arthur",
  level: 33,
  playerId: 389423894,
  jobClass: "mage",
};

// Variabel di-rename agar lebih jelas tujuannya (HTML UI)
let playerCardMarkup = `<div class="player"> 
  <h2> ${characterProfile.nama} </h2>
  <span class="data"> ${characterProfile.playerId} </span>
</div>`; // Memperbaiki typo closing tag </d> menjadi </div> agar valid secara logic UI

console.log(playerCardMarkup);


// 3. Embedded Expression
// Memasukkan variabel langsung ke dalam string dengan syntax ${}
const playerNickname = "budi";
let currentLevel = 20;

console.log(`Halo, ${playerNickname} selamat datang players level ${currentLevel}`);


// 4. Expression Interpolation
// Di dalam ${} kita tidak hanya bisa memanggil variabel, tapi juga melakukan operasi matematika atau logic
let firstValue = 10;
let secondValue = 33;

console.log(
  `jika X = ${firstValue} dan Y = ${secondValue}, maka hasil penjumlahannya adalah : ${firstValue + secondValue}, bukan ${2 * firstValue + secondValue}`,
);