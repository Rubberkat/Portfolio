var $ = require('jquery');

$('.close-button svg').click(function (e) {
    $('.block-container').removeClass('active');
    $('.page-container').removeClass('active');
    e.stopPropagation();
});

