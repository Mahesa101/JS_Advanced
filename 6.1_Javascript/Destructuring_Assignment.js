// 6.1 Destructuring Assignment

// --- 1. Destructuring Array ---
// Memetakan isi array ke dalam variabel individual secara urut
const introWords = ["Hallo", "Nama", "Saya", "Arthur"];
const [greeting, wordName, wordSubject, userName] = introWords;

console.log(greeting); // Output: Hallo

// --- 2. Skipping Items ---
// Menggunakan koma kosong untuk melompati elemen yang tidak dibutuhkan
const greetingsList = ["Halo", "Hola", "Hi"];
const [indoLocale, , englishLocale] = greetingsList;

console.log(englishLocale); // Output: Hi

// --- 3. Swap Items ---
// Menukar nilai variabel tanpa memerlukan variabel bantuan (temp)
let playerPositionX = 30;
let playerPositionY = 10;

console.log(playerPositionY); // 10
console.log(playerPositionX); // 30

[playerPositionX, playerPositionY] = [playerPositionY, playerPositionX];

console.log(playerPositionY); // 30 (berhasil ditukar)
console.log(playerPositionX); // 10

// --- 4. Return Value pada Function ---
// Mempermudah pengambilan banyak nilai sekaligus dari satu function
function getCoordinates() {
  return [1, 2];
}

const [axisX, axisY] = getCoordinates();

console.log(axisX); // Mengakses hasil destructuring
console.log(axisY);

// --- 5. Rest Parameter (Array) ---
// Mengambil elemen pertama dan memasukkan sisanya ke dalam satu array baru
const [firstRank, ...otherRanks] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(firstRank); // 1
console.log(otherRanks); // [2, 3, 4, 5, 6, 7, 8]

// --- 6. Destructuring Object ---
// Mengambil properti object berdasarkan nama key-nya
const playerProfile = {
  characterName: "agus",
  characterLevel: 3333,
};

const { characterName, characterLevel } = playerProfile;
console.log(characterName);

// --- 7. Assignment tanpa Deklarasi Object ---
// Mengisi nilai variabel yang sudah ada menggunakan property object (wajib pakai kurung)
let bossName, bossHealth;
({ bossName, bossHealth } = {
  bossName: "Budi",
  bossHealth: 202,
});
console.log(bossName);

// --- 8. Assign ke Variabel Baru & Default Value ---
// Me-rename key object menjadi nama variabel baru dan memberikan nilai default jika data kosong
const activePlayer = {
  internalName: "n",
  internalLevel: 3333,
};

const { internalName: alias, internalLevel: rank = "Unranked" } = activePlayer;

console.log(alias);

// --- 9. Rest Parameter (Object) ---
// Memisahkan satu properti dan mengelompokkan sisanya ke dalam object baru
const itemData = {
  itemId: "n",
  itemPower: 3333,
  itemType: "Weapon",
};

const { itemId, ...itemDetails } = itemData;
console.log(itemDetails); // Output: { itemPower: 3333, itemType: "Weapon" }

// --- 10. Mengambil Field pada Object via Parameter Function ---
// Destructuring langsung di dalam parameter agar function hanya fokus pada data yang dibutuhkan
const laptopSpecs = {
  ram: 8,
  cpu: "Intel",
  color: "Hijau",
};

function getRamSize({ ram }) {
  return ram;
}

console.log(getRamSize(laptopSpecs));
