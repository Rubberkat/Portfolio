var $ = require('jquery');


$('.burger').click(function () {
    var $parent = $(this).parent();

    if ($parent.hasClass('active')) {
        $parent.removeClass('active');
        return false;
    }

    $('.burger-container').removeClass('active');
    $parent.addClass('active');
});


$("#works").click(function () {
    // var id =  $(this).attr('href');
    $('.burger-container').removeClass('active');
    $('html, body').animate({
        scrollTop: $(" .block.block-2").offset().top -40
    }, 500);
});

$("#contact").click(function () {
    // var id =  $(this).attr('href');
    $('.burger-container').removeClass('active');
    $('html, body').animate({
        scrollTop: $(" .block.block-4").offset().top -40
    }, 500);
});

$("#about").click(function () {
    // var id =  $(this).attr('href');
    $('.burger-container').removeClass('active');
    $('html, body').animate({
        scrollTop: $(" .block.block-1").offset().top -40
    }, 500);
});

$("#skills").click(function () {
    // var id =  $(this).attr('href');
    $('.burger-container').removeClass('active');
    $('html, body').animate({
        scrollTop: $(" .block.block-3").offset().top -40
    }, 500);
});


// $(".burgeritem").click(function () {
//     var id =  $(this).attr('class');
//
//     $('.burger-container').removeClass('active');
//
//     $('html, body').animate({
//         scrollTop: $(id).offset().top -40
//     }, 1000);
// });