// 8.2 Rest Parameter

// --- 1. Basic Rest Parameter ---
/**
 * Mengambil satu argumen spesifik dan menggabungkan sisanya ke dalam satu array.
 */
function displayArguments(firstPerson, ...otherPeople) {
  // 'otherPeople' akan otomatis menjadi sebuah Array
  return `Parameter pertama: ${firstPerson}, Sisanya: ${otherPeople.join(", ")}`;
}

console.log(displayArguments("agus", "budi", "hilman", "agus"));

// --- 2. Sum Function (Using Loop) ---
function sumTotalWithLoop(...numbers) {
  let accumulatedTotal = 0;

  for (let num of numbers) {
    accumulatedTotal += num;
  }
  return accumulatedTotal;
}

console.log(sumTotalWithLoop(1, 2, 3, 4, 5));

// --- 3. Sum Function (Using Reduce) ---
// Cara yang lebih modern dan ringkas (fungsional)
function sumTotalWithReduce(...numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
}

console.log(sumTotalWithReduce(1, 2, 3, 4, 5, 6, 7, 8, 9));

// --- 4. Array Destructuring with Rest ---
// Mengambil posisi tertentu dan mengelompokkan sisanya
const projectTeam = [
  "Budi Santoso",
  "Citra Dewi",
  "Andi Pratama",
  "Eka Putri",
  "Fajar Nugroho",
  "Gita Lestar",
];

const [leader, coLeader, ...memberList] = projectTeam;
console.log(`Ketua: ${leader}`);
console.log(`Wakil: ${coLeader}`);
console.log(`Anggota Sisanya:`, memberList);

// --- 5. Object Destructuring with Rest ---
// Mengambil satu key dan memisahkan sisanya ke dalam object baru
const techStackTeam = {
  projectManager: "Rian Hidayat",
  frontEndDev1: "Maya Sari",
  frontEndDev2: "Dimas Saputra",
  backEndDev: "Siska Amelia",
};

const { backEndDev, ...otherDevs } = techStackTeam;

console.log(`Back-end Specialist: ${backEndDev}`);
console.log(`Team Lainnya:`, otherDevs);

// --- 6. Advanced Filtering ---
/**
 * Fungsi untuk menyaring input berdasarkan tipe data yang diinginkan
 * @param {string} dataType - Tipe data yang dicari (e.g., 'number', 'string')
 * @param {...any} itemsToFilter - Kumpulan data yang akan dicek
 */
function filterByDataType(dataType, ...itemsToFilter) {
  return itemsToFilter.filter((item) => typeof item === dataType);
}

// Hanya mengambil data yang bertipe 'number'
console.log(
  filterByDataType("number", 2, 3, 5, 7, "agus", 4, 8, "budi", true, false),
);
