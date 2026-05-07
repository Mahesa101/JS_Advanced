// 10.1 Callback Documentation

/**
 * --- 1. Synchronous Callback ---
 * Callback yang langsung dieksekusi saat fungsi utama berjalan.
 * Bersifat blocking (baris kode di bawahnya harus menunggu ini selesai).
 */

// Function pendukung (Callback)
function greetUser(userName) {
  alert(`Halo, ${userName}`);
}

// Function utama
function initiateUserInteraction(callbackAction) {
  const inputName = prompt(`Masukan Nama: `);
  callbackAction(inputName);
}

// Eksekusi
initiateUserInteraction(greetUser);

/**
 * --- 2. Synchronous Callback (Blocking Demo) ---
 * Contoh penggunaan .forEach() yang bersifat synchronous.
 * Jika ada proses berat di dalamnya, dia akan "membekukan" browser.
 */

const playerProfiles = [
  { id: 1, username: "ShadowBlade", level: 99, class: "Assassin" },
  { id: 2, username: "MageQueen", level: 97, class: "Wizard" },
  { id: 3, username: "WarriorKing", level: 100, class: "Warrior" },
];

console.log("Process: Start Execution");

playerProfiles.forEach((player) => {
  // Simulasi tugas berat (CPU-Intensive)
  for (let i = 0; i < 10000000; i++) {
    let dummyDate = new Date();
  }
  console.log(`Rendering Player: ${player.username}`);
});

console.log("Process: Finished Execution");

/**
 * --- 3. Asynchronous Callback (Vanila JS) ---
 * Menggunakan XMLHttpRequest untuk mengambil data secara non-blocking.
 * Thread utama tidak akan menunggu respon server dan langsung lanjut ke baris berikutnya.
 */

function fetchPlayerData(endpointUrl, onSuccess, onError) {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200) {
        onSuccess(request.response);
      } else {
        onError(`Error: Failed to fetch from ${endpointUrl}`);
      }
    }
  };

  request.open("GET", endpointUrl);
  request.send();
}

console.log("Async Request: Started");

fetchPlayerData(
  "players.json",
  (response) => {
    const parsedPlayers = JSON.parse(response);
    parsedPlayers.forEach((player) => {
      console.log(`Fetched Data: ${player.username}`);
    });
  },
  (errorMessage) => {
    console.error(errorMessage);
  },
);

console.log("Async Request: Continuing to next line...");

/**
 * --- 4. Asynchronous Callback (JQuery AJAX) ---
 * Versi yang lebih ringkas dan sudah menangani cross-browser compatibility secara otomatis.
 */

console.log("JQuery AJAX: Triggered");

$.ajax({
  url: "players.json",
  success: (playerData) => {
    // JQuery otomatis melakukan JSON.parse jika response header-nya benar
    playerData.forEach((player) =>
      console.log(`JQuery Result: ${player.username}`),
    );
  },
  error: (xhrError) => {
    console.log(`Ajax Failed: ${xhrError.responseText}`);
  },
});

console.log("JQuery AJAX: End of script");
