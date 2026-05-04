// 6.2 Destructuring Function

// --- 1. Destructuring Array Return Value ---
// Berguna jika urutan data sudah pasti (seperti koordinat atau RGB)
function basicArithmetic(val1, val2) {
  return [val1 + val2, val1 - val2, val1 * val2, val1 / val2];
}

// Mengambil secara manual (index-based)
const sumManual = basicArithmetic(2, 3)[0];
const multiManual = basicArithmetic(2, 3)[2];

// Mengambil menggunakan destructuring (lebih clean)
// Menambahkan default value "Tidak terdefinisi" jika array ke-4 kosong
const [addResult, subResult, multiResult, divResult = "Tidak terdefinisi"] = basicArithmetic(6, 9);

console.log(`Hasil Tambah: ${addResult}`);
console.log(`Hasil Kali: ${multiResult}`);


// --- 2. Destructuring Object Return Value ---
// Kelebihan: Urutan pengambilan tidak masalah, cukup sesuaikan dengan key-nya
function calculateStats(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: a / b,
  };
}

// Destructuring berdasarkan key object
const { sum, difference, quotient, product } = calculateStats(6, 9);
console.log(`Sum: ${sum}`);
console.log(`Diff: ${difference}`);


// --- 3. Destructuring Arguments (Function Parameter) ---

const heroProfile = {
  heroName: "Arthur",
  level: 33,
  playerId: 303957354234,
  abilities: {
    fire: "Inferno Burn 90",
    earth: "Quake 80",
    ice: "Frost 90",
  },
};

// Cara 1: Mengambil satu per satu parameter (kurang efektif jika data banyak)
function displaySimpleInfo(name, level) {
  return `Hello player ${name}, selamat anda mencapai level ${level}`;
}

// Cara 2: Melempar seluruh object, lalu dipanggil dengan dot notation
function displayObjectInfo(data) {
  return `Hello player ${data.heroName}, selamat anda mencapai level ${data.level}`;
}

console.log(displayObjectInfo(heroProfile));
console.log(displaySimpleInfo(heroProfile.heroName, heroProfile.level));

// Cara 3: Destructuring di dalam parameter (SANGAT DIREKOMENDASIKAN)
// Termasuk teknik "Nested Destructuring" untuk mengambil properti di dalam object 'abilities'
function displayHeroStatus({ heroName, level, abilities: { fire, earth, ice } }) {
  return `Hero: ${heroName} (Lv.${level}) | Active Skill: ${fire}`;
}

console.log(displayHeroStatus(heroProfile));