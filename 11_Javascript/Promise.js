// 11. Promise Documentation

/**
 * KONSEP UTAMA:
 * 1. States: Pending (menunggu), Fulfilled (berhasil), Rejected (gagal).
 * 2. Callback: Resolve (pintu sukses), Reject (pintu gagal).
 * 3. Actions: .then (eksekusi sukses), .catch (eksekusi gagal), .finally (selesai, apa pun hasilnya).
 */

// --- Contoh 1: Simple Promise (Synchronous Logic) ---
let isPromiseKept = true;
const basicPromise = new Promise((resolve, reject) => {
  if (isPromiseKept) {
    resolve("Janji telah ditepati");
  } else {
    reject("Kamu bohong!");
  }
});

basicPromise
  .then((response) => console.log("Success Result: " + response))
  .catch((error) => console.log("Error Log: " + error));

// --- Contoh 2: Asynchronous Promise with Timeout ---
// Menunjukkan sifat non-blocking: "Mulai" dan "Selesai" muncul duluan.
const delayedPromise = new Promise((resolve, reject) => {
  if (isPromiseKept) {
    setTimeout(() => {
      resolve("Janji ditepati setelah menunggu 2 detik.");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Janji gagal ditepati setelah menunggu.");
    }, 2000);
  }
});

console.log("mulai");

console.log(
  delayedPromise
    .finally(() => console.log("Sesi Tunggu Selesai (Finally)")) // Running apa pun hasilnya
    .then((response) => console.log(response))
    .catch((error) => console.log(error)),
);

console.log("selesai");

// --- Contoh 3: Parallelism with Promise.all ---
// Mengambil banyak data sekaligus dan menunggu semuanya selesai.

const movieDataPromise = new Promise((resolve) => {
  const movieList = [
    { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
    { id: 2, title: "Interstellar", director: "Christopher Nolan", year: 2014 },
  ];
  setTimeout(() => resolve(movieList), 2000);
});

const playerDataPromise = new Promise((resolve) => {
  const playerList = [
    { id: 101, name: "Lionel Messi", sport: "Football", country: "Argentina" },
    { id: 102, name: "LeBron James", sport: "Basketball", country: "USA" },
  ];
  setTimeout(() => resolve(playerList), 5000); // Paling lama (5 detik)
});

const countryDataPromise = new Promise((resolve) => {
  const countryList = [
    { code: "ID", name: "Indonesia", capital: "Jakarta", continent: "Asia" },
    { code: "JP", name: "Japan", capital: "Tokyo", continent: "Asia" },
  ];
  setTimeout(() => resolve(countryList), 500);
});

/**
 * Promise.all:
 * Menggabungkan semua promise menjadi satu.
 * Total waktu tunggu adalah mengikuti yang paling LAMA (5 detik).
 */
Promise.all([movieDataPromise, playerDataPromise, countryDataPromise])
  .then((response) => {
    // Menggunakan Destructuring untuk mengambil masing-masing array hasil
    const [movies, players, countries] = response;

    console.log("--- Movies Data ---");
    movies.forEach((movie) =>
      console.log(`Judul: ${movie.title} | Tahun: ${movie.year}`),
    );

    console.log("--- Players Data ---");
    players.forEach((player) =>
      console.log(`Nama: ${player.name} | Sport: ${player.sport}`),
    );

    console.log("--- Countries Data ---");
    countries.forEach((country) =>
      console.log(`Negara: ${country.name} | Ibukota: ${country.capital}`),
    );
  })
  .catch((err) => console.error("Salah satu promise gagal:", err));
