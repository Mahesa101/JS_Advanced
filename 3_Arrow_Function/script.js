//Arrow function

const agus = (nama, asal) => `halo nama saya ${nama} ,asal saya dari ${asal} `;

console.log(agus("Jason", "Cirebon"));

//arrow function adalahs versih lain dari function yang bertujuan menyederhanakan atau mempersingkat penulisan serta meminimalisir code yang tidak di perlukan

//serta juga jika parameter nya satu tidak perlu menggunakan ()
//bisa juga tidak menuliskan return tetapi {} harus di hilangkan atau di sebuh implisit return
//catatan bahwa hal itu di lakukan jika paramter atau function nya singkat yang tidak perlu hal yang lebih kompleks lagi

//bisa juga tanpa parameter yang bisa di tulis begini

const a = () => `hello word`;
console.log(a);

//tetapi ingat hal ini di lakukan jika function bertujuan untuk menelakukan hal sederhana saja

//ex

let hewan = ["kucing", "Anjing", "Sapi", "Burung"];
const jumlahHuruf = hewan.map((nama) => {
  return nama.length;
});

console.log(jumlahHuruf);

//jika ingin arrow function beruba object

let Benua = ["Asia Tenggara", "Asia Timur", "Asia Selatan"];
const hurufSertaNama = Benua.map((nama) => ({
  nama: nama,
  jumlahHuruf: nama.length,
}));

console.table(hurufSertaNama);

//jika ingin mengabalikan sebuah property yang sama kayak semisal itu
//nama:nama
//nah bisa aja tuh di tulis hanya nama saja karena hanya ingin menggembalikan nilai yang sama

//konsep this di arrow function
//dimana arrow function tidak memiliki konsep this jadi dapat di manfaatkan sebagai berikut

const box = document.querySelector(".box");

box.addEventListener("click", function () {

    let satu = 'size'
    let dua ='caption'

    if(this.classList.contains(satu)){
        [satu,dua]=[dua,satu]
    }
  this.classList.toggle(satu);
  setTimeout(()=> {
    this.classList.toggle(dua);
  }, 600);
});
