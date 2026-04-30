// 4.3 Latihan Filter, Map & Reduce

// 1. Ambil semua elemen yang memiliki attribute data game lengkap
// Digunakan Array.from agar kita bisa menggunakan higher-order functions seperti .filter()
const playerElements = Array.from(
  document.querySelectorAll("[data-kill][data-gold][data-damage]"),
);

// 2. Filter elemen yang hanya mengandung teks "Player"
// Ini memastikan kita tidak mengolah elemen lain yang mungkin punya data-attribute serupa tapi bukan player
const filteredPlayers = playerElements.filter((element) =>
  element.textContent.includes("Player"),
);

// 3. Transformasi NodeList menjadi Object Kumpulan Data Player
// Menyimpan dataset dan nama (nm) ke dalam satu object agar akses datanya lebih sistematis
const playerStatsList = Object.assign(
  {},
  filteredPlayers.map(function (item) {
    return { ...item.dataset, nm: item.textContent.trim() };
  }),
);


//opsi gampang
// const length = playerElements.filter((player) => player.textContent.includes("Player")).length;

// 4. Mencari Nilai Tertinggi (High Score) untuk setiap kategori
// Logic: Ambil datanya (map), ubah ke angka (parseFloat), lalu bandingkan untuk cari yang terbesar (reduce)

// Mencari Gold tertinggi
const maxGoldValue = filteredPlayers
  .map((item) => item.dataset.gold)
  .map((value) => parseFloat(value))
  .reduce((x, y) => (x > y ? x : y));

// Mencari Kill tertinggi
const maxKillCount = filteredPlayers
  .map((item) => item.dataset.kill)
  .map((value) => parseFloat(value))
  .reduce((x, y) => (x > y ? x : y));

// Mencari Damage tertinggi
const maxDamageDealt = filteredPlayers
  .map((item) => item.dataset.damage)
  .map((value) => parseFloat(value))
  .reduce((x, y) => (x > y ? x : y));

// 5. Function untuk mencari player mana yang memegang nilai tertinggi tersebut
// Tetap menggunakan loop sesuai logic awalmu untuk mencari match pertama
function findTopPerformer(playersData, threshold, categoryKey) {
  for (let i = 0; i < Object.keys(playersData).length; i++) {
    if (playersData[i][categoryKey] >= threshold) {
      return playersData[i];
    }
  }
}

// Menentukan pemenang per kategori
const goldWinner = findTopPerformer(playerStatsList, maxGoldValue, "gold");
const killWinner = findTopPerformer(playerStatsList, maxKillCount, "kill");
const damageWinner = findTopPerformer(
  playerStatsList,
  maxDamageDealt,
  "damage",
);

// 6. DOM Manipulation: Render hasil ke layar
const goldDisplay = document.querySelector(".Gold");
const killDisplay = document.querySelector(".kills");
const damageDisplay = document.querySelector(".damage");

goldDisplay.textContent = `${goldWinner.nm} | Gold: ${maxGoldValue}`;
killDisplay.textContent = `${killWinner.nm} | Kills: ${maxKillCount}`;
damageDisplay.textContent = `${damageWinner.nm} | Damage: ${maxDamageDealt}`;

// 7. Debugging Logs
console.log("--- MVP Leaderboard Data ---");
console.log("Gold Winner:", goldWinner);
console.log("Damage Winner:", damageWinner);
console.log("Kill Winner:", killWinner);
console.log("Processed Players Object:", playerStatsList);
