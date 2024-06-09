$(document).ready(function() {
    $("#hapus").click(function() {
        hideE1();

        hideClass();

        hideAttr();
    });
});

function hideE1() {
    $("h1").hide();
}

function hideClass() {
    $(".japan").hide();
    $(".coba").hide();
}

function hideAttr() {
    $("a").removeAttr("href");
}
