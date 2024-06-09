$(document).ready(() => {
    $('#btn-append').click(() => {
        $('#h1-append').append('Menyenangkan Belajar di Gamelab.ID')
    });

    $('#btn-hasClass').click(() => {
        alert($('p').hasClass('h1-hasClass'))
    });

    $('#btn-text').click(() => {
        $('.text').text('הטקסט הזה ישתנה');
    });

    $('#btn-remove').click(() => {
        $('.remove-2').remove();
    });

    $('#btn-html').click(() => {
        $('.html').html('<h1>Teks Ini Akan Beubah Menjadi h1</h1>');
    });

})