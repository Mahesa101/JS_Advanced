// 8.1 Spread Operator

// --- 1. Basic Spread ---
const initialNames = ["Budi", "Citra", "Andi", "Dewi"];
// Memecah array menjadi elemen individual
console.log(...initialNames);
// Memecah string menjadi karakter individual (B u d i)
console.log(...initialNames[0]);

// --- 2. Menggabungkan (Merging) Array ---
const additionalSurnames = ["Hutagalung", "Sinaga", "Kusuma"];

// Menggunakan Spread: Lebih fleksibel karena bisa menyisipkan elemen baru di tengah
const combinedWithSpread = [...initialNames, "Samudra", ...additionalSurnames];
console.log(combinedWithSpread);

// Menggunakan Concat: Cara lama, lebih kaku untuk penyisipan di tengah
const combinedWithConcat = initialNames.concat(additionalSurnames);
console.log(combinedWithConcat);

// --- 3. Meng-copy Array (Reference vs. Shallow Copy) ---

// CASE A: Salah Copy (Copy by Reference)
const originalTeam = ["Sky", "Aero", "Nova", "Elio"];
const referenceCopy = originalTeam; // Ini hanya menyalin "alamat" memori, bukan datanya

// Jika kita mengubah referenceCopy, originalTeam ikut berubah (Mutating original)
referenceCopy[0] = "agus";
console.log("Original Team ikut berubah:", originalTeam);

// CASE B: Benar Copy (Shallow Copy menggunakan Spread)
const originalPlayers = ["Ken", "Gajah", "Dyah", "Shima"];
const actualCopy = [...originalPlayers]; // Membuat array baru yang benar-benar terpisah

// Mengubah actualCopy tidak akan mengganggu originalPlayers
actualCopy[0] = "Fajar";
console.log("Copy baru:", actualCopy);
console.log("Original tetap aman:", originalPlayers);

// --- 4. Mengubah NodeList menjadi Array ---
const listElements = document.querySelectorAll("li");

// Cara manual menggunakan Loop
let textContentList = [];
for (let element of listElements) {
  textContentList.push(element.innerHTML);
}
console.log(textContentList);

// Cara modern: Spread NodeList ke dalam Array agar bisa menggunakan method .map()
const mappedResults = [...listElements].map((el) => el.textContent);
console.log(mappedResults);

// --- 5. Animasi Teks / DOM Manipulation ---
// Teknik memecah teks menjadi <span> per huruf untuk keperluan styling/animasi
const brandNameElement = document.querySelector(".nama");

// Memecah isi HTML menjadi array karakter, lalu dibungkus span
const spannedHtml = [...brandNameElement.innerHTML]
  .map((char) => `<span>${char}</span>`)
  .join("");

console.log(spannedHtml);
brandNameElement.innerHTML = spannedHtml;
