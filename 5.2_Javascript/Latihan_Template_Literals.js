// 5.2 Template Literals (Latihan)

// --- 1. HTML Fragments ---
// Menggunakan single object untuk merender satu komponen UI
const playerProfile = {
  name: "agus",
  level: 33,
  id: 45437857,
  playerClass: "Barbarian",
};

const playerMarkup = `<div class ="cls">
<h2> Player </h2>
<span class= "data">
        Players: ${playerProfile.name} <br>
        level: ${playerProfile.level}<br>
        class: ${playerProfile.playerClass}<br>
</span>
</div>`;

document.body.innerHTML = playerMarkup;


// --- 2. Looping ---
// Merender list data menggunakan .map(). 
// Note: Secara default .map() mengembalikan array, JS akan otomatis mengubahnya jadi string (dengan koma) jika langsung dimasukkan ke Template Literals.
const playerCollection = [
  {
    name: "agus",
    level: 33,
    id: 45437857,
    playerClass: "Barbarian",
  },
  {
    name: "Budi",
    level: 40,
    id: 4567567857,
    playerClass: "assassin",
  },
  {
    name: "faiz",
    level: 1,
    id: 24845958,
    playerClass: "archer",
  },
];

const playerListMarkup = ` <div class ="clss">
${playerCollection.map(
  (player) => `<ul>
    <li>Players: ${player.name} </li>
    <li>level: ${player.level} </li>
    <li>class: ${player.playerClass} </li>
    </ul>`,
)}
</div>`;

document.body.innerHTML = playerListMarkup;


// --- 3. Conditionals (Ternary Operator) ---
// Digunakan untuk menangani data opsional (seperti 'featuring' pada lagu)
const songInfo = {
  judul: "Cincin",
  penyanyi: "Hindia",
};

const songMarkup = `<div class="lagu">
<ul>
<li>Judul: ${songInfo.judul} </li>
<li>penyanyi: ${songInfo.penyanyi} ${songInfo.feat ? `(${songInfo.feat})` : ""} </li>
</ul>
</div>`;

document.body.innerHTML = songMarkup;


// --- 4. Nested (HTML Fragment bersarang) ---
// Teknik modular: Memisahkan bagian kecil UI ke dalam function agar lebih clean
const heroStats = {
  name: "Budi",
  level: 99,
  skills: ["fire ball", "ice spear", "storm"],
};

// Function ini khusus untuk mengolah array skill menjadi list HTML
function renderSkillList(skillArray) {
  return `<ol>
    ${skillArray.map((skill) => `<li>${skill}</li>`).join("")}
    </ol>`;
}

const heroProfileMarkup = `<div class= "detail">
<h2>${heroStats.name}</h2>
<span class=level>Level: ${heroStats.level}</span>
<h4>Skill Set</h4>
${renderSkillList(heroStats.skills)}
</div>`;

document.body.innerHTML = heroProfileMarkup;