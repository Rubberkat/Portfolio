var $ = require('jquery');


$(".block-container").hover(function () {
    $(this).toggleClass("block-hover");
    $(".block-container").not(this).toggleClass("no-hover");
});


$("#block-1").click(function () {
    // var id =  $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(" .block.block-1").offset().top - 45

    }, 500);

});
$("#block-2").click(function () {
    // var id =  $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(" .block.block-2").offset().top - 45

    }, 500);

});
$("#block-3").click(function () {
    // var id =  $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(" .block.block-3").offset().top - 45

    }, 500);

});
$("#block-4").click(function () {
    // var id =  $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(" .block.block-4").offset().top - 45

    }, 500);

});