$(document).ready(() => {
    $('#btn-fadein').click(() => {
        $('.Mencoba-Effect').fadeIn(3000, 'linear')
    })

    $('#btn-hide').click(() => {
        $('.Mencoba-Effect').hide(3000)
    })

    $('#btn-fadeout').click(() => {
        $('.Mencoba-Effect').fadeOut(3000, 'swing',)
    })

    $('#btn-slideup').click(() => {
        $('.Mencoba-Effect').slideUp(3000, 'swing')
    })

    $('#btn-slidedown').click(() => {
        $('.Mencoba-Effect').slideDown(5000, 'swing',)
    })
})