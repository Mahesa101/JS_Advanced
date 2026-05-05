// 9. Asynchronous Javascript

// ==============================================
// DEMO LENGKAP: Core Architecture Concepts
// Thread, Single/Multi Thread, Blocking/Non-Blocking,
// Sync/Async, Concurrency, Parallelism
// ==============================================

const fs = require("fs");
const { Worker, isMainThread, parentPort } = require("worker_threads");

// --- 1. SINGLE THREAD + BLOCKING (Synchronous) ---
/**
 * Menunjukkan bagaimana tugas berat dapat "mengunci" thread utama.
 * Selama looping berjalan, aplikasi tidak bisa merespon input lain.
 */
function runSingleThreadBlocking() {
  console.log("=== 1. SINGLE THREAD + BLOCKING (Synchronous) ===");
  const startTime = Date.now();

  console.log("Tugas A: Kalkulasi berat dimulai...");
  let computationResult = 0;
  // Simulasi CPU-intensive task
  for (let i = 0; i < 1e9; i++) computationResult += i;
  console.log("Tugas A: Selesai");

  console.log("Tugas B: Kalkulasi berat dimulai...");
  for (let i = 0; i < 1e9; i++) computationResult += i;
  console.log("Tugas B: Selesai");

  console.log(`Total Waktu Eksekusi: ${Date.now() - startTime}ms`);
  console.log("Status: Kode berjalan berurutan (Blocking)\n");
}
// runSingleThreadBlocking(); // Uncomment untuk tes, tapi hati-hati: terminal akan 'freeze' sebentar.

// --- 2. SINGLE THREAD + NON-BLOCKING (Asynchronous) ---
/**
 * Memanfaatkan Web APIs/Libuv untuk memindahkan tugas ke antrian (callback queue)
 * sehingga thread utama tetap bebas menjalankan baris kode berikutnya.
 */
function runSingleThreadNonBlocking() {
  console.log("=== 2. SINGLE THREAD + NON-BLOCKING (Asynchronous) ===");
  const startTime = Date.now();

  // Dijadwalkan ke Event Loop (Task Queue)
  setTimeout(() => console.log("Timer 2 detik: Selesai"), 2000);
  setTimeout(() => console.log("Timer 1 detik: Selesai"), 1000);

  // Thread utama tidak menunggu timer di atas, langsung lanjut ke sini
  for (let i = 1; i <= 3; i++) {
    console.log(`Operasi Ringan Utama ${i}`);
  }

  console.log(`Pekerjaan utama dijadwalkan dalam: ${Date.now() - startTime}ms`);
  console.log("Status: Kode lanjut tanpa menunggu timer (Non-Blocking)\n");
}
runSingleThreadNonBlocking();

// --- 3. CONCURRENCY (Event Loop Orchestration) ---
/**
 * Menunjukkan bagaimana JS menangani banyak tugas sekaligus (Concurrent)
 * bukan dengan menjalankannya bersamaan, tapi dengan "mengatur jadwal" yang sangat cepat.
 */
function demonstrateConcurrency() {
  console.log("=== 3. CONCURRENCY (Event Loop Logic) ===");

  console.log("Checkpoint: Start");

  // Macro-task (Callback Queue)
  setTimeout(() => console.log("Macro-task: setTimeout A"), 0);
  setTimeout(() => console.log("Macro-task: setTimeout B"), 0);

  // Micro-task (Priority Queue) - Selalu dijalankan lebih dulu sebelum Macro-task
  Promise.resolve().then(() => console.log("Micro-task: Promise Resolved"));

  console.log("Checkpoint: End");
  // Urutan Logis: Start -> End -> Micro-task -> Macro-task A -> B
}
demonstrateConcurrency();

// --- 4. PARALLELISM (True Multi-Threading with Worker Threads) ---
/**
 * Menggunakan Worker Threads untuk menjalankan tugas di core CPU yang berbeda secara fisik.
 * Ini adalah "Parallelism Sejati" di Node.js.
 */
if (isMainThread) {
  console.log("=== 4. PARALLELISM (Worker Threads) ===");
  const mainProcessStart = Date.now();

  // Membuat dua worker thread baru (seperti kloning diri sendiri)
  const firstWorker = new Worker(__filename);
  const secondWorker = new Worker(__filename);

  let completedWorkersCount = 0;

  const handleWorkerMessage = (message) => {
    console.log(`Worker Response: ${message}`);
    completedWorkersCount++;

    if (completedWorkersCount === 2) {
      console.log(
        `Parallelism selesai dalam: ${Date.now() - mainProcessStart}ms`,
      );
      console.log("Status: Tugas berjalan BERSAMAAN di core berbeda.\n");
    }
  };

  firstWorker.on("message", handleWorkerMessage);
  secondWorker.on("message", handleWorkerMessage);
} else {
  // Logic ini dijalankan di dalam "Anak Thread" (Worker)
  let workerComputation = 0;
  for (let i = 0; i < 1e9; i++) workerComputation += i;
  parentPort.postMessage(`Kalkulasi selesai (Nilai: ${workerComputation})`);
}

// --- 5. SYNC VS ASYNC COMPARISON ---
function compareSyncVsAsync() {
  // Bagian Synchronous
  console.log("\n=== 5. PERBANDINGAN SYNC VS ASYNC ===");
  console.log("Sync Mode: Tugas dimula...");
  let syncAccumulator = 0;
  for (let i = 0; i < 1e8; i++) syncAccumulator += i;
  console.log("Sync Mode: Selesai");

  // Bagian Asynchronous
  console.log("\nAsync Mode: Menjadwalkan tugas...");
  setTimeout(() => console.log("Async: Eksekusi tertunda selesai"), 0);
  console.log(
    "Async: Main thread langsung lanjut ke baris ini tanpa interupsi.",
  );
}
// compareSyncVsAsync(); // Uncomment untuk melihat perbedaannya secara visual di console

// --- REKAPITULASI KONSEP ---
/*
  1. Main Thread JS = Single-thread (Satu jalur).
  2. Concurrency = Mengelola banyak tugas (Antrian).
  3. Parallelism = Menjalankan banyak tugas (Bersamaan/Banyak Jalur).
  4. Blocking = Menunggu antrian depan selesai.
  5. Non-Blocking = Meninggalkan pesan (callback/promise) lalu lanjut kerja yang lain.
*/
