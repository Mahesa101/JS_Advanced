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

function Hewan(nama, umur) {
  const hewan = {};
  hewan.nama = nama;
  hewan.umur = umur;

  hewan.waktu = function (lama) {
    this.umur += lama;
    console.log(
      `selama ${lama} Tahun ${hewan.nama} Hidup umurnya menjadi ${hewan.umur}`,
    );
  };
  return hewan;
}

let kucing = Hewan("kucing", 15);
let Anjing = Hewan("anjing", 10);

//kelebihan dapat lebih mudah di gunakan lagi karena bersifat seperti template
//kekurangan harus membuat varibale terpisah untuk di gunakan
//dan harus di panggil

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
    this.jenis = 'Sudah di tebang'
    console.log(`Terjadi penebangan untuk ${this.jenis}`);
  };
}



let pinus = new Pohon('pinus',250)


//kelebihan lebih ringkas dan lebih dengan kinerja sama dengan function Declaration
//kekurangan mungkin akan sedikit bingung untuk programing baru
//kekurangan harus di panggil terlebih dulu dengan menarok di varibael