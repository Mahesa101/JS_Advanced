// 10.2 Callback (Latihan Movie Search)

// 1. Event Listener saat tombol cari diklik
$(".search-button").on("click", function () {
  const searchKeyword = $(".input-keyword").val();

  // 2. Request AJAX pertama: Mencari daftar film berdasarkan keyword
  $.ajax({
    url: `http://www.omdbapi.com/?apikey=ac5c61ee&s=${searchKeyword}`,
    success: (searchResponse) => {
      const movieResults = searchResponse.Search;
      let movieCardsMarkup = "";

      // Loop hasil pencarian dan ubah menjadi HTML Fragment
      movieResults.forEach((movie) => {
        movieCardsMarkup += renderMovieCard(movie);
      });

      // Render semua card ke dalam container utama
      $(".movie-container").html(movieCardsMarkup);

      /**
       * 3. Nested Event Listener (Callback)
       * Kita memasang listener di dalam success callback karena element ".modal-detail"
       * baru ada di DOM setelah hasil pencarian di-render.
       */
      $(".modal-detail").on("click", function () {
        const imdbID = $(this).data("imdbid");

        // 4. Request AJAX kedua: Mencari detail film yang diklik berdasarkan ID
        $.ajax({
          url: `http://www.omdbapi.com/?apikey=ac5c61ee&i=${imdbID}`,
          success: (detailsResponse) => {
            // Generate HTML untuk detail movie dan masukkan ke dalam modal
            const movieDetailMarkup = renderMovieDetails(detailsResponse);
            $(".modal-body").html(movieDetailMarkup);
          },
          error: (err) => {
            console.error("Detail fetch error:", err.responseText);
          },
        });
      });
    },
    error: (err) => {
      console.error("Search fetch error:", err.responseText);
    },
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