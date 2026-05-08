// 12. Fetch (Modern JavaScript Approach)

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");

  /**
   * 1. Inisiasi Fetch
   * fetch() mengembalikan PROMISE.
   * Tidak seperti AJAX JQuery, fetch tidak langsung memberikan data JSON,
   * melainkan objek 'Response' (HTTP Response).
   */
  fetch(`http://www.omdbapi.com/?apikey=ac5c61ee&s=${inputKeyword.value}`)
    /**
     * 2. Parsing Response
     * Method .json() juga mengembalikan PROMISE.
     * Kita harus mengubah stream data dari body response menjadi object JavaScript.
     */
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";

      // Render cards ke UI
      movies.forEach((m) => (cards += renderMovieCard(m)));
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      /**
       * 3. Event Binding untuk Detail
       * Karena tombol detail bersifat dinamis (muncul setelah fetch),
       * kita harus menyeleksinya SETELAH innerHTML diisi.
       */
      const modalDetailButton = document.querySelectorAll(".modal-detail");

      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbID = this.dataset.imdbid; // Mengambil data-imdbid attribute

          // Fetch kedua untuk mendapatkan detail spesifik film
          fetch(`http://www.omdbapi.com/?apikey=ac5c61ee&i=${imdbID}`)
            .then((response) => response.json())
            .then((movieDetails) => {
              const movieDetailMarkup = renderMovieDetails(movieDetails);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetailMarkup;
            })
            .catch((err) => console.error("Error fetching details:", err));
        });
      });
    })
    /**
     * 4. Error Handling
     * Menangkap error jika terjadi masalah jaringan (network failure).
     */
    .catch((err) => {
      console.error("Search fetch failed:", err);
    });
});

/**
 * --- UI Functions (Helper) ---
 * Memisahkan logic tampilan agar kode utama tidak terlalu panjang.
 */

// Function untuk membuat elemen Card Film di halaman utama
function renderMovieCard(movie) {
  return `
          <div class="col-md-4 movie-card-wrapper">
            <div class="card h-100">
              <img src="${movie.Poster}" class="card-img-top" alt="${movie.Type}" />
              <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle">${movie.Year}</h6>
                <a
                  href="#"
                  class="btn-detail modal-detail"
                  data-bs-toggle="modal"
                  data-bs-target="#DetailMovie"
                  data-imdbid="${movie.imdbID}"
                >
                  Show Detail
                </a>
              </div>
            </div>
          </div>
        `;
}

// Function untuk membuat elemen Detail Film di dalam Modal
function renderMovieDetails(details) {
  return `
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-3 mb-3 mb-md-0">
                    <img src="${details.Poster}" alt="${details.Title}" class="img-fluid" />
                  </div>
                  <div class="col-md">
                    <ul class="list-group">
                      <li class="list-group-item"><h4>${details.Title} | ${details.Year}</h4></li>
                      <li class="list-group-item"><strong>Director:</strong> ${details.Director}</li>
                      <li class="list-group-item"><strong>Actors:</strong> ${details.Actors}</li>
                      <li class="list-group-item"><strong>Writer:</strong> ${details.Writer}</li>
                      <li class="list-group-item"><strong>Plot:</strong> ${details.Plot}</li>
                    </ul>
                  </div>
                </div>
              </div>
            `;
}
