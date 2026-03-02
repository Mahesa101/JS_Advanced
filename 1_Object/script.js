// cara membuat object

//1. Object Literal
const Wadah = {
  nama: "kardus",
  Berat: 15,
  Barang: function (jumlah) {
    this.Berat += jumlah;
    console.log(`nemabahkan Beban dengan Barang ${this.nama}`);
  },
};

//kekurangan yaitu hanya bisa di gunakan sekali saat mendekalrasikan
//harus copy paste manual

//2. Function Declaration

//cara arternatif yang lebih efektif dengna membuat object terpish
//karena fungsi nya tidak tersalin di belakang ,menyebab kan lebih tidak boros
const Hidup = {
  waktu: function (lama) {
    this.umur += lama;
    return console.log(
      `selama ${lama} Tahun ${Hidup.nama} Hidup umurnya menjadi ${Hidup.umur}`,
    );
  },
};
//kekurang nya jika membuat sebuah function lagi di object harus di daftarkan lagi di object lain nya
//solusi dari ini kekurangan itu menggunakn Object.create

function Hewan(nama, umur) {
  const hewan = Object.create(Hidup);
  hewan.nama = nama;
  hewan.umur = umur;
  // hewan.Hidup =Hidup.waktu di gatikan Object.create

  // hewan.waktu = function (lama) {
  //   this.umur += lama;
  //   console.log(
  //     `selama ${lama} Tahun ${hewan.nama} Hidup umurnya menjadi ${hewan.umur}`,
  //   );
  // };

  //kurang efektif soale sistem itu membuat ulang sebuah function yang menyebabkan boros dalam sistem
  return hewan;
}

let kucing = Hewan("kucing", 15);
let Anjing = Hewan("anjing", 10);

//kelebihan dapat lebih mudah di gunakan lagi karena bersifat seperti template
//kekurangan harus membuat varibale terpisah untuk di gunakan
//dan harus di panggil

//tetapi walapaun sudah terlihat lebih efektif tetapi tetap saja ini harus melakukan pekerjaan yang berulang/membuat dua object dan banyak function yang membuar lebih report

//3. Constructor Function
//Keyword nya New

function Pohon(jenis, umur) {
  this.jenis = jenis;
  this.umur = umur;

  this.waktu = function (lama) {
    this.umur += lama;
    console.log(
      `selama ${lama} Tahun ${this.jenis} Hidup umurnya menjadi ${this.umur}`,
    );
  };

  this.tebang = function (hancur) {
    this.umur -= this.umur;
    this.jenis = "Sudah di tebang";
    console.log(`Terjadi penebangan untuk ${this.jenis}`);
  };
}

let pinus = new Pohon("pinus", 250);

//kelebihan lebih ringkas dan lebih dengan kinerja sama dengan function Declaration
//kekurangan mungkin akan sedikit bingung untuk programing baru
//kekurangan harus di panggil terlebih dulu dengan menarok di varibael



//Prototype
function berang(tangan, kaki) {
  //di balik sistem javascript,dia membuat this menjadi sebuah object atau
  // this = Object.create{berang.prototype}; yang terjadi di balik layar
  this.tangan = tangan;
  this.kaki = kaki;


  //dan 
  //return this; di balik layar
};

berang.prototype.gaya = function(gayaTangan,gayaKaki){
  return `ia menggunakan Gaya ${gayaTangan} untuk tangan Dominan ${this.tangan} dan menggunakan gaya ${gayaKaki} untuk kaki domina ${this.kaki}`
}

let agus = new berang('kanan','kiri')




//class

class musim{
  constructor(suhu,keLembapan){
    this.suhu=suhu;
    this.keLembapan=keLembapan
  };


  naik(derajat){
 this.suhu+= derajat
 return `terjadi kenaikan suhu sebesar ${derajat} Derajat yang menyebabkan hari ini subuh mencapai ${this.suhu} Derajat `
  }

  lembab(sering){
    this.keLembapan+= sering
    return `di karenakan Tahun ini hujan terjadi sebanyak ${sering} kali yang menyebab kan kelembapan meningkat ${this.keLembapan}`
  }
}


let Tahun2026 = new musim(30,40);


//secara singkat prototyep adalah sebuah bawaan sebuah object atau function sebuah method yang di buat oleh javascript dimana dia berbentuk Object.create
