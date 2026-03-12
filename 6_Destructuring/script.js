//Destructuring Assignment adalah sebuah cara mempecah isi dari sebuah array atau object menjadi varibael terpisah dengan membuat array atau object menjadi sebuah expresion

//Destructuring Array
const angka = [2, 5, 1, 6, 8, 4, 1];

const [kesatu, kedua, ketiga, ...sisah] = angka;
//cara skip atau enggak mau menampil kan salah satu element
const [A, , c, d, F] = angka;
console.log(kesatu);

//swap item
//cara untuk menukar sebuah items/varibale
let X = 6;
let Y = 3;
console.log(`SwaP ${X}`);
console.log(Y);

[X, Y] = [Y, X];
console.log(X);
console.log(Y);

//return value pada function
//dimana dapat menjadi return value yang dapat di bongkar

function coba() {
  return ["agus", "budi"];
}
//cara tanpa Destructuring
// const biasa = coba()
// console.log(biasa[1])
//cara menggunakan Destructuring

const [g, b] = coba();
console.log(g);
console.log(b);

//jika jumlah array atau object nya banyak bisa menggunakan
//rest parameter

const RtA = ["kuniawan", "bambang", "wowok", "sawit", "gundul"];
const [blok2, blok3, blok5, ...bloksisah] = RtA;
console.log(blok3);
console.log(blok5);
console.log(bloksisah);

//Destructuring Object
const mhs = {
  nama: "agus bambang bimbing",
  umur: 33,
};

const { nama, umur } = mhs;
//bagian object nya harus sama dengan object yang mau di panggil tidak seperti array yang bebas penamaan nya
console.log(nama);
console.log(umur);

//atau juga ada cara lain yaitu
//Assignment tanpa deklrasi object
//dengan memanfaatkan ()

({ namaC, umurC } = {
  namaC: "tungtung sahur",
  umurC: 330,
});

console.log(namaC);
console.log(umurC);

//Assign ke varibael baru
//atau pemberian nama baru

const gg = {
  air: "cair",
  umurA: 100000,
};

const { air: liquid, umurA: umurL } = gg;
console.log(liquid);
console.log(umurL);

//membarikan Default value
const barang = {
    id:2746247,
  kardus: "lembek",
  gelas: "plastik",
  kertas: "mudah terbakar",
};

// const { kardus, gelas, kertas, besi: B = "keras" } = barang;
// console.log(kardus);
// console.log(B);

//dapat juga menggati nama baru ke varibael

//dapat juga menggunakan rest para meter

const{kardus,...value}=barang;
console.log(kardus);
console.log(value);



//dapat juga mengabil filed pada object atau bahasa keren nya nilai pada object

// cara biasa
// function getId(ambilId){
//     return ambilId.id;
// };


// console.log(getId(barang));


//cara menggukana filed
function getId({id}){
    return id;
};


console.log(getId(barang));
//dimana parameter di isi barang sebagi pencarian data nya



