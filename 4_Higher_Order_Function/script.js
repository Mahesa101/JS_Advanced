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
    return a >= 3;//5,7,5,3
  })
  .map((a) => {
    return a * 3;//5*3,7*3,5*3,*3
  })
  .reduce((a, b) => {
    return a - b;//15-21-15-9
  });
//hasil -30