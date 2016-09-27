var $ = require('jquery');


$('.close-button svg').click(function (e) {
    var block = $('.block');

    $(block).not(this).css('display', 'block');
    $(block).removeClass('active');

    // $('html, body').animate({
    //     scrollTop: $('.block').offset().top - 20
    // }, 'slow');

    e.stopPropagation();
});

