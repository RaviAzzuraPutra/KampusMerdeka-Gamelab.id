$(document).ready(() => {
    $('#sekali').click(() => {
        document.getElementById('sekali-click').innerText = 'Di click sekali'
    });

    $('#duakali').dblclick(() => {
        alert("Anda Berhasil Mengclick 2 kali")
    });

    $('img[name="gambar"]').mouseenter(() => {
        document.getElementById('keterangan').innerText = 'Rosemary Rose Winters (ローズマリー・ウィンターズ Rōzumarī Wintāzu?) is an American superhuman. The daughter of mutants Mia & Ethan Winters, Winters body was comprised entirely of Mold, which was replicating human DNA. Following her rescue from an outbreak in Eastern Europe, Rose grew up in the United States under special protection. '
    });

    $('#fokus').focus();

    $(document).keydown((event) => {
        const karakter = event.key;
        
        $('.karakterTertekan').text('Karakter yang ditekan: ' + karakter);
    });

});