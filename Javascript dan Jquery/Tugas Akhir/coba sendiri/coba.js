$(document).ready(() => {
    $('#cari').click(() => {
        let pencarian = $('#pencarian').val();

        if (pencarian !== ""){
            $.ajax({
                url: 'http://www.omdbapi.com/',
                type: 'GET',
                dataType: 'json',
                data: {
                    apikey: '4e6da71e',
                    s: pencarian
                },
                success: (res) => {
                    if (res.Response === 'True'){
                        hasil(res.Search)
                    }else{
                        console.log("Data Gagal Dimuat")
                    }
                },
                error: (error) => {
                    console.log(error);
                }
            })
        }else {
            $('#hasil').html('<p>Silakan masukkan istilah pencarian</p>');
        }
    })

    const hasil = (movies) => {
        let html = '';
        $.each(movies, (index, movie) => {
            html += '<div class="film">';
            html += '<h2>' + movie.Title + '</h2>';
            html += '<p>Tahun: ' + movie.Year + '</p>';
            html += '<p>Tipe: ' + movie.Type + '</p>';
            html += '<img src="' + movie.Poster + '" alt="' + movie.Title + '">';
            html += '</div>';
        });
        $('#hasil').html(html);
    }  
})