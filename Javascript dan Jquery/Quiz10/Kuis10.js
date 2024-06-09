$(document).ready(() => {
    $('#searchButton').click(() => {
      var searchTerm = $('#searchInput').val();
  
      if (searchTerm !== '') {
        $.ajax({
          url: 'http://www.omdbapi.com/',
          type: 'GET',
          dataType: 'json',
          data: {
            apikey: '4e6da71e',
            s: searchTerm
          },
          success: function(response) {
            if (response.Response === "True") {
              displayResults(response.Search);
            } else {
              $('#results').html('<p>Data tidak di temukan</p>');
            }
          },
          error: function() {
            $('#results').html('<p>Terjadi kesalahan saat mengambil data</p>');
          }
        });
      } else {
        $('#results').html('<p>Silakan masukkan istilah pencarian</p>');
      }
    });
  
    const displayResults = (movies) => {
      var html = '';
      $.each(movies, function(index, movie) {
        html += '<div>';
        html += '<h2>' + movie.Title + '</h2>';
        html += '<p>Tahun: ' + movie.Year + '</p>';
        html += '<p>Tipe: ' + movie.Type + '</p>';
        html += '<img src="' + movie.Poster + '" alt="' + movie.Title + '">';
        html += '</div>';
      });
      $('#results').html(html);
    }
  });
  