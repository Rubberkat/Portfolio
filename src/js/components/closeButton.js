var $ = require('jquery');

$('.close-button svg').click(function () {
    $('.block-container').removeClass('active');
    $('.page-container').removeClass('active');
});

