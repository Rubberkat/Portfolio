var $ = require('jquery');


$('.close-button svg').click(function (e) {
    e.preventDefault();
    var block = $('.block');

    block.not(this).css('display', 'block');
    block.removeClass('active');

    block.css('transition', '');
    $('.page-container').css('transition', '');
    window.location.hash = "";
    location.hash.replace('#', '');
    e.stopPropagation();
});

