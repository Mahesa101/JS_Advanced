// 7. Loop Comparison: for..of vs for..in

// --- Part 1: Array Iteration ---
const playerList = ["agus", "budi", "anjay"];

// 1. Classic For Loop (Manual Index)
for (let i = 0; i < playerList.length; i++) {
  console.log(playerList[i]);
}

// 2. forEach (Method Array)
// Cocok jika butuh index dan element sekaligus dalam satu callback
playerList.forEach((name, index) => console.log(`Index: ${index} | Nama: ${name}`));

// 3. for..of (Value Iteration)
// Jauh lebih bersih jika hanya butuh value-nya saja
for (const playerName of playerList) {
  console.log(playerName);
}

// 4. for..of with .entries()
// Digunakan jika ingin menggunakan for..of tapi tetap butuh index
for (const [index, element] of playerList.entries()) {
  console.log(`${index + 1}. ${element}`);
}


// --- Part 2: String Iteration ---
const devName = "Refen";
// String adalah iterable, jadi for..of akan memecahnya per karakter
for (const char of devName) {
  console.log(char);
}


// --- Part 3: NodeList Iteration ---
// NodeList (hasil querySelectorAll) bukan Array murni, tapi bisa di-iterate
const nameElements = document.querySelectorAll(".Name");
console.log(nameElements);

// Menggunakan forEach (tersedia di NodeList modern)
nameElements.forEach((el) => console.log(el.innerHTML));

// Menggunakan for..of
for (const element of nameElements) {
  console.log(`${element.textContent}`);
}


// --- Part 4: Arguments Object ---
/**
 * Function untuk menjumlahkan semua angka yang dikirim sebagai argumen
 * 'arguments' adalah array-like object yang menampung semua input
 */
function sumAllNumbers() {
  let totalResult = 0;
  
  // arguments tidak punya method .reduce(), tapi dia iterable
  for (const number of arguments) {
    totalResult += number;
  }

  return totalResult;
}

console.log(sumAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));


// --- Part 5: for..in (Object Properties) ---
const characterInfo = {
  nama: "budi",
  umur: 33,
};

// for..in digunakan untuk melintasi 'enumerable properties' (key) dari sebuah object
for (const propertyKey in characterInfo) {
  console.log(`Key: ${propertyKey}`); // Mengambil nama propertinya (nama, umur)
  console.log(`Value: ${characterInfo[propertyKey]}`); // Mengambil nilainya (budi, 33)
}