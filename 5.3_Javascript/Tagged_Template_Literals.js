// 5.3 Tagged Template Literals

const userName = "agus";
const userAge = 35;

/**
 * Tag Function Dasar
 * @param {Array} strings - Array dari string literal (bagian teks statis)
 * @param {Array} expressions - Array dari hasil evaluasi variabel ${}
 */
function reconstructString(strings, ...expressions) {
  // let result = "";

  // strings.forEach((str, i) => {
  //   result += `${str}${expressions[i] || ""}`;
  // });
  // return result;

  // Logic: Menggabungkan kembali string statis dengan expression variabelnya
  // Kita menggunakan .reduce untuk iterasi setiap elemen dalam array strings
  return strings.reduce((accumulator, currentString, index) => {
    // Tambahkan string statis saat ini, lalu tambahkan expression yang sesuai (jika ada)
    // expressions[index] || "" digunakan untuk menghandle bagian akhir string yang tidak punya expression
    return `${accumulator}${currentString}${expressions[index] || ""}`;
  }, "");
}

// Memanggil tag function tanpa tanda kurung, cukup dengan backticks
const formattedMessage = reconstructString`Hallo, nama saya ${userName}, saya ${userAge} tahun.`;

console.log(formattedMessage);

// --- Example: Highlighting Specific Values ---
/**
 * Tag Function untuk memberikan styling pada variabel di dalam template
 */
function highlightValues(strings, ...expressions) {
  return strings.reduce((accumulator, currentString, index) => {
    // Kita membungkus setiap expression ke dalam tag <span> dengan class "highlight"
    // Ini sangat berguna jika ingin merender hasil ke DOM dengan styling khusus
    const expressionValue = expressions[index]
      ? `<span class="highlight">${expressions[index]}</span>`
      : "";

    return `${accumulator}${currentString}${expressionValue}`;
  }, "");
}

const highlightedOutput = highlightValues`Hallo, nama saya ${userName}, saya ${userAge} tahun.`;

// Hasilnya akan berupa string HTML dengan tag span di bagian nama dan umur
console.log(highlightedOutput);
document.body.innerHTML = highlightedOutput; // Coba render ke browser untuk lihat hasilnya
