// higher order function adalah sebuah konsep sebuah function yang menjadi nilai atau return

let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);

//filter
//sesuai dengan nama nya dimana fungsi nya adalah membuat standar atau aturan yang harus di patuhi agar dapat masuk ke array yang di ciptakana oleh filter ini

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//mencari angka >=3
//for
const hasil = []; //bertujuan untuk menyimpan data baru
for (let i = 0; i <= angka.length; i++) {
  if (angka[i] >= 3) {
    hasil.push(angka[i]);
  }
}

//filter
const angkaFilter = [-1, 5, 3, 2, 8, -5, -4, 3, 2, 9];
const Filter = angkaFilter.filter(function (a) {
  return a >= 3;
});

//dimana parameter a itu merujuk pada angkafilter dimana bisa di tulis juga
//angkaFilter[i];
//dan return adalah sebuah perbanding

//map
// sebuah cara untuk memetakan sebuah array ke dalam sebuah function baru dengan membuat array yang baru hasil dari functio yang baru

const angkaMap = [-3, 1, 2, 6, 5, 9, 2, 8, 2, 0];
const Map = angkaMap.map((a) => {
  return a * 2;
});

//reduce
// cara untuk menggabukan sebuah array menjadi sebuah array tunggal

const angkaReduce = [-7, 4, 7, -9, 1, 3, 2, -7, 5, 8];
//dan 0 sebagai nilai awal 0 + -7 + 4 + 7 + -9 + 1 + 3 + 2 + -7 + 5 + 8
const Reduce = angkaReduce.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; //dan disini ada nilai awal yang dimana bisa di tulis kan
  // return accumulator + currentValue,0;
});

// currentValue adalah elemet array yang sedang di looping atau bisa di tulis ya angkaReduce[i];
// sedangkan accumulator adalah hasil pergabunga dari currentValue yang menghasil kan array baru

//Method chaining
// adalah cara untuk memanggil beberapa function secara bersamaan dengan berurutan dalam satu code
//ex
const angkaChaining = [-2, 5, 7, -1, 2, 5, 3, -8, 2, 0];

const Chaining = angkaChaining
  .filter((a) => {
    return a >= 3; //5,7,5,3
  })
  .map((a) => {
    return a * 3; //5*3,7*3,5*3,*3
  })
  .reduce((a, b) => {
    return a - b; //15-21-15-9
  });
//hasil -30

//latihan soal
//ambil semua elemet video
const video = Array.from(document.querySelectorAll("[data-duration]"));

//pilih yang meme aja
const Meme = video
  .filter((meme) => {
    return meme.textContent.includes("Meme");
  })

  //ambil durasi masing2 video
  //chaining dari const meme

  .map((Durasi) => {
    return Durasi.dataset.duration;
  })

  //ubah durasi dari string menjadi int atau float ,dan ubah menit ke detik
  //Chaining dari meme
  .map((Waktu) => {
    // 10:30 -> [10,30]split
    const parts = Waktu.split(":").map((parts) => {
      return parseFloat(parts);
    });
    return parts[0] * 60 + parts[1];
  })

  //jumlah semua detik
  .reduce((hasil, nilai) => {
    return hasil + nilai;
  });

//ubah format dari detik ke jam menit detik

const jam = Math.floor(Meme / 3600);
const menit = Math.floor(Meme / 60);
const detik = Meme - menit * 60;

//simpan di dom
const durasiElemet = document.querySelector(".total-durasi");
durasiElemet.textContent = `${jam} jam , ${menit} Menit,${detik} detik`;

const jumlahV = video.filter((meme) => {
  return meme.textContent.includes("Meme");
}).length;
const hasilV = document.querySelector(".jumlha-v");
hasilV.textContent = `${jumlahV} jumlah Video`;
